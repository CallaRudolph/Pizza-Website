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

  $("#morePizza").click(function(event) {
  event.preventDefault();
  $("#newPizzas").append('<div class="row" id="morePizza">' +
                          '<div class="col-md-4">' +
                            '<div class="well">' +
                              '<h3>Choose your size:</h3><br>' +
                              '<select class="form-control" id="size">' +
                                '<option value="large">Large: $12</option>' +
                                '<option value="medium">Medium: $10</option>' +
                                '<option value="tiny">Tiny: $8</option>' +
                              '</select><br>' +
                            '</div>' +
                          '</div>' +
                          '<div class="col-md-4">' +
                            '<div class="well">' +
                              '<h3>Choose your meat:</h3><br>' +
                              '<select class="form-control" id="meat">' +
                                '<option value="pepperoni">Pepperoni: $3</option>' +
                                '<option value="sausage">Sausage: $4</option>' +
                                '<option value="bacon">Bacon (premium): $6</option>' +
                                '<option value="no">No Meat: $0</option>' +
                              '</select><br>' +
                            '</div>' +
                          '</div>' +
                          '<div class="col-md-4">' +
                            '<div class="well">' +
                              '<h3>Choose your topping:</h3><br>' +
                              '<select class="form-control" id="topping">' +
                                '<option value="extra cheese">Extra Cheese: $5</option>' +
                                '<option value="mushroom">Chanterelles: $10</option>' +
                                '<option value="pineapple">Pineapple: $4</option>' +
                                '<option value="pepper">Bell Peppers: $3</option>' +
                                '<option value="serious lack of">No toppings: $0</option>' +
                              '</select><br>' +
                            '</div>' +
                          '</div>');
  });

  $("form#pizza").submit(function(event) {
  event.preventDefault();


  $(".newPizza").each(function() {
    var inputtedSize = $(this).find("#size").val();
    console.log(inputtedSize)
    var inputtedMeat = $(this).find("#meat").val();
    var inputtedTopping = $(this).find("#topping").val();
    var newPizza = new Pizza(inputtedSize, inputtedMeat, inputtedTopping);
    var newSize = newPizza.newSize(inputtedSize);
    var newMeat = newPizza.newMeat(inputtedMeat);
    var newTopping = newPizza.newTopping(inputtedTopping);
    var newPrice = new Price (newSize, newMeat, newTopping);

    $("#newSize").text(inputtedSize);
    $("#newMeat").text(inputtedMeat);
    $("#newTopping").text(inputtedTopping);
    $("#price").text(newPrice.newPrice());
  })
  $("#receipt").show();


  });
});
