import React, { Component } from 'react'
import CompCC from './CompCC'

export default class CompBB extends Component {
    render() {
        return (
            <div>
                Comp BB
                <CompCC name={this.props.name}/>
            </div>
        )
    }
}
