
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

  state ={
    products:[
      {id:1 , title:'item1'},
      {id:2 , title:'item2'}
    ]
  }
  render() {
    console.log(this.state)
    return (
      <div className="App">
      {this.state.name}
      <Header title="header component2" newData={this.state.desc}/>
      Content.....
      {this.state.products.map(prod => <div key={prod.id}>{prod.title}</div>)}
      <Footer title="footer component2"/>
      </div>
    );
  }
}

export default App;