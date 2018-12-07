console.log('Check!');

// var h1 = document.querySelector('h1');
var h1 = document.getElementsByTagName('h1');
// h1.className = 'coolTitle';
// h1.classList.add('coolTitle');
var button = document.getElementById('btn1');
var input = document.getElementById('userInput');
var ul = document.querySelector('ul');
var li = document.querySelectorAll('li');

function checkInputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    li.className = 'li-group';
    ul.appendChild(li);
}

function addListAfterClick() {
    if (checkInputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(e) {
    if (checkInputLength() > 0 && e.keyCode === 13) {
        createListElement();
        input.value = '';
    }
}

button.addEventListener('click', addListAfterClick);

input.addEventListener('keypress', addListAfterKeypress);

// li.addEventListener('click', function () {

// });