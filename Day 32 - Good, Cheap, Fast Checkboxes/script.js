const toggles = document.querySelectorAll('.toggle')
const good = document.getElementById('good')
const fast = document.getElementById('fast')
const cheap = document.getElementById('cheap')

toggles.forEach(toggle => toggle.addEventListener('change', (e) => doTheTrick(e.target)))

function doTheTrick(theClickedOne) {
    if(good.checked && fast.checked && cheap.checked) {
        if(good === theClickedOne) {
            cheap.checked = false
        }

        if(cheap === theClickedOne) {
            fast.checked = false
        }

        if(fast === theClickedOne) {
            good.checked = false
        }
    }
}