import React, { Component } from 'react'
import Recaptcha from 'react-google-invisible-recaptcha'
import myAxios from '../config/axios'
import { connect } from 'react-redux'
import { getTranslate, getActiveLanguage } from 'react-localize-redux'
import Config from '../config/config'

class ContactForm extends Component {
  constructor( props ) {
    super( props );
    this.state = { value: '' };
  }
 

  componentDidMount () {
    myAxios.post('/', {
      hello: 'hello'
    })
      .then(response => console.log(response))
      .catch(error => console.log(error))
  }

  onSubmit = () => {
    if (this.state.value === '') {
      alert('Validation failed! Input cannot be empty.')
      this.recaptcha.reset()
    } else {
      this.recaptcha.execute()
    }
  }

  onResolved = () => {
    alert('Recaptcha resolved with response: ' + this.recaptcha.getResponse())
    myAxios.post('/', {
      hello: 'hello',
      recaptcha: this.recaptcha.getResponse()
    })
      .then(response => console.log(response))
      .catch(error => console.log(error))
  }

  render () {
    const {translate} = this.props

    return (<div>
      <input
        type="text"
        value={this.state.value}
        onChange={event => this.setState({ value: event.target.value })} />
      <button onClick={this.onSubmit}>Submit</button>
      <Recaptcha
        ref={ref => { this.recaptcha = ref }}
        sitekey={Config.reCaptchaPub}
        onResolved={this.onResolved}
        locale={this.props.currentLanguage}
        badge="bottomright" />
    </div>)
  }
}

const mapStateToProps = state => {
  const returnObj = {
    translate: getTranslate(state.locale)
  }
  try {
    returnObj.currentLanguage = getActiveLanguage(state.locale).code
  } catch (e) {
    returnObj.currentLanguage = 'en'
  }
  return returnObj
}

export default connect(mapStateToProps, null)(ContactForm)
