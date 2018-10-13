import React from 'react'
import {requestOptions, EMAIL_REGEX} from './consts'
import {HotKeys} from 'react-hotkeys'

export default class Form extends React.Component {

  state = {
    showError: false,
    err:       ''
  }

  _resetForm = () => {
    this.form.reset()
    this.setState({
      showError: false,
    })
  }


  _onSubmit = (e) => {
    e.preventDefault()
    const {value: email} = this.email
    const {value: msg}   = this.msg
    if (msg && email) {
      if (!email.match(EMAIL_REGEX)) {
        this.setState({
          showError: true,
          err:       'Email address format is not valid',
        })
      } else {
        fetch('posts', {
          method: 'POST',
          body:   JSON.stringify({email, msg}),
          ...requestOptions,
        }).then(res => res.json()).then(() => {
          this._resetForm()
        }).catch(() => {
          this.setState({
            err:       'Post submission failed',
            showError: true,
          })
        })
      }
    } else {
      this.setState({
        showError: true,
        err:       'Email and message must be provided',
      })
    }
  }


  render() {
    const handlers         = {
      'submit': this._onSubmit
    }
    const {showError, err} = this.state
    return <HotKeys handlers={handlers}>
      <div className="form-wrapper">
        <form action="" ref={form => this.form = form}>
          <div className="form-data">
            <input type="email" required ref={email => this.email = email} placeholder="Email"/>
          </div>
          <div className="form-data">
            <textarea required ref={msg => this.msg = msg} placeholder="Message"/>
          </div>
          {showError && <div className="err-msg">{err}</div>}
          <div className="form-data rtl">
            <button type="submit" onClick={this._onSubmit} className="submit-btn">SUBMIT</button>
          </div>
        </form>
      </div>
    </HotKeys>
  }

}