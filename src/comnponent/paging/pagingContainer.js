import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paging from './paging';
import { setActivePage, loadArticles, gotoNextPage, gotoNextPartPage, gotoPrevPage, gotoPrevPartPage } from '../../action/ArticlesAction'

class PagingContainerAPI extends Component {

    render() {
        let {currentPage, sizePageList, firstPageInList, allPageCount}= this.props;
        let {loadArticles, setActivePage, gotoNextPage, gotoNextPartPage, gotoPrevPage, gotoPrevPartPage}= this.props;
        let numEndPage  = (firstPageInList+sizePageList-1>allPageCount ? allPageCount : firstPageInList+sizePageList-1)
        return (
            <Paging b={firstPageInList} e={numEndPage} setActivePage={setActivePage} 
                gotoNextPage ={gotoNextPage}
                gotoNextPartPage={gotoNextPartPage}
                gotoPrevPage ={gotoPrevPage}
                gotoPrevPartPage={gotoPrevPartPage}
                currentPage={currentPage} loadArticles={loadArticles}/>
        )
    }
}

const mapStateToProps = (state) => {
    return (
        {
            limit: state.articlesData.limit,
            sizePageList: state.articlesData.sizePageList,
            firstPageInList: state.articlesData.firstPageInList,
            offset: state.articlesData.offset,
            allCount: state.articlesData.allCount,
            currentPage: state.articlesData.currentPage,
            allPageCount: state.articlesData.allPageCount
        })
}

let PagingContainer = connect(mapStateToProps, { setActivePage, loadArticles,
                 gotoNextPage, gotoNextPartPage,
                 gotoPrevPage, gotoPrevPartPage})(PagingContainerAPI)

export default PagingContainer