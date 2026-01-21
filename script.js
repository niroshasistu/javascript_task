// Array of product objects
const cart = [
  { name: "T-Shirt", price: 800, quantity: 1 },
  { name: "Jeans", price: 1500, quantity: 1 },
  { name: "Shoes", price: 2000, quantity: 1 }
];

// Button click event function
function calculateTotal() {
  let totalPrice = 0;

  // Loop to calculate total price
  for (let i = 0; i < cart.length; i++) {
    totalPrice += cart[i].price * cart[i].quantity;
  }

  console.log("Total Price:", totalPrice);

  // Discount using if–else
  if (totalPrice >= 3000) {
    console.log("Discount Applied: 10%");
    totalPrice = totalPrice - (totalPrice * 0.10);
  } else {
    console.log("No Discount Applied");
  }

  // Payment mode selection using switch case
  let paymentMode = 2; // 1-UPI, 2-Card, 3-Cash

  switch (paymentMode) {
    case 1:
      console.log("Payment Mode: UPI");
      break;
    case 2:
      console.log("Payment Mode: Card");
      break;
    case 3:
      console.log("Payment Mode: Cash");
      break;
    default:
      console.log("Invalid Payment Mode");
  }

  console.log("Final Amount to Pay:", totalPrice);
}
