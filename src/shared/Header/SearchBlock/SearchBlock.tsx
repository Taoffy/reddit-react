import React from 'react';
import styles from './searchBlock.module.less';

import UserBlock from './UserBlock/UserBlock';

export function SearchBlock() {
  return(
    <div className={styles.searchBlock}>
        <UserBlock />
    </div>
  );
};