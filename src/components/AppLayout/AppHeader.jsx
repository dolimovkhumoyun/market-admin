import React from "react";

import { Layout } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

const { Header } = Layout;

const AppHeader = ({ collapsed, onCollapse }) => {
  return (
    <Header className="site-layout-background" style={{ padding: 0 }}>
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: "trigger",
        onClick: onCollapse,
      })}
    </Header>
  );
};

export default AppHeader;
