// Plus and Minus function

function input_ChangeValue(trigger, operation) {
  let inputChange = trigger.parentElement.querySelector("input");

  if (inputChange != null) {
    let actualValue = parseInt(inputChange.value);
    let nextValue = 0;

    switch (operation) {
      case "-":
        nextValue = actualValue - 1;
        break;
      case "+":
        nextValue = actualValue + 1;
        break;
    }

    if (nextValue <= 0) nextValue = 0;

    inputChange.value = nextValue;

    calculateSubTotal(inputChange);
  }
}

// Calculate Total and Subtotal

function calculateSubTotal(inputElement) {
  // Individual Subtotal
  let subTotalDiv = inputElement.parentElement.parentElement.querySelector(
    ".shopSubtotal"
  );

  if ((inputElement != null) & (subTotalDiv != null)) {
    let qty = parseFloat(inputElement.value);
    let price = parseFloat(inputElement.getAttribute("data-price"));
    let subtotal = (qty * price).toFixed(2);

    subTotalDiv.innerHTML = `£${subtotal}`;
  }

  // Final Subtotal, VAT and Total
  const subtotals = document.querySelectorAll(".shopSubtotal");
  let total = 0;
  subtotals.forEach((subtotalItem) => {
    const priceString = subtotalItem.innerText.replace("£", "");
    total += parseFloat(priceString);
  });
  const basketTotal = document.querySelector(".totalPrice");
  const basketSubTotal = document.querySelector(".subtotalPrice");
  const VAT = document.querySelector(".vatPrice");
  const vatP = total / 5;
  const finalTotal = total + vatP;

  basketSubTotal.innerHTML = "£" + total.toFixed(2);
  VAT.innerHTML = "£" + vatP.toFixed(2);
  basketTotal.innerHTML = "£" + finalTotal.toFixed(2);
}

// Like button toggle

let likeButton = document.getElementsByClassName("likeBtn");
for (let i = 0, l = likeButton.length; i < l; i++) {
  likeButton[i].addEventListener("click", function () {
    likeButton[i].classList.toggle("active");
  });
}
