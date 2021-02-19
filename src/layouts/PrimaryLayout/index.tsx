import React from "react";
import Header from "../../components/Layout/Header";
import Sider from "../../components/Layout/Sider";
import { Layout, BackTop } from "antd";
import styles from "./index.module.scss";

const { Content, Footer } = Layout;

interface IPrimaryLayoutProps {}

const PrimaryLayout: React.FunctionComponent<IPrimaryLayoutProps> = ({
  children,
}) => {
  const [collapsed, setCollapsed] = React.useState(false);

  const toggle = () => {
    setCollapsed((pre) => !pre);
  };

  return (
    <React.Fragment>
      <Layout>
        <Sider collapsed={collapsed} />
        <div
          className={styles.container}
          style={{ paddingTop: 72 }}
          id="primaryLayout"
        >
          <Header collapsed={collapsed} toggle={toggle} />
          <Content
            className={styles.content}
            style={{ margin: "24px 16px 0", overflow: "initial" }}
          >
            {children}
          </Content>
          {/* <BackTop target={() => document.querySelector("#primaryLayout")} /> */}
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </div>
      </Layout>
    </React.Fragment>
  );
};

export default PrimaryLayout;
