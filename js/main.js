   //Array de productos
   let productos = [ // CREO EL ARRAY DE LAS REMERAS
    {id: 1, img: './img/callejeros.jpg', name: 'Callejeros', price: 1800},
    {id: 2, img: './img/malon.jpg', name: 'Malón', price: 1200},
    {id: 3, img: './img/pappo.jpg', name: 'Pappo', price: 800},
    {id: 4, img: './img/lospiojos.jpg', name: "Los Piojos", price: 1900},
    {id: 5, img: './img/metallica.jpg', name: "Metallica", price: 1800},
    {id: 6, img: './img/callejeros2.jpg', name: "Callejeros 'Sur'", price: 1750},
    {id: 7, img: './img/ramones.jpg', name: 'Los Ramones', price: 1600},
    {id: 8, img: './img/acdc.jpg', name: 'Ac/Dc', price: 1950},
    {id: 9, img: './img/ledzepelin.jpg', name: 'Led Zepellin', price: 1800},
    {id: 10, img: './img/ledzepelin2.jpg', name: 'Led Zepellin', price: 1800},
  ]
  
  const contenedor = document.getElementById("bloqueDeRemeras");
  contenedor.innerHTML = "";
  
  productos.forEach((producto, indice) => {
    let card = document.createElement("div");
    card.classList.add("bloqueDeRemeras__recuadro");
    let html = `
                      
                          <img src="${producto.img}" id="${producto.id}" alt="" class="rocambole">
                          <p class="textoDos">${producto.name}. Simple. Gris. $${producto.price}</p>
                          <a href="#cart" class="remeraLinkeada">
                              <button class="comprar" onClick="abrirCarrito(${indice})">Comprar</button>
                          </a>    
        `;
    card.innerHTML = html;
    contenedor.appendChild(card);
  });
  
  const cart = [];
  let carritoAcumulador = document.querySelector('#carritoNumber');
  let carritoAcumMobile = document.querySelector('#carritoAcumMobile');
  
  const abrirCarrito = (indiceDelArrayProducto) => {
    //findIndex devuelve el indice del elemento encontrado
    // si no encuentra nada devuelve menos 1 (-1)
    const indiceEncontradoCarrito = cart.findIndex((elemento) => {
      return elemento.id === productos[indiceDelArrayProducto].id;
    });
    if (indiceEncontradoCarrito === -1) {
      //agrego el producto
      const productoAgregar = productos[indiceDelArrayProducto];
      productoAgregar.cantidad = 1;
      cart.push(productoAgregar);
      localStorage.setItem( 'carritos', JSON.stringify(cart));
      carritoAcumulador.innerHTML = "";
      carritoAcumulador.textContent += `CARRITO (${cart.length})`;
      carritoAcumMobile.innerHTML = "";
      carritoAcumMobile.textContent = `CARRITO (${cart.length})`;
    } else {
      //incremento cantidad
      cart[indiceEncontradoCarrito].cantidad += 1;
      localStorage.setItem( 'carritos', JSON.stringify(cart));
      carritoAcumulador.innerHTML = "";
      carritoAcumulador.textContent += `CARRITO (${cart.length})`;
      carritoAcumMobile.innerHTML = "";
      carritoAcumMobile.textContent = `CARRITO (${cart.length})`;
    }
  };

//Modal y Carrousel
$(document).ready(function () {
  $(".rocambole").click( (e) => { 
    console.log(e.currentTarget);
    let productSeleccionado = productos.find( (element) => e.target.id == element.id);
    console.log(productSeleccionado);
    //a mostrar el div
    $('#a').show();
    $('#a').css("display", "flex");
    $('#b').empty();
    $('#b').append(`
    <div class="remera_container">
              <h2>Remera Negra Callejeros</h2>
              <img src="${productSeleccionado.img}" class="bigImg "alt="remera negra callejeros">
              <p>Remera negra de algodón <br><br>
              "No escucho y sigo" <br><br>
              Talles disponibles: <br><br>
              XS - S - M - L - XL <br><br>
              Precio: $1500<br><br>
              Forma de pago <br><br>
              Efectivo - Tarjetas</p>
              <div>
                  <h3>Galería de imágenes</h3>
                  <a class="example-image-link" href="img/remeras/callejeros.jpg" data-lightbox="example-set" data-title="Modelo: 'No escucho y Sigo'.">
                      <img class="example-image" src="img/remeras/callejeros.jpg" alt="callejeros"/></a>
                  <a class="example-image-link" href="img/remeras/callejeros2.jpg" data-lightbox="example-set" data-title="Modelo: 'Loco gritando'.">
                      <img class="example-image" src="img/remeras/callejeros2.jpg" alt="callejeros2" /></a>
                  <a class="example-image-link" href="img/remeras/callejeros3.jpg" data-lightbox="example-set" data-title="Remera Motivo Album Sed.">
                      <img class="example-image" src="img/remeras/callejeros3.jpg" alt="callejeros3" /></a>
                  <a class="example-image-link" href="img/remeras/callejeros4.jpg" data-lightbox="example-set" data-title="Modelo: 'No escucho y sigo'.">
                      <img class="example-image" src="img/remeras/callejeros4.jpg" alt="callejeros4" /></a>
              </div>
          </div>
          <button id="d">Cerrar</button>`);
    $('.bigImg').css('width', '180px');
    $('#d').css('background-color', 'beige');
    //A cerrar el div
    $('#d').click( (e) => { 
      $('#a').hide();
    });
  });
});

//botón animación
$( ".comprar" ).click(function() {
  $( ".labelMenu" ).animate({
    color: "green",
    backgroundColor: "rgb( 20, 20, 20 )"
  });
});
  







