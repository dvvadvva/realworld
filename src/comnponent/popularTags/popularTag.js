import React, { Component } from 'react';
import s from './popularTag.module.css'
import { NavLink } from 'react-router-dom'


const Tags = (props) => {
    return (
        <span className={s.span2}>
            <span className={s.tag}>
                <NavLink className={s.a} to={`./tag=${props.e}`}>
                    {props.e}
                </NavLink>
            </span>
        </span>
    )
}

class PopularTags extends Component {
    render() {
        return (
            <div >
                <div>Популярные тэги</div>
                {this.props.tags.map((e) => (<Tags key={e} e={e} />))}
            </div>
        )
    }
}

export default PopularTags