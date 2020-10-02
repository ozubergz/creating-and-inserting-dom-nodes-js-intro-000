//this file is optional
//you can use this to paste in js code and have it run when index.html is loaded
let element = document.createElement('div')
element.innerHTML = 'Hello DOM!'
element.style.backgroundColor = '#f9f9f9';
element.style.textAlign = 'center'


let ul = document.createElement('ul');
for(let i = 0; i < 3; i++) {
  let li = document.createElemen('li');
  li.innerHTML = (i + 1).toString();
  ul.appendChild(li)
}

element.appendChild(ul)

document.body.appendChild(element);
