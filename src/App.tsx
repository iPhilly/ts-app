import * as React from 'react'
import './App.css'
import { SiderOnlyLayout } from './page/AppLayout'

class App extends React.Component {
  public render() {

    return (
      <SiderOnlyLayout collapsed = {false}/>
    );
  }
}

export default App;
