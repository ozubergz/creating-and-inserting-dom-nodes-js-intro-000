//this file is optional
//you can use this to paste in js code and have it run when index.html is loaded
let element = document.createElement('div')
element.innerHTML = 'Hello DOM!'
element.style.backgroundColor = '#f9f9f9';
element.style.textAlign = 'center'

document.body.appendChild(element);

let ul = document.createElement('ul');
