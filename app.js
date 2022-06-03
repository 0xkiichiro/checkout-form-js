//! variable declaration

const taxRate = 0.18;
const shippingRate = 15;

window.addEventListener("load", () => {
  localStorage.setItem("taxRate", taxRate);
  localStorage.setItem("shippingRate", shippingRate);
});

let products = document.querySelector(".products");

//! click capturing

products.addEventListener("click", (event) => {
  if (event.target.classList.contains("minus")) {
    calculateProductTotal(event);
    if (event.target.nextElementSibling.innerText > 1) {
      event.target.nextElementSibling.innerText--;
      calculateProductTotal(event);
    } else {
      if (confirm("you will remove this item")) {
        event.target.parentElement.parentElement.parentElement.remove();
      }
    }
  } else if (event.target.classList.contains("plus")) {
    event.target.previousElementSibling.innerText++;
    calculateProductTotal(event);
  } else if (event.target.classList.contains("remove-product")) {
    if (confirm("you will remove this item")) {
      event.target.parentElement.parentElement.parentElement.remove();
    }
  }
});

//! calculations

const calculateProductTotal = (event) => {
  event.target
    .closest(".product")
    .querySelector(".product-line-price").innerText = (
    event.target.closest(".product").querySelector(".product-price")
      .firstElementChild.firstElementChild.innerText *
    event.target.closest(".product").querySelector("#product-quantity")
      .innerText
  ).toFixed(2);
};

let subtotal = 0;

const calculateProductandCartTotal = (event) => {
  document.querySelectorAll(".product-line-price").forEach((price) => {
    subtotal += parseFloat(price.innerText);
  });
  document.querySelector("#cart-subtotal").lastElementChild.innerText =
    subtotal.toFixed(2);
  calculateProductTotal(event);
};

//! onload

// window.onload = () => {
//   calculateProductandCartTotal();
// };
