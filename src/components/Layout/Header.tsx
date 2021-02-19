import React from "react";
import { Menu, Layout, Avatar, Popover, Badge, List } from "antd";
import {
  BellOutlined,
  RightOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import classnames from "classnames";
import styles from "./Header.module.scss";

interface IHeaderProps {
  collapsed: boolean;
  toggle: () => void;
}

const Header: React.FunctionComponent<IHeaderProps> = ({
  collapsed,
  toggle,
}) => {
  return (
    <Layout.Header
      className={classnames(styles.header, styles.fixed, {
        [styles.collapsed]: collapsed,
      })}
    >
      <div className={styles.button} onClick={toggle}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </div>
    </Layout.Header>
  );
};

export default Header;
