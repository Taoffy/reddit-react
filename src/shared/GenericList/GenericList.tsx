import React from "react";

import styles from "./genericList.module.less";

interface IItem {
    id: string;
    img?: React.ReactNode;
    text: string;
    onClick?: (id: string) => void;
    className: string;
    As?: 'a' | 'li' | 'button' | 'div';
    href?: string;
}

interface IGenericProps {
    list: IItem[];
}

const NOOP = (id: string) => {};

function GenericList({ list }: IGenericProps) {
    return (
        <>
            {
                list.map(({As = 'div', text, onClick = NOOP, className, id, href, img}) => (
                    <As
                        className={className}
                        onClick={() => onClick(id)}
                        key={id}
                        href={href}
                    >
                        {img}
                        <span className={styles.text}>{text}</span>
                    </As>
                ))
            }
        </>
    );
};

export default GenericList;