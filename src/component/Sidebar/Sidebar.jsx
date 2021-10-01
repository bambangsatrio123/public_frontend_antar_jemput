import { Layout, Menu } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { Link, Switch, Route } from "react-router-dom";
import pageRoutes from "./PageRoute";

const { Header, Content, Sider } = Layout;

export default function Sidebar() {
  const getCollapseIcon = () => {
    if (collapsed) {
      return <MenuUnfoldOutlined onClick={handleOnCollapse} className="trigger" />;
    }
    return <MenuFoldOutlined onClick={handleOnCollapse} className="trigger" />;
  };

  const [collapsed, setCollapsed] = useState(false);

  const handleOnCollapse = () => {
    setCollapsed((prevState) => !prevState);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider trigger={null} collapsed={collapsed} handleOnCollapse={handleOnCollapse}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={["0"]} mode="inline">
          {pageRoutes.map((data, i) => {
            return (
              <Menu.Item key={i} icon={data.icon}>
                <Link to={data.link}>{data.name}</Link>
              </Menu.Item>
            );
          })}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <div>{getCollapseIcon()}</div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <Switch>
            {pageRoutes.map((data, i) => {
              return <Route path={data.path} component={data.component} exact />;
            })}
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
}
