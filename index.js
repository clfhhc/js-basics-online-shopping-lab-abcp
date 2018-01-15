var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var itemPair={[item]:Math.floor(Math.random()*100)};
 cart.push(itemPair);
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  // write your code here
  if (cart.length>0) {
    var text="In your cart, you have";
    if (cart.length===1) {
      text+=` ${Object.keys(cart[0])[0]} at $${cart[i][Object.keys(cart[0])[0]]}`;
    } else if (cart.length===2) {
      text+=` ${Object.keys(cart[0])[0]} at $${cart[i][Object.keys(cart[0])[0]]}`;
      text+=" and";
      text+=` ${Object.keys(cart[0])[0]} at $${cart[i][Object.keys(cart[0])[0]]}`;
    } else {
      for (let i=0; i<cart.length; i++) {
        if (i!=cart.length-1) {
          text+=` ${Object.keys(cart[0])[0]} at $${cart[i][Object.keys(cart[0])[0]]}`;
          text+=",";
        } else {
          text+=" and";
          text+=` ${Object.keys(cart[0])[0]} at $${cart[i][Object.keys(cart[0])[0]]}`;
        }
      }
    }
    text+=".";
    console.log(text);
  } else {
    console.log("Your shopping cart is empty.");
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
