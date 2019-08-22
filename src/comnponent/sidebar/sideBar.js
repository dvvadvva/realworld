import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import s from './sideBar.module.css'

class SideBar extends Component {
    render() {
        let { isAuth, payLoad } = this.props;
        return (
            <div className={s.sidebar}>
                <div></div>
                <div className={s.sidebarHeader}>Моя версия RealWorld</div>
                <NavLink className={s.home} to='/'>Home</NavLink>
                <NavLink className={s.login} to='/login'>{isAuth ? payLoad.username : 'login'}</NavLink>
                <button className={s.logout} onClick={this.props.logout}>logout</button>
            </div >
        )
    }
}

export default SideBar