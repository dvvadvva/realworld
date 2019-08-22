import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListArticles from './ListArticles';
import { loadArticles, test } from '../../action/ArticlesAction'
import s from './ListArticlesContainer.module.css'
import TagsContainer from '../popularTags/popularTagContainer';
import PagingContainer from '../paging/pagingContainer';

class ListArticlesContainerAPI extends Component {
    componentDidMount() {
        this.props.loadArticles();
    }

    render() {
        return (
            <div className={s.grid}>
                <div />
                <ListArticles articles={this.props.articles} test={this.props.test}/>
                <TagsContainer />
                <div />
                <PagingContainer />
                <div />
            </div>
        )
    }
}

const mapStateToProps = (state) => { return ({ articles: state.articlesData.articles }) }

let ListArticlesContainer = connect(mapStateToProps, { loadArticles, test })(ListArticlesContainerAPI)

export default ListArticlesContainer