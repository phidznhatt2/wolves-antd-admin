import React from "react";
import ReactDOM from "react-dom";
import styles from "./Sider.module.scss";
import { Layout, Menu } from "antd";
import {
  PayCircleOutlined,
  ShoppingCartOutlined,
  MessageOutlined,
  TeamOutlined,
  UserOutlined,
  DashboardOutlined,
  ApiOutlined,
  CameraOutlined,
  EditOutlined,
  CodeOutlined,
  LineOutlined,
  BarChartOutlined,
  AreaChartOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";

const { SubMenu } = Menu;
interface ISiderProps {
  collapsed: boolean;
}

const Sider: React.FunctionComponent<ISiderProps> = ({ collapsed }) => {
  return (
    <Layout.Sider
      width={256}
      //theme={theme}
      breakpoint="lg"
      trigger={null}
      collapsible
      collapsed={collapsed}
      //onBreakpoint={!isMobile && onCollapseChange}
      className={styles.sider}
    >
      <div className={styles.brand}>
        <div className={styles.logo}>
          <img alt="logo" src="#" />
          {!collapsed && <h1>Antd Admin</h1>}
        </div>
      </div>
      <div className={styles.menuContainer}>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
          <Menu.Item key="1" icon={<DashboardOutlined />}>
            <NavLink to="dashboard">Dashboard</NavLink>
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            <NavLink to="user">User</NavLink>
          </Menu.Item>
          <Menu.Item key="3" icon={<ShoppingCartOutlined />}>
            <NavLink to="post">Post</NavLink>
          </Menu.Item>
          <Menu.Item key="4" icon={<ApiOutlined />}>
            <NavLink to="request">Request</NavLink>
          </Menu.Item>
          <SubMenu key="sub1" icon={<CameraOutlined />} title="UI Element">
            <Menu.Item key="5" icon={<EditOutlined />}>
              <NavLink to="editor">Editor</NavLink>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<CodeOutlined />} title="Charts">
            <Menu.Item key="6" icon={<LineOutlined />}>
              <NavLink to="/chart/ECharts">ECharts</NavLink>
            </Menu.Item>
            <Menu.Item key="7" icon={<BarChartOutlined />}>
              <NavLink to="/chart/highCharts">HighCharts</NavLink>
            </Menu.Item>
            <Menu.Item key="8" icon={<AreaChartOutlined />}>
              <NavLink to="/chart/rechartst">Rechartst</NavLink>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    </Layout.Sider>
  );
};

export default Sider;
