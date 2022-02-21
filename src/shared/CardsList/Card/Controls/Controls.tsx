import React from "react";

import Icon from "../../../Icons";
import styles from './controls.module.less';
import { EIcons } from "../../../../utils/react/enums";

interface IControlsProps {
    score: number;
    commentsNum: number;
}

export function Controls({ score, commentsNum }: IControlsProps) {
    return (
        <div className={styles.controls}>
            <div className={styles.votesCounter}>
                <button className={styles.up}>
                    <Icon name={EIcons.vote} size={19} direction={"up"} />
                </button>
                <span className={styles.votesValue}>{score}</span>
                <button className={styles.down}>
                    <Icon name={EIcons.vote} size={19} direction={"down"} />
                </button>
            </div>
            <button className={styles.commentsButton}>
                <Icon name={EIcons.comments} />
                <span className={styles.commentsNumber}>{commentsNum}</span>
            </button>

            <div className={styles.actions}>
                <button className={styles.shareButton}>
                    <Icon name={EIcons.share} />
                </button>

              <button className={styles.saveButton}>
                  <Icon name={EIcons.save} />
              </button>
            </div>
        </div>
    );
};