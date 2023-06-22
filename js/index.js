// const mainImg = document.getElementById("mainImg");
// const subImg = document.querySelectorAll(".subImg");
// const brevBtn = document.getElementById("brevBtn")
// const nextBtn = document.getElementById("nextBtn")
// let state = 0

// nextBtn.addEventListener("click" , function () {
//   state =state + 1
//   if (state < subImg.length) {
//     mainImg.src = subImg[state].src
//   }else{
//     state = 0
//     mainImg.src = subImg[state].src
//   }
// })
// brevBtn.addEventListener("click" , function () {
//   state = state - 1
// if (state >= 0) {
//   mainImg.src = subImg[state].src
// }else{
// state = subImg.length - 1
// mainImg.src = subImg[state].src
// }
// })

// for (let i = 0; i < subImg.length; i++) {
//   subImg[i].addEventListener("click", function () {
//     mainImg.src = subImg[i].src;
//   });
// }
$(function () {
  "use strict";

  var init = "No items yet!";
  var counter = 0;

  // Initial Cart
  $(".counter").html(init);

  // Add Items To Basket
  function addToBasket() {
    counter++;
    $(".counter")
      .html(counter)
      .animate(
        {
          opacity: "0"
        },
        300,
        function () {
          $(".counter").delay(300).animate({
            opacity: "1"
          });
        }
      );
  }

  // Add To Basket Animation
  $("button").on("click", function () {
    addToBasket();
    $(this)
      .parent()
      .parent()
      .find(".product_overlay")
      .css({
        transform: " translateY(0px)",
        opacity: "1",
        transition: "all ease-in-out .45s"
      })
      .delay(1500)
      .queue(function () {
        $(this)
          .css({
            transform: "translateY(-500px)",
            opacity: "0",
            transition: "all ease-in-out .45s"
          })
          .dequeue();
      });
  });
});