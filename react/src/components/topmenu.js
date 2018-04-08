import React, { Component } from 'react';
import { connect } from 'react-redux';

import faFacebookSquare from '@fortawesome/fontawesome-free-brands/faFacebookSquare';
import faGithubSquare from '@fortawesome/fontawesome-free-brands/faGithubSquare';
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedin';
import faEnvelopeSquare from '@fortawesome/fontawesome-free-solid/faEnvelopeSquare';
import faLanguage from '@fortawesome/fontawesome-free-solid/faLanguage';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import LanguageSelector from './topm-language-sel';

class TopMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLanguageList: false,
      isClickLocked: false,
    };
    this.clickTimer = null;
  }

  componentWillUnmount() {
    clearTimeout(this.clickTimer);
  }

  toggleLanguageList = (toggle = null, isClick = false) => {
    const {showLanguageList, isClickLocked} = this.state;
    if (toggle === null) {
      toggle = !showLanguageList;
    }
    /* Prevent immediate closing on mousin + click behaviour from user in desktop */
    if (!(isClick && !toggle && isClickLocked)) {
      this.setState({showLanguageList: toggle});
    }
    if (toggle && !isClick) {
      this.setState({isClickLocked: true});
      this.clickTimer = setTimeout(() => {
        this.setState({isClickLocked: false});
        clearTimeout(this.clickTimer);
      }, 500);
    }
  }


  render() {
    const {showLanguageList} = this.state;


    const iconStyle = {
      display: 'inline-block',
      padding: '2px 5px',
      fontSize: '2.1em',
    };

    return (
      <nav className="TopMenuWrapper">
        <ul style={{display: 'flex', justifyContent: 'flex-end', alignContent: 'center', alignItems: 'center', padding: '3px', listStyle: 'none'}}>
          <li className={'LanguageSelector ' + (showLanguageList ? 'open' : '')} tabIndex="2" onFocus={() => this.toggleLanguageList(true)} onMouseEnter={() => this.toggleLanguageList(true)} onMouseLeave={() => this.toggleLanguageList(false)} onClick={() => this.toggleLanguageList(null, true)}>
            <FontAwesomeIcon icon={faLanguage} />
            <LanguageSelector />
          </li>
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
