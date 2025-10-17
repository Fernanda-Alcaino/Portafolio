import React from "react";
import { Button } from "antd";

export interface BotonAccionProps {
    texto: string;
    onClick?: () => void;
    tipo?: "primario" | "secundario";
}

const BotonAccion: React.FC<BotonAccionProps> = ({
                                                     texto,
                                                     onClick,
                                                     tipo = "primario",
                                                 }) => {
    const estilosBase = {
        borderRadius: "8px",
        fontWeight: 500,
        padding: "0 24px",
    };

    return (
        <Button
            type={tipo === "primario" ? "primary" : "default"}
            size="large"
            onClick={onClick}
            style={{
                ...estilosBase,
                backgroundColor: tipo === "primario" ? "#9b59b6" : "transparent",
                borderColor: "#9b59b6",
                color: tipo === "primario" ? "#fff" : "#9b59b6",
            }}
        >
            {texto}
        </Button>
    );
};

export default BotonAccion;
