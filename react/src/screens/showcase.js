import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getTranslate } from 'react-localize-redux'
import IronImage from '../components/ironimage'
import Computer from '../images/pixabay/computer-1245714_1920.jpg'
import ComputerPre from '../images/pixabay/computer-1245714_small.jpg'
import PageHead from '../components/page-head'

class Showcase extends Component {
  render () {
    const {translate} = this.props

    return (
      <div>
        <PageHead
          title="Arnoldson.online - Welcome"
          description="Portfolio site for Håkan Kindström Arnoldson, full-stack developer"
        />
        <main className="ScreenWrapper ShowcaseScreenWrapper">
          showcase
          <h1>add some wide content horizontal scroll/hotnav interference test</h1>
          <div style={{backgroundColor: 'orange', width: '6000px'}}>Hello</div>
        </main>
      </div>
    )
  }
}

Showcase.propTypes = {
  translate: PropTypes.func
}

const mapStateToProps = state => ({
  translate: getTranslate(state.locale)
})

export default connect(mapStateToProps, null)(Showcase)
