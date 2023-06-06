import React, {useEffect, useState} from 'react';
import axios from "axios";
import style from './Pagination.module.css'
import Countries from "./Countries";
import PaginationItem from "./PaginationItem";

const Pagination = () => {
    const [countries, setCountries] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [countriesPerPage, setCountriesPerPage] = useState(10)


    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all')
            .then(res => {
                setLoading(true)
                setCountries(res.data)
                console.log(res.data)
                setLoading(false)
            })
    }, [])

    const lastCountiesIndex = currentPage * countriesPerPage
    const firstCountiesIndex = lastCountiesIndex - countriesPerPage
    const currentCounties = countries.slice(firstCountiesIndex, lastCountiesIndex)

    const paginate = pageNumber => setCurrentPage(pageNumber)

    return (
        <div>
           <Countries countries={currentCounties} loading={loading}/>
            <PaginationItem paginate={paginate} countriesPerPage={countriesPerPage} totalCounties={countries.length}/>
        </div>
    );
};

export default Pagination;