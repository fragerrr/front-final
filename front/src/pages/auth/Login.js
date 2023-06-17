import React from 'react';
import css from "./css/Login.module.css"
import {useNavigate} from "react-router";
import axios from "axios";
import {useDispatch} from "react-redux";
const Login = () => {
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const login = (event) => {
        event.preventDefault()
        const form = document.getElementById('myForm')

        const formData = new FormData(form)

        const loginForm = {
            email: formData.get('email'),
            password: formData.get('password')
        }

        axios.post('http://localhost:8080/auth/login', loginForm)
            .then(r => {
                let action = {
                    type: "SET_USER",
                    id: r.data
                }
                dispatch(action)

                navigate("/")
            })
            .catch(error => alert("Вы ввели неправильный пароль!"))

    }

    const register = () => {
        navigate("/register")
    }

    return (
        <div className={css.body}>
            <div className={css.container}>
                <h1 className={css.h1}>Login</h1>
                <form className={css.form} id='myForm' onSubmit={login}>
                    <input className={css.input} name="email" type="text" placeholder="Email" required/>
                    <input className={css.input} name="password" type="password" placeholder="Password" required/>
                    <div className={css.buttons}>
                        <button className={css.button}  type="submit">Login</button>
                        <button className={css.button} style={{backgroundColor: "#327ee1"}} onClick={register}>Register</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;