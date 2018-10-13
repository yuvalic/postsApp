import React, {Component} from 'react'
import Form from './Form'
import Posts from './Posts'
import {HotKeys} from 'react-hotkeys'
import {HOT_KEYS_MAP} from './consts'


class App extends Component {
  render() {
    return (
      <HotKeys keyMap={HOT_KEYS_MAP}>
        <div className="app-container">
          <Form/>
          <Posts/>
        </div>
      </HotKeys>
    )
  }
}

export default App
