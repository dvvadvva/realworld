import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paging from './paging';
import { setActivePage, loadArticles } from '../../action/ArticlesAction'

class PagingContainerAPI extends Component {

    render() {
        let {currentPage, loadArticles}= this.props;
        return (
            <Paging b={1} e={15} setActivePage={this.props.setActivePage} test={this.props.test} currentPage={currentPage} loadArticles={loadArticles}/>
        )
    }
}

const mapStateToProps = (state) => {
    //console.log(state);
    return (
        {
            limit: state.articlesData.limit,
            offset: state.articlesData.offset,
            allCount: state.articlesData.allCount,
            currentPage: state.articlesData.currentPage
        })
}

let PagingContainer = connect(mapStateToProps, { setActivePage, loadArticles })(PagingContainerAPI)

export default PagingContainer