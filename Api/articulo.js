var formulario_crear_art = document.getElementById('formulario_crear_art');
formulario_crear_art.addEventListener('submit', function(e){
    e.preventDefault();
var settings = {
    url: "https://test-api-met.herokuapp.com/item/nevera",
    method: "POST",
    timeout: 0,
    headers: {
      id: "2",
      name: "mi_tienda",
      items: "[]"
    },
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });