import React, { Component } from 'react'
import withComp from './WithComp'

class CompA extends Component {
    
    render() {
        const{name, updateNameState} = this.props;
        console.log(this.props)
        return (
            <div>
                {this.props.test}
                {name}
                <button onClick={updateNameState}>Update Name</button>
            </div>
        )
    }
}
export default withComp (CompA)