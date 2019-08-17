import React, { Component } from 'react'
import LoginForm from './loginForm'

class Login extends Component {
    constructor(props){
        super(props)
        this.onSubmit   = this.onSubmit.bind(this);
    }

    onSubmit(value){
        this.props.loginAction({username: value.login, password: value.password});
    }

    render() {
        return (
            <LoginForm onSubmit={this.onSubmit} />
        )
    }
}

export default Login;