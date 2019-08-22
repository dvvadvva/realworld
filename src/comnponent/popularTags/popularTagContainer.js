import React, { Component } from 'react';
import { connect } from 'react-redux';
import PopularTags from './popularTag';
import { loadTags } from '../../action/tagsAction'

class TagsContainerAPI extends Component {
    componentDidMount() {
        this.props.loadTags();
    }

    render() { return <PopularTags tags={this.props.tags}/> }
}

const mapStateToProps = (state) => { return ({ tags: state.tags.listTags }) }

let TagsContainer = connect(mapStateToProps, {loadTags})(TagsContainerAPI)

export default TagsContainer