const options = {
    method: 'GET',
	headers: {
        'X-RapidAPI-Key': '3dc946d318mshf0b7b55a27432d0p131801jsn3c1f5c8da667',
		'X-RapidAPI-Host': 'weather-api138.p.rapidapi.com'
	}
};


const getWeather=(city)=>{
    cityName.innerHTML= city
    fetch('https://weather-api138.p.rapidapi.com/weather?city_name='+ city ,options)
    
    .then(response=>response.json())
    .then((response) => {
        console.log(response)
        
        cloud_pct.innerHTML=response.cloud_pct
        temp.innerHTML=response.temp
        temp2.innerHTML=response.temp
        feels_like.innerHTML=response.feels_like
        humidity.innerHTML=response.humidity
        humidity2.innerHTML=response.humidity
        min_temp.innerHTML=response.min_temp
        max_temp.innerHTML=response.max_temp
        wind_speed.innerHTML=response.wind_speed
        wind_speed2.innerHTML=response.wind_speed
        sunrise.innerHTML=response.sunrise
        sunset.innerHTML=response.sunset
        
    })
    
    .catch(err => console.error());
    
}
submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Kolkata") 


