import React, { Component ,Fragment } from 'react'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Home'
        }
    }
    render() {
        return (
            <Fragment>
                <li>Home</li>
                <li>About</li>
            </Fragment>
        )
    }
}
export default Home