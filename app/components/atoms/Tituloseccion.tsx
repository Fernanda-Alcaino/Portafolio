import React from "react";
import { Typography } from "antd";

interface TituloSeccionProps {
    texto: string;
    alineacion?: "left" | "center" | "right";
}

const { Title } = Typography;

const TituloSeccion: React.FC<TituloSeccionProps> = ({
                                                         texto,
                                                         alineacion = "left",
                                                     }) => (
    <Title
        level={2}
        style={{
            color: "#9b59b6",
            textAlign: alineacion,
            marginBottom: "1.5rem",
        }}
    >
        {texto}
    </Title>
);

export default TituloSeccion;
