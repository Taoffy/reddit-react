import React from 'react';
import styles from './card.less';

export function Card() {
  return(
    <li className={styles.card}>
      <div className={styles.textContent}>
        <div className={styles.metaData}>
          <div className={styles.userLink}>
            <img className={styles.avatar} src="https://cdn.dribbble.com/users/42578/avatars/mini/d0ac345ce3f79bf2c2e7e64527bbf342.jpg?1530900788" alt="avatar" />
            <a href="#user-url" className={styles.username}>Дмитрий Гришин</a>
          </div>
          <span className={styles.createdAt}>4 часа назад</span>
        </div>
        <h2 className={styles.title}>
          <a href="#post-url" className={styles.postLink}>Следует отметить, что новая модель организационной деятельностиСледует отметить, что новая модель организационной деятельности</a>
        </h2>
      </div>
      <div className={styles.preview}>
        <img className={styles.previewImg} src="https://cdn.dribbble.com/users/486985/screenshots/11240082/p04_1x.png" alt="preview" />
      </div>
      <div className={styles.menu}>
        <button className={styles.menuButton}>
          <svg width="5" height="20" viewBox="0 0 5 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="2.5" cy="2.5" r="2.5" fill="#D9D9D9"/>
            <circle cx="2.5" cy="10" r="2.5" fill="#D9D9D9"/>
            <circle cx="2.5" cy="17.5" r="2.5" fill="#D9D9D9"/>
          </svg>
        </button>
      </div>
      <div className={styles.controls}>
        <div className={styles.votesCounter}>
          <button className={styles.up}>
            <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.5 0L0 10H19L9.5 0Z" fill="#D9D9D9"/>
            </svg>
          </button>
          <span className={styles.votesValue}>132</span>
          <button className={styles.down}>
            <svg className={styles.down} width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.5 0L0 10H19L9.5 0Z" fill="#D9D9D9"/>
            </svg>
          </button>
        </div>
        <button className={styles.commentsButton}>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.75 0H1.41667C0.6375 0 0 0.6375 0 1.41667V9.91667C0 10.6958 0.6375 11.3333 1.41667 11.3333H11.3333L14.1667 14.1667V1.41667C14.1667 0.6375 13.5292 0 12.75 0ZM11.3333 8.5H2.83333V7.08333H11.3333V8.5ZM11.3333 6.375H2.83333V4.95833H11.3333V6.375ZM11.3333 4.25H2.83333V2.83333H11.3333V4.25Z" fill="#C4C4C4"/>
          </svg>
          <span className={styles.commentsNumber}>27</span>
        </button>
      </div>
    </li>
  );
}