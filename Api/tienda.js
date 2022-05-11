var formulario_crear_tienda = document.getElementById('formulario_crear_tienda');
formulario_crear_tienda.addEventListener('submit', function(e){
    e.preventDefault();
var pag_1 = {
    url: "https://test-api-met.herokuapp.com/store/mi_tienda",
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
})

var formulario_crear_tienda = document.getElementById('formulario_crear_tienda');
formulario_crear_tienda.addEventListener('submit', function(c){
    c.preventDefault();
var settings = {
    url: "https://test-api-met.herokuapp.com/store/mi_tienda",
    method: "DELETE",
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
})

var settings = {
  url: "https://test-api-met.herokuapp.com/item/nevera?price=12.99&store_id=1",
  method: "POST",
  timeou: 0,
  headers: {
    id: "2",
    name: "mi_tienda",
    items: "[]"
  },
};

$.ajax(settings).done(function (response) {
  console.log(response);
});