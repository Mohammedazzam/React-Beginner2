
// function App() {
//   return (
//     <div className="App">
//       Hello Mohammed Azzam
//     </div>
//   );
// }

// export default App;



import React, {Component} from "react";
import Footer from './component/Footer';
import Header from './component/Header';

class App extends Component{
  render() {
    return (
      <div className="App">
      <Header title="header component2"/>
      Content.....
      <Footer title="footer component2"/>
      </div>
    );
  }
}

export default App;