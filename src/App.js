
// import React, { Component } from "react";
// import Comp from "./component/Comp";
// import CompA from "./component/CompA";
// import CompB from "./component/CompB";
// import Home from "./component/Home";
// import CompAA from "./component/CompAA";
// import { CnxtProvider } from "./component/ContextComp";
// import CompAAA from "./component/CompAAA";
// import CompBBB from "./component/CompBBB";
// import HomeRoute from "./component/HomeRoute";
// import { BrowserRouter, Route } from 'react-router-dom'
// import axios from "axios";
// import TestCompHooks from "./component/TestCompHooks";

// class App extends Component {

//   render() {
//     return (
//       <div className="App">
//         <Comp test={() => {
//           return 'Test Uppercase...'
//         }}/>
//         {/* <CompA test="test comp A"/> */}
//         <CompB/>
//       </div>
//     );
//   }
// }



// render() {
//     return (
//       <div className="App">
//         <Home/>
//       </div>
//     );
//   }
// }

// class App extends Component {
//   state = {
//     name:'App Comp'
//   }
//   render(){
//     return (
//       <div className="App">
//       <CompAA name = {this.state.name}/>
//       </div>
//     )
//   }
// }

// class App extends Component {
//   state = {
//     name: 'App Comp'
//   }
//   render() {
//     return (
//       <CnxtProvider value= {this.state.name}>
//         <div className="App">
//           <CompAA/>
//         </div>
//       </CnxtProvider>
//     )
//   }
// }

// export default App;






// class App extends Component {

//   render() {
//     return (
//       <div>
//         <BrowserRouter>
//           <Route path="/" element={<HomeRoute />}/>
//           {/* <HomeRoute /> */}
//           <Route path="/compAAA" element={<CompAAA />}/>
//           {/* <CompAAA /> */}
//           <Route path="/compBBB" element={<CompBBB />}/>
//           {/* <CompBBB /> */}
//         </BrowserRouter>
//       </div>
//     )
//   }
// }




// class App extends Component {
//   state = {
//     // posts:[]
//     userid:'',
//     title:'',
//     body:''
//   }
// }


  // componentDidMount(){
  //   axios.get('https://jsonplaceholder.typicode.com/posts')
  //   // .then(data => console.log(data))
  //   // .then(res => console.log(res.data))
  //   .then(res => this.setState({posts:res.data}))
  //   // .catch(err => console.log(err))
  //   .catch(err => console.log("SomeThing Went Worn"))
  // }

  // render() {
  //   return (
  //     <div>
  //       {this.state.posts.length ? this.state.posts.map(post => {
  //         return <div>{post.title}</div>
  //       }) : ""}
  //     </div>
  //   )
  // }

//   changeData = (e) => {
//     this.setState({
//       [e.target.name]:e.target.value
//     })
//   }

//   submitData = (e) => {
//     e.preventDefault();
//     console.log(this.state)
//     axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
//     .then(res =>console.log(res))
//   }

//   render() {
//     return (
//       <form onSubmit={this.submitData}>
//         <input name="userid" type="text" onChange={this.changeData}/>
//         <input name="title" type="text" onChange={this.changeData}/>
//         <input name="body" type="text" onChange={this.changeData}/>
//         <input type="submit"/>
//       </form>
//     )
//   }

// }


//***************** Hooks  ****************//
// class App extends Component {
//   state = {}
  
//   render() {
//     return (
//       <div>
//           <TestCompHooks x="value" y="valueY"/>
//       </div>
//     )
//   }
// }
// export default App;


/**************************************/
import React, {Component } from "react";
import CompA from "./componentFunction/CompA";

class App extends Component {
  state = {}
  
  render() {
    return (
      <div>
        <CompA/>
      </div>
    )
  }
}
export default App;