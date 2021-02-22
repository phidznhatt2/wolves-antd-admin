import React from "react";
import Header from "../../components/Layout/Header";
import Sider from "../../components/Layout/Sider";
import { Layout, BackTop } from "antd";
import styles from "./index.module.scss";
import { Route } from "react-router-dom";
import {
  Chart,
  Dashboard,
  Editor,
  Post,
  Request,
  User,
  Category,
} from "layouts";

const { Content, Footer } = Layout;

interface Location {
  pathname: string;
}
interface IPrimaryLayoutProps {
  location: Location;
}

const PrimaryLayout: React.FunctionComponent<IPrimaryLayoutProps> = ({
  children,
  location,
  ...rest
}) => {
  const [collapsed, setCollapsed] = React.useState(false);

  const toggle = () => {
    setCollapsed((pre) => !pre);
  };

  return (
    <React.Fragment>
      <Layout>
        <Sider collapsed={collapsed} location={location.pathname} />
        <div
          className={styles.container}
          style={{ paddingTop: 72 }}
          id="primaryLayout"
        >
          <Header collapsed={collapsed} toggle={toggle} {...rest} />
          <Content
            className={styles.content}
            style={{ margin: "24px 16px 0", overflow: "initial" }}
          >
            <Route exact path={["", "/dashboard"]} component={Dashboard} />
            <Route path="/editor" component={Editor} />
            <Route path="/category" component={Category} />
            <Route path="/request" component={Request} />
            <Route path="/user" component={User} />
            <Route path="/chart" component={Chart} />
          </Content>
          {/* <BackTop target={() => document.querySelector("#primaryLayout")} />  */}
          <Footer style={{ textAlign: "center" }}>Ant Design ©2018</Footer>
        </div>
      </Layout>
    </React.Fragment>
  );
};

export default PrimaryLayout;
