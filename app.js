'use strict';

var globalClicks = 0;

function Product(name, src) {
  this.name = name;
  this.src = src;
  this.totalClicks = 0;
  this.totalViews = 0;
  Product.all.push(this);
}

Product.all = [];

new Product('Bag','img/bag.jpg');
new Product('Banana','img/banana.jpg');
new Product('Bathroom','img/bathroom.jpg');
new Product('Boots','img/boots.jpg');
new Product('Breakfast','img/breakfast.jpg');
new Product('Bubblegum','img/bubblegum.jpg');
new Product('Chair','img/chair.jpg');
new Product('Cthulhu','img/cthulhu.jpg');
new Product('Dog-duck','img/dog-duck.jpg');
new Product('Dragon','img/dragon.jpg');
new Product('Pen','img/pen.jpg');
new Product('Pet sweep','img/pet-sweep.jpg');
new Product('Scissors','img/scissors.jpg');
new Product('Shark','img/shark.jpg');
new Product('Sweep','img/sweep.png');
new Product('Tauntaun','img/tauntaun.jpg');
new Product('Unicorn','img/unicorn.jpg');
new Product('Usb','img/usb.gif');
new Product('Water can','img/water-can.jpg');
new Product('Wine glass','img/wine-glass.jpg');

function randomForImg() {
  var randomNumber = Math.random() * Product.all.length;
  var imgPlace = Math.floor(randomNumber);
  return imgPlace;
}

function createImg() {
  var randomA = Product.all[randomForImg()];
  randomA.totalViews++;
  var imgOne = document.getElementById('firstImg');
  imgOne.setAttribute('src', randomA.src);
  imgOne.setAttribute('width', '200');
  imgOne.setAttribute('height', '200');
  imgOne.setAttribute('data-name', randomA.name);
  var randomB = Product.all[randomForImg()];
  randomB.totalViews++;
  var imgTwo = document.getElementById('secondImg');
  imgTwo.setAttribute('src', randomB.src);
  imgTwo.setAttribute('width', '200');
  imgTwo.setAttribute('height', '200');
  imgTwo.setAttribute('data-name', randomB.name);
  var randomC = Product.all[randomForImg()];
  randomC.totalViews++;
  var imgThree = document.getElementById('thirdImg');
  imgThree.setAttribute('src', randomC.src);
  imgThree.setAttribute('width', '200');
  imgThree.setAttribute('height', '200');
  imgThree.setAttribute('data-name', randomC.name);
}

createImg();

function handleClicks(event) {
  console.log('something was clicked');
  globalClicks++;
  for( var i = 0; i < Product.all.length; i++){
    if(event.target.getAttribute('data-name') === Product.all[i].name){
      Product.all[i].totalClicks++;
      console.log( Product.all[i]);

      break;
    }
  }
  if(globalClicks >= 25){
    displayResults();
    document.getElementById('firstImg').removeEventListener('click', handleClicks);
    document.getElementById('secondImg').removeEventListener('click', handleClicks);
    document.getElementById('thirdImg').removeEventListener('click', handleClicks);
  } else {
    createImg();
  }
}

document.getElementById('firstImg').addEventListener('click', handleClicks);
document.getElementById('secondImg').addEventListener('click', handleClicks);
document.getElementById('thirdImg').addEventListener('click', handleClicks);

function percentOfViews(i) {
  var percent = (Product.all[i].totalClicks / Product.all[i].totalViews) * 100;
  return percent;
}

function displayResults() {
  var printResult = document.getElementById('results');
  for(var i = 0; i < Product.all.length; i++){
    var resultItem = document.createElement('li');
    resultItem.textContent = Product.all[i].name + ' was clicked ' + Product.all[i].totalClicks + ' times, and was clicked ' + percentOfViews(i) + '% of the time it showed up.';
    printResult.appendChild(resultItem);
  }
}