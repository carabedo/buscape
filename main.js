// listener del form 
window.addEventListener("load", function () {
    let busqueda = document.querySelector("form");
    // miro el evento submit
    busqueda.addEventListener("submit", function (e) {
      // evito que mande el formulario al backend
      e.preventDefault();
      let q = document.getElementById("input")
      console.log(q)
      let url = "https://7pyngmccwa.execute-api.us-east-1.amazonaws.com/default/apitest?q="+q.value
      console.log(url)
      // fetch siempre tiene 2 then, en el segundo va la accion con la data
      fetch( url )
        .then(response => response.json())
        .then(function (r) {
          document.querySelector("ul").innerHTML = "";
          for (x of r[1]) {
            console.log(x)
            let gif = "<img src=" + x.src + ">";
            document.querySelector("ul").innerHTML += "<li>" + gif + "</li>";
          }
        });
    });
  });
  
  