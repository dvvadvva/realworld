import React, { Component } from 'react';
import { connect } from 'react-redux';

class ListArticlesContainerAPI extends Component {
    render() {
        return (
            <div>
                <div>11</div>
                <div>22</div>
                <div>33</div>
            </div>
        )
    }
}
const mapStateToProps = (state) => { return ({ Articels: state.Articels }) }

let ListArticlesContainer = connect(mapStateToProps, {})(ListArticlesContainerAPI)

export default ListArticlesContainer