import React from "react";
import { Switch, Route } from "react-router-dom";

import { Layout, Spin } from "antd";
import loadable from "react-loadable";

const { Content } = Layout;

const AsyncDahsboard = loadable({
  loader: () => import("../../routes/dashboard"),
  loading: () => <Spin loading="true" />,
});

const AsyncCategory = loadable({
  loader: () => import("../../routes/category"),
  loading: () => <Spin loading="true" />,
});

const AsyncProduct = loadable({
  loader: () => import("../../routes/product"),
  loading: () => <Spin loading="true" />,
});

const AppContent = ({ location, match }) => {
  return (
    <Content
      className="site-layout-background"
      style={{
        margin: "24px 16px",
        padding: 24,
        minHeight: 280,
      }}
    >
      <Switch>
        <Route path={`${match.url}/dashboard`} component={AsyncDahsboard} />
        <Route path={`${match.url}/category`} component={AsyncCategory} />
        <Route path={`${match.url}/product`} component={AsyncProduct} />
      </Switch>
    </Content>
  );
};

export default AppContent;
