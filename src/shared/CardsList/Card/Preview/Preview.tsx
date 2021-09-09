import React from "react";
import styles from './preview.less';

export function Preview() {
  return (
    <div className={styles.preview}>
      <img className={styles.previewImg} src="https://cdn.dribbble.com/users/486985/screenshots/11240082/p04_1x.png" alt="preview" />
    </div>
  );
}