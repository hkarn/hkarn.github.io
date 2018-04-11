import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getTranslate } from 'react-localize-redux'
import IronImage from '../components/ironimage'
import Computer from '../images/pixabay/computer-1245714_1920.jpg'
import ComputerPre from '../images/pixabay/computer-1245714_small.jpg'

class About extends Component {
  render () {
    const { translate } = this.props

    return (
      <div>
        <div style={{position: 'fixed', top: '0', left: '0', bottom: '0', right: '0', width: '100%', height: '100%', zIndex: '-2'}}>
          <IronImage srcPreload={ComputerPre} srcLoaded={Computer} darken={0.6} />
        </div>
        <main className="MainScreenWrapper">
          about
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
