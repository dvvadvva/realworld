import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListArticles from './ListArticles';
import { loadArticles, followArticle, test } from '../../action/ArticlesAction'
import s from './ListArticlesContainer.module.css'
import TagsContainer from '../popularTags/popularTagContainer';
import PagingContainer from '../paging/pagingContainer';
import { getOneArticle } from '../../action/oneArticleAction'
import { getArticles } from '../../action/selectors';

class ListArticlesContainerAPI extends Component {
    componentDidMount() {
        this.props.loadArticles();
    }

    render() {
        let {getOneArticle, articles, test, followArticle} = this.props;
        return (
            <div className={s.grid}>
                <div />
                <PagingContainer />
                <div />
                <div />
                <ListArticles articles={articles} test={test} getOneArticle={getOneArticle} followArticle={followArticle}/>
                <TagsContainer />                
            </div>
        )
    }
}

const mapStateToProps = (state) => { 
    return ({ articles: getArticles(state) }) }

let ListArticlesContainer = connect(mapStateToProps, { loadArticles, test, getOneArticle, followArticle })(ListArticlesContainerAPI)

export default ListArticlesContainer