window.onload();

function addProduct() {
  // var addProduct = document.getElementById('addProduct');
  // addProduct.onclick = function (){
  var product = prompt ("Add the product name:");

  var quantity = prompt ("Add quantity:");

  var measure = prompt ("Add meassure:");

  var price = prompt ("Set a price");

  // console.log (`${product} ${quantity} ${measure} ${price}`);
  //}
  // document.getElementById('mylink').click();
  document.write(`${product} ${quantity} ${measure} ${price}`);
 };
addProduct();
