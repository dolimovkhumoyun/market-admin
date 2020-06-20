import React, { useState } from "react";
import { Layout } from "antd";
import AppSideBar from "./AppSideBar";
import AppHeader from "./AppHeader";
import AppContent from "./AppContent";

const AppLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div>
      <Layout style={{ height: "100vh" }}>
        <AppSideBar collapsed={collapsed} />
        <Layout className="site-layout">
          <AppHeader collapsed={collapsed} onCollapse={onCollapse} />
          <AppContent />
        </Layout>
      </Layout>
    </div>
  );
};

export default AppLayout;
