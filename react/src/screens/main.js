import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getTranslate } from 'react-localize-redux'
import PageHead from '../components/page-head'
import Me from '../images/photos/me.png'
import { setAnimation } from '../actions'
import { bindActionCreators } from 'redux'

class MainScreen extends Component {
  componentDidMount () {
    const { setAnimation } = this.props
    const timer = setTimeout(() => { setAnimation('main', false, 2000); clearTimeout(timer) }, 2000)
  }

  render () {
    const { translate, showAnimation } = this.props
    let animationClass = ''
    if (showAnimation) {
      animationClass = 'MainScreenWrapperAnimated'
    }
    return (
      <div>
        <PageHead
          title={'Arnoldson.online - ' + translate('welcome.pageTitle')}
          description={translate('page.desc')}
        />
        <main className={'ScreenWrapper MainScreenWrapper ' + animationClass}>
          <h3>{ translate('welcome.greeting') }</h3>
          <h1 style={{margin: '20px  10px', fontSize: '1.6em'}}>{ translate('welcome.im') } Håkan Arnoldson</h1>
          <h2 style={{margin: '20px 10px'}}>{ translate('welcome.title') }</h2>
          <img src={Me} alt="Håkan" style={{maxWidth: '35%', maxHeight: '20%', height: 'auto', width: 'auto', borderRadius: '20%', margin: '10px '}} />
        </main>
      </div>
    )
  }
}

MainScreen.propTypes = {
  translate: PropTypes.func,
  showAnimation: PropTypes.bool,
  setAnimation: PropTypes.func
}

const mapStateToProps = state => ({
  showAnimation: state.animations.main,
  translate: getTranslate(state.locale)
})

const mapDispatchToProps = dispatch => bindActionCreators({
  setAnimation
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen)
