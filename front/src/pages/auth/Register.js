import React from 'react';
import css from "./css/Register.module.css"
import {useNavigate} from "react-router";
import axios from "axios";
const Register = () => {
    const navigate = useNavigate()

    const register = (event) => {
        event.preventDefault()

        const form = document.getElementById('myForm')

        const formData = new FormData(form)
        const person = {
            name: formData.get('name'),
            email: formData.get('email'),
            password: formData.get('password')
        }

        axios.post('http://localhost:8080/auth/register', person)
            .then(r => {
                navigate("/login")
            })
            .catch(error => {
                alert("Пользователь с таким EMAIL уже существует!")
            })
    }

    const login = () => {
        navigate("/login")
    }

    return (
        <div className={css.body}>
            <div className={css.container}>
                <h1 className={css.h1}>Registration</h1>
                <form className={css.form} id="myForm" onSubmit={register}>
                    <input className={css.input} name="name" type="text" placeholder="Name" required/>
                    <input className={css.input} name="email" type="email" placeholder="Email" required/>
                    <input className={css.input} name="password" type="password" placeholder="Password" required/>
                    <div className={css.buttons}>
                        <button className={css.button} type="submit">Register</button>
                        <button className={css.button} style={{backgroundColor: "#327ee1"}} onClick={login}>Login</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Register;