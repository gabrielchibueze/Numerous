import React, { useEffect, useState } from "react";
import SearchBar from "./search-bar";
import "./search-bar.css"

export default function TestingSearchBar({ url }) {
    const [searchData, setSearchData] = useState([]);
    const [loading, setLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState(null)

    const fetchSearchData = async (productApi) => {
        try {
            setLoading(true)
            const response = await fetch(productApi)
            const data = await response.json()
            if (data && data.products.length > 0) {
                setSearchData(data.products)
                setLoading(false)
            }

        } catch (err) {
            console.log(err);
            setErrorMsg("An error occured fetching search data, please try again!");
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchSearchData(url)
    }, [url])


    return <div className="custom-search_bar">
            <div className="main-heading">
                <h1>Utilizing the custom search</h1>
            </div>
            <SearchBar searchData={searchData} />
    </div>
}