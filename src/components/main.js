import React, { Component } from 'react'
import logo from '../assets/sun.png'

class Main extends Component {

    render() {
        return (
            <nav class="navbar navbar-light bg-light">
                <a class="navbar-brand" href="#"> <img src={logo} width="30" height="30" class="d-inline-block align-top" /> <span className='font-weight-bold'>Weather</span> </a>
            </nav>
        )
    }

}

export default Main