const body = document.querySelector('body');
const div = document.createElement('div');
body.appendChild(div);
//Skapar li här 
for (let index = 0; index < 5; index++) {
	const li = document.createElement('li');
	div.appendChild(li);
	li.innerText = `Rad ${ index +1 }`;
}
const list = document.querySelectorAll('li');
for (let i = 0; i < 5; i++) {
	const light = 100 - (i * 10);
	list[i].style.backgroundColor = `hsl(0, 0%, ${light}%)`;
	document.querySelector("div").style.textAlign = "center";
	list[i].style.listStyle = "none";
	const size = i * 12 + 10
	list[i].style.fontSize = `${size}px`;
	const margin = i * 2 + 10
	list[i].style.margin = `${margin}px`;
}
// Första listan och section
let myWrapper = document.createElement('section');
body.appendChild(myWrapper);
let listItem = document.createElement('ul');
myWrapper.appendChild(listItem);
for (let index = 0; index < 9; index++) {
	const li = document.createElement('li');
	listItem.appendChild(li);
	li.innerText = `${ index +0 }`;
	li.style = "list-style: none";
	listItem.style.border = "10px solid black"
	listItem.style.paddingLeft = "0px";
	li.style.fontSize = "25px"
	listItem.style.display = "grid"
	li.style.padding = "25px";
    li.style.textAlign = "left";
    li.style.width = "70px";
    li.style.height = "50px"
	if ([index] == 4) {
		li.innerText = [index];
		li.style.backgroundColor = "black";
		li.style.color = "white";
	} else if ([index] % 2 == 0) {
		li.innerText = [index];
		li.style.backgroundColor = "blue";
		li.style.fontcolor = "white";
	} else {
		li.innerText = [index];
		li.style.backgroundColor = "white";
		li.style.fontcolor = "black";
	}
}
// MIN ANDRA LISTA
let mySecondList = document.createElement('ul');
myWrapper.appendChild(mySecondList);
for (let i = 9; i > 0; i--) {
	const li = document.createElement('li');
	mySecondList.appendChild(li);
	li.innerText = `${ i +0 }`;
	li.style = "list-style: none";
	mySecondList.style.border = "10px solid black"
	mySecondList.style.paddingLeft = "0px";
	li.style.fontSize = "25px"
	li.style.padding = "25px";
	mySecondList.style.display = "grid"
    li.style.width = "70px";
    li.style.height = "50px"
    li.style.textAlign ="center"
    if ([i] == 2) {
		li.innerText = [i];
		li.style.backgroundColor = "black";
		li.style.color = "white";
	} else if ([i] % 2 == 0) {
		li.innerText = [i];
		li.style.backgroundColor = "blue";
		li.style.fontcolor = "white";
	} else {
		li.innerText = [i];
		li.style.backgroundColor = "white";
		li.style.fontcolor = "black";
	}
}
//TREDJE LISTAN
let myThirdList = document.createElement('ul');
myWrapper.appendChild(myThirdList);
let numbers = ['ETT', 'TVÅ', 'TRE', 'FYRA', 'FEM', 'SEX', 'SJU', 'ÅTA', 'NIO', 'TIO'];
for (let index = 0; index < 10; index++) {
	const li = document.createElement('li');
	myThirdList.appendChild(li);
	li.innerText = `${numbers[index]}`;
	li.style = "list-style: none";
	myThirdList.style.display = "grid"
	myThirdList.style.border = "10px solid black"
	myThirdList.style.paddingLeft = "0px";
	li.style.fontSize = "15px"
	li.style.padding = "20px";
    li.style.textAlign = "right"
    li.style.width = "70px";
    li.style.height = "50px"
    

    if ([index] == 5) {
		li.style.backgroundColor = "black";
		li.style.color = "white";
	} else if ([index] % 2 == 0) {
		li.style.backgroundColor = "blue";
		li.style.fontcolor = "white";
	} else {
		li.style.backgroundColor = "white";
		li.style.fontcolor = "black";
	}

}
document.querySelector('section').style.display = "flex";
document.querySelector('section').style.justifyContent = "space-around";
document.querySelector('section').style.border = "2px solid black"

