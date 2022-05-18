import React, { Component } from 'react'

class Comp extends Component {
    render() {
        return (
            <div>
                {this.props.test()}
            </div>
        )
    }
}
export default Comp