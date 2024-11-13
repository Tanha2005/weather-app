const apiKey = "669bda9c07b0442692edc92cc0747779";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bogura";

async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);
    
}
checkWeather();