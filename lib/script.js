window.onload();

/* var productName = document.getElementById('productName').value;
var quantity = document.getElementById('quantity').value;
var unit = document.getElementById('unit').value;
var price = document.getElementById('price').value; */
var product = {
    "productName":document.getElementById('productName').value,
    "quantity":document.getElementById('quantity').value,
    "unit":document.getElementById('unit').value,
    "price":document.getElementById('price').value
  };


function productValidation (product) {
  var valid = false;

  if (product.quantity >0 && producrt.price >0){
    valid = true;
  }
  if (valid) {
    saveProduct(product);
   } else {
     console.log(product);
   document.write ('Alguno de los datos no son validos')
   }
};

function saveProduct(product){
  var productListArray = [];
  productListArray.push (product);
  console.log(productListArray);
}
function addProduct(product) {

 productValidation(product);

};

addProduct(product);

/*TO DO
crear funcion array para guardar productos en memoria
consumir array para publicar una tabla
crear tabla en html

*/