import React, { Component } from 'react';
import LoginApp from './components/jwtLogin/LoginApp'


class App extends Component {
  render() {
    return (
      <div className="App">
         <LoginApp/>
      </div>
    );
  }
}
export default App;