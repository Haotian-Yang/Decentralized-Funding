import "./App.css";
import { useState } from "react";
import { Layout, Menu } from "antd";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { CreateProject } from "./components/create-project";
import { Dashboard } from "./components/dashboard";
import { ProjectsBoard } from "./components/projects-board";
import { SearchProject } from "./components/search-project";

const { Header, Content, Footer } = Layout;

function App() {
  const [currentMenuItem, setCurrentMenuItem] = useState(
    window.location.pathname
  );

  const handleClickMenuItem = (e) => {
    setCurrentMenuItem(e.key);
  };

  return (
    <div className="App">
      <Router>
        <Layout style={{ minHeight: "100vh" }}>
          <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              onClick={handleClickMenuItem}
              selectedKeys={[currentMenuItem]}
            >
              <Menu.Item key="/">
                <a href="/">Search</a>
              </Menu.Item>
              <Menu.Item key="/projects">
                <a href="/projects">Projects</a>
              </Menu.Item>
              <Menu.Item key="/dashboard">
                <a href="/dashboard">My Dashboard</a>
              </Menu.Item>
            </Menu>
          </Header>
          <Content
            className="site-layout"
            style={{ padding: "0 50px", marginTop: 64 }}
          >
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 380 }}
            >
              <Routes>
                <Route exact path="/" element={<SearchProject />} />
                <Route exact path="/projects" element={<ProjectsBoard />} />
                <Route
                  exact
                  path="/create-project"
                  element={<CreateProject />}
                />
                <Route exact path="/dashboard" element={<Dashboard />} />
              </Routes>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            EECE571G ©2022 Created by Haotian, Hanxin, Xuechun, Zhongze
          </Footer>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
