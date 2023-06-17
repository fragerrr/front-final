import React, {useEffect, useState} from 'react';
import Header from "../components/Header";
import ProductDesc from "../components/ProductDesc";
import {useLocation} from "react-router-dom";
import axios from "axios";
import Footer from "../components/Footer";

const ItemDesc = () => {

    const location = useLocation()
    const params = new URLSearchParams(location.search)

    const productId = params.get("id")

    const [item, setItem] = useState({})

    useEffect( () => {
        axios.get(`http://localhost:8080/item/${productId}`)
            .then(response => {
                setItem(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])


    return (
        <div>
            <Header/>
            <ProductDesc item={item}/>
            <Footer/>
        </div>
    );
};

export default ItemDesc;