import * as React from 'react';
import './App.css';

import Hello from './page/Hello';
import Test from './page/test';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Hello/>
        <Test initialValue={2} />
      </div>
    );
  }
}

export default App;
