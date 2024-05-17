import { useEffect, useState } from "react";
import SearchBar from "./search component/search-bar";
import "./weather-api.css"

export default function WeatherAPI() {
    const [search, setSearch] = useState("")
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [weatherData, setWeatherData] = useState([null])

    async function fetchWeatherInfo(params) {
        try {
            setLoading(true)
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${params}&units=metric&appid=bc6dc02c458c8c555a804b4de4bb83ce`);
            const data = await response.json();
            if (!data && data.name.length < 1 && data.main.temp.length < 1) {
                setError("Invalid city/location entered");
                setLoading(false)
                return
            }
            setWeatherData(data)
            setLoading(false)
        } catch (err) {
            setLoading(false)
        }
    }

    function handleSearch() {
        fetchWeatherInfo(search)
    }

    useEffect(() => {
        fetchWeatherInfo("Newcastle")
    }, [])

    console.log(error)
    return <div className="weather-info">
        <SearchBar search={search} setSearch={setSearch} handleSearch={handleSearch} />
        <div className="weather-loading">
            {loading ? <h2>Loading.... please wait</h2> :
                <div>
                    {/* {error && error.trim() !== "" ? */}
                    <h1>Invalid city/location name</h1>
                    <div className="we-div">
                        <h2>{weatherData.name}</h2>
                        <div className="weather-details">
                            <p>Temperature: {weatherData.main.temp}°C</p>
                            <p>Feels like: {weatherData.main.feels_like}°C</p>
                            <p>Humidity: {weatherData.main.humidity}%</p>
                            <p>Wind speed: {weatherData.wind.speed} mph</p>
                        </div>
                        <p className="weather-source">This is the weather information of {weatherData.name} gotten from <a href="https://openweathermap.org/">openweatherapi.org</a></p>
                    </div>
                    {/* } */}
                </div>
            }
        </div>
    </div>
}