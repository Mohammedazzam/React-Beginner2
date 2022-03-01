
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
      <Header/>
      Content.....
      <Footer/>
      </div>
    );
  }
}

export default App;