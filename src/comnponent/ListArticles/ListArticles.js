import React, { Component } from 'react';
import Article from '../Article/Article';

class ListArticles extends Component {
    render() {
        let {getOneArticle, test, articles, followArticle} = this.props
        return (
            <div>
                {articles.map((e)=> (<Article key={e.slug} article={e} test={test} getOneArticle={getOneArticle} followArticle={followArticle}/>))}
            </div>
        )
    }
}

export default ListArticles