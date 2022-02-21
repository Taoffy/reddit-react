import React from "react";
import usePostsData from "../../hooks/usePostsData";

type TOtherPostData = string | number | Array<string> | Record<string, unknown> | null | undefined;

export interface IPost {
    author: string;
    created: number;
    id: string;
    num_comments: number;
    url?: string;
    thumbnail: string;
    score: number;
    title: string;
    [N: string]: TOtherPostData;
}

export interface IPostsContextData {
    kind: string;
    data: IPost;
}


export const postsContext = React.createContext<IPostsContextData[]>([]);

export function PostsContextProvider({ children }: { children: React.ReactNode }) {

    const [data] = usePostsData();

    return (
        <postsContext.Provider value={data}>
            { children }
        </postsContext.Provider>
    );
};