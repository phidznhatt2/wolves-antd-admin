import React, { Fragment } from "react";
import { Menu, Layout, Avatar, Popover, Badge, List } from "antd";
import {
  BellOutlined,
  RightOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import classnames from "classnames";
import styles from "./Header.module.scss";

const { SubMenu } = Menu;

interface IHeaderProps {
  collapsed: boolean;
  toggle: () => void;
  onSignOut?: () => void;
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  const { collapsed, toggle, onSignOut } = props;

  const handleClickMenu = (e) => {
    if (onSignOut) {
      e.key === "SignOut" && onSignOut();
    }
  };

  const rightContent = [
    <Menu key="user" mode="horizontal" onClick={handleClickMenu}>
      <SubMenu
        title={
          <Fragment>
            <span style={{ color: "#999", marginRight: 4 }}>Hi,</span>
            <span>admin</span>
            <Avatar
              style={{ marginLeft: 8 }}
              src="https://avatarfiles.alphacoders.com/173/thumb-173382.png"
            />
          </Fragment>
        }
      >
        <Menu.Item key="SignOut">Sign out</Menu.Item>
      </SubMenu>
    </Menu>,
  ];

  return (
    <Layout.Header
      className={classnames(styles.header, styles.fixed, {
        [styles.collapsed]: collapsed,
      })}
    >
      <div className={styles.button} onClick={toggle}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </div>
      <div className={styles.rightContainer}>{rightContent}</div>
    </Layout.Header>
  );
};

export default Header;
