const range = document.getElementById('range')

range.addEventListener('input', (e) => {
    const value = +e.target.value
    const label = e.target.nextElementSibling
    label.innerHTML = value

    const range_width = getComputedStyle(e.target).getPropertyValue('width')
    const label_width = getComputedStyle(label).getPropertyValue('width')

    //if console.log, the above values show 'px', so we create variables without the unit below
    const num_width = +range_width.substring(0, range_width.length - 2)
    const num_label_width = +label_width.substring(0, label_width.length - 2)

    const max = +e.target.max
    const min = +e.target.min

    //below scale function account for the label's slight shifting
    const scale = (num, in_min, in_max, out_min, out_max) => {
        return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min
    }
    const left = value * (num_width / max) - num_label_width / 2  + scale(value, min, max, 10, -10)

    label.style.left = `${left}px`


    //below is my own attemp before knowing the   solution
    // label.style.left = `${value * 3}px`
    // label.style.transform = 'translateX(-50%)'
})