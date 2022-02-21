import React from "react";
import styles from './preview.module.less';

export function Preview({ preview }: { preview?: string; }) {
    return (
        <div className={styles.preview}>
            {
                preview 
                ? <img className={styles.previewImg} src={preview} alt="preview" />
                : <img className={styles.previewImg} src="https://cdn.dribbble.com/users/486985/screenshots/11240082/p04_1x.png" alt="preview" />
            }
        </div>
    );
};