// import ResponseWeather from '../ResponseWeather'
import './card.css'
// import showCard from '../showCard/ShowCard'
import { useRef, useState } from 'react'
import GetWeather from '../getWeather/GetWeather'
import WeatherDisplay from '../weatherDisplay/WeatherDisplay'

const Card = () => {
    let [city, setCity] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [weatherData, setWeatherData] = useState(null)

    const setWeatherCard = async (e) => {
        e.preventDefault()

        const data = await GetWeather(city)

        if (data.error) {
            setWeatherData(null)
            setErrorMessage(data.error.message)
        } else {
            setWeatherData(data)
            setErrorMessage('')
        }
    }

    return (
        <div className='wrapper'>
            <header className="header">
                <h1 className="title">Прогноз погоды</h1>
                <form className="form"
                    onSubmit={setWeatherCard}>
                    <input className="input"
                        type="text"
                        placeholder="Введите название города"
                        onChange={(e) => setCity(e.target.value.trim())}
                    />
                    <button className="btn" type='submit'>Показать</button>
                </form>
            </header>

            {weatherData && <WeatherDisplay weatherData={weatherData}/> }
            {errorMessage && <div className="card">{errorMessage}</div>}
        </div>
    )
}

export default Card