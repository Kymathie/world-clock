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
}
currentTime()
setInterval(currentTime, 1000)