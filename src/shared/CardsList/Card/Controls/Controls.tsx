import React from "react";
import { CommentsIcon, SaveIcon, ShareIcon, VoteIcon } from "../../../Icons";
import styles from './controls.module.less';

export function Controls() {
    return (
        <div className={styles.controls}>
            <div className={styles.votesCounter}>
                <button className={styles.up}>
                    <VoteIcon direction={"up"} />
                </button>
                <span className={styles.votesValue}>132</span>
                <button className={styles.down}>
                    <VoteIcon direction={"down"} />
                </button>
            </div>
            <button className={styles.commentsButton}>
                <CommentsIcon />
                <span className={styles.commentsNumber}>27</span>
            </button>

            <div className={styles.actions}>
                <button className={styles.shareButton}>
                    <ShareIcon />
                </button>

              <button className={styles.saveButton}>
                  <SaveIcon />
              </button>
            </div>
        </div>
    );
};