function product(name, price) {
  this.name = name;
  this.price = price;
}

function food(name, price) {
  product.call(this, name, price);
  this.category = 'food';
  console.log(this);
}

console.log(new food('cheese', 5).name);
