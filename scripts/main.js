var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/procrastinate.jpeg') {
      myImage.setAttribute ('src','images/procrastinate2.jpg');
    } else {
      myImage.setAttribute ('src','images/procrastinate.jpeg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Do you struggle with procrastination, ' + myName + '?'
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Do you struggle with procrastination, ' + storedName + '?';
  }

  myButton.onclick = function() {
    setUserName();
  }