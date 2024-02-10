import img from '../../img/example.png'
import './weatherDisplay.css'

const WeatherDisplay = ({ weatherData }) => {
    return (
        <div className="card">
            <h2 className="card-city">{weatherData.location.name}<span>{weatherData.location.country}</span></h2>
            <div className="card-weather">
                <div className="card-value">{weatherData.current.temp_c}<sup>°c</sup></div>
                <img className="card-img" src={img} alt="Weather" />
            </div>
            <div className="card-description">{weatherData.current.condition.text}</div>
        </div>
    )
}

export default WeatherDisplay