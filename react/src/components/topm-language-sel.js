import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { getLanguages, getActiveLanguage } from 'react-localize-redux';



class LanguageSelector extends Component {
  constructor(props) {
    super(props);

    const {languages = []} = this.props;

    this.state = {
      languageList: languages.map(obj => obj.name)
    };
  }


  render() {

    const {languageList = []} = this.state;
    const languageItems = [];
    languageList.forEach(lang =>
      languageItems.push(<li key={lang} tabIndex="3" className="LanguageItem">{lang}</li>));

    return (
      <ul className="LanguageDropDown" style={{listStyle: 'none'}}>
        {languageItems}
      </ul>

    );
  }
}

LanguageSelector.propTypes = {
  languages:              PropTypes.array,
  currentLanguage:        PropTypes.string
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

}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(LanguageSelector);
