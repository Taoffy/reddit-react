import React from "react";

import styles from './menu.module.less';
import Dropdown from "../../../Dropdown/Dropdown";
import ActionsDropdown from "../ActionsDropdown/ActionsDropdown";
import MenuButton from "./MenuButton/MenuButton";

export function Menu() {
    return (
        <div className={styles.menu}>
            <Dropdown button={<MenuButton />}>
                <ActionsDropdown postId="1234" />
            </Dropdown>
        </div>
    );
};