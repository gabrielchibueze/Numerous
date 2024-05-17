import "./search-bar.css"
function SearchBar({search, handleSearch, setSearch}) {
    return <div className="weather-search-bar">
        <input
            name="search"
            placeholder="Enter city/location"
            value={search}
            onChange={(event) => setSearch(event.target.value)} />
        <button onClick={handleSearch}>Search</button>
    </div>
}

export default SearchBar