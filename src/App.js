import React, { Component } from 'react';
import AxiosUtil from './util/axios'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: undefined
    }
  }
  componentWillMount () {
    this.loadUserData()
  }

  loadUserData = async () => {
    try {
      let user = await AxiosUtil.get('/api/user')
      this.setState({
        user: user
      })
    } catch (e) {
      this.setState({
        error: e.message
      })
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>{this.state.user && this.state.user.nickname}</div>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
