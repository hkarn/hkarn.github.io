<?php 

namespace SendContactMail;

require __DIR__ . '/config/config.php';

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
  header( $_SERVER["SERVER_PROTOCOL"] . ' 200 OK');
  $headers = ob_get_clean();
  echo $headers;
  die();
}

if ($_SERVER['REQUEST_URI'] == ACCEPT_URL) {
  $response['error'] = '404 Not found.';
  sendReply($response, 404);
}

if ($_SERVER["HTTP_AUTHORIZATION"] != API_TOKEN) {
  $response['error'] = 'Wrong API token.';
  sendReply($response, 401);
} else {
  $response['auth'] = true;
}

header("Accept: application/json");
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





require __DIR__ . '/vendor/autoload.php';



sendReply($response, 200);

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
  } else {
    header( $_SERVER["SERVER_PROTOCOL"] . ' 500 Internal Server Error');
  }
  echo json_encode($response);
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