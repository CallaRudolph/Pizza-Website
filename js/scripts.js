//business logic here:
function Pizza(size, meat, topping) {
  this.size = size;
  this.meat = meat;
  this.topping = topping;
  this.cost = 0;
};

Pizza.prototype.newSize = function() {
  if (this.size === "large") {
    this.cost = 12 + (2 * this.topping.length);
  } else if (this.size === "medium") {
    this.cost = 10 + (2 * this.topping.length);
  } else {
    this.cost = 8 + (2 * this.topping.length);
  }
  return this.cost;
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

// Pizza.prototype.newTopping = function() {
//   if (this.topping === "extra cheese") {
//     return 5;
//   } else if (this.topping === "mushroom") {
//     return 10;
//   } else if (this.topping === "pineapple") {
//     return 4;
//   } else if (this.topping === "pepper") {
//     return 3;
//   } else {
//     return 0;
//   }
// };

function Price (size, meat, topping) {
  this.size = size;
  this.meat = meat;
  // this.topping = topping;
  this.price;
};

Price.prototype.newPrice = function () {
  this.price = this.size + this.meat;
  return this.price;
};

function Delivery (total) {
  this.price = total;
};

Delivery.prototype.newDelivery = function () {
  this.price = this.price + 20;
  return this.price;
};

//user interface here:
$(document).ready(function() {
  $("#pizza").submit(function(event) {
    event.preventDefault();

    inputtedName = $("#nameInput").val();
    var inputtedSize = $("#size").val();
    var inputtedMeat = $("#meat").val();
    var inputtedTopping = []
    $("input:checkbox[name=toppings]:checked").each(function() {
     var topping = $(this).val();
     inputtedTopping.push(topping);
    });
    console.log(inputtedTopping);
    var newPizza = new Pizza(inputtedSize, inputtedMeat, inputtedTopping);
    var newSize = newPizza.newSize(inputtedSize);
    var newMeat = newPizza.newMeat(inputtedMeat);
    // var newTopping = newPizza.newTopping(inputtedTopping);
    var newPrice = new Price (newSize, newMeat);
    total = newPrice.newPrice();

    $("#receipt").show();
    $("#pizza").hide();
    $(".newName").text(inputtedName);
    $("#newSize").text(inputtedSize);
    $("#newMeat").text(inputtedMeat);
    // $("#newTopping").text(inputtedTopping);
    $("#price").text(total);
  });

  $(".receipt").click(function() {
    $(".receipt").hide();
    $("#pizza").show();
  });

  $("#delivery").click(function(event) {
  event.preventDefault();
    $("#receipt").hide();
    $("#pizza").hide();
    $("#address").show();
  });

  $("#address").submit(function(event) {
  event.preventDefault();
    var inputtedStreet = $("#street").val();
    var inputtedPhone = $("#phone").val();

    var newDelivery = new Delivery (total);

    $("#address").hide();
    $("#newDelivery").show();
    $(".newName").text(inputtedName);
    $("#newStreet").text(inputtedStreet);
    $("#newPhone").text(inputtedPhone);
    $("#deliveryPrice").text(newDelivery.newDelivery());
  });
});
