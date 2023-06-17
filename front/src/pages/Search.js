import React, {useEffect, useState} from 'react';
import Header from "../components/Header";
import search from "../components/css/SearchComp.module.css"
import axios from "axios";
import Product from "../components/Product";
import css from "./css/Search.module.css"
import {useLocation} from "react-router-dom";
import Footer from "../components/Footer";


const Search = () => {

    const [products, setProducts] = useState([])

    const location = useLocation()
    const params = new URLSearchParams(location.search)

    let category = params.get("category")

    let url;

    if(category!=null){
        url = "?category=" + category
    } else{
        url = ""
    }

    useEffect( () => {
        axios.get(`http://localhost:8080/item${url}`)
            .then(response => {
                setProducts(response.data)
            })
            .catch(error => console.log(error))


    }, [])

    const componentDidUpdate = async(event) => {
        event.preventDefault()
        const form = document.getElementById("myForm")
        const data = new FormData(form)

        const title = data.get('title')

        await axios.get(`http://localhost:8080/item/search?title=${title}`)
            .then(response => {
                setProducts(response.data)
            })
            .catch(error => console.log(error))
    }

    return (
        <div className={css.main}>
            <Header/>
            <div>
                <form action="" className={search.searchContainer} onSubmit={componentDidUpdate} id="myForm">
                    <input type="text" placeholder="Введите запрос..." name="title" className={search.searchInput}/>
                    <button type="submit" className={search.searchButton}>Поиск</button>
                </form>
            </div>
            <div className={css.categories}>
                {
                    products.map( item => (
                        <Product item = {item} />
                        )
                    )
                }
            </div>
            <Footer/>
        </div>
    );
};

export default Search;