import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListArticles from './ListArticles';
import { loadArticles, followArticle, test } from '../../action/ArticlesAction'
import s from './ListArticlesContainer.module.css'
import TagsContainer from '../popularTags/popularTagContainer';
import PagingContainer from '../paging/pagingContainer';

import { getOneArticle } from '../../action/oneArticleAction'

class ListArticlesContainerAPI extends Component {
    componentDidMount() {
        this.props.loadArticles();
    }

    render() {
        let {getOneArticle, articles, test, followArticle} = this.props;
        return (
            <div className={s.grid}>
                <div />
                <ListArticles articles={articles} test={test} getOneArticle={getOneArticle} followArticle={followArticle}/>
                <TagsContainer />
                <div />
                <PagingContainer />
                <div />
            </div>
        )
    }
}

const mapStateToProps = (state) => { 
    return ({ articles: state.articlesData.articles }) }

let ListArticlesContainer = connect(mapStateToProps, { loadArticles, test, getOneArticle, followArticle })(ListArticlesContainerAPI)

export default ListArticlesContainer