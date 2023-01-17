import React from "react";
import IconRestaurant from "../assets/images/alimentacao.svg";
import IconUtilities from "../assets/images/utilidades.svg";
import IconHealth from "../assets/images/saude.svg";
import IconTransport from "../assets/images/transporte.svg";
import IconOthers from "../assets/images/outros.svg";
import { Icon } from "../Components/UI";

export default (type) => {
    const Icons = {
        Restaurante: <Icon src={IconRestaurant} alt="Restaurante" />,
        Utilidades: <Icon src={IconUtilities} alt="Utilidades" />,
        Saude: <Icon src={IconHealth} alt="Saude" />,
        Transporte: <Icon src={IconTransport} alt="Transporte" />,
        default: <Icon src={IconOthers} alt="Outros" />,
    };
    return Icons[type] || Icons.default;
};