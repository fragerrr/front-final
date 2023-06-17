import React, {useEffect, useState} from 'react';
import Header from "../components/Header";

import Categories from "../components/Categories";
import axios from "axios";
import home from "./css/home.module.css";
import Footer from "../components/Footer";



const Home = () => {

    const [categories, setCategories] = useState([])



    useEffect(() => {
        axios.get('http://localhost:8080/item/category')
            .then(  response => {
                setCategories(response.data)
            })
            .catch(error => console.log(error))

    }, [])


    return (
        <div className="home">
            <Header/>
            <div style={{marginTop: 80}} className={home.categories}>
                {
                    categories.map( item => (
                         <Categories name = {item} />
                         )
                    )
                }
            </div>
            <Footer/>
        </div>
    );
};

export default Home;