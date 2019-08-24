import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListArticles from './ListArticles';
import { loadArticles, test } from '../../action/ArticlesAction'
import s from './ListArticlesContainer.module.css'
import TagsContainer from '../popularTags/popularTagContainer';
import PagingContainer from '../paging/pagingContainer';

import { getOneArticle } from '../../action/oneArticleAction'

class ListArticlesContainerAPI extends Component {
    componentDidMount() {
        this.props.loadArticles();
    }

    render() {
        let {getOneArticle, articles, test} = this.props;
        return (
            <div className={s.grid}>
                <div />
                <ListArticles articles={articles} test={test} getOneArticle={getOneArticle}/>
                <TagsContainer />
                <div />
                <PagingContainer />
                <div />
            </div>
        )
    }
}

const mapStateToProps = (state) => { return ({ articles: state.articlesData.articles }) }

let ListArticlesContainer = connect(mapStateToProps, { loadArticles, test, getOneArticle })(ListArticlesContainerAPI)

export default ListArticlesContainer