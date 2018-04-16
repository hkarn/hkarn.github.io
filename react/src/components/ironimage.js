// Bojan Gvozderac https://medium.com/jsguru/react-image-lazy-loading-component-246e0cdcce02

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../styles/css/ironimage.css'

class IronImage extends Component {
  constructor (props) {
    super(props)
    this.ironImageHd = null
  }

  componentDidMount () {
    const { srcLoaded } = this.props
    const hdLoaderImg = new Image()

    hdLoaderImg.src = srcLoaded

    hdLoaderImg.onload = () => {
      this.ironImageHd.setAttribute(
        'style',
        `background-image: url('${srcLoaded}')`
      )
      this.ironImageHd.classList.add('iron-image-fade-in')
    };
  }

  render () {
    const { srcPreload, darken = 0 } = this.props

    return (
      <div className="iron-image-container" style={{background: `linear-gradient(rgba(0, 0, 0, ${darken}),rgba(0, 0, 0, ${darken}))`}}>

        <div
          className="iron-image-loaded"
          ref={imageLoadedElem => this.ironImageHd = imageLoadedElem} />
        <div
          className="iron-image-preload"
          style={{ backgroundImage: `url('${srcPreload}')` }} />

      </div>
    )
  }
}

IronImage.propTypes = {
  srcPreload: PropTypes.string,
  srcLoaded: PropTypes.string,
  darken: PropTypes.number
}

export default IronImage
