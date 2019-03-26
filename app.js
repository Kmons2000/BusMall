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

new Product('bag','img/bag.jpg');
new Product('banana','img/banana.jpg');
new Product('bathroom','img/bathroom.jpg');
new Product('boots','img/boots.jpg');
new Product('breakfast','img/breakfast.jpg');
new Product('bubblegum','img/bubblegum.jpg');
new Product('chair','img/chair.jpg');
new Product('cthulhu','img/cthulhu.jpg');
new Product('dog-duck','img/dog-duck.jpg');
new Product('dragon','img/dragon.jpg');
new Product('pen','img/pen.jpg');
new Product('pet sweep','img/pet-sweep.jpg');
new Product('scissors','img/scissors.jpg');
new Product('shark','img/shark.jpg');
new Product('sweep','img/sweep.png');
new Product('tauntaun','img/tauntaun.jpg');
new Product('unicorn','img/unicorn.jpg');
new Product('usb','img/usb.gif');
new Product('water can','img/water-can.jpg');
new Product('wine glass','img/wine-glass.jpg');

function randomForImg() {
    var randomNumber = Math.random() * Product.all.length;
    var imgPlace = Math.floor(randomNumber);
    return imgPlace;
}

 function createImg() {
     var randomA = Product.all[randomForImg()]
     randomA.totalViews++;
     var imgOne = document.getElementById('firstImg');
     imgOne.setAttribute('src', randomA.src)
     imgOne.setAttribute("width", "150");
     imgOne.setAttribute("height", "150");
     imgOne.setAttribute("data-name", randomA.name)
     var randomB = Product.all[randomForImg()]
     randomB.totalViews++;
     var imgTwo = document.getElementById('secondImg');
     imgTwo.setAttribute('src', randomB.src)
     imgTwo.setAttribute("width", "150");
     imgTwo.setAttribute("height", "150");
     imgTwo.setAttribute("data-name", randomB.name)
     var randomC = Product.all[randomForImg()]
     randomC.totalViews++;
     var imgThree = document.getElementById('thirdImg');
     imgThree.setAttribute('src', randomC.src)
     imgThree.setAttribute("width", "150");
     imgThree.setAttribute("height", "150");
     imgThree.setAttribute("data-name", randomC.name)
 }

 createImg();

 function handleClicks(event) {
     console.log('something was clicked')
     globalClicks++;
     for( var i = 0; i < Product.all.length; i++){
        if(event.target.getAttribute('data-name') === Product.all[i].name){
            Product.all[i].totalClicks++
            console.log( Product.all[i]);

            break;
        }
     }
     if(globalClicks >= 25){
        displayResults();
        document.getElementById('firstImg').removeEventListener('click', handleClicks)
        document.getElementById('secondImg').removeEventListener('click', handleClicks)
        document.getElementById('thirdImg').removeEventListener('click', handleClicks)
     } else {
         createImg();
     }
 }

 document.getElementById('firstImg').addEventListener('click', handleClicks)
 document.getElementById('secondImg').addEventListener('click', handleClicks)
 document.getElementById('thirdImg').addEventListener('click', handleClicks)

function percentOfViews(i) {
        var percent = (Product.all[i].totalClicks / Product.all[i].totalViews) * 100;
    return percent;
}

function displayResults() {
    var printResult = document.getElementById('results');
    for(var i = 0; i < Product.all.length; i++){
        var resultItem = document.createElement('li');
         resultItem.textContent = Product.all[i].name + ' was clicked ' + Product.all[i].totalClicks + ' times, and was clicked ' + percentOfViews(i) + '% of the time it showed up.'
         printResult.appendChild(resultItem);
    }
}