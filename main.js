$(document).ready(function(){

  var data = $.getJSON( "http://localhost:3000/api/products.json", function(data) {
    var source = $("#product-json-api").html();
    var template = Handlebars.compile(source);
    var html = template(data);
    $("#thing").append(html);
  });
})
