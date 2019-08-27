import React, { Component } from 'react';
import { connect } from 'react-redux';
import OneArticle from './oneArticle';

class OneArticleContainerAPI extends Component {
    render() {
        let {article}=this.props;
        return (
            <div>
                <OneArticle article={article}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => { return ({ article: state.article }) }

let OneArticleContainer = connect(mapStateToProps, { })(OneArticleContainerAPI)

export default OneArticleContainer