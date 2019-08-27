import React, { PureComponent } from 'react';
import s from './article.module.css'
import { NavLink } from 'react-router-dom';


class Article extends PureComponent {

    onPressFollowButton(slug) {
        this.props.followArticle(slug);
    }

    onOpenArticleBody(slug) {
        this.props.getOneArticle(slug);
    }

    render() {
        let { title, author, createdAt, description, favoritesCount, slug, favorited } = this.props.article;
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
                    <NavLink to='/article' onClick={() => { this.onOpenArticleBody(slug) }}>перейти к статье</NavLink>
                </div>
                <div className={favorited ? s.followBtnFav : s.followBtnUnfav}
                    onClick={() => { this.onPressFollowButton(slug) }}>
                    <span className={favorited ? s.heart : s.heartfav}><span className={s.followCounter}>{favoritesCount}</span></span>

                    {/*<button onClick={() => { this.onPressFollowButton(title)}}>{favoritesCount} </button> */}
                </div>

            </div>
        )
    }
}

export default Article