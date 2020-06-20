import React from "react";

import { Layout, Menu } from "antd";

import { menu } from "../../constants/menu";

const { Sider } = Layout;

const AppSideBar = ({ collapsed }) => {
  return (
    <Sider trigger={null} collapsible collapsed={collapsed} className="sidenav-bg-dark">
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        {menu.map((item) => (
          <Menu.Item key={item.id} icon={<item.icon style={{ fontSize: 25 }} />}>
            {item.title}
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
};

export default AppSideBar;
