<<<<<<< HEAD
const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()


//using async await
async function generateJoke(){
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }

    const res = await fetch('https://icanhazdadjoke.com/', config)

    const data = await res.json()

    jokeEl.innerHTML = data.joke
}


//using .then
// function generateJoke(){
//     const config = {
//         headers: {
//             'Accept': 'application/json'
//         }
//     }

//     fetch('https://icanhazdadjoke.com/', config)
//         .then(res => res.json())
//         .then(data => {
//             jokeEl.innerHTML = data.joke
//         })
=======
const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()


//using async await
async function generateJoke(){
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }

    const res = await fetch('https://icanhazdadjoke.com/', config)

    const data = await res.json()

    jokeEl.innerHTML = data.joke
}


//using .then
// function generateJoke(){
//     const config = {
//         headers: {
//             'Accept': 'application/json'
//         }
//     }

//     fetch('https://icanhazdadjoke.com/', config)
//         .then(res => res.json())
//         .then(data => {
//             jokeEl.innerHTML = data.joke
//         })
>>>>>>> 7d654cc4685990feb552b88b71f39316a9a205ee
// }