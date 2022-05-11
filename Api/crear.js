var formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(e){
    e.preventDefault();

    axios({
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
          },
        url: 'https://test-api-met.herokuapp.com/register',
        data:{
            "username":document.getElementById("username").value,
            "password":document.getElementById("password").value

        }
      })
        .then(function (response) {
        console.log(response);
        });
    
})

var formulario_loguin = document.getElementById('formulario_loguin');
formulario_loguin.addEventListener('submit', function(a){
    a.preventDefault();
var pag = {
    url: "https://test-api-met.herokuapp.com/auth",
    method: "POST",
    timeout: 0,
    headers: {
      username: "met",
      password: "1234"
    },
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });
})

var formulario_crear_tienda = document.getElementById('formulario_crear_tienda');
formulario_crear_tienda.addEventListener('submit', function(b){
    b.preventDefault();
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