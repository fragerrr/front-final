import React from 'react';
import item from "./css/HeaderItem.module.css"

import {useNavigate} from "react-router";

const HeaderItem = (props) => {

    const navigate = useNavigate()
    const red = () => {
        navigate(props.link)
    }

    return (
        <li onClick={red} className={item.item}><a>{props.text}</a></li>
    );
};

export default HeaderItem;