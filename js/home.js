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

setInterval(timeUpdating, 1000);
timeUpdating();

function dateUpdating(){    
    let now = new Date();
    homeDateFullYear.innerHTML = `${dayWeek[now.getDay()]}, ${now.getDate()} de ${nameMonth[now.getMonth()]} de ${now.getFullYear()}`;
}
dateUpdating()

continueBrowsing.addEventListener("click", function() {
    window.open("https://noticias.uol.com.br", "_blank");
});
