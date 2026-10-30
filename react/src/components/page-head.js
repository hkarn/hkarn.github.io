import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getLanguages } from 'react-localize-redux'
import Helmet from 'react-helmet'

class PageHead extends Component {
  componentWillReceiveProps (nextProps) {

  }

  render () {
    const {languages = [], title, description, path} = this.props
    const languageMetaItems = []
    languages.forEach(lang => {
      let langURL = window.location.protocol + '//' + window.location.hostname
      if (path !== '/') {
        langURL += path + '/?lang=' + lang.code
      } else {
        langURL += '/?lang=' + lang.code
      }
      languageMetaItems.push(<link key={lang.code} rel="alternate" hrefLang={lang.code} href={langURL} />)
    })

    return (
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        {languageMetaItems}
      </Helmet>

    )
  }
}

PageHead.propTypes = {
  languages: PropTypes.array,
  title: PropTypes.string,
  description: PropTypes.string,
  path: PropTypes.string
}

const mapStateToProps = state => ({
  languages: getLanguages(state.locale),
  path: state.routing.location.pathname
})

export default connect(mapStateToProps, null)(PageHead)
