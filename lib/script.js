window.onload();

function addProduct() {
 
   var product = document.getElementById('productName').value;

  var quantity = document.getElementById('quantity').value;

  var unit = document.getElementById('unit').value;

  var price = document.getElementById('price').value;

  document.write(`${product} ${quantity} ${unit} $ ${price}`);
 };
addProduct();
