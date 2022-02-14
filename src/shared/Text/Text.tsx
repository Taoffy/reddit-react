import React from "react";
import classNames from "classnames";

import styles from "./text.module.less";
import { EColors } from "../../utils/react/enums";

type TSizes = 28 | 20 | 16 | 14 | 12 | 10;

interface ITextProps {
    As?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div';
    size: TSizes;
    mobileSize?: TSizes;
    tabletSize?: TSizes;
    desktopSize?: TSizes;
    color?: EColors;
    children: React.ReactNode;
}

export const Text = ({ As = 'span', size, mobileSize, tabletSize, desktopSize, color = EColors.black, children }: ITextProps) => {
    const classes = classNames(
        styles[`s${size}`],
        { [styles[`m${mobileSize}`]]: mobileSize },
        { [styles[`m${tabletSize}`]]: tabletSize },
        { [styles[`m${desktopSize}`]]: desktopSize },
        styles[color]
    );

    return (
        <As className={classes}>
            {children}
        </As>
    );
};