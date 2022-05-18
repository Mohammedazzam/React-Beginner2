import React, {Component , createRef}  from "react";
//     class Home extends PureComponent {
//         render() {
//         console.log("Home Comp")
//         return (
//             <div>
//                 Home Comp
//             </div>
//         )
//     }
// }
// export default Home

//لعمل فوكس مباشر على الانبوت أول ما تحمل الصفحة
// class Home extends Component {
//     constructor(props){
//         super(props);
//         this.inputRef = createRef()
//     }
//     componentDidMount(){
//         // console.log(this.inputRef)
//         this.inputRef.current.focus()
//     }
//     render (){
//         return (
//             <div>
//                 <input type="text" ref={this.inputRef}/>
//             </div>
//         )
//     }
// }
// export default Home


//callBack ref طريقة ال 
class Home extends Component {
    constructor(props){
        super(props);
        this.callbackRef = null
        this.callbackRefFun = (ele) => {
            this.callbackRef = ele;
        }
    }
    componentDidMount(){
        if(this.callbackRef) {
            this.callbackRef.focus()
        }
    }
    render (){
        return (
            <div>
                <input type="text" ref={this.callbackRefFun}/>
            </div>
        )
    }
}
export default Home