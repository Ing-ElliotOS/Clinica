document.querySelector("#submit").addEventListener("click", e => {
    e.preventDefault();
  
    //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
    let telefono = "+528681141207";
  
    let cliente = document.querySelector("#cliente").value;
    let fecha = document.querySelector("#fecha").value;
    let hora = document.querySelector("#hora").value;
    let empleado = document.querySelector("#empleado").value;
    let servicio = document.querySelector("#servicio").value;
    let resp = document.querySelector("#respuesta");
  
    resp.classList.remove("fail");
    resp.classList.remove("send");
  
    let url = `https://api.whatsapp.com/send?phone=${telefono}&text=
          *Clinica Vital*%0A
        
          *Nombre*%0A
          ${cliente}%0A
          *Fecha*%0A
          ${fecha}%0A
          *Hora*%0A
          ${hora}%0A
          *Personal de salud*%0A
          ${empleado}%0A
          *Servicio*%0A
          ${servicio}`;
  
    if (cliente === "" || fecha === "" || hora === "" || empleado === "") {
      resp.classList.add("fail");
      resp.innerHTML = `Faltan algunos datos ${cliente}`;
      return false;
    }
    resp.classList.remove("fail");
    resp.classList.add("send");
    resp.innerHTML = `Se ha enviado tu reserva ${cliente}`;
  
    window.open(url);
  });