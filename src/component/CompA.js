import React, { Component } from 'react'
import withComp from './WithComp'

class CompA extends Component {
    
    render() {
        console.log(this.props)
        return (
            <div>
                {this.props.name}
                <button onClick={this.props.updateNameState}>Update Name</button>
            </div>
        )
    }
}
export default withComp (CompA)