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
import ReactDOM from 'react-dom'
import IronImageBackground from './components/ironimagebackground'

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

    this.state = {
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
      isDark: false,
      scroll: {}
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
  }

  navigateLeft = (override) => {
    if (override || this.scrollCheck('left')) { this.hotNavGo('left', override) }
  }

  navigateRight = (override) => {
    if (override || this.scrollCheck('right')) { this.hotNavGo('right', override) }
  }

  navigateUp = (override) => {
    if (override || this.scrollCheck('top')) { this.hotNavGo('top', override) }
  }

  navigateDown = (override) => {
    if (override || this.scrollCheck('bottom')) { this.hotNavGo('bottom', override) }
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

  scrollCheck = (border) => {
    const c = ReactDOM.findDOMNode(this.PageWrapper)
    if (border === 'bottom') {
      if (c.scrollTop + c.offsetHeight >= c.scrollHeight - 1) { return true } else { return false }
    } else if (border === 'left') {
      if (c.scrollLeft <= 1) { return true } else { return false }
    } else if (border === 'right') {
      if (c.scrollLeft + c.offsetWidth >= c.scrollWidth - 1) { return true } else { return false }
    } else {
      if (c.scrollTop <= 1) { return true } else { return false }
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
      const {scroll = {}} = this.state
      let x
      let y
      if (typeof this.PageWrapper.scrollLeft !== 'number') { x = 0 } else { x = this.PageWrapper.scrollLeft }
      if (typeof this.PageWrapper.scrollTop !== 'number') { y = 0 } else { y = this.PageWrapper.scrollTop }
      try {
        if (typeof scroll[newpath] !== 'undefined' && (scroll[newpath].x !== 0 || scroll[newpath].y !== 0)) {
          const moveXscroll = setTimeout(() => { try { this.PageWrapper.scrollLeft = scroll[newpath].x } catch (e) { /* failed reset */ } finally { clearTimeout(moveXscroll) } }, 500)
          const moveYscroll = setTimeout(() => { try { this.PageWrapper.scrollTop = scroll[newpath].y } catch (e) { /* failed reset */ } finally { clearTimeout(moveYscroll) } }, 500)
          /* This is a pray and hope solution that the child have mounted before the timer expires, but works well enough for a non essential feature for the moment
             I initially tried to do this by sending the PageWrapper ref as a prop to the screen and solve scrolling restire inside those, possibly saving scroll state in redux
             However that made the screen render more often and the animations glitch so this will do for now. */
        }
      } catch (e) {
        // scroll restore not possible, ignore
      } finally {
        // set scroll restore
        scroll[path] = {x: x, y: y}
        this.setState({scroll})
      }
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
        bottom: false
      },
      isDark: true}
      if (pagePosition === 'showcase') {
        navObj.nav.left = {text: 'main', link: '/'}
        navObj.nav.right = {text: 'about', link: '/about'}
        navObj.nav.top = {text: 'showcase', link: '/showcase'}
        return navObj
      } else if (pagePosition === 'about') {
        navObj.nav.left = {text: 'showcase', link: '/showcase'}
        navObj.nav.right = {text: 'main', link: '/'}
        navObj.nav.top = {text: 'about', link: '/about'}
        return navObj
      } else {
        navObj.nav.left = {text: 'about', link: '/about'}
        navObj.nav.right = {text: 'showcase', link: '/showcase'}
        navObj.nav.top = {text: 'main', link: '/'}
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
              <IronImageBackground page={'main'} darken={0} />
              {NavigationTop}
              {NavigationBottom}
              {NavigationLeft}
              {NavigationRight}
              <div className="PageWrapper" ref={ref => { this.PageWrapper = ref }}>

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
