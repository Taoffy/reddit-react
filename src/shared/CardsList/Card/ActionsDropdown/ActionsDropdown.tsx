import React from "react";

import styles from "./actionsDropdown.module.less";
import GenericList from "../../../GenericList/GenericList";
import Icon from "../../../Icons";
import { generateId } from "../../../../utils/react/generateRandomIndex";
import { Text } from "../../../Text/Text";
import { EColors, EIcons } from "../../../../utils/react/enums";

interface IActionsDropdownProps {
    postId: string;
}

const ACTIONS_LIST = [
    {
        As: "li" as const,
        img: <Icon name={EIcons.comments} />,
        className: styles.item,
        text: 'Комментарии',
        
    },
    {
        As: "li" as const,
        img: <Icon name={EIcons.share} />,
        className: styles.item,
        text: 'Поделиться',
    },
    {
        As: "li" as const,
        img: <Icon name={EIcons.block} />,
        className: styles.item,
        text: 'Скрыть',
    },
    {
        As: "li" as const,
        img: <Icon name={EIcons.save} />,
        className: styles.item,
        text: 'Сохранить',
    },
    {
        As: "li" as const,
        img: <Icon name={EIcons.warning} size={16} />,
        className: styles.item,
        text: 'Пожаловаться',
    },
].map(generateId);

const ActionsDropdown = ({ postId }: IActionsDropdownProps) => {
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
                    color={EColors.grey66}
                />
            </button>
        </div>
    );
};

export default ActionsDropdown;