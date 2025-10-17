import React from "react";
import { Layout, Menu, theme } from "antd";
import {
    UserOutlined,
    ProjectOutlined,
    SolutionOutlined,
    HomeOutlined,
} from "@ant-design/icons";
import { Link, Outlet, useLocation } from "react-router-dom";

const { Header, Content, Footer } = Layout;

const HomeLayout = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const location = useLocation();

    const menuItems = [
        {
            key: "/",
            icon: <HomeOutlined />,
            label: <Link to="/">Inicio</Link>,
        },
        {
            key: "/experiencia",
            icon: <SolutionOutlined />,
            label: <Link to="/experiencia">Experiencia</Link>,
        },
        {
            key: "/proyectos",
            icon: <ProjectOutlined />,
            label: <Link to="/proyectos">Proyectos</Link>,
        },
        {
            key: "/acerca-de-mi",
            icon: <UserOutlined />,
            label: <Link to="/acerca-de-mi">Acerca de mí</Link>,
        },
    ];

    return (
        <Layout style={{ minHeight: "100vh", background: "#f9f6ff" }}>
            <Header
                style={{
                    background: "#9b59b6",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <div
                    style={{
                        color: "#fff",
                        fontWeight: "bold",
                        fontSize: "20px",
                        marginRight: "2rem",
                    }}
                >
                    Mi Portafolio
                </div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    selectedKeys={[location.pathname]}
                    items={menuItems}
                    style={{
                        background: "transparent",
                        flex: 1,
                        minWidth: 0,
                    }}
                />
            </Header>

            <Content
                style={{
                    padding: "40px 80px",
                    background: colorBgContainer,
                }}
            >
                <Outlet />
            </Content>

            <Footer style={{ textAlign: "center", background: "#f9f6ff" }}>
                © {new Date().getFullYear()} Creado con 💜 por [Tu Nombre]
            </Footer>
        </Layout>
    );
};

export default HomeLayout;
