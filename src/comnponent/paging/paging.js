import React, { Component } from 'react';
import s from './paging.module.css';

const PageLink = (props) => {
    return (
        <span className={s.span2} onClick={() => { props.onSelectPage(props.e) }}>
            <span className={props.activePage ? undefined : s.tag} >
                {props.e}
            </span>
        </span>
    )
}

class Paging extends Component {
    constructor(props) {
        super(props);
        this.onSelectPage = this.onSelectPage.bind(this);
    }

    onSelectPage(numberPage) {
        this.props.setActivePage(numberPage);
        this.props.loadArticles();
    }

    render() {
        let { b, e, currentPage } = this.props;
        const arrayPage = [];
        for (let i = b; i <= e; i++) { arrayPage.push(i) }
        return (
            <div className={s.cell}>
                {arrayPage.map((e) => (<PageLink key={e} e={e} activePage={e === currentPage} onSelectPage={this.onSelectPage} />))}
            </div>
        )
    }
}

export default Paging