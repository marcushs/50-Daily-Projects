<<<<<<< HEAD
const boxes = document.querySelectorAll('.empty')
const fill = document.querySelector('.fill')

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)


for(const empty of boxes) {
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('drop', dragDrop)
    empty.addEventListener('dragleave', dragLeave)
}

function dragStart() {
    this.className += ' hold' //+= because we append hold class and keep fill class
    setTimeout(() => this.className = 'invisible', 0)
    
}
function dragEnd() {
    this.className = 'fill'
}
function dragOver(e) {
    e.preventDefault()
}
function dragEnter(e) {
    e.preventDefault()
    this.className += ' hovered'
}
function dragLeave() {
    this.className = 'empty'
}
function dragDrop() {
    this.className = 'empty'
    this.append(fill)
=======
const boxes = document.querySelectorAll('.empty')
const fill = document.querySelector('.fill')

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)


for(const empty of boxes) {
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('drop', dragDrop)
    empty.addEventListener('dragleave', dragLeave)
}

function dragStart() {
    this.className += ' hold' //+= because we append hold class and keep fill class
    setTimeout(() => this.className = 'invisible', 0)
    
}
function dragEnd() {
    this.className = 'fill'
}
function dragOver(e) {
    e.preventDefault()
}
function dragEnter(e) {
    e.preventDefault()
    this.className += ' hovered'
}
function dragLeave() {
    this.className = 'empty'
}
function dragDrop() {
    this.className = 'empty'
    this.append(fill)
>>>>>>> 7d654cc4685990feb552b88b71f39316a9a205ee
}