import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { reqAuth } from '../../action/loginAction'
import { connect } from 'react-redux';

class SideBarAPI extends Component {
    constructor(props){
        super(props);
        this.logout= this.logout.bind(this);
    }

    componentDidMount() {
        this.props.reqAuth();
    }
    
    logout(){
        localStorage.removeItem('jwt');
        this.props.reqAuth(false, {username: '', email: ''})
    }

    render() {
        let {isAuth, payLoad}    = this.props;
        return (
            <div>
                <NavLink to='/'>home</NavLink>
                <NavLink to='/login'>{isAuth ? payLoad.username : 'login'}</NavLink>
                <button onClick={this.logout}>logout</button>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({isAuth: state.authData.isAuth,
    payLoad: state.authData.payLoad}) 

let SideBar = connect(mapStateToProps, {reqAuth})(SideBarAPI)

export default SideBar