let homeHour = document.getElementById("home-hour");
let homeDateFullYear = document.getElementById("home-date-full-year");
let dayWeek = new Array ("domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado")
let nameMonth = new Array ("janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto","setembro","outubro","novembro","dezembro")

function timeUpdating(){    
    let now = new Date()
    let hour = now.getHours()
    let minute = now.getMinutes()

    homeHour.innerHTML = `${doingZero(hour)}:${doingZero(minute)}`  
}

function doingZero(time){
    return time < 10 ? `0${time}`: time
}

setInterval(timeUpdating, 1000)
timeUpdating()

function dateUpdating(){    
    let now = new Date()
    console.log(now)
    homeDateFullYear.innerHTML = `${dayWeek[now.getDay()]}, ${now.getDate()} de ${nameMonth[now.getMonth()]} de ${now.getFullYear()}`
}
dateUpdating()
