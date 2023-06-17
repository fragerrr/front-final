import React from 'react';
import css from "./css/Button.module.css"
import {useNavigate} from "react-router";

const Button = (props) => {

    const navigate = useNavigate()

    const red = () => {
        navigate(props.url)
    }

    return (
        <div className={css.button}>
            <a onClick={red} >{props.text}</a>
        </div>
    );
};

export default Button;