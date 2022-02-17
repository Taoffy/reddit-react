import React from "react";

import styles from "./userBlock.module.less";
import { Text } from "../../../Text/Text";
import { EColors, EIcons } from "../../../../utils/react/enums";
import Icon from "../../../Icons";

interface IUserBlock {
    avatarSrc?: string;
    username?: string; 
}

const CLIENT_ID = process.env.CLIENT_ID;

const UserBlock = ({ avatarSrc, username }: IUserBlock) => {
    return (
        <a href={`https://www.reddit.com/api/v1/authorize?client_id=${CLIENT_ID}&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read identity submit`} className={styles.userBox}>
            <div className={styles.avatarBox}>
                {
                    avatarSrc 
                    ? <img className={styles.avatarImg} src={avatarSrc} alt={"user avatar"}  />
                    : <Icon name={EIcons.anon} size={50} />
                }
            </div>

            <div className={styles.username}>
                <Text size={20} color={username ? EColors.black : EColors.grey99} style={{ "paddingLeft": "10px" }}>{username || 'Anonymous'}</Text>
            </div>
        </a>
    );
};

export default UserBlock;