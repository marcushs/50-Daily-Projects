const button = document.getElementById('button')
const toasts = document.getElementById('toast')

button.addEventListener('click', showToast)

function randomMsg() {
    const random = Math.floor(Math.random() * 4)

    return random == 0 ? 'Message One' : 
    random == 1 ? 'Message Two' : 
    random == 2 ? 'Message Three' : 
    'Message Four'
}

function randomColor() {
    const random = Math.floor(Math.random() * 3)

    return random == 0 ? 'green' :
    random == 1 ? 'red' : 
    'rebeccapurple'
}

function showToast() {
    const toastEl = document.createElement('div')

    toastEl.classList.add('toast')

    toastEl.innerText = randomMsg()

    toastEl.style.color = randomColor()

    toasts.appendChild(toastEl)

    setTimeout(() => {
        toasts.removeChild(toastEl)
    }, 2000);
}