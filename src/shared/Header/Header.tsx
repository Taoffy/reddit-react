import React from "react";

import styles from "./header.module.less";
import { SearchBlock } from "./SearchBlock/SearchBlock";
import { SortBlock } from "./SortBlock/SortBlock";
import { ThreadTittle } from "./ThreadTittle/ThreadTittle";

export function Header() {

    return (
        <header className={styles.header}>
            <SearchBlock />
            <ThreadTittle />
            <SortBlock />
        </header>
    );
}