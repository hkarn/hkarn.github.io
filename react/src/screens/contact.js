import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getTranslate } from 'react-localize-redux'
import PageHead from '../components/page-head'
import ContactForm from '../components/contactform'

class Contact extends Component {
  render () {
    const {translate} = this.props

    return (
      <div>
        <PageHead
          title={'Arnoldson.online - ' + translate('contact.pageTitle')}
          description={translate('page.desc')}
        />

        <main className="ScreenWrapper ContactScreenWrapper">
          <ContactForm />
        </main>
      </div>
    )
  }
}

Contact.propTypes = {
  translate: PropTypes.func
}

const mapStateToProps = state => ({
  translate: getTranslate(state.locale)
})

export default connect(mapStateToProps, null)(Contact)
