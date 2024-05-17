import React, { useState } from "react";


export default function SearchBar({ searchData, fetchSearchData }) {
    const [searchInput, setSearchInput] = useState("");
    const [fetchedSearch, setfetchedSearch] = useState([])


    function handleAutoUpdateSearch(event) {
        setSearchInput(event.target.value)
        if (searchInput && searchInput.trim() !== "" && searchInput.length > 1) {
            const currentSearch = searchData.filter(data => data.title.toLowerCase().match(searchInput.toLowerCase()))
            setfetchedSearch(currentSearch)
        }
        else {
            setfetchedSearch([])
        }
    }

    function collectSearchInput(searchTitle) {
        setSearchInput(searchTitle)
        setfetchedSearch([])
    }

    return (
        <div className="search-section">
            <div className="search-search-bar">
                <input type="text"
                    name="searchData"
                    placeholder="Search products"
                    value={searchInput}
                    onChange={handleAutoUpdateSearch} />

                <button>Search</button>
            </div>

            {
                fetchedSearch && fetchedSearch.length > 0 ?
                <div className="search-result-section">
                    {fetchedSearch.map((data, index) => {
                        return <div key={index} onClick={() => collectSearchInput(data.title)} className="individual-result">
                            <p > {data.title}</p>
                        </div>
                    })
                    }
                </div> : null

            }
        </div>
    )
}