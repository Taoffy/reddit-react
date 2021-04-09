import React from "react";
import './main.global.less';
import { CardsList } from "./shared/CardsList/CardsList";
import { Content } from "./shared/Content/Content";
import { Header } from "./shared/Header/Header";
import { Layout } from "./shared/Layout/Layout";


export function App() {
  return (
    <div>
      <Layout>
        <Header />
        <Content>
            <CardsList />
        </Content>
      </Layout>
    </div>
  )
}