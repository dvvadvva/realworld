import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class LoginForm extends Component {
    render() {        
        const {handleSubmit}=this.props;
        return (            
            <form onSubmit={handleSubmit}>
                <div>
                    <span>Login<Field name='login' component='input' /></span>
                </div>
                <div>
                    <span>password<Field name='password' component='input' type='password' /></span>
                </div>
                <button>LOGIN</button>
            </form>
        )
    }
}

LoginForm = reduxForm({ form: 'login' })(LoginForm)

export default LoginForm;