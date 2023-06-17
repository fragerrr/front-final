import React, {useEffect, useState} from 'react';
import Header from "../components/Header";

import css from "./css/Search.module.css";
import Product from "../components/Product";
import axios from "axios";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router";
import Footer from "../components/Footer";

const Basket = () => {

    const navigate = useNavigate()

    const [cart, setCart] = useState([])

    const user_id = useSelector(state => state.id)

    useEffect(() => {
        if(user_id===0){
            navigate("/login")
        }
        axios.get(`http://localhost:8080/person/${user_id}/items`)
            .then(response => {
                setCart(response.data)
            })
            .catch(error => {

            })
    }, [])

    return (
        <div className="home">
            <Header/>
            <div className={css.categories}>
                {
                    cart.map( item => (
                            <Product item = {item} />
                        )
                    )
                }
            </div>
            <Footer/>
        </div>
    );
};

export default Basket
