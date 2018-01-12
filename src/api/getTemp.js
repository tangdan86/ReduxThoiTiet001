const URL = 'http://api.openweathermap.org/data/2.5/find?units=metric&appid=01cc37655736835b0b75f2b395737694&q=';

function getTemp(cityName) {
    return fetch(URL + cityName )
    .then(res => res.json())
    .then(resJson => resJson.list[0].main.temp )
}

getTemp('Saigon')
.then(temp => console.log(temp))
.catch(err => console.log(err));