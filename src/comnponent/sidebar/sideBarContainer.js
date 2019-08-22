import React, { Component } from 'react'
import { reqAuth } from '../../action/loginAction'
import { connect } from 'react-redux';
import SideBar from './sideBar';

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
        return <SideBar payLoad={payLoad} isAuth={isAuth} logout={this.logout}/>
    }
}
const mapStateToProps = (state) => ({isAuth: state.authData.isAuth,
    payLoad: state.authData.payLoad}) 

let SideBarContainer = connect(mapStateToProps, {reqAuth})(SideBarAPI)

export default SideBarContainer;