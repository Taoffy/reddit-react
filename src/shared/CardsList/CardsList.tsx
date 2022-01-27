import React from 'react';
import { Card } from './Card/Card';
import styles from './cardslist.module.less';

export function CardsList() {
    return (
        <ul className={styles.cardslist}>
            <Card />
        </ul>
    );
};