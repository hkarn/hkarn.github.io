import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getTranslate } from 'react-localize-redux'
import IronImage from '../components/ironimage'
import Computer from '../images/pixabay/computer-1245714_1920.jpg'
import ComputerPre from '../images/pixabay/computer-1245714_small.jpg'

class Contact extends Component {
  render () {
    const {translate} = this.props

    return (
      <div style={{minHeight: '100vh'}}>
        <IronImage srcPreload={ComputerPre} srcLoaded={Computer} darken={0.6} />
CONTACT

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
