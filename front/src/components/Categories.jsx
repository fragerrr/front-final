import React from 'react';
import css from "./css/Categories.module.css"
import electronics from "../pages/img/electronics.png"
import jewelery from "../pages/img/jewelery.png"
import mensClothing from "../pages/img/men's-clothing.png"
import womensClothing from "../pages/img/women's-clothing.png"
import Button from "./Button";

const Categories = (props) => {

    const text = props.name.toUpperCase()


    let item = {
        img: "",
        desc: "",
        url: ""
    }

    switch (text){
        case "ELECTRONICS":
            item.img = electronics;
            item.desc = "Крупные бытовые приборы и электроника до мелкой электротехники и аксессуаров."
            item.url = "/search?category=electronics"
            break;
        case "JEWELERY":
            item.img = jewelery;
            item.desc = "Ювелирные укращения, чтобы подчеркнуть свою красоту и создать элегантный образ."
            item.url = "/search?category=jewelery"
            break;
        case "MEN'S CLOTHING":
            item.img = mensClothing;
            item.desc = "Широкий выбор одежды и аксессуаров, специально созданных для мужчин."
            item.url = "/search?category=men's%20clothing"
            break;
        case "WOMEN'S CLOTHING":
            item.img = womensClothing
            item.desc = "Широкий выбор одежды и аксессуаров, специально созданных для женщин."
            item.url = "/search?category=women's%20clothing"
            break;
    }

    return (
        <div className={css.card}>
            <img src={item.img} alt="Category Image" className={css.cardImage}/>
                <div className={css.cardContent}>
                    <h3 className={css.cardTitle}>{text}</h3>
                    <p className={css.cardDescription}>{item.desc}</p>
                    <Button url={item.url} text="Посмотреть"/>
                </div>
        </div>
    );
};

export default Categories;