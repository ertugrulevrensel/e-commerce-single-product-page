import { products } from "./product.js";
$(document).ready(function () {
  var owl = $("#owl-demo");

  owl.owlCarousel({
    nav: true,
    dots: false,
    margin: 30,
    autoWidth: true,
    responsive: {
      0: {
        items: 2.5,
      },
    },
    navText: [
      "",
      "<div class='d-flex'>  <div class='d-flex arrow-content'>    <img src='./assets/arrow.png' />  </div></div>",
    ],
  });
});
products.forEach((product) => {
  $("#owl-demo").append(
    `<div class='product-area d-flex flex-d-col'>    <img src='${product.image}' />    <p class='product-name'>${product.productName}</p>    <div class='product-description d-flex justify-s-between'>      <p><b>${product.price}</b></p>      <div class='d-flex color-choice-area'>        <div data-selected='selected' class='d-flex color-choice-div'>          <span            class='color-choice'            style='background-color: ${product.color}'          ></span>        </div>        <div class='d-flex color-choice-div'>          <span            class='color-choice'            style='background-color: #cc9999'          ></span>        </div>        <div class='d-flex color-choice-div'>          <span            class='color-choice'            style='background-color: #cb99cc'          ></span>        </div>        <div class='d-flex color-choice-div'>          <span            class='color-choice'            style='background-color: #a6cc99'          ></span>        </div>      </div>    </div>  </div>`
  );
});
