import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import faChevronLeft from '@fortawesome/fontawesome-free-solid/faChevronLeft'
import faChevronRight from '@fortawesome/fontawesome-free-solid/faChevronRight'
import faChevronDown from '@fortawesome/fontawesome-free-solid/faChevronDown'
import faChevronUp from '@fortawesome/fontawesome-free-solid/faChevronUp'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

/*
There is a bug in FireFox with writing-mode vertical that has been resolved in the nightly build of FireFox
https://bugzilla.mozilla.org/show_bug.cgi?id=1267462
Setting fixed dimensions on the flex container seems to solve this
*/

class Navigator extends Component {
  render () {
    const {position, targetText, isDark} = this.props

    let wrapperStyles = {
      display: 'block',
      position: 'absolute',
      backgroundColor: 'blue'
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
        height: '65px',
        width: '210px'

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
        height: '65px',
        width: '210px'
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
        height: '260px',
        width: '65px'
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
        height: '260px',
        width: '65px'
      }
      const wrapper = {
        right: '0',
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
      <nav className={'NavItemWrapper ' + 'NavItemWrapper' + position} style={wrapperStyles}>
        <a className={'NavItem ' + 'NavItem' + position} style={itemStyles} tabIndex="6">
          {position === 'top' ? <FontAwesomeIcon icon={faChevronUp} size="lg" /> : ''}
          {position === 'bottom' ? <FontAwesomeIcon icon={faChevronDown} size="lg" /> : ''}
          {position === 'left' ? <FontAwesomeIcon icon={faChevronLeft} size="lg" /> : ''}
          {position === 'right' ? <FontAwesomeIcon icon={faChevronRight} size="lg" /> : ''}
          <p style={{padding: '4px'}}>{targetText}</p>
        </a>
      </nav>

    )
  }
}

Navigator.propTypes = {
  position: PropTypes.string,
  targetText: PropTypes.string,
  isDark: PropTypes.bool
}

export default connect(null, null)(Navigator)
