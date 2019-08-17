import React, { Component } from 'react'
import { connect } from 'react-redux'
import Login from './login'
import {loginAction} from '../../action/loginAction'


class LoginContainer extends Component {    
    constructor(props){
        super(props)
        this.loginAction = this.props.loginAction.bind(this);
    }
    
    loginAction(){}

    render() {
       return <Login loginAction={this.loginAction}/>
    }
}

let mapStateToProp = state => ({ authData: state.authData })

export default LoginContainer = connect(mapStateToProp, {loginAction})(LoginContainer);