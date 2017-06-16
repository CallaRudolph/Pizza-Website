//business logic here:
function Pizza(size, meat, topping) {
  this.size = size;
  this.meat = meat;
  this.topping = topping;
}

Pizza.prototype.newSize = function() {
  if (this.size === "large") {
    return 12;
  } else if (this.size === "medium") {
  return 10;
  } else {
  return 8;
  }
};

Pizza.prototype.newMeat = function() {
  if (this.meat === "pepperoni") {
    return 3;
  } else if (this.meat === "sausage") {
  return 4;
  } else if (this.meat === "bacon") {
  return 6;
  } else {
  return 0;
  }
};

Pizza.prototype.newTopping = function() {
  if (this.topping === "extra cheese") {
    return 5;
  } else if (this.topping === "mushroom") {
  return 10;
  } else if (this.topping === "pineapple") {
  return 4;
  } else if (this.topping === "pepper") {
  return 3;
  } else {
  return 0;
  }
};

function Price (size, meat, topping) {
  this.size = size;
  this.meat = meat;
  this.topping = topping;
  this.price;
}

Price.prototype.newPrice = function () {
  this.price = this.size + this.meat + this.topping;
  return this.price;
}

//user interface here:
$(document).ready(function() {
  $("#pizza").submit(function(event) {
  event.preventDefault();

  var inputtedName = $("#nameInput").val();
  var inputtedSize = $("#size").val();
  var inputtedMeat = $("#meat").val();
  var inputtedTopping = $("#topping").val();

  var newPizza = new Pizza(inputtedSize, inputtedMeat, inputtedTopping);
  var newSize = newPizza.newSize(inputtedSize);
  var newMeat = newPizza.newMeat(inputtedMeat);
  var newTopping = newPizza.newTopping(inputtedTopping);
  var newPrice = new Price (newSize, newMeat, newTopping);

  $("#receipt").show();
  $("#pizza").hide();
  $("#newName").text(inputtedName);
  $("#newSize").text(inputtedSize);
  $("#newMeat").text(inputtedMeat);
  $("#newTopping").text(inputtedTopping);
  $("#price").text(newPrice.newPrice());

  });
});
