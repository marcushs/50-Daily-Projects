const icons = document.querySelectorAll('li')
const contents = document.querySelectorAll('.content')

icons.forEach((icon, i) => {
    icon.addEventListener('click', () => {
        icons.forEach(icon => icon.classList.remove('active'))
        contents.forEach(content => {
            content.classList.remove('show')
        })
        contents[i].classList.add('show')
        icon.classList.add('active')
    })
})

// Brad's version (way clearer)

// const contents = document.querySelectorAll('.content')
// const items = document.querySelectorAll('nav ul li')

// items.forEach((item, idx) => {
//     item.addEventListener('click', () => {
//         hideAllContents()
//         hideAllItems()

//         item.classList.add('active')
//         contents[idx].classList.add('show')

//     })
// })

// function hideAllContents() {
//     contents.forEach(content => content.classList.remove('show'))
// }

// function hideAllItems() {
//     items.forEach(item => item.classList.remove('active'))
// }