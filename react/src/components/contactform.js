import React, { Component } from 'react'
import Recaptcha from 'react-google-invisible-recaptcha'
import myAxios from '../config/axios'
import { connect } from 'react-redux'
import { getTranslate, getActiveLanguage } from 'react-localize-redux'
import Config from '../config/config'
import update from 'immutability-helper'

class ContactForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name      : '',
      email     : '',
      message   : '',
      isSending : false,
      validation: {
        name   : true,
        email  : true,
        message: true
      }
    }
  }

  onSubmit = e => {
    e.preventDefault()
    const validationTimeout = 4500
    this.setState({isSending: true})
    const {...state} = this.state
    if (state.name === '' || state.email === '' || state.message === '') {
      // NEEDS CLEANUP
      if (state.name === '') {
        this.setState((prevState) => { return {validation: update(prevState.validation, {name: {$set: false}})} })
        const timerName = setTimeout(() => { this.setState((prevState) => { return {validation: update(prevState.validation, {name: {$set: true}})} }); clearTimeout(timerName) }, validationTimeout)
      }
      if (state.email === '') {
        this.setState((prevState) => { return {validation: update(prevState.validation, {email: {$set: false}})} })
        const timerEmail = setTimeout(() => { this.setState((prevState) => { return {validation: update(prevState.validation, {email: {$set: true}})} }); clearTimeout(timerEmail) }, validationTimeout)
      }
      if (state.message === '') {
        this.setState((prevState) => { return {validation: update(prevState.validation, {message: {$set: false}})} })
        const timerMessage = setTimeout(() => { this.setState((prevState) => { return {validation: update(prevState.validation, {message: {$set: true}})} }); clearTimeout(timerMessage) }, validationTimeout)
      }
      this.recaptcha.reset()
      this.setState({isSending: false})
    } else {
      console.log(this.recaptcha)
      try {
        this.recaptcha.execute()
      } catch (e) {
        console.log(e)
      }
    }
  }

  onResolved = () => {
    const {...state} = this.state
    myAxios.post('/', {
      name           : state.name,
      email          : state.email,
      message        : state.message,
      recaptcha      : this.recaptcha.getResponse(),
      isSimpleSpambot: this.dummyInput.value
    })
      .then(response => {
        console.log(response)
        this.setState({isSending: false})
      })
      .catch(error => {
        console.log(error)
        this.setState({isSending: false})
      })
  }

  render () {
    const {...props} = this.props
    const {...state} = this.state

    const style = {name: {}, email: {}, message: {}}
    const invalidStyle = {border: '2px solid red', color: 'red'}
    if (!state.validation.name) { style.name = invalidStyle }
    if (!state.validation.email) { style.email = invalidStyle }
    if (!state.validation.message) { style.message = invalidStyle }

    return (<div style={{width: '100%'}}>
      <form onSubmit={this.onSubmit} disabled={state.isSending} noValidate>
        <h2 className="heading">{props.translate('contact.heading')}</h2>
        <fieldset disabled={state.isSending}>
          <input
            id="urlfield"
            name="url"
            placeholder="Leave this field empty!"
            type="url"
            value=""
            style={{display: 'none'}}
          />
          <input
            id="name-input"
            name="name"
            style={style.name}
            placeholder={props.translate('contact.placeHolders.name')}
            type="text"
            value={state.name}
            onChange={event => this.setState({ name: event.target.value })}
            required
          />
          {!state.validation.name ? <label htmlFor="name-input" style={style.name}>{props.translate('contact.validation.name')}</label> : null}
          <input
            id="email-input"
            name="email"
            style={style.email}
            placeholder={props.translate('contact.placeHolders.email')}
            type="email"
            value={state.email}
            onChange={event => this.setState({ email: event.target.value })}
            required
          />
          {!state.validation.email ? <label htmlFor="email-input" style={style.email}>{props.translate('contact.validation.email')}</label> : null}
          <textarea
            id="text-input"
            name="message"
            style={style.message}
            placeholder={props.translate('contact.placeHolders.message')}
            onChange={event => this.setState({ message: event.target.value })}
            value={state.message}
            required
          />
          {!state.validation.message ? <label htmlFor="text-input" style={style.message}>{props.translate('contact.validation.message')}</label> : null}
          <input type="submit" value={props.translate('contact.placeHolders.send')} disabled={state.isSending} />
          <Recaptcha
            ref={ref => { this.recaptcha = ref }}
            sitekey={Config.reCaptchaPub}
            onResolved={this.onResolved}
            locale={props.currentLanguage}
            badge="inline" />
        </fieldset>
      </form>
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
