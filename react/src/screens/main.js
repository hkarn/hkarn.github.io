import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getLanguages, getTranslate } from 'react-localize-redux'

import { Link } from 'react-router-dom'

import IronImage from '../components/ironimage'
import Computer from '../images/pixabay/computer-1245714_1920.jpg'
import ComputerPre from '../images/pixabay/computer-1245714_small.jpg'
import Me from '../images/photos/me.png'

import TopMenu from '../components/topmenu'
import NavigatorItem from '../components/navigator-item'

class MainScreen extends Component {
  render () {
    const {translate} = this.props

    return (
      <div style={{height: '100%'}}>
        <IronImage srcPreload={ComputerPre} srcLoaded={Computer} darken={0.6} />
        <div className="MainWrapper">
          <TopMenu />
          <main className="MainContentWrapper">
            <NavigatorItem position={'left'} targetLink={'about'} targetText={'About'} isDark={false} />
            <NavigatorItem position={'right'} targetLink={'showcase'} targetText={'Showcase'} isDark={false} />
            <NavigatorItem position={'bottom'} targetLink={'contact'} targetText={'Contact'} isDark={false} />
            <div style={{width: '98%', margin: '-10vh auto', color: '#fff', fontSize: '3.3vw', fontWeight: 'bold', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
              <div>
                <h3>{ translate('welcome.greeting') }</h3>
                <h1 style={{margin: '20px  10px', fontSize: '1.6em'}}>{ translate('welcome.im') } Håkan Arnoldson</h1>
                <h2 style={{margin: '20px 10px'}}>{ translate('welcome.title') }</h2>
              </div>
              <img src={Me} alt="Håkan" style={{maxWidth: '35%', maxHeight: '20%', height: 'auto', width: 'auto', borderRadius: '20%', margin: '10px '}} />
            </div>
          </main>
        </div>
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
