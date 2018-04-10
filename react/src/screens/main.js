import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getLanguages, getTranslate } from 'react-localize-redux'

import { Link } from 'react-router-dom'

import IronImage from '../components/ironimage'
import Computer from '../images/pixabay/computer-1245714_1920.jpg'
import ComputerPre from '../images/pixabay/computer-1245714_small.jpg'
import Me from '../images/photos/me.png'

class MainScreen extends Component {
  render () {
    const {translate} = this.props

    return (
      <div>
        <div style={{position: 'fixed', top: '0', left: '0', bottom: '0', right: '0', width: '100%', height: '100%', zIndex: '-2'}}>
          <IronImage srcPreload={ComputerPre} srcLoaded={Computer} darken={0.6} />
        </div>
        <main className="MainScreenWrapper">
          <h3>{ translate('welcome.greeting') }</h3>
          <h1 style={{margin: '20px  10px', fontSize: '1.6em'}}>{ translate('welcome.im') } Håkan Arnoldson</h1>
          <h2 style={{margin: '20px 10px'}}>{ translate('welcome.title') }</h2>
          <img src={Me} alt="Håkan" style={{maxWidth: '35%', maxHeight: '20%', height: 'auto', width: 'auto', borderRadius: '20%', margin: '10px '}} />
        </main>
      </div>
    )
  }
}

MainScreen.propTypes = {
  translate: PropTypes.func
}

const mapStateToProps = state => ({
  languages: getLanguages(state.locale),
  translate: getTranslate(state.locale)
})

export default connect(mapStateToProps, null)(MainScreen)
