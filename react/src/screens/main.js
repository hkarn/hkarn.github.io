import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getTranslate } from 'react-localize-redux'
import PageHead from '../components/page-head'
import Me from '../images/photos/me.png'
import { setAnimation } from '../actions'
import { bindActionCreators } from 'redux'
import faJsSquare from '@fortawesome/fontawesome-free-brands/faJsSquare'
import faReact from '@fortawesome/fontawesome-free-brands/faReact'
import faCss3 from '@fortawesome/fontawesome-free-brands/faCss3'
import faHtml5 from '@fortawesome/fontawesome-free-brands/faHtml5'
import faNodeJs from '@fortawesome/fontawesome-free-brands/faNodeJs'
import faPhp from '@fortawesome/fontawesome-free-brands/faPhp'
import faGit from '@fortawesome/fontawesome-free-brands/faGit'
import faDatabase from '@fortawesome/fontawesome-free-solid/faDatabase'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

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
          <h3 style={{margin: '10px 10px', fontSize: '1.36em'}}>{ translate('welcome.greeting') }</h3>
          <h1 style={{margin: '9px 10px', fontSize: '2.05em'}}>{ translate('welcome.im') } Håkan Arnoldson</h1>
          <h2 style={{margin: '8px 10px', fontSize: '1.8em'}}>{ translate('welcome.title') }</h2>
          <ul style={{margin: '23px 10px', fontSize: '.89em'}} className="techIcons">
            <li title="JavaScript, ES7"><FontAwesomeIcon icon={faJsSquare} /></li>
            <li title="React 16"><FontAwesomeIcon icon={faReact} /></li>
            <li title="CSS3"><FontAwesomeIcon icon={faCss3} /></li>
            <li title="HTML5"><FontAwesomeIcon icon={faHtml5} /></li>
            <li title="Node.js"><FontAwesomeIcon icon={faNodeJs} /></li>
            <li title="PHP7"><FontAwesomeIcon icon={faPhp} /></li>
            <li title="MongoDB, MSSQL, MySQL, Firebase"><FontAwesomeIcon icon={faDatabase} /></li>
            <li title="Git"><FontAwesomeIcon icon={faGit} /></li>
          </ul>
          <img src={Me} alt="Håkan" style={{maxWidth: '35%', maxHeight: '20%', height: 'auto', width: 'auto', borderRadius: '20%', margin: '10px '}} />
        </main>
      </div>
    )
  }
}

MainScreen.propTypes = {
  translate    : PropTypes.func,
  showAnimation: PropTypes.bool,
  setAnimation : PropTypes.func
}

const mapStateToProps = state => ({
  showAnimation: state.animations.main,
  translate    : getTranslate(state.locale)
})

const mapDispatchToProps = dispatch => bindActionCreators({
  setAnimation
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen)
