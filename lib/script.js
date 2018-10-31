window.onload();

var product;
var quantity; 
var unit;
var price;

function productValidation () {
  var valid = false;

  if (quantity >0 && price >0){
    valid = true;
  }
  if (valid) {
    document.write(`${product} ${quantity} ${unit} $ ${price}`);
   } else {
   document.write ('Alguno de los datos no son validos')
   }
};

function addProduct() {
 
 product = document.getElementById('productName').value;

 quantity = document.getElementById('quantity').value;

 unit = document.getElementById('unit').value;

 price = document.getElementById('price').value;

 productValidation();

 

  
 };
addProduct();
