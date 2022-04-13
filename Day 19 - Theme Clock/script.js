<<<<<<< HEAD
const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggle = document.querySelector('.toggle')
const html = document.querySelector('html')

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

toggle.addEventListener('click', (e) => {
    html.classList.toggle('dark')

    if(html.classList.contains('dark')){
        e.target.innerText = 'Light mode'
    }else{
        e.target.innerText = 'Dark mode'
    }
})

function setTime() {
    const time = new Date()
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const hours = time.getHours()
    const hoursForClock = hours % 12
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    const ampm = hours >= 12 ? 'PM' : 'AM'

    //we can use the scale function here but i chose not to
    hourEl.style.transform = `translate(-50%, -100%) rotate(${(hoursForClock / 12) * 360}deg)`

    minuteEl.style.transform = `translate(-50%, -100%) rotate(${(minutes / 60) * 360}deg)`

    secondEl.style.transform = `translate(-50%, -100%) rotate(${(seconds / 60) * 360}deg)`

    timeEl.innerText = `${hoursForClock}:${minutes < 10 ?`0${minutes}`: minutes} ${ampm}`

    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span> 2022`
}

// const scale = (num, in_min, in_max, out_min, out_max) => {
//     return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min
// }

setTime()

=======
const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggle = document.querySelector('.toggle')
const html = document.querySelector('html')

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

toggle.addEventListener('click', (e) => {
    html.classList.toggle('dark')

    if(html.classList.contains('dark')){
        e.target.innerText = 'Light mode'
    }else{
        e.target.innerText = 'Dark mode'
    }
})

function setTime() {
    const time = new Date()
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const hours = time.getHours()
    const hoursForClock = hours % 12
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    const ampm = hours >= 12 ? 'PM' : 'AM'

    //we can use the scale function here but i chose not to
    hourEl.style.transform = `translate(-50%, -100%) rotate(${(hoursForClock / 12) * 360}deg)`

    minuteEl.style.transform = `translate(-50%, -100%) rotate(${(minutes / 60) * 360}deg)`

    secondEl.style.transform = `translate(-50%, -100%) rotate(${(seconds / 60) * 360}deg)`

    timeEl.innerText = `${hoursForClock}:${minutes < 10 ?`0${minutes}`: minutes} ${ampm}`

    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span> 2022`
}

// const scale = (num, in_min, in_max, out_min, out_max) => {
//     return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min
// }

setTime()

>>>>>>> 7d654cc4685990feb552b88b71f39316a9a205ee
setInterval(setTime, 1000)