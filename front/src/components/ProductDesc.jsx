import React, { useState } from 'react';
import css from "./css/ProductDesc.module.css";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";

const ProductDesc = ({ item }) => {

    const id = useSelector(state => state.id)

    const addItem = (event) => {
        event.preventDefault()

        console.log(id)

        axios.get(`http://localhost:8080/person/${id}/${item.id}`)
            .then(response => console.log(response))
            .catch(error => console.log(error))
    };

    return (
        <div className={css.body}>
            <div className={css.productContainer}>
                <div className={css.productImage}>
                    <img src={item.image} alt="Product Image" />
                </div>
                <div className={css.productDetails}>
                    <h2 className={css.productTitle}>{item.title}</h2>
                    <p className={css.productPrice}>{item.price}$</p>
                    <p className={css.productCategory}>{item.category}</p>
                    <p className={css.productDescription}>{item.description}</p>
                    <button className={css.button} onClick={addItem}>
                        В корзину
                    </button>
                </div>
            </div>
        </div>
    );
};

export default React.memo(ProductDesc);
