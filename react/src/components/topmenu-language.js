import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { getLanguages, getActiveLanguage} from 'react-localize-redux';
import { setLanguage } from '../actions';

class LanguageSelector extends Component {


  setNewLanguage(lang) {
    const {setLanguage} = this.props;
    setLanguage(lang);
  }

  render() {

    const {languages = []} = this.props;
    const languageItems = [];
    languages.forEach(lang =>
      languageItems.push(<li key={lang.code} tabIndex="3" className="LanguageItem" onClick={() => this.setNewLanguage(lang.code)}>{lang.name}</li>));

    return (
      <ul className="LanguageDropDown" style={{listStyle: 'none'}}>
        {languageItems}
      </ul>

    );
  }
}

LanguageSelector.propTypes = {
  languages:              PropTypes.array,
  currentLanguage:        PropTypes.string,
  setLanguage:            PropTypes.func
};

const mapStateToProps = state => {
  const returnObj = {
    languages: getLanguages(state.locale),
  };
  try {
    returnObj.currentLanguage = getActiveLanguage(state.locale).code;
  } catch (e) {
    returnObj.currentLanguage = 'en';
  }
  return returnObj;
};

const mapDispatchToProps = dispatch => bindActionCreators({
  setLanguage
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(LanguageSelector);
