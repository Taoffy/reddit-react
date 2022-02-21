import React from 'react';
import styles from './card.module.less';
import { Controls } from './Controls/Controls';
import { Menu } from './Menu/Menu';
import { Preview } from './Preview/Preview';
import { TextContent } from './TextContent/TextContent';

interface ICardProps {
    author: string;
    title: string;
    created: number;
    id: string;
    commentsNum: number;
    preview?: string;
    score: number;
}

export function Card({ author, title, created, id, commentsNum, preview, score }: ICardProps) {

    const regexMatch = preview?.match(/\.(gif|jpeg|jpg|png)$/ig);

    return (
        <li className={styles.card}>
            <TextContent
                author={author}
                title={title}
                created={created}
            />
            <Preview
                preview={regexMatch ? preview : ''} 
            />
            <Menu />
            <Controls
                score={score}
                commentsNum={commentsNum}
            />
        </li>
    );
};