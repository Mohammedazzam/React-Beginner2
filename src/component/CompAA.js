import React, { Component } from 'react'
import CompBB from './CompBB'

export default class CompAA extends Component {
    render() {
        return (
            <div>
                Comp AA
                <CompBB name= {this.props.name} />
            </div>
        )
    }
}
