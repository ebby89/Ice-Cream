$(document).ready(function(){
  var faveflavs = ["vanilla","corn and cheese", "chocolate peanut butter", "matcha"];

  faveflavs.forEach(function(faveflav) {
    $(".flavors").prepend("<li>" + faveflav + "</li>");
  });
});
