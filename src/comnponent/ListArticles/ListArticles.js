import React, { Component } from 'react';
import Article from '../Article/Article';

class ListArticles extends Component {
    render() {
        let {getOneArticle, test, articles} = this.props
        return (
            <div>
                {articles.map((e)=> (<Article key={e.slug} article={e} test={test} getOneArticle={getOneArticle}/>))}
            </div>
        )
    }
}

export default ListArticles