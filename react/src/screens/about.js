import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getTranslate } from 'react-localize-redux'
import PageHead from '../components/page-head'

class About extends Component {
  componentWillUnmount () {

  }

  render () {
    const { translate } = this.props

    return (
      <div>
        <PageHead
          title={'Arnoldson.online - ' + translate('about.pageTitle')}
          description={translate('page.desc')}
        />

        <main className={'ScreenWrapper AboutScreenWrapper'}>
          <h2 className="heading">{translate('about.heading')} Håkan</h2>
          <h2 className="heading">Full-stack developer. This website is still a work in progress...</h2>
          <h2 className="heading">Meanwhile visit my Showcase and LinkedIn, or contact me for more information and CV.</h2>
        </main>
      </div>
    )
  }
}

About.propTypes = {
  translate: PropTypes.func
}

const mapStateToProps = state => ({
  translate: getTranslate(state.locale)
})

export default connect(mapStateToProps, null)(About)
