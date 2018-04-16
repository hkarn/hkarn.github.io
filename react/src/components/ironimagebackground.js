// Bojan Gvozderac https://medium.com/jsguru/react-image-lazy-loading-component-246e0cdcce02

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IronImage from './ironimage'
import Computer from '../images/pixabay/computer-1245714_1920.jpg'
import ComputerPre from '../images/pixabay/computer-1245714_small.jpg'

class IronImageBackground extends Component {
  render () {
    const { ...props } = this.props

    return (
      <div style={{position: 'fixed', top: '0', left: '0', bottom: '0', right: '0', width: '100wv', height: '100vh', zIndex: '-2'}}>
        <IronImage srcPreload={ComputerPre} srcLoaded={Computer} darken={0.5} />
      </div>
    )
  }
}

IronImageBackground.propTypes = {
  page: PropTypes.string
}

export default IronImageBackground
