<<<<<<< HEAD
const insert = document.getElementById('insert')

window.addEventListener('keydown', (e) => {
    insert.innerHTML = 
    `<div class="key">
          ${e.key === ' ' ? 'Space' : e.key}
        <small>event.key</small>
    </div>

    <div class="key">
        ${e.keyCode}
        <small>event.keyCode</small>
    </div>

    <div class="key">
        ${e.code}
        <small>event.code</small>
    </div>
    `
=======
const insert = document.getElementById('insert')

window.addEventListener('keydown', (e) => {
    insert.innerHTML = 
    `<div class="key">
          ${e.key === ' ' ? 'Space' : e.key}
        <small>event.key</small>
    </div>

    <div class="key">
        ${e.keyCode}
        <small>event.keyCode</small>
    </div>

    <div class="key">
        ${e.code}
        <small>event.code</small>
    </div>
    `
>>>>>>> 7d654cc4685990feb552b88b71f39316a9a205ee
})