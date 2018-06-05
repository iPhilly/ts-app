import * as React from 'react'
import './App.css'
import Layout from './page/Layout'
import Test from './page/TestComp'

class App extends React.Component {
  public render() {

    const chilcNode = (
      <Test initialValue={2}/>
    )

    return (
      <div className="App">
        <Layout children = {chilcNode}/>
      </div>
    );
  }
}

export default App;
