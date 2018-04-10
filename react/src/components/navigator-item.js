import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import faChevronLeft from '@fortawesome/fontawesome-free-solid/faChevronLeft'
import faChevronRight from '@fortawesome/fontawesome-free-solid/faChevronRight'
import faChevronDown from '@fortawesome/fontawesome-free-solid/faChevronDown'
import faChevronUp from '@fortawesome/fontawesome-free-solid/faChevronUp'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

/*
There is a bug in FireFox with writing-mode vertical in flex that has been resolved in the nightly build of FireFox
https://bugzilla.mozilla.org/show_bug.cgi?id=1267462
Setting fixed dimensions on the flex container seems to solve this for current version and Safari as well
*/

class Navigator extends Component {
  render () {
    const {position, targetText, targetLink = '/404', isDark} = this.props

    let wrapperStyles = {
      display: 'block',
      position: 'fixed',
      zIndex: '20',
      padding: '4px'
    }
    let itemStyles = {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      alignContent: 'center',
      padding: '4px',
      textTransform: 'lowercase',
      letterSpacing: '3px'
    }

    const styleLight = {
      color: '#fff'
    }

    const styleDark = {
      color: '#000'
    }

    if (position === 'top') {
      const styles = {
        flexDirection: 'column',
        height: '56',

      }
      const wrapper = {
        top: '0',
        left: '50%',
        transform: 'translateX(-50%)'
      }
      itemStyles = {...itemStyles, ...styles}
      wrapperStyles = {...wrapperStyles, ...wrapper}
    } else if (position === 'bottom') {
      const styles = {
        flexDirection: 'column-reverse',
        height: '56',
      }
      const wrapper = {
        bottom: '0',
        left: '50%',
        transform: 'translateX(-50%)'
      }
      itemStyles = {...itemStyles, ...styles}
      wrapperStyles = {...wrapperStyles, ...wrapper}
    } else if (position === 'left') {
      const styles = {
        flexDirection: 'column',
        writingMode: 'vertical-lr',
        textOrientation: 'upright',
        width: '48px'
      }
      const wrapper = {
        left: '0',
        top: '50%',
        transform: 'translateY(-50%)'
      }
      itemStyles = {...itemStyles, ...styles}
      wrapperStyles = {...wrapperStyles, ...wrapper}
    } else if (position === 'right') {
      const styles = {
        flexDirection: 'column',
        writingMode: 'vertical-rl',
        textOrientation: 'upright',
        width: '48px'
      }
      const wrapper = {
        right: '2px',
        top: '50%',
        transform: 'translateY(-50%)'
      }
      itemStyles = {...itemStyles, ...styles}
      wrapperStyles = {...wrapperStyles, ...wrapper}
    } else {
      wrapperStyles = {display: 'none'}
      itemStyles = {display: 'none'}
    }

    if (isDark) {
      itemStyles = {...itemStyles, ...styleDark}
    } else {
      itemStyles = {...itemStyles, ...styleLight}
    }

    return (
      /* eslint-disable react/forbid-component-props */
      <nav className={'NavItemWrapper NavItemWrapper' + position} style={wrapperStyles}>
        <Link to={targetLink} className={'NavItem NavItem' + position} style={itemStyles} tabIndex="6">
          {position === 'top' ? <FontAwesomeIcon icon={faChevronUp} size="lg" /> : ''}
          {position === 'bottom' ? <FontAwesomeIcon icon={faChevronDown} size="lg" /> : ''}
          {position === 'left' ? <FontAwesomeIcon icon={faChevronLeft} size="lg" /> : ''}
          {position === 'right' ? <FontAwesomeIcon icon={faChevronRight} size="lg" /> : ''}
          <p style={{padding: '4px'}}>{targetText}</p>
        </Link>
      </nav>
      /* eslint-enable react/forbid-component-props */

    )
  }
}

Navigator.propTypes = {
  position: PropTypes.string,
  targetText: PropTypes.string,
  targetLink: PropTypes.string,
  isDark: PropTypes.bool
}

export default connect(null, null)(Navigator)
