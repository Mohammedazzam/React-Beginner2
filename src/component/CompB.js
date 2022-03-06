import React, { Component } from 'react'
import withComp from './WithComp'

class CompB extends Component {
    render() {
        return (
            <div>
                {this.props.name}
                <button onClick={this.props.updateNameState}>Update Name</button>
            </div>
        )
    }
}
export default withComp (CompB)
