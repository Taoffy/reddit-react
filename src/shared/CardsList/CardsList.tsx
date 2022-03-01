import React, { useContext } from 'react';
import { postsContext } from '../context/postsContext';

import { Card } from './Card/Card';
import styles from './cardslist.module.less';

export function CardsList() {

    const posts = useContext(postsContext);

    return (
        <ul className={styles.cardslist}>
            {
                posts.map(post => (
                    <Card
                        author={post.data.author}
                        title={post.data.title}
                        created={post.data.created}
                        id={post.data.id}
                        key={post.data.id}
                        commentsNum={post.data.num_comments}
                        preview={post.data.thumbnail === 'self' ? post.data.url : post.data.thumbnail}
                        score={post.data.score}
                    />
                ))
            }
        </ul>
    );
};