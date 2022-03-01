import React, { Component } from 'react'

class Header extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
            {this.props.title} <br/>
            {this.props.newData}
            </div>
        )
    }
}
export default Header