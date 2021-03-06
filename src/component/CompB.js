import React, { Component } from 'react'
import withComp from './WithComp'

class CompB extends Component {
    render() {
        const{name, updateNameState} = this.props;
        return (
            <div>
                {name}
                <button onClick={updateNameState}>Update Name</button>
            </div>
        )
    }
}
export default withComp (CompB)
