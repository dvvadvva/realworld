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
        this.onSelectNextPage = this.onSelectNextPage.bind(this);
        this.onSelectNextPartPage = this.onSelectNextPartPage.bind(this);
        this.onSelectPrevPage = this.onSelectPrevPage.bind(this);
        this.onSelectPrevPartPage = this.onSelectPrevPartPage.bind(this);
    }

    onSelectPage(numberPage) {
        this.props.setActivePage(numberPage);
        this.props.loadArticles();
    }
    
    onSelectNextPage(numberPage) {
        this.props.gotoNextPage();
        this.props.loadArticles();
    }
    
    onSelectNextPartPage() {
        this.props.gotoNextPartPage();
        this.props.loadArticles();
    }

    onSelectPrevPage(numberPage) {
        this.props.gotoPrevPage();
        this.props.loadArticles();
    }
    
    onSelectPrevPartPage() {
        this.props.gotoPrevPartPage();
        this.props.loadArticles();
    }

    render() {
        let { b, e, currentPage } = this.props;
        const arrayPage = [];
        for (let i = b; i <= e; i++) { arrayPage.push(i) }
        return (
            <div className={s.cell}>
                <span className={s.tag_btn} onClick={this.onSelectPrevPartPage}>&lt;&lt;</span>
                <span className={s.tag} onClick={this.onSelectPrevPage}>&lt;</span>
                {arrayPage.map((e) => (<PageLink key={e} e={e} activePage={e === currentPage} onSelectPage={this.onSelectPage} />))}
                <span className={s.tag} onClick={this.onSelectNextPage}>&gt;</span>
                <span className={s.tag_btn} onClick={this.onSelectNextPartPage}> &gt;&gt;</span>
            </div>
        )
    }
}

export default Paging