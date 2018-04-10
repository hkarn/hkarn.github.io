import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import WheelReact from 'wheel-react'
import SwipeReact from 'swipe-react'
import ArrowKeysReact from 'arrow-keys-react'
import { getLanguages, getTranslate } from 'react-localize-redux'
import { Route, Switch } from 'react-router-dom'
import {localizationInitialize, addTranslations} from './actions'
import MyLoadable from './components/loader/myloadable'
import Loader from './components/loader/loader'
import TopMenu from './components/topmenu'
import NavigatorItem from './components/navigator-item'

const MainScreen = MyLoadable({
  loader: () => import('./screens/main')
})

const About = MyLoadable({
  loader: () => import('./screens/about')
})

const Contact = MyLoadable({
  loader: () => import('./screens/contact')
})

const Showcase = MyLoadable({
  loader: () => import('./screens/showcase')
})

class App extends Component {
  constructor (props) {
    super(props)
    const {localizationInitialize = () => {}} = this.props
    localizationInitialize()

    this.state = {
      isTranslationLoaded: false,
      loaderPassedDelay: false, 
      loaderTimedOut: false,
      navTable: {
        main: {
          up: false,
          left: {text: 'About', link: '/about'},
          right: {text: 'Showcase', link: '/showcase'},
          bottom: {text: 'Contact', link: '/contact'}
        },
        showcase: {
          up: false,
          left: {text: 'Home', link: '/'},
          right: {text: 'About', link: '/about'},
          bottom: {text: 'Contact', link: '/contact'}
        },
        about: {
          up: false,
          left: {text: 'Showcase', link: '/showcase'},
          right: {text: 'Home', link: '/'},
          bottom: {text: 'Contact', link: '/contact'}
        },
        contact: {
          up: {text: 'Home', link: '/'},
          left: {text: 'About', link: '/about'},
          right: {text: 'Showcase', link: '/showcase'},
          bottom: false
        }
      }
    }

    // Translation loading timers
    this.pastDelayTimer = setTimeout(() => {
      this.setState({loaderPassedDelay: true})
      clearTimeout(this.pastDelayTimer)
    }, 500)
    this.pastTimeoutTimer = setTimeout(() => {
      this.setState({loaderTimedOut: true})
      clearTimeout(this.pastTimeoutTimer)
    }, 15000)

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
    Showcase.preload()
    About.preload()
    Contact.preload()
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
    clearTimeout(this.pastDelayTimer)
    clearTimeout(this.pastTimeoutTimer)
  }

  render () {
    const {isTranslationLoaded = false, loaderPassedDelay = false, loaderTimedOut = false} = this.state
    const {translate} = this.props

    return (
      <div className="App" {...WheelReact.events} {...SwipeReact.events} {...ArrowKeysReact.events} tabIndex="1" ref={(div) => { this.topWrapper = div }} >
        {isTranslationLoaded
          ? (
            <div className="AppLoaded">
              <TopMenu />
              <div className="PageWrapper">
              <NavigatorItem position={'top'} targetLink={'home'} targetText={'home'} isDark={false} />
              <NavigatorItem position={'left'} targetLink={'about'} targetText={'About'} isDark={false} />
              <NavigatorItem position={'right'} targetLink={'showcase'} targetText={'Showcase'} isDark={false} />
              <NavigatorItem position={'bottom'} targetLink={'contact'} targetText={'Contact'} isDark={false} />
              <Switch>
                <Route path="/about*" component={About} />
                <Route path="/contact*" component={Contact} />
                <Route path="/showcase*" component={Showcase} />
                <Route component={MainScreen} />
              </Switch>
              </div>
            </div>
          )
          : <Loader error={null} timedOut={loaderTimedOut} pastDelay={loaderPassedDelay} isLoading />}
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
