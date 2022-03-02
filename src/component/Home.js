import React, { Component } from 'react'

class Home extends Component {
    constructor(props){
        super(props);
        console.log("constructor")
        this.state = {
        
        }
    }
    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps")
        return null;
    }
    componentDidMount() {
        console.log("componentDidMount")
    }
    render() {
        console.log("render")
        return (
            <div>Home</div>
        )
    }
}
export default Home