import React from "react";

import styles from "./voteIcon.module.less";

interface IVoteIconProps {
    direction: "up" | "down";
};

export const VoteIcon = ({ direction }: IVoteIconProps) => {
    return (
        <svg className={`${direction === "up" ? "" : `${styles.down}`}`} width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.5 0L0 10H19L9.5 0Z" fill="#D9D9D9"/>
        </svg>
    );
};