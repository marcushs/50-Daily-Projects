const testimonialContainer = document.querySelector('.testimonial-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')
let idx = 0

updateTestimonial()

async function getTestimonials() {
    const res = await fetch('http://localhost:3000/testimonials')
    const data = await res.json()
    
    return data
}

async function updateTestimonial() {
    const testimonials = await getTestimonials()

    const {text, photo, name, position} = testimonials[idx]

    testimonial.innerText = text    
    userImage.src = photo
    username.innerText = name 
    role.innerText = position

    idx++
    if(idx > testimonials.length - 1) {
        idx = 0
    }

}

setInterval(updateTestimonial, 10000)
