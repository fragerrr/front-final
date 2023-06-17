import React from 'react';
import css from "./css/Product.module.css"
import Button from "./Button";
const Product = (props) => {

    props = props.item

    let url = `/product?id=${props.id}`

    return (
        <div className={css.productCard}>
            <div className={css.imageContainer}>
                <img src={props.image} alt="Product Image" className={css.productImage}/>
            </div>
            <div className={css.productContent}>
                <h3 className={css.productTitle}>{props.title}</h3>
                <p className={css.productPrice}>{props.price}$</p>
                <p className={css.productCategory}>{props.category}</p>

                <Button url={url} text={"Купить"}/>
            </div>

        </div>

);
};

export default Product;