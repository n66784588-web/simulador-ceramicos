let datos = [];

fetch('data/productos.json')
  .then(res => res.json())
  .then(data => {
    datos = data.productos;
    cargarProductos();
  });

function cargarProductos() {
  let select = document.getElementById("producto");

  datos.forEach((p, index) => {
    let option = document.createElement("option");
    option.value = index;
    option.text = p.nombre;
    select.appendChild(option);
  });
}

function calcular() {
  let index = document.getElementById("producto").value;
  let metros = document.getElementById("metros").value;

  let producto = datos[index];

  let cajas = Math.ceil(metros / producto.m2PorCaja);

  document.getElementById("resultado").innerText =
    "Necesitas " + cajas + " cajas";

  document.getElementById("imagen").src = producto.imagen;
  document.getElementById("simulador").style.backgroundImage =
  "url('" + producto.imagen + "')";
}
