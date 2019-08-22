import React, { Component } from 'react';
import Article from '../Article/Article';

class ListArticles extends Component {
    render() {
        return (
            <div>
                {this.props.articles.map((e)=> (<Article key={e.slug} article={e} test={this.props.test}/>))}
            </div>
        )
    }
}

export default ListArticles