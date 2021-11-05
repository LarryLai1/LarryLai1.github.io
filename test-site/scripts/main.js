let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc == 'images/chrome.jpg') {
      myImage.setAttribute('src','images/dog1.jpg');
    } else {
      myImage.setAttribute('src','images/chrome.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName(){
	let myname = prompt('Please enter your name');
	localStorage.setItem('name', myname);
	myHeading.textContent = 'Mozilla is cool, ' + myname;
}
if(!localStorage.getItem('name')) {setUserName();} 
else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}
myButton.onclick = setUserName;