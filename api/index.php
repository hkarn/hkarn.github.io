<?php 

namespace ArnoldsonOnline\SendContactMail;

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\OAuth;
use League\OAuth2\Client\Provider\Google;




require __DIR__ . '/config/config.php';

date_default_timezone_set('Europe/Stockholm');

if (DEBUG_MODE) {
  ini_set('display_errors', 1);
  ini_set('display_startup_errors', 1);
  error_reporting(E_ALL);
} else {
  ini_set('display_errors', 0);
  ini_set('display_startup_errors', 0);
  error_reporting(0);
}



$response = array(
  'sent' => false,
  'auth' => false,
  'recaptcha' => false,
  'hammer' => false,
  'missing-fields' => array(),
  'response' => null,
  'message' => '',
  'error' => null);

ob_start(null, 0);
header("Content-Type: application/json; charset=UTF-8");
header("Accept-Charset: utf-8");
header("Cache-Control: no-cache, must-revalidate");
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');

$http_origin = $_SERVER['HTTP_ORIGIN'];

if ($http_origin == "https://hkarn.github.io" || $http_origin == "https://arnoldson.online" || $http_origin == "https://www.arnoldson.online")
{  
  header("Access-Control-Allow-Origin: $http_origin");
} else {
  header("Access-Control-Allow-Origin: https://hkarn.github.io");
}

if ($_SERVER['REQUEST_METHOD'] == "OPTIONS") {
  //OPTIONS request. Send CORS headers and die. Preflight handler
  sendReply(null, 200);
}

if ($_SERVER["REQUEST_METHOD"] != "POST") { 
  sendReply(null, 405);
}

if ($_SERVER['REQUEST_URI'] == ACCEPT_URL) {
  $response['error'] = '404 Not found.';
  sendReply(null, 404);
}

header("Accept: application/json");

if ($_SERVER["HTTP_AUTHORIZATION"] != API_TOKEN) {
  $response['error'] = 'Wrong API token.';
  sendReply($response, 401);
} else {
  $response['auth'] = true;
}
/*
$hammerresult = hammerguard('mysql:host=' . DB_HOST . ';dbname=' . DB_NAME . ';charset=utf8mb4', DB_USER, DB_PASSWORD);
if (!$hammerresult[0]) {
  $response['error'] = $hammerresult[1];
  sendReply($response, 401);
} else {
  $response['hammer'] = true;
}
*/
$jsonData = json_decode(trim(file_get_contents('php://input')), true);
if (empty($jsonData['recaptcha'])) {
  $jsonData['recaptcha'] = '';
}

if (!reCaptchaCheck($jsonData['recaptcha'])) {
  $response['error'] = "recaptcha";
  $response['message'] = "reCAPTCHA verification failed.";
  sendReply($response, 401);
} else {
  $response['recaptcha'] = true;
}

$formEmail = '';
$formMessage = '';
$formName = '';

try {
  if (!empty(trim($jsonData['isSimpleSpambot']))) {
    $response['error'] = "spambot";
    $response['message'] = "URL field should be empty.";
    sendReply($response, 401);
  }

  $hasMissingField = false;

  if (!empty($jsonData['email']) && filter_var($jsonData['email'], FILTER_VALIDATE_EMAIL)) {
    $formEmail = filter_var($jsonData['email'], FILTER_SANITIZE_EMAIL);
  } else {
    $response['message'] = "You must supply a valid e-mail.";
    array_push($response['missing-fields'],"email");
    $response['error'] = "badrequest";
    $hasMissingField = true;
  }

  if (!empty($jsonData['name'])) {
    $formName = filter_var($jsonData['name'], FILTER_SANITIZE_STRING);
  } else {
    $response['message'] = "You must enter a name.";
    array_push($response['missing-fields'],"name");
    $response['error'] = "badrequest";
    $hasMissingField = true;
  }

  if (!empty($jsonData['message'])) {
    $formMessage = filter_var($jsonData['message'], FILTER_SANITIZE_STRING);
  } else {
    $response['message'] = "You must enter a message.";
    array_push($response['missing-fields'],"message");
    $response['error'] = "badrequest";
    $hasMissingField = true;
  }

  if ($hasMissingField) {
    sendReply($response, 400);
  }

} catch (\Exception $e)  {
  var_dump('CATCH!');
  if (DEBUG_MODE) {
    $response['message'] = "Caught exception: " .  $e->getMessage(); 
    $response['error'] = "badrequest";
  } else {
    $response['message'] = "Bad request. Unexpected data recived."; 
    $response['error'] = "badrequest";
  }
  sendReply($response, 400);
}

require __DIR__ . '/vendor/autoload.php';

$mail = new PHPMailer;
$mail->isSMTP();
$mail->SMTPDebug = 0;
$mail->Host = 'smtp.gmail.com';
$mail->Port = 587;
$mail->SMTPSecure = 'tls';
$mail->SMTPAuth = true;
$mail->AuthType = 'XOAUTH2';


$provider = new Google(
  [
      'clientId' => OAUTH_CLIENTID,
      'clientSecret' => OAUTH_CLIENTSECRET,
  ]
);

$mail->setOAuth(
  new OAuth(
      [
          'provider' => $provider,
          'clientId' => OAUTH_CLIENTID,
          'clientSecret' => OAUTH_CLIENTSECRET,
          'refreshToken' => OAUTH_REFRESHTOKEN,
          'userName' => GMAIL_USER,
      ]
  )
);



$mail->setFrom(FROM_EMAIL, FROM_NAME, false);
$mail->addAddress(FROM_EMAIL);
$mail->addAddress(GMAIL_USER);
$mail->addReplyTo($formEmail);
$mail->CharSet = 'utf-8';
$mail->isHTML(true);
$mail->Sender = FROM_EMAIL;
$mail->Subject = 'Message from ' . $formName . ' - Arnoldson.online';
$mail->Body    = '<p>Message sent via Arnoldson.online contact form</p><p>From ' . $formName . '</p><p>Message:</p><p>' . $formMessage . '</p><p>' . date('Y-m-d H:i:s', $_SERVER['REQUEST_TIME']) . ' </p>';
$mail->AltBody = "Message sent via Arnoldson.online contact form\nFrom $formName\n\nMessage:\n$formMessage\n\n" . date('Y-m-d H:i:s', $_SERVER['REQUEST_TIME']);

if (!$mail->send()) {
    $response['error'] = 'nosend';
    $response['message'] = 'Message could not be sent.';
    if (DEBUG_MODE) {
      $response['message'] .= ' Mailer Error: ' . $mail->ErrorInfo;
    } 
    sendReply($response, 500);
} else {
  $response['sent'] = true;
}

$mail->ClearAddresses(); 
$mail->ClearCCs();
$mail->ClearBCCs();
$mail->clearReplyTos();
$mail->addAddress($formEmail, $formName);
$mail->addReplyTo(FROM_EMAIL);
$mail->isHTML(true);
$mail->Subject = 'Message request recived.';
$mail->Body    = '<p>Copy of message sent via arnoldson.online/hkarn.github.io contact form</p><p>From ' . $formName . '</p><p>Message:</p><p>' . $formMessage . '</p><p>' . date('Y-m-d H:i:s', $_SERVER['REQUEST_TIME']) . ' </p>';
$mail->AltBody = "Copy of message sent via arnoldson.online/hkarn.github.io contact form\nFrom $formName\n\nMessage:\n$formMessage\n\n" . date('Y-m-d H:i:s', $_SERVER['REQUEST_TIME']);

if (!$mail->send()) {
    $response['error'] = 'nocopysend';
    $response['message'] = 'Copy of message could not be sent.';
    sendReply($response, 200); //ignore fail of copy
} else {
  $response['sent'] = true;
  sendReply($response, 200);
}



