import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import faFacebookSquare from '@fortawesome/fontawesome-free-brands/faFacebookSquare';
import faGithubSquare from '@fortawesome/fontawesome-free-brands/faGithubSquare';
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedin';
import faEnvelopeSquare from '@fortawesome/fontawesome-free-solid/faEnvelopeSquare';
import faLanguage from '@fortawesome/fontawesome-free-solid/faLanguage';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { getTranslate } from 'react-localize-redux';

import LanguageSelector from './topmenu-language';

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
    const {translate} = this.props;

    const iconStyle = {
      display: 'inline-block',
      padding: '2px 5px',
      fontSize: '2.1em',
    };

    const locale = translate('locale');

    return (
      <nav className="TopMenuWrapper">
        <ul style={{display: 'flex', justifyContent: 'flex-end', alignContent: 'center', alignItems: 'center', padding: '3px', listStyle: 'none'}}>
          <li title="Language Selector" aria-label="Language selector" className={'LanguageSelector ' + (showLanguageList ? 'open' : '')} tabIndex="2" onFocus={() => this.toggleLanguageList(true)} onMouseEnter={() => this.toggleLanguageList(true)} onMouseLeave={() => this.toggleLanguageList(false)} onClick={() => this.toggleLanguageList(null, true)}>
            <FontAwesomeIcon icon={faLanguage} title="Change language" />
            <LanguageSelector />
          </li>
          <li style={iconStyle}><a href={'https://www.linkedin.com/in/arnoldson/?locale=' + locale} rel="noopener noreferrer" target="_blank" title="LinkedIn" aria-label="Linked In" tabIndex="9"><FontAwesomeIcon icon={faLinkedin} /></a></li>
          <li style={iconStyle}><a href="https://github.com/hkarn" rel="noopener noreferrer" target="_blank" title="Github" aria-label="Github" tabIndex="10"><FontAwesomeIcon icon={faGithubSquare} /></a></li>
          <li style={iconStyle}><a href="https://www.facebook.com/arnoldson" rel="noopener noreferrer" title="Facebook" target="_blank"  aria-label="Facebook" tabIndex="11"><FontAwesomeIcon icon={faFacebookSquare} /></a></li>
          <li style={iconStyle}><a title="Contact Form" aria-label="Contact form" tabIndex="12"><FontAwesomeIcon icon={faEnvelopeSquare} /></a></li>
        </ul>

      </nav>

    );
  }
}

TopMenu.propTypes = {
  translate:              PropTypes.func
};

const mapStateToProps = state => ({
  translate: getTranslate(state.locale),
});

export default connect(mapStateToProps, null)(TopMenu);
