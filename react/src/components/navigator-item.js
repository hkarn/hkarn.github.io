import React, { Component } from 'react';
import { connect } from 'react-redux';

import faChevronLeft from '@fortawesome/fontawesome-free-solid/faChevronLeft';
import faChevronRight from '@fortawesome/fontawesome-free-solid/faChevronRight';
import faChevronDown from '@fortawesome/fontawesome-free-solid/faChevronDown';
import faChevronUp from '@fortawesome/fontawesome-free-solid/faChevronUp';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

/*
There is a bug in FireFox with writing-mode vertical that has been resolved in the nightly build of FireFox
https://bugzilla.mozilla.org/show_bug.cgi?id=1267462
We make a browser check and override until this has been fixed in the standard build of FireFox
FireFox and Safari still treats absolute position right 0 different here and starts the element outside the window.
Check and move the element to the left if these browsers detected
*/
const { detect } = require('detect-browser');

class Navigator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFirefox: false
    };

  }

  componentWillMount() {
    const browser = detect();

    if (browser.name === 'firefox' || browser.name === 'safari') {
      this.setState({isFirefox: true});
    }

  }


  render() {

    const {isFirefox = false} = this.state;

    const {position, targetText, isDark} = this.props;

    let wrapperStyles = {
      display: 'inline-block',
      position: 'fixed',
    };
    let itemStyles = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
      padding: '4px',
      textTransform: 'lowercase',
      letterSpacing: '3px',
    };

    const styleLight = {
      color: '#fff'
    };

    const styleDark = {
      color: '#000'
    };

    if (position === 'top') {
      const styles = {
        flexDirection: 'column'
      };
      const wrapper = {
        top: '0',
        left: '50%',
        transform: 'translateX(-50%)'
      };
      itemStyles = {...itemStyles, ...styles};
      wrapperStyles = {...wrapperStyles, ...wrapper};

    } else if (position === 'bottom') {
      const styles = {
        flexDirection: 'column-reverse'
      };
      const wrapper = {
        bottom: '0',
        left: '50%',
        transform: 'translateX(-50%)'
      };
      itemStyles = {...itemStyles, ...styles};
      wrapperStyles = {...wrapperStyles, ...wrapper};

    } else if (position === 'left') {
      const styles = {
        flexDirection: 'column',
        writingMode: 'vertical-lr',
        textOrientation: 'upright',
      };
      const wrapper = {
        left: '0',
        top: '50%',
        transform: 'translateY(-50%)'
      };
      itemStyles = {...itemStyles, ...styles};
      wrapperStyles = {...wrapperStyles, ...wrapper};
    
    } else if (position === 'right') {
      const styles = {
        flexDirection: 'column',
        writingMode: 'vertical-rl',
        textOrientation: 'upright',
      };
      const wrapper = {
        right: '0',
        top: '50%',
        transform: 'translateY(-50%)'
      };
      if (isFirefox) {
        const wrapperFirefox = {
          top: '50%',
          transform: 'translateY(-50%)',
          right: '40px',
          margin: 'auto',
          textAlign: 'center'
        };
        const firefoxStyle = {
          display: 'block',
          writingMode: 'vertical-rl',
          textOrientation: 'upright',
        };
        itemStyles = {...itemStyles, ...firefoxStyle};
        wrapperStyles = {...wrapperStyles, ...wrapperFirefox};
      } else {
        itemStyles = {...itemStyles, ...styles};
        wrapperStyles = {...wrapperStyles, ...wrapper};
      }

    } else {
      wrapperStyles = {display: 'none'};
      itemStyles = {display: 'none'};
    }

    if (isDark) {
      itemStyles = {...itemStyles, ...styleDark};
    } else {
      itemStyles = {...itemStyles, ...styleLight};
    }


    return (
      <nav className="NavItemWrapper" style={wrapperStyles}>
        <a className="NavItem" style={itemStyles} tabIndex="6">
          {position === 'top' ? <FontAwesomeIcon icon={faChevronUp} size="lg" /> : ''}
          {position === 'bottom' ? <FontAwesomeIcon icon={faChevronDown} size="lg" /> : ''}
          {position === 'left' ? <FontAwesomeIcon icon={faChevronLeft} size="lg" /> : ''}
          {position === 'right' ? <FontAwesomeIcon icon={faChevronRight} size="lg" /> : ''}
          <p style={{padding: '4px'}}>{targetText}</p>
        </a>
      </nav>


    );
  }
}


export default connect(null, null)(Navigator);