function sendReply($response = array(), $code = 200) {
  if ($code == 200) {
    header( $_SERVER["SERVER_PROTOCOL"] . ' 200 OK');
  } elseif ($code == 401) {
    header( $_SERVER["SERVER_PROTOCOL"] . ' 401 Unauthorized');
  } elseif ($code == 400) {
    header( $_SERVER["SERVER_PROTOCOL"] . ' 400 Bad Request');
  } elseif ($code == 404) {
    header( $_SERVER["SERVER_PROTOCOL"] . ' 404 Not Found');
  } elseif ($code == 429) {
    header( $_SERVER["SERVER_PROTOCOL"] . ' 429 Too Many Requests');
  } elseif ($code == 405) {
    header( $_SERVER["SERVER_PROTOCOL"] . ' 405 Method Not Allowed');
  } else {
    header( $_SERVER["SERVER_PROTOCOL"] . ' 500 Internal Server Error');
  }
  if (!empty($response)) { echo json_encode($response); }
  $website = ob_get_clean();
  echo $website;
  die();
}

function reCaptchaCheck($recapthcaresponse) {
  $post_data = http_build_query(
    array(
      'secret' => RECAPTCHA_PRIVATE,
      'response' => $recapthcaresponse,
      'remoteip' => $_SERVER['REMOTE_ADDR']
    )
  );
  $opts = array('http' =>
    array(
      'method'  => 'POST',
      'header'  => 'Content-type: application/x-www-form-urlencoded',
      'content' => $post_data
    )
  );
  $context  = stream_context_create($opts);
  $response = file_get_contents('https://www.google.com/recaptcha/api/siteverify', false, $context);
  $result = json_decode($response);
  if ($result->success) {
    return true;
  } 
  return false;
}

function hammerguard($mysqlstring, $username, $password) {

  $myreturn = array(true, '');
  $ip = md5($_SERVER['REMOTE_ADDR']);
  $time = $_SERVER['REQUEST_TIME'];
  $timelimit = $time-3601;
  $attemptlimit = 10;

  try {
    $pdo = new \PDO($mysqlstring, $username, $password);
    $pdo->setAttribute(\PDO::ATTR_ERRMODE, \PDO::ERRMODE_EXCEPTION);
    $pdo->setAttribute(\PDO::ATTR_EMULATE_PREPARES, false);
  } catch (\PDOException $e) {
    if (DEBUG_MODE) {
      $myreturn = array(true, "Caught exception: " .  $e->getMessage());
    } else {
      $myreturn = array(true, 'DB down, skipping hammer check');
    }
    return $myreturn;
  }
  try {
    $sql = "DELETE FROM ArnoldsonOnline WHERE time < :timelimit;";
    $sth = $pdo->prepare($sql);
    $sth->bindParam(':timelimit', $timelimit);
    $sth->execute();
  } catch(\PDOException $e) {
    if (DEBUG_MODE) {
      $myreturn = array(true, "Caught exception: " .  $e->getMessage());
    } else {
      $myreturn = array(true, 'Unexpected DB error, skipping hammer check');
    }
    return $myreturn;
  }
  $thecount = 0;
  try {
    $sql = "SELECT count(*) FROM ArnoldsonOnline WHERE iphash = :ip;";
    $sth = $pdo->prepare($sql);
    $sth->bindParam(':ip', $ip);
    $sth->execute();
    $count = $sth->fetch(\PDO::FETCH_NUM);
    $thecount = reset($count);
  } catch(\PDOException $e) {
    if (DEBUG_MODE) {
      $myreturn = array(true, "Caught exception: " .  $e->getMessage());
    } else {
      $myreturn = array(true, 'Unexpected DB error, skipping hammer check');
    }
    return $myreturn;
  }
  if ($thecount < $attemptlimit) {
    try {
      $sql = "INSERT INTO ArnoldsonOnline (
        iphash,
        time)
        VALUES (
        :ip,
        :time);";
      $sth = $pdo->prepare($sql);
      $sth->bindParam(':ip', $ip);
      $sth->bindParam(':time', $time);
      $sth->execute();
    } catch(\PDOException $e) {
      if (DEBUG_MODE) {
        $myreturn = array(true, "Caught exception: " .  $e->getMessage());
      } else {
        $myreturn = array(false, 'Cant write to hammerguard but DB is up.');
      }
      return $myreturn;
    }
    return $myreturn;
  } else {
    $myreturn = array(false, 'Too many attempts. Try later.');
    return $myreturn;
  }
}