import React from "react";

import styles from "./actionsDropdown.module.less";
import GenericList from "../../../GenericList/GenericList";
import { CommentsIcon, ShareIcon, BlockIcon, SaveIcon, WarningIcon } from "../../../Icons";
import { generateId } from "../../../../utils/react/generateRandomIndex";
import Text from "../../../Text/Text";

const ACTIONS_LIST = [
    {
        As: "li" as const,
        img: <CommentsIcon />,
        className: styles.item,
        text: 'Комментарии',
        
    },
    {
        As: "li" as const,
        img: <ShareIcon />,
        className: styles.item,
        text: 'Поделиться',
    },
    {
        As: "li" as const,
        img: <BlockIcon />,
        className: styles.item,
        text: 'Скрыть',
    },
    {
        As: "li" as const,
        img: <SaveIcon />,
        className: styles.item,
        text: 'Сохранить',
    },
    {
        As: "li" as const,
        img: <WarningIcon />,
        className: styles.item,
        text: 'Пожаловаться',
    },
].map(generateId);

const ActionsDropdown = () => {
    return (
        <div className={styles.dropdown}>
            <ul className={styles.list}>
                <GenericList list={ACTIONS_LIST} />
            </ul>
            <button type="button" className={styles.closeButton}>
                <Text 
                    children="Закрыть"
                    size={14}
                    mobileSize={12}
                    color={"grey66"}
                />
            </button>
        </div>
    );
};

export default ActionsDropdown;