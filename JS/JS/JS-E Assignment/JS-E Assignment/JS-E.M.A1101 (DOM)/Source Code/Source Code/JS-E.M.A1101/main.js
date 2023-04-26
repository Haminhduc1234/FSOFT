const images = ['img1.jpg', 'img2.png', 'img3.png'];
var index = 0;

// Add your code here
// Task 1

var the_image = document.querySelector('#img-item')
var backBtn = document.querySelector(".back");
var nextBtn = document.querySelector(".next");

var renderImage = function(i){
  the_image.src = images[i];
}
renderImage(index);


backBtn.addEventListener('click', function () {
  if(index > 0) index--;
  else index = images.length-1;
  the_image.src = images[index];
  
});

nextBtn.addEventListener('click', function () {
  if(index < images.length-1) index++;
  else index = 0;
  the_image.src = images[index];
});



// Add your code here
// Task 2