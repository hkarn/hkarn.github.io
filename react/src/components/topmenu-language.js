import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import { getLanguages, getActiveLanguage } from 'react-localize-redux'
import { setLanguage } from '../actions'
import Helmet from 'react-helmet'

class LanguageSelector extends Component {
  componentDidMount () {
    const {requestedLanguage} = this.props
    if (requestedLanguage && typeof requestedLanguage === 'string') {
      this.setNewLanguage(requestedLanguage)
    }
  }

  setNewLanguage (lang) {
    const {setLanguage} = this.props
    setLanguage(lang)
  }

  render () {
    const {languages = [], currentLanguage = 'en'} = this.props
    const languageItems = []
    languages.forEach(lang => {
      let selected = ''
      if (lang.code === currentLanguage) {
        selected = 'SelectedLanguageItem'
      }
      languageItems.push(<li key={lang.code} tabIndex="3" className={'LanguageItem ' + selected} onClick={() => this.setNewLanguage(lang.code)}>{lang.name}</li>)
    })

    return (
      <ul className="LanguageDropDown" style={{listStyle: 'none'}}>
        <Helmet htmlAttributes={{ lang: currentLanguage }} />
        {languageItems}
      </ul>

    )
  }
}

LanguageSelector.propTypes = {
  languages: PropTypes.array,
  currentLanguage: PropTypes.string,
  setLanguage: PropTypes.func,
  requestedLanguage: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
}

const mapStateToProps = state => {
  const returnObj = {
    languages: getLanguages(state.locale),
    requestedLanguage: state.requestedLanguage
  }
  try {
    returnObj.currentLanguage = getActiveLanguage(state.locale).code
  } catch (e) {
    returnObj.currentLanguage = 'en'
  }
  return returnObj
}

const mapDispatchToProps = dispatch => bindActionCreators({
  setLanguage
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSelector)
