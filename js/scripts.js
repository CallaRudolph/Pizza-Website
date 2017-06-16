//business logic here:


//user interface here:
$(document).ready(function() {
  $("#pizza").submit(function(event) {
  event.preventDefault();

  var inputtedSize = $("#size").val();
  var inputtedMeat = $("#meat").val();
  var inputtedTopping = $("#topping").val();

  var newPizza = new Pizza(inputtedSize, inputtedMeat, inputtedTopping);

  $("#receipt").show();
  $("#price").text(newPizza.newPrice())

  });
});
