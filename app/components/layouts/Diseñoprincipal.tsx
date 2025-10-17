import React, { useState } from "react";
import {
    Layout,
    Button,
    Drawer,
    Space,
    Grid,
} from "antd";
import {
    MenuOutlined,
    HomeOutlined,
    SolutionOutlined,
    ProjectOutlined,
    UserOutlined,
} from "@ant-design/icons";
import { Link, Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const { Header, Content, Footer } = Layout;
const { useBreakpoint } = Grid;

const DisenoPrincipal: React.FC = () => {
    const ubicacion = useLocation();
    const pantallas = useBreakpoint();
    const [visible, setVisible] = useState(false);

    const botones = [
        { ruta: "/experiencia", icono: <SolutionOutlined />, texto: "Experiencia" },
        { ruta: "/proyectos", icono: <ProjectOutlined />, texto: "Proyectos" },
        { ruta: "/acerca-de-mi", icono: <UserOutlined />, texto: "Acerca de mí" },
    ];

    const renderBotones = () => (
        <Space size="middle">
            {botones.map((b) => (
                <Link to={b.ruta} key={b.texto}>
                    <Button
                        type={ubicacion.pathname === b.ruta ? "primary" : "default"}
                        icon={b.icono}
                        style={{
                            backgroundColor:
                                ubicacion.pathname === b.ruta ? "#9b59b6" : "transparent",
                            borderColor:
                                ubicacion.pathname === b.ruta ? "#9b59b6" : "#9b59b6",
                            color: ubicacion.pathname === b.ruta ? "#fff" : "#9b59b6",
                            fontWeight: 500,
                        }}
                    >
                        {b.texto}
                    </Button>
                </Link>
            ))}
        </Space>
    );

    return (
        <Layout style={{ minHeight: "100vh", background: "#f9f6ff" }}>
            {/* ENCABEZADO */}
            <Header
                style={{
                    background: "#fff",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "0 20px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                }}
            >
                {/* IZQUIERDA: Logo + Botones */}
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <motion.h2
                            whileHover={{ scale: 1.05 }}
                            style={{
                                color: "#9b59b6",
                                fontWeight: "bold",
                                marginBottom: 0,
                                fontSize: "1.3rem",
                            }}
                        >
                            Mi Portafolio
                        </motion.h2>
                    </Link>

                    {/* Botones solo visibles en escritorio */}
                    {pantallas.md && renderBotones()}
                </div>

                {/* DERECHA: Menú hamburguesa en móvil */}
                {!pantallas.md && (
                    <Button
                        type="text"
                        icon={<MenuOutlined style={{ fontSize: "22px", color: "#9b59b6" }} />}
                        onClick={() => setVisible(true)}
                    />
                )}

                {/* Drawer para móviles */}
                <Drawer
                    title="Navegación"
                    placement="right"
                    onClose={() => setVisible(false)}
                    open={visible}
                >
                    {botones.map((b) => (
                        <Link to={b.ruta} key={b.texto} onClick={() => setVisible(false)}>
                            <Button
                                type="text"
                                icon={b.icono}
                                style={{
                                    display: "block",
                                    width: "100%",
                                    textAlign: "left",
                                    color: "#9b59b6",
                                    fontWeight: 500,
                                    marginBottom: "10px",
                                }}
                            >
                                {b.texto}
                            </Button>
                        </Link>
                    ))}
                </Drawer>
            </Header>

            {/* CONTENIDO PRINCIPAL */}
            <Content
                style={{
                    padding: pantallas.md ? "40px 80px" : "20px 20px",
                    background: "#f9f6ff",
                }}
            >
                <Outlet />
            </Content>

            {/* PIE DE PÁGINA */}
            <Footer
                style={{
                    textAlign: "center",
                    background: "#f9f6ff",
                    color: "#7d3c98",
                    fontWeight: 500,
                }}
            >
                © {new Date().getFullYear()} Creado con 💜 por [Tu Nombre]
            </Footer>
        </Layout>
    );
};

export default DisenoPrincipal;
