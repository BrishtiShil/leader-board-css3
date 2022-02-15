document.getElementById("player").style.color = "#ff0000";
document.getElementById("blogs").style.color = "magenta";
document.getElementById("colors").style.backgroundColor = " rgb(153,102,153)";
document.getElementById("add-item").addEventListener('click', function () {
    const li = document.createElement('li');
    li.innerText = 'Brand New Item';
    const parent = document.getElementById('items');
    parent.appendChild(li);
})
document.getElementById('plus').addEventListener('click', function () {
    const addInput = document.getElementById('add-number');
    const addNumber = addInput.value;
    addInput.value = parseInt(addNumber) + 1;
})