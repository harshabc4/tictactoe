const allCells = document.querySelectorAll('.cell')
allCells.forEach(el => el.addEventListener('click', place))
// document.querySelectorAll('.cell').addEventListener('click', place)


function place(){
    document.querySelector('.cell').innerText = "x"
}