const products = [
  { name: "Banana", price: 2 },
  { name: "Pear", price: 1 },
  { name: "Orange", price: 1.5 },
  { name: "Grapes", price: 1.7 },
];

let reducedProducts = [];
function calcReducedPrice(products){
  products.forEach( (product)=> {
    reducedProducts.push({name: product.name, price: product.price - (product.price*0,5)});
  });
}

calcReducedPrice(products);
console.log(reducedProducts);

