import React from "react";
import { Typography, Row, Col } from "antd";
import BotonPersonalizado from "~/components/atoms/Button";
import TituloSeccion from "~/components/atoms/Tituloseccion";
import motion from "antd/es/_util/motion";


const { Paragraph } = Typography;

const Inicio: React.FC = () => (
    <Row justify="center" align="middle" style={{ minHeight: "80vh", textAlign: "center" }}>
        <Col xs={22} md={16}>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <TituloSeccion texto="¡Hola! Soy Tu Nombre" alineacion="center" />
                <Paragraph style={{ fontSize: "18px" }}>
                    Desarrollador Frontend apasionado por crear experiencias digitales únicas.
                </Paragraph>
                <BotonPersonalizado texto="Ver mis proyectos" enlace="/proyectos" />
            </motion.div>
        </Col>
    </Row>
);

export default Inicio;
