//RapidAPI==https://rapidapi.com/apininjas/api/weather-by-api-ninjas/
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '693c77ce9fmsha3672245fca7dfep18ed5cjsn666389e2b670',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city)=>{
cityName.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then((response) => {
		console.log(response)

		cloud_pct.innerHTML = response.cloud_pct
		temp.innerHTML = response.temp
		temp1.innerHTML = response.temp
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		humidity1.innerHTML = response.humidity
		min_temp.innerHTML = response.min_temp
		max_temp.innerHTML = response.max_temp
		wind_speed.innerHTML = response.wind_speed
		wind_speed1.innerHTML = response.wind_speed
		wind_degrees.innerHTML = response.wind_degrees
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset
	})
	.catch(err => console.error(err));
}

submit.addEventListener("click", (e)=>{
	e.preventDefault()
	getWeather(city.value)
})
getWeather("Nagpur")

const getPuneWeather = ()=>{
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Pune', options)
		.then(response => response.json())
		.then((response) => {
			console.log(response)
	
			temp2.innerHTML = response.temp
			max_temp2.innerHTML = response.max_temp
			min_temp2.innerHTML = response.min_temp
			cloud_pct2.innerHTML = response.cloud_pct
			feels_like2.innerHTML = response.feels_like
			humidity2.innerHTML = response.humidity
			sunrise2.innerHTML = response.sunrise
			sunset2.innerHTML = response.sunset
			wind_degrees2.innerHTML = response.wind_degrees
			wind_speed2.innerHTML = response.wind_speed
		})
		.catch(err => console.error(err));
	}
	getPuneWeather("Pune")

	const getMumbaiWeather = ()=>{
		fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai', options)
			.then(response => response.json())
			.then((response) => {
				console.log(response)
		
				temp3.innerHTML = response.temp
				max_temp3.innerHTML = response.max_temp
				min_temp3.innerHTML = response.min_temp
				cloud_pct3.innerHTML = response.cloud_pct
				feels_like3.innerHTML = response.feels_like
				humidity3.innerHTML = response.humidity
				sunrise3.innerHTML = response.sunrise
				sunset3.innerHTML = response.sunset
				wind_degrees3.innerHTML = response.wind_degrees
				wind_speed3.innerHTML = response.wind_speed
			})
			.catch(err => console.error(err));
		}
		getMumbaiWeather("Mumbai")

		const getNewYorkWeather = ()=>{
			fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=New York', options)
				.then(response => response.json())
				.then((response) => {
					console.log(response)
			
					temp4.innerHTML = response.temp
					max_temp4.innerHTML = response.max_temp
					min_temp4.innerHTML = response.min_temp
					cloud_pct4.innerHTML = response.cloud_pct
					feels_like4.innerHTML = response.feels_like
					humidity4.innerHTML = response.humidity
					sunrise4.innerHTML = response.sunrise
					sunset4.innerHTML = response.sunset
					wind_degrees4.innerHTML = response.wind_degrees
					wind_speed4.innerHTML = response.wind_speed
				})
				.catch(err => console.error(err));
			}
			getNewYorkWeather("New York")

			const getTorontoWeather = ()=>{
				fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Toronto', options)
					.then(response => response.json())
					.then((response) => {
						console.log(response)
				
						temp5.innerHTML = response.temp
						max_temp5.innerHTML = response.max_temp
						min_temp5.innerHTML = response.min_temp
						cloud_pct5.innerHTML = response.cloud_pct
						feels_like5.innerHTML = response.feels_like
						humidity5.innerHTML = response.humidity
						sunrise5.innerHTML = response.sunrise
						sunset5.innerHTML = response.sunset
						wind_degrees5.innerHTML = response.wind_degrees
						wind_speed5.innerHTML = response.wind_speed
					})
					.catch(err => console.error(err));
				}
				getTorontoWeather("Toronto")