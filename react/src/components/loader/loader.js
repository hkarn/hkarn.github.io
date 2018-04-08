import React, { Component } from 'react';
import faSpinner from '@fortawesome/fontawesome-free-solid/faSpinner';
import faFrown from '@fortawesome/fontawesome-free-solid/faFrown';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { Textfit } from 'react-textfit';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getActiveLanguage } from 'react-localize-redux';

//Local translations because component is also accessed before the App is loaded and default language set

const languages = ['en', 'sv'];

const translations = {
  sv: {
    firstlinedefault:     'Laddar',
    firstlineerror:       'Ett fel inträffade. Kompponenten kunde inte laddas!',
    secondlineerror:      'Försök att ladda om sidan, tryck på F5.',
    firstlinetimeout:     'Det tog längre tid än väntat att ladda komponenten.',
    secondlinetimeout:    'Fortsätt vänta (om du är på en riktigt långsam anslutning) eller ladda om genom att trycka på F5.'
  },
  en: {
    firstlinedefault:     'Loading',
    firstlineerror:       'An error occured loading the component!',
    secondlineerror:      'Try refreshing the page by hitting F5.',
    firstlinetimeout:     'Loading the component taking longer then expected!',
    secondlinetimeout:    'Either keep waiting (if you are on a slow connection) or try refresh by hitting F5.'
  }
};

class Loader extends Component {

  render() {
    const {error, pastDelay, timedOut, _defaultLang} = this.props;
    let defaultLang = translations['en'];
    try {
      if (languages.includes(_defaultLang)) {
        defaultLang = translations[_defaultLang];
      }
    } catch (e) {
      // default already set: defaultLang = translations['en'];
    }
    const style = {
      width: '100%',
      height: '100%',
      padding: '3px',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
    };

    let firstline = defaultLang.firstlinedefault;
    let secondline = null;
    let icon = faSpinner;
    let pulse = true;

    /* eslint-disable react/forbid-component-props */
    // TextFit needs relative heights to be applied directly on the component to scale properly
    const theLoader = (style, icon, pulse, firstline, secondline) =>
      <div className="Loader primary-blue" style={style}>
        <Textfit style={{height: '50%', width: '100%', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', padding: '1px'}} mode="single" forceSingleModeWidth={false} max={200} min={4} throttle={900}><FontAwesomeIcon icon={icon} pulse={pulse} /></Textfit>
        {firstline === defaultLang.firstlinedefault ?
          <Textfit style={{height: '45%', width: '100%', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '1px'}} mode="single" forceSingleModeWidth={false} max={40} min={4} throttle={900}><p className="loading px-4">{firstline}</p></Textfit> :
          <Textfit style={{height: '23%', width: '100%', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', padding: '1px'}} mode="multi" max={35} min={9} throttle={900}><p>{firstline}</p></Textfit>
        }
        {firstline === defaultLang.firstlinedefault ? null :
          <Textfit style={{height: '21%', width: '100%', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '1px'}} mode="multi" max={35} min={8} throttle={900}>{secondline}</Textfit>
        }

      </div>;
      /* eslint-enable react/forbid-component-props */

    if (error !== null) {
      // When the loader has errored
      firstline = defaultLang.firstlineerror;
      secondline = defaultLang.secondlineerror;
      icon = faFrown;
      pulse = false;
      return theLoader(style, icon, pulse, firstline, secondline);
    } else if (timedOut) {
      // When the loader has taken longer than the timeout
      firstline = defaultLang.firstlinetimeout;
      secondline = defaultLang.secondlinetimeout;
      icon = faFrown;
      pulse = false;
      return theLoader(style, icon, pulse, firstline, secondline);
    } else if (pastDelay) {
      // When the loader has taken longer than the delay
      firstline = defaultLang.firstlinedefault;
      secondline = null;
      icon = faSpinner;
      pulse = false;
      return theLoader(style, icon, pulse, firstline, secondline);
    } else {
      // When the loader has just started
      return null;
    }

  }
}

/* eslint-disable react/boolean-prop-naming */
Loader.propTypes = {
  pastDelay: PropTypes.bool,
  error: PropTypes.object,
  timedOut: PropTypes.bool,
  _defaultLang: PropTypes.string
};
/* eslint-enable react/boolean-prop-naming */

const mapStateToProps = state => {
  try {
    return {_defaultLang: getActiveLanguage(state.locale).code};
  } catch (e) {
    return {_defaultLang: 'en'};
  }
};

export default connect(mapStateToProps, null)(Loader);
