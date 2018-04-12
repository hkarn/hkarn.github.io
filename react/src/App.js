import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import WheelReact from 'wheel-react'
import SwipeReact from 'swipe-react'
import ArrowKeysReact from 'arrow-keys-react'
import { getLanguages, getTranslate } from 'react-localize-redux'
import { Route, Switch } from 'react-router-dom'
import {localizationInitialize, addTranslations, goToPage, setLanguageRequestedBySearch} from './actions'
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
    const {location, localizationInitialize = () => {}} = props
    localizationInitialize()

    let path
    try {
      path = location.pathname.toLowerCase()
    } catch (e) {
      path = '/'
    }
    let initalPosition = 'main'
    if (!/^\/showcase/.test(path)) { initalPosition = 'showcase' }
    if (!/^\/about/.test(path)) { initalPosition = 'about' }

    const d = this.getInnerDimensions()

    this.state = {
      innerHeight: d.height,
      innerWidth: d.width,
      isTranslationLoaded: false,
      loaderPassedDelay: false,
      loaderTimedOut: false,
      pagePosition: initalPosition,
      nav: {
        left: {text: '', link: ''},
        right: {text: '', link: ''},
        bottom: {text: '', link: ''},
        top: {text: '', link: ''}
      },
      isDark: false
    }
    this.state = {...this.NavSwitch(path, initalPosition)}

    this.hotNavTimer = setTimeout(false)
    this.hotNavLock = false

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
      left: () => this.navigateLeft(false),
      right: () => this.navigateRight(false),
      up: () => this.navigateDown(false), // INVERTED
      down: () => this.navigateUp(false) // INVERTED
    })
    SwipeReact.config({
      left: () => this.navigateRight(false), // INVERTED
      right: () => this.navigateLeft(false), // INVERTED
      up: () => this.navigateDown(false), // INVERTED
      down: () => this.navigateUp(false) // INVERTED
    })
    ArrowKeysReact.config({
      left: () => this.navigateLeft(true),
      right: () => this.navigateRight(true),
      up: () => this.navigateUp(true),
      down: () => this.navigateDown(true)
    })

    this.dimensionCheck = setInterval(() => {
      const d = this.getInnerDimensions()
      this.setState({innerHeight: d.height, innerWidth: d.width})
    }, 6000)
  }

  getInnerDimensions = () => {
    const body = document.body
    const html = document.documentElement
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight,
      html.clientHeight, html.scrollHeight, html.offsetHeight)
    const docWidth = Math.max(body.scrollWidth, body.offsetWidth,
      html.clientWidth, html.scrollWidth, html.offsetWidth)
    return {height: docHeight, width: docWidth}
  }

  navigateLeft = (override) => {
    this.hotNavGo('left', override)
  }

  navigateRight = (override) => {
    this.hotNavGo('right', override)
  }

  navigateUp = (override) => {
    this.hotNavGo('top', override)
  }

  navigateDown = (override) => {
    this.hotNavGo('bottom', override)
  }

  hotNavGo = (loc, override) => {
    if (override || !this.hotNavLock) {
      const {nav} = this.state
      const {goToPage} = this.props
      if (nav[loc] !== false) {
        goToPage(nav[loc].link)
        this.hotNavLock = true
        this.hotNavTimer = setTimeout(() => {
          this.hotNavLock = false
          clearTimeout(this.hotNavTimer)
        }, 1000)
      }
    }
  }

  componentDidMount () {
    this.topWrapper.focus()
    const preLoader = setTimeout(() => {
      Showcase.preload()
      About.preload()
      Contact.preload()
      MainScreen.preload()
      clearTimeout(preLoader)
    }, 2000)
  }

  componentWillReceiveProps (nextProps) {
    const {addTranslations, languages = [], location} = this.props
    if (typeof nextProps.languages === 'object' && nextProps.languages.length > 0 && nextProps.languages !== languages) {
      addTranslations()
      this.setState({isTranslationLoaded: true})
      const {setLanguageRequestedBySearch} = this.props
      try {
        const lang = location.search.match(/lang=\w{1,3}/)[0].split('lang=').pop()
        const langCodes = nextProps.languages.map(item => item.code)
        if (langCodes.includes(lang)) {
          setLanguageRequestedBySearch(lang)
        } else {
          setLanguageRequestedBySearch(false)
        }
      } catch (e) {
        setLanguageRequestedBySearch(false)
      }
    }
    let path
    let newpath
    try {
      newpath = nextProps.location.pathname
      path = location.pathname
    } catch (e) {
      path = true
      newpath = false
    }
    if (path !== newpath) {
      const {pagePosition} = this.state
      this.setState(this.NavSwitch(newpath, pagePosition))
    }
  }

  componentWillUnmount () {
    WheelReact.clearTimeout()
    clearTimeout(this.pastDelayTimer)
    clearTimeout(this.pastTimeoutTimer)
    clearTimeout(this.hotNavTimer)
    clearInterval(this.dimensionCheck)
  }

  NavSwitch = (path, pagePosition) => {
    const pathLower = path.toLowerCase()
    if (/^\/showcase/.test(pathLower)) {
      return {nav: {
        left: {text: 'main', link: '/'},
        right: {text: 'about', link: '/about'},
        bottom: {text: 'contact', link: '/contact'},
        top: false
      },
      pagePosition: 'showcase',
      isDark: false}
    } else if (/^\/about/.test(pathLower)) {
      return {nav: {
        left: {text: 'showcase', link: '/showcase'},
        right: {text: 'main', link: '/'},
        bottom: {text: 'contact', link: '/contact'},
        top: false
      },
      pagePosition: 'about',
      isDark: false}
    } else if (/^\/contact/.test(pathLower)) {
      const navObj = {nav: {
        bottom: false,
        top: {text: 'main', link: '/'}
      },
      isDark: true}
      if (pagePosition === 'showcase') {
        navObj.nav.left = {text: 'main', link: '/'}
        navObj.nav.right = {text: 'about', link: '/about'}
        return navObj
      } else if (pagePosition === 'about') {
        navObj.nav.left = {text: 'showcase', link: '/showcase'}
        navObj.nav.right = {text: 'main', link: '/'}
        return navObj
      } else {
        navObj.nav.left = {text: 'about', link: '/about'}
        navObj.nav.right = {text: 'showcase', link: '/showcase'}
        return navObj
      }
    } else {
      return {nav: {
        left: {text: 'about', link: '/about'},
        right: {text: 'showcase', link: '/showcase'},
        bottom: {text: 'contact', link: '/contact'},
        top: false
      },
      pagePosition: 'main',
      isDark: false}
    }
  }

  render () {
    const {isTranslationLoaded = false, loaderPassedDelay = false, loaderTimedOut = false, nav, isDark = false} = this.state
    const {translate} = this.props
    const navText = isTranslationLoaded ? {
      about: translate('nav.about'),
      main: translate('nav.main'),
      contact: translate('nav.contact'),
      showcase: translate('nav.showcase')
    } : {
      about: 'About',
      main: 'Home',
      contact: 'Contact',
      showcase: 'Showcase'
    }

    const NavigationTop = nav.top ? <NavigatorItem position={'top'} targetLink={nav.top.link} targetText={navText[nav.top.text]} isDark={isDark} /> : null
    const NavigationBottom = nav.bottom ? <NavigatorItem position={'bottom'} targetLink={nav.bottom.link} targetText={navText[nav.bottom.text]} isDark={isDark} /> : null
    const NavigationLeft = nav.left ? <NavigatorItem position={'left'} targetLink={nav.left.link} targetText={navText[nav.left.text]} isDark={isDark} /> : null
    const NavigationRight = nav.right ? <NavigatorItem position={'right'} targetLink={nav.right.link} targetText={navText[nav.right.text]} isDark={isDark} /> : null

    return (
      <div className="App" {...WheelReact.events} {...SwipeReact.events} {...ArrowKeysReact.events} tabIndex="1" ref={(div) => { this.topWrapper = div }} >
        {isTranslationLoaded
          ? (
            <div className="AppLoaded">
              <TopMenu />
              <div className="PageWrapper">
                {NavigationTop}
                {NavigationBottom}
                {NavigationLeft}
                {NavigationRight}
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
  currentLanguage: PropTypes.string,
  location: PropTypes.object,
  goToPage: PropTypes.func,
  setLanguageRequestedBySearch: PropTypes.func
}

const mapStateToProps = state => ({
  languages: getLanguages(state.locale),
  translate: getTranslate(state.locale),
  location: state.routing.location
})

const mapDispatchToProps = dispatch => bindActionCreators({
  localizationInitialize,
  addTranslations,
  goToPage,
  setLanguageRequestedBySearch
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)
