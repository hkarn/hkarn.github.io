import React, { Component } from 'react';
import { connect } from 'react-redux';

import faFacebookSquare from '@fortawesome/fontawesome-free-brands/faFacebookSquare';
import faGithubSquare from '@fortawesome/fontawesome-free-brands/faGithubSquare';
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedin';
import faEnvelopeSquare from '@fortawesome/fontawesome-free-solid/faEnvelopeSquare';
import faLanguage from '@fortawesome/fontawesome-free-solid/faLanguage';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class TopMenu extends Component {


  render() {

    const iconStyle = {
      display: 'inline-block',
      padding: '2px 5px',
      fontSize: '2.1em',
    };

    return (
      <nav className="TopMenuWrapper">
        <ul style={{display: 'flex', justifyContent: 'flex-end', alignContent: 'center', alignItems: 'center', padding: '3px'}}>
          <li style={{display: 'inline-block', padding: '2px 5px', fontSize: '2em', marginRight: 'auto'}}><FontAwesomeIcon icon={faLanguage} /></li>
          <li style={iconStyle}><FontAwesomeIcon icon={faLinkedin} /></li>
          <li style={iconStyle}><FontAwesomeIcon icon={faGithubSquare} /></li>
          <li style={iconStyle}><FontAwesomeIcon icon={faFacebookSquare} /></li>
          <li style={iconStyle}><FontAwesomeIcon icon={faEnvelopeSquare} /></li>
        </ul>

      </nav>

    );
  }
}


export default connect(null, null)(TopMenu);
