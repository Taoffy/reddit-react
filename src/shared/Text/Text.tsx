import React from "react";

import styles from "./text.module.less";

interface ITextProps {
    size?: number;
    mobileSize?: number;
    color?: string;
    children: string;
}

const Text = ({ size, mobileSize, color, children }: ITextProps) => {
    return (
        <span className={`${styles.text} ${size && styles[`text__s${size}`]} ${mobileSize && styles[`text__m${mobileSize}`]} ${color && styles[`text__${color}`]} `}>{children}</span>
    );
};

export default Text;