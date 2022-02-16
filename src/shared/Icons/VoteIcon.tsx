import React from "react";

import styles from "./voteIcon.module.less";

interface IVoteIconProps {
    direction: "up" | "down";
    size: number;
};

export const VoteIcon = ({ direction, size }: IVoteIconProps) => {
    return (
        <svg className={`${direction === "up" ? "" : `${styles.down}`}`} width={size} height="10" viewBox={`0 0 ${size} 10`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.5 0L0 10H19L9.5 0Z" fill="#D9D9D9"/>
        </svg>
    );
};