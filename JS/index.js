let slideShowElement = document.querySelectorAll(".slide_item");

let countElelment = 1;

setInterval(() => {
   countElelment++;

  let currentElement = document.querySelector(".current");

  currentElement.classList.remove("current");

  if(countElelment > slideShowElement.length ){

    slideShowElement[0].classList.add("current");

    countElelment = 1;

  }
  else{
    currentElement.nextElementSibling.classList.add("current");
  }
 
}, 2000);