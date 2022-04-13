<<<<<<< HEAD
const boxes = document.querySelectorAll('.empty')
const fill = document.querySelector('.fill')

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

boxes.forEach(box => {
    box.addEventListener('dragenter', dragEnter)
    box.addEventListener('dragleave', dragLeave)
    box.addEventListener('dragover', dragOver)
    box.addEventListener('drop', dragDrop)
})

function dragStart() {
    this.className += ' hold'
    setTimeout(()=> this.className = 'invisible', 0)
}
function dragEnd() {
    this.className = 'fill'
}
function dragEnter(e) {
    e.preventDefault()
}
function dragLeave() {
    this.className = 'empty'
}
function dragOver(e) {
    this.className += ' hovered'
    e.preventDefault()
}
function dragDrop() {
    this.className = 'empty'
    this.append(fill)
=======
const boxes = document.querySelectorAll('.empty')
const fill = document.querySelector('.fill')

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

boxes.forEach(box => {
    box.addEventListener('dragenter', dragEnter)
    box.addEventListener('dragleave', dragLeave)
    box.addEventListener('dragover', dragOver)
    box.addEventListener('drop', dragDrop)
})

function dragStart() {
    this.className += ' hold'
    setTimeout(()=> this.className = 'invisible', 0)
}
function dragEnd() {
    this.className = 'fill'
}
function dragEnter(e) {
    e.preventDefault()
}
function dragLeave() {
    this.className = 'empty'
}
function dragOver(e) {
    this.className += ' hovered'
    e.preventDefault()
}
function dragDrop() {
    this.className = 'empty'
    this.append(fill)
>>>>>>> 7d654cc4685990feb552b88b71f39316a9a205ee
}