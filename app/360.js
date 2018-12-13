var image360 = document.getElementById("image360");
var productName = image360.getAttribute("data-product-name");
var productNumber = image360.getAttribute("data-product-number");
var productColor = image360.getAttribute("data-product-color");
var slider = document.getElementById("slider");
var imageNo = 1;
var images = [];


//Preloading images
for (var i = 1; i < 25; i++){
    images[i] = new Image();
    images[i].src = "/images/" + productName + "-" + productNumber + "-" + productColor + "_" + i + ".jpg";
}

//Event handler for input from the slider as the user slides it
slider.addEventListener("input", function(){
    image360.src = images[slider.value].src;
});

//Function to switch out to the next image
function rotate(){
    if(imageNo === 25) imageNo = 1;
}