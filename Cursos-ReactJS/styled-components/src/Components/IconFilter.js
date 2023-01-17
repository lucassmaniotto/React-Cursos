import React from "react";
import IconRestaurant from "../assets/images/alimentacao.svg";
import IconUtilities from "../assets/images/utilidades.svg";
import IconHealth from "../assets/images/saude.svg";
import IconTransport from "../assets/images/transporte.svg";
import IconOthers from "../assets/images/outros.svg";
import { IconTheme } from "../Components/UI";

export default (type) => {
    const Icons = {
        Restaurante: <IconTheme src={IconRestaurant} alt="Restaurante" />,
        Utilidades: <IconTheme src={IconUtilities} alt="Utilidades" />,
        Saude: <IconTheme src={IconHealth} alt="Saude" />,
        Transporte: <IconTheme src={IconTransport} alt="Transporte" />,
        default: <IconTheme src={IconOthers} alt="Outros" />,
    };
    return Icons[type] || Icons.default;
};