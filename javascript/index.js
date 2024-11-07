function currentTime(){
let londonElement = document.querySelector("#london")
let londonDateElement = londonElement.querySelector(".date")
let londonTimeElement =londonElement.querySelector(".time")
let londonTime = moment().tz("Europe/London")

londonDateElement.innerHTML = londonTime.format("Do MMMM YYYY")
londonTimeElement.innerHTML = londonTime.format("h:mm:ss [<small>]A[</small>]")

let parisElement = document.querySelector("#paris")
let parisDateElement = parisElement.querySelector(".date")
let parisTimeElement = parisElement.querySelector(".time")
let parisTime = moment().tz("Europe/Paris")

parisDateElement.innerHTML = parisTime.format("Do MMMM YYYY")
parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]")

let singaporeElement = document.querySelector("#singapore")
let singaporeDateElement = singaporeElement.querySelector(".date")
let singaporeTimeElement = singaporeElement.querySelector(".time")
let singaporeTime = moment().tz("Asia/Singapore")

singaporeDateElement.innerHTML = singaporeTime.format("Do MMMM YYYY")
singaporeTimeElement.innerHTML = singaporeTime.format("h:mm:ss [<small>]A[</small>]")

}
currentTime()
setInterval(currentTime, 1000)


function updateCity(event){
    let cityTimeZone = event.target.value
    if(cityTimeZone === "current"){
        cityTimeZone = moment.tz.guess()
    }
    let cityName = cityTimeZone.split("/")[1]
    let cityTime = moment().tz(cityTimeZone)
    let citiesElemet = document.querySelector("#cities")
    citiesElemet.innerHTML = 
    ` <div class="city">
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("Do MMMM YYYY")}</div>
        <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
       </div>
       <a href="/">Back to all cities</a>`
}

let citySelect = document.querySelector("#city")
citySelect.addEventListener("change", updateCity)
