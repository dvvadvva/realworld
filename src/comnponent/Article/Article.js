import React, { Component } from 'react';
import s from './article.module.css'
import { NavLink } from 'react-router-dom';


class Article extends Component {
    
    onPressFollowButton(title){
        this.props.test();
    }

    onOpenArticleBody(slug){
        //console.log(slug);
        this.props.getOneArticle(slug);
    }

    render() {
        let { title, author, createdAt, description,favoritesCount, slug } = this.props.article;
        //console.log(this.props.article);
        return (
            <div className={s.grid}>
                <div></div>
                <div>
                    <img className={s.img} src={author.image} alt='avatar' />
                    <span className={s.username}>{author.username}</span>
                    <div className={s.timeCreater}>{createdAt}</div>
                    <div className={s.title}>
                        {title}
                    </div>
                    <div className={s.descr}>
                        {description}
                    </div>
                    <NavLink to='/article' onClick={()=>{this.onOpenArticleBody(slug)}}>перейти к статье</NavLink>
                </div>
                <div className={s.follow_btn}>
                    <button onClick={()=>{this.onPressFollowButton(title) }}>{favoritesCount}</button>
                </div>
            </div>
        )
    }
}

export default Article