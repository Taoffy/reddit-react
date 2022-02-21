import React from "react";

import './main.global.less';
import { CardsList } from "./shared/CardsList/CardsList";
import { Content } from "./shared/Content/Content";
import { Header } from "./shared/Header/Header";
import { Layout } from "./shared/Layout/Layout";
import useToken from "./hooks/useToken";
import tokenContext from "./shared/context/tokenContext";
import { UserContextProvider } from "./shared/context/userContext";
import { PostsContextProvider } from "./shared/context/postsContext";


function AppComponent() {

    const [token] = useToken();

    return (
        <div>
            <tokenContext.Provider value={token}>
                <UserContextProvider>
                    <Layout>
                        <Header />
                        <Content>
                            <PostsContextProvider>   
                                <CardsList />
                            </PostsContextProvider>
                        </Content>
                    </Layout>
                </UserContextProvider>
            </tokenContext.Provider>
        </div>
    );
};

export const App = () => <AppComponent />