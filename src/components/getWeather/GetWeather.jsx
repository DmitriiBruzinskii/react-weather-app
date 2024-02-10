const GetWeather = async (city) => {
    const apiKey = '7289b8bb9d114daa8e224423240901'
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`

    const response = await fetch(url)
    const data = response.json()
    
    return data
}

export default GetWeather