<<<<<<< HEAD
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')
const body = document.body
const slides = document.querySelectorAll('.slide')

let activeSlide = 0

rightBtn.addEventListener('click', ()=>{
    activeSlide++

    if(activeSlide > slides.length -1) {
        activeSlide = 0
    }

    setBgToBody()
    setActiveSlide()
})

leftBtn.addEventListener('click', ()=>{
    activeSlide--

    if(activeSlide <  0) {
        activeSlide = slides.length - 1
    }

    setBgToBody()
    setActiveSlide()
})

function setBgToBody() {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

function setActiveSlide() {
    slides.forEach(slide => slide.classList.remove('active'))

    slides[activeSlide].classList.add('active')
=======
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')
const body = document.body
const slides = document.querySelectorAll('.slide')

let activeSlide = 0

rightBtn.addEventListener('click', ()=>{
    activeSlide++

    if(activeSlide > slides.length -1) {
        activeSlide = 0
    }

    setBgToBody()
    setActiveSlide()
})

leftBtn.addEventListener('click', ()=>{
    activeSlide--

    if(activeSlide <  0) {
        activeSlide = slides.length - 1
    }

    setBgToBody()
    setActiveSlide()
})

function setBgToBody() {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

function setActiveSlide() {
    slides.forEach(slide => slide.classList.remove('active'))

    slides[activeSlide].classList.add('active')
>>>>>>> 7d654cc4685990feb552b88b71f39316a9a205ee
}