import React from "react";
import ReactDOM from "react-dom";
import styles from "./Sider.module.scss";
import { Layout, Menu } from "antd";
import { NavLink } from "react-router-dom";
import { arrayToTree, queryAncestors } from "../../utils";
import iconMap from "../../utils/iconMap";
import { routes } from "../../routes";
import { pathToRegexp } from "path-to-regexp";
import Logo from "../../images/login/logo-3.png";

const { SubMenu } = Menu;
interface ISiderProps {
  collapsed: boolean;
  location: string;
}

const Sider: React.FunctionComponent<ISiderProps> = ({
  collapsed,
  location,
  ...rest
}) => {
  const generateMenus = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <SubMenu
            key={item.id}
            title={
              <React.Fragment>
                {item.icon && iconMap[item.icon]}
                <span>{item.name}</span>
              </React.Fragment>
            }
          >
            {generateMenus(item.children)}
          </SubMenu>
        );
      }

      return (
        <Menu.Item key={item.id}>
          <NavLink to={item.route || "#"}>
            {item.icon && iconMap[item.icon]}
            <span>{item.name}</span>
          </NavLink>
        </Menu.Item>
      );
    });
  };

  const menuTree = arrayToTree(routes, "id", "menuParentId");

  let currentMenu = routes.find(
    (_) => _.route && pathToRegexp(_.route).exec(location)
  );

  if (currentMenu === undefined) {
    currentMenu = routes[0];
  }

  const selectedKeys = currentMenu
    ? queryAncestors(routes, currentMenu, "menuParentId").map((_) => _.id)
    : [];

  return (
    <Layout.Sider
      width={256}
      theme="light"
      breakpoint="lg"
      trigger={null}
      collapsible
      collapsed={collapsed}
      //onBreakpoint={!isMobile && onCollapseChange}
      className={styles.sider}
    >
      <div className={styles.brand}>
        <div className={styles.logo}>
          <img alt="logo" src={Logo} />
          {!collapsed && <h1>Wolves Admin</h1>}
        </div>
      </div>
      <div className={styles.menuContainer}>
        <Menu theme="light" mode="inline" selectedKeys={selectedKeys}>
          {menuTree && generateMenus(menuTree)}
        </Menu>
      </div>
    </Layout.Sider>
  );
};

export default Sider;
