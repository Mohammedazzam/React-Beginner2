
import React, { Component } from "react";
import CompA from "./component/CompA";
import CompB from "./component/CompB";

class App extends Component {

  render() {
    return (
      <div className="App">
        <CompA test="test comp A"/>
        <CompB/>
      </div>
    );
  }
}

export default App;