// Bojan Gvozderac https://medium.com/jsguru/react-image-lazy-loading-component-246e0cdcce02

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IronImage from './ironimage'
import Computer from '../images/pexels/pexels-photo-450035.jpg'
import ComputerPre from '../images/pexels/pexels-photo-450035_small.jpg'
import Phone from '../images/pixabay/village-1049032_1920.jpg'
import PhonePre from '../images/pixabay/village-1049032_640.jpg'
import Case from '../images/unsplash/neonbrand-543627-unsplash.jpg'
import CasePre from '../images/unsplash/neonbrand-543627-unsplash-small.jpg'
import Laptop from '../images/unsplash/fabian-grohs-524350-unsplash.jpg'
import LaptopPre from '../images/unsplash/fabian-grohs-524350-unsplash-small.jpg'

class IronImageBackground extends Component {
  render () {
    const { ...props } = this.props

    return (
      <div style={{position: 'fixed', top: '0', left: '0', bottom: '0', right: '0', width: '100wv', height: '100vh', zIndex: '-2'}}>
        {props.page === '/' ? <IronImage srcPreload={ComputerPre} srcLoaded={Computer} darken={0.52} /> : null}
        {props.page === '/about' ? <IronImage srcPreload={LaptopPre} srcLoaded={Laptop} darken={-0.74} /> : null}
        {props.page === '/contact' ? <IronImage srcPreload={PhonePre} srcLoaded={Phone} darken={0.25} /> : null}
        {props.page === '/showcase' ? <IronImage srcPreload={CasePre} srcLoaded={Case} darken={0.52} /> : null}

      </div>
    )
  }
}

IronImageBackground.propTypes = {
  page: PropTypes.string
}

export default IronImageBackground
