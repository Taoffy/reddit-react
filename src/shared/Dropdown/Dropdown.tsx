import React, { useState, useEffect } from "react";
import styles from "./dropdown.module.less";

interface IDropdownProps {
    button: React.ReactNode;
    children: React.ReactNode;
    isOpen?: boolean;
    onOpen?: () => void;
    onClose?: () => void;
}

const NOOP = () => {};
 
const Dropdown = ({ button, children, isOpen, onOpen = NOOP, onClose = NOOP }: IDropdownProps) => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(isOpen);

    const handleOpen = () => {
        if(isOpen === undefined) {
            setIsDropdownOpen(!isDropdownOpen);
        }
    };

    useEffect(() => {
        setIsDropdownOpen(isOpen);
    }, [isOpen]);

    useEffect(() => {
        isDropdownOpen ? onOpen() : onClose();  
    }, [isDropdownOpen]);

    return (
        <div className={styles.container}>
            <div onClick={handleOpen}>
                { button }
            </div>
            { isDropdownOpen &&
                <div className={styles.listContainer}>
                    <div className={styles.list} onClick={() => setIsDropdownOpen(false)}>
                        { children }
                    </div>
                </div>
            }
        </div>
    );
};

export default Dropdown;