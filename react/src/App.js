import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import WheelReact from 'wheel-react'
import SwipeReact from 'swipe-react'
import ArrowKeysReact from 'arrow-keys-react'
import { getLanguages, getTranslate } from 'react-localize-redux'

import { Route, Link } from 'react-router-dom'
import {localizationInitialize, addTranslations} from './actions'
import MyLoadable from './components/loader/myloadable'

const MainScreen = MyLoadable({
  loader: () => import('./screens/main')
})

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isTranslationLoaded: false
    }
    const {localizationInitialize = () => {}} = this.props
    localizationInitialize()
    WheelReact.config({
      left: () => {
        console.log('wheel left detected.')
      },
      right: () => {
        console.log('wheel right detected.')
      },
      up: () => {
        console.log('wheel up detected.')
      },
      down: () => {
        console.log('wheel down detected.')
      }
    })
    SwipeReact.config({
      left: () => {
        console.log('Swipe left detected.')
      },
      right: () => {
        console.log('Swipe right detected.')
      },
      up: () => {
        console.log('Swipe up detected.')
      },
      down: () => {
        console.log('Swipe down detected.')
      }
    })
    ArrowKeysReact.config({
      left: () => {
        console.log('left key detected.')
      },
      right: () => {
        console.log('right key detected.')
      },
      up: () => {
        console.log('up key detected.')
      },
      down: () => {
        console.log('down key detected.')
      }
    })
  }

  componentDidMount () {
    this.topWrapper.focus()
  }

  componentWillReceiveProps (nextProps) {
    const {addTranslations, languages = []} = this.props
    if (typeof nextProps.languages === 'object' && nextProps.languages.length > 0 && nextProps.languages !== languages) {
      addTranslations()
      this.setState({isTranslationLoaded: true})
    }
  }

  componentWillUnmount () {
    WheelReact.clearTimeout()
    ArrowKeysReact.clearTimeout()
    SwipeReact.clearTimeout()
  }

  render () {
    const {isTranslationLoaded = false} = this.state
    const {translate} = this.props

    return (
      <div className="App" style={{height: '100%'}} {...WheelReact.events} {...SwipeReact.events} {...ArrowKeysReact.events} tabIndex="1" ref={(div) => { this.topWrapper = div }} >
        {isTranslationLoaded
          ? (
            <div style={{height: '100%'}}>
              <Route path="/about" component={MainScreen} />
              <Route path="/contact" component={MainScreen} />
              <Route path="/showcase" component={MainScreen} />
              <Route path="/" component={MainScreen} />
            </div>
          )
          : null}
      </div>
    )
  }
}

App.propTypes = {
  localizationInitialize: PropTypes.func,
  addTranslations: PropTypes.func,
  languages: PropTypes.array,
  translate: PropTypes.func,
  currentLanguage: PropTypes.string
}

const mapStateToProps = state => ({
  languages: getLanguages(state.locale),
  translate: getTranslate(state.locale)
})

const mapDispatchToProps = dispatch => bindActionCreators({
  localizationInitialize,
  addTranslations
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)
