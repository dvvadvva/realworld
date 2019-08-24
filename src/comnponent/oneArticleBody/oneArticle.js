import React from 'react';

const OneArticle = (props) =>{
    let {body, title}=props.article
    return(
        <div>
        <div>{title}</div>
        <textarea value={body} readOnly></textarea>
        </div>
    )
}

export default OneArticle