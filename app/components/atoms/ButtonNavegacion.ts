import React from "react";
import { Button } from "antd";
import { useLocation, Link } from "react-router-dom";

export interface BotonNavegacionProps {
    texto: string;
    ruta: string;
    icono?: React.ReactNode;
    colorActivo?: string;
}

const BotonNavegacion: React.FC<BotonNavegacionProps> = ({
                                                             texto,
                                                             ruta,
                                                             icono,
                                                             colorActivo = "#9b59b6",
                                                         }) => {
    const ubicacion = useLocation();
    const activo = ubicacion.pathname === ruta;

    return (
        <Link to={ruta}>
        <Button
            type={activo? "primary" : "default"}
    icon={icono}
    style={{
        backgroundColor: activo? colorActivo : "transparent",
            borderColor: colorActivo,
            color: activo ? "#fff" : colorActivo,
            fontWeight: 500,
            transition: "all 0.3s ease",
    }}
>
    {texto}
    </Button>
    </Link>
);
};

export default BotonNavegacion;
