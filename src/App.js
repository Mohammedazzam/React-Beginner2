
// function App() {
//   return (
//     <div className="App">
//       Hello Mohammed Azzam
//     </div>
//   );
// }

// export default App;



// import React, { Component } from "react";
// import Footer from './component/Footer';
// import Header from './component/Header';
// import List from './component/List';

// import MyImg from './assets/123.jpeg'
// import "./App.css"

// class App extends Component {

//   state = {
//     products: [
//       { id: 1, title: 'item1' },
//       { id: 2, title: 'item2' }
//     ]
//   }
//   render() {
//     console.log(this.state)
//     return (
//       <div className="App">
//         <img src={MyImg} />
//         {this.state.name}
//         <Header title="header component2" newData={this.state.desc} />
//         Content.....
//         {this.state.products.map(prod => <div key={prod.id}>{prod.title}</div>)}
//         <Footer title="footer component2" />
//         <List products={this.state.products}/>
//       </div>
//     );
//   }
// }

// export default App;







import React, { Component } from "react";
import Home from './component/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        App Comp
        <ul>
          <Home/>
        </ul>
      </div>
    );
  }
}

export default App;