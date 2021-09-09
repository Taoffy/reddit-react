import React from "react";
import styles from "./textContent.less";

export function TextContent() {
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <div className={styles.userLink}>
          <img className={styles.avatar} src="https://cdn.dribbble.com/users/42578/avatars/mini/d0ac345ce3f79bf2c2e7e64527bbf342.jpg?1530900788" alt="avatar" />
          <a href="#user-url" className={styles.username}>Дмитрий Гришин</a>
        </div>
        <span className={styles.createdAt}>
          <span className={styles.publishedLabel}>Опубликовано </span>
          4 часа назад
        </span>
      </div>
      <h2 className={styles.title}>
        <a href="#post-url" className={styles.postLink}>Следует отметить, что новая модель организационной деятельностиСледует отметить, что новая модель организационной деятельности</a>
      </h2>
    </div>
  )
};