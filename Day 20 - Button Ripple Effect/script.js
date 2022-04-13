<<<<<<< HEAD
const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const x = e.clientX
        const y = e.clientY

        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        const xInside = x - buttonLeft
        const yInside = y - buttonTop

        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = `${yInside}px`
        circle.style.left = `${xInside}px`
        button.appendChild(circle)

        //or (only works with regular function, not with arrow function function(e) {})
        //this.appendChild(circle)

        //we have to think about removing from the DOM with vanilla js, if not spans with accumulate, see dev tool

        setTimeout(() => circle.remove(), 500)
    })
=======
const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const x = e.clientX
        const y = e.clientY

        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        const xInside = x - buttonLeft
        const yInside = y - buttonTop

        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = `${yInside}px`
        circle.style.left = `${xInside}px`
        button.appendChild(circle)

        //or (only works with regular function, not with arrow function function(e) {})
        //this.appendChild(circle)

        //we have to think about removing from the DOM with vanilla js, if not spans with accumulate, see dev tool

        setTimeout(() => circle.remove(), 500)
    })
>>>>>>> 7d654cc4685990feb552b88b71f39316a9a205ee
})