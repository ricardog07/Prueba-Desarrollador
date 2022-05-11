var formulario_loguin = document.getElementById('formulario_loguin');
formulario_loguin.addEventListener('submit', function(e){
    e.preventDefault();
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