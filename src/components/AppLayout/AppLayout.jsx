import React, { useState } from "react";
import { Layout } from "antd";
import AppSideBar from "./AppSideBar";
import AppHeader from "./AppHeader";
import AppContent from "./AppContent";

const AppLayout = (props) => {
  const [collapsed, setCollapsed] = useState(false);

  const onMenuClick = (path) => {
    props.history.push(path);
  };

  const onCollapse = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div>
      <Layout style={{ height: "100vh" }}>
        <AppSideBar
          collapsed={collapsed}
          onMenuClick={onMenuClick}
          currentPathname={props.location.pathname}
        />
        <Layout className="site-layout">
          <AppHeader collapsed={collapsed} onCollapse={onCollapse} />
          <AppContent location={props.location} match={props.match} />
        </Layout>
      </Layout>
    </div>
  );
};

export default AppLayout;
