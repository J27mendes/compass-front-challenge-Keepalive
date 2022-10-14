//função para renderizar a hora na tela

let homeHour = document.getElementById("home-hour");
let homeDateFullYear = document.getElementById("home-date-full-year");
let secondsRefresh = document.getElementById("time-seconds-refresh");
let continueBrowsing = document.getElementById("continue-browsing");
let dayWeek = new Array ("domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado");
let nameMonth = new Array ("janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto","setembro","outubro","novembro","dezembro");

function timeUpdating(){    
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();    

    homeHour.innerHTML = `${doingZero(hour)}:${doingZero(minute)}`;  
}

//função para renderizar a timer no footer da página
function startTimer(duration, display) {
    let timer = duration, second;
    setInterval(function () {
        
        second = parseInt(timer % 601, 10);
        
        if(second < 100 && second >= 10){
            second = `0${second}`;
        } else if(second < 10) {
            second = `00${second}` ;           
        } else {
            second = second;
        }

        display.textContent = second;
        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    let duration = 60 * 10; // Converter para segundos
        display = document.querySelector('#time-seconds-refresh'); // selecionando o timer
    startTimer(duration, display); // iniciando o timer
};


function doingZero(time){
    return time < 10 ? `0${time}`: time;
}


//função que coloca a data atual na tela
setInterval(timeUpdating, 1000);
timeUpdating();

function dateUpdating(){    
    let now = new Date();
    homeDateFullYear.innerHTML = `${dayWeek[now.getDay()]}, ${now.getDate()} de ${nameMonth[now.getMonth()]} de ${now.getFullYear()}`;
}
dateUpdating()

//função que abre a nova aba
continueBrowsing.addEventListener("click", function() {
    window.open("https://noticias.uol.com.br", "_blank");
});

//função para obter a geolocalização e renderizar na página home
let city = document.querySelector('.home-city')
let temperatura = document.querySelector('.home-degrees')
let iconApi = document.querySelector('.icon')
const URL_MAIN = 'https://api.weatherapi.com/v1/current.json'
const API_KEY = '7de2a00351304ef7949185749221410';
const UNITS = 'metric'

navigator.geolocation.getCurrentPosition(loadUrl)

function loadUrl(pos){
    let lat = pos.coords.latitude;
    let long = pos.coords.longitude;
    
    let url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${lat},${long}&aqi=no`
    fetchApi(url);
    
}

async function fetchApi(url){
    let response = await fetch(url)    
    let {location, current} = await response.json();       
    let temperature = (current.temp_c).toFixed(0)
    let icon = `https:${current.condition.icon}`  
    
    city.innerText = `${location.name} - ${location.region}`;
    iconApi.setAttribute("src", icon)
    temperatura.innerText = `${temperature}ºC`
}
