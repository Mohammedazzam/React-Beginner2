import React, { Component } from 'react'

class Home extends Component {
    constructor(props) {
        super(props);
        console.log("constructor")
        this.state = {
            name: 'Home'
        }
    }
    updateDate = () => {
        this.setState({
            name: "Home Component"
        })
    }
    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps")
        return null;
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate")
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate")
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate")
    }


    componentWillUnmount() {
        console.log("componentWillUnmount")
    }


    componentDidMount() {
        console.log("componentDidMount")
    }
    render() {
        console.log("render")
        return (
            <div>
                Home
                <button onClick={this.updateDate}>Update</button>
            </div>
        )
    }
}
export default Home