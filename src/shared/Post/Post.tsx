import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

interface IPostProps {
    setIsOpen: (IsOpen: boolean) => void;
}

const Post = ({ setIsOpen }: IPostProps) => {

    const postRef = useRef<HTMLDivElement>(null);

    const handleClick = (event: MouseEvent) => {
        if(event.target instanceof Node && postRef.current &&  !postRef.current?.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClick);

        return () => document.removeEventListener('click', handleClick);
    }, []);

    return ReactDOM.createPortal((
        <div ref={postRef}></div>
    ), document.querySelector('#modal-root')!);
};

export default Post;