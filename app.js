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
  if(randomA === randomB) {
    createImg();
  }
  if(randomA === randomC || randomB === randomC){
    createImg();
  }

}

createImg();

function handleClicks(event) {
  console.log('something was clicked');
  globalClicks++;
  for( var i = 0; i < Product.all.length; i++){
    if(event.target.getAttribute('data-name') === Product.all[i].name){
      Product.all[i].totalClicks++;
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
  var percent = ((Product.all[i].totalClicks / Product.all[i].totalViews) * 100).toFixed(1);
  return percent;
}

function displayResults() {
  var ctx = document.getElementById('myChart').getContext('2d');
  console.log(Product.all[0].totalClicks);
  var myChart = new Chart(ctx, {
    responsive: true,
    maintainAspectRatio: true,
    type: 'bar',
    data: {
      labels: [Product.all[0].name,Product.all[1].name,Product.all[2].name,Product.all[3].name,Product.all[4].name,Product.all[5].name,Product.all[6].name,Product.all[7].name,Product.all[8].name,Product.all[9].name,Product.all[10].name,Product.all[11].name,Product.all[12].name,Product.all[13].name,Product.all[14].name,Product.all[15].name,Product.all[16].name,Product.all[17].name,Product.all[18].name,Product.all[19].name],
      datasets: [{
        label: 'Number of Votes',
        data: [Product.all[0].totalClicks,Product.all[1].totalClicks,Product.all[2].totalClicks,Product.all[3].totalClicks,Product.all[4].totalClicks,Product.all[5].totalClicks,Product.all[6].totalClicks,Product.all[7].totalClicks,Product.all[8].totalClicks,Product.all[9].totalClicks,Product.all[10].totalClicks,Product.all[11].totalClicks,Product.all[12].totalClicks,Product.all[13].totalClicks,Product.all[14].totalClicks,Product.all[15].totalClicks,Product.all[16].totalClicks,Product.all[17].totalClicks,Product.all[18].totalClicks,Product.all[19].totalClicks],
        backgroundColor: 'skyblue',
        borderColor: 'blue',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });

  percentChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: [Product.all[0].name,Product.all[1].name,Product.all[2].name,Product.all[3].name,Product.all[4].name,Product.all[5].name,Product.all[6].name,Product.all[7].name,Product.all[8].name,Product.all[9].name,Product.all[10].name,Product.all[11].name,Product.all[12].name,Product.all[13].name,Product.all[14].name,Product.all[15].name,Product.all[16].name,Product.all[17].name,Product.all[18].name,Product.all[19].name],
      datasets: [{
        label: 'Percent of times picked when viewed',
        data: [percentOfViews(0),percentOfViews(1),percentOfViews(2),percentOfViews(3),percentOfViews(4),percentOfViews(5),percentOfViews(6),percentOfViews(7),percentOfViews(8),percentOfViews(9),percentOfViews(10),percentOfViews(11),percentOfViews(12),percentOfViews(13),percentOfViews(14),percentOfViews(15),percentOfViews(16),percentOfViews(17),percentOfViews(18),percentOfViews(19)
        ],
        backgroundColor: 'skyblue',
        borderColor: 'blue',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}



