import React from "react";

import styles from "./textContent.module.less";
import postTimeDetermine from "../../../../utils/js/postTimeDetermine";

interface ITextContentProps {
    author: string;
    title: string;
    created: number;
}

export function TextContent({ author, title, created }: ITextContentProps) {

    const createdAt = postTimeDetermine(created);

    return (
        <div className={styles.textContent}>
            <div className={styles.metaData}>
                <div className={styles.userLink}>
                    <img className={styles.avatar} src="https://cdn.dribbble.com/users/42578/avatars/mini/d0ac345ce3f79bf2c2e7e64527bbf342.jpg?1530900788" alt="avatar" />
                    <a href={`https://www.reddit.com/user/${author}/`} target={'_blank'} className={styles.username}>{author}</a>
                </div>
                <span className={styles.createdAt}>
                    <span className={styles.publishedLabel}>Posted </span>
                    {createdAt}
                </span>
            </div>
            <h2 className={styles.title}>
                <a href="#post-url" className={styles.postLink}>{title}</a>
            </h2>
        </div>
    );
};