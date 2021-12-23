let cart =  JSON.parse(localStorage.getItem( 'carritos'));
let modalCarrito = document.getElementById("cart");
let total = 0;
modalCarrito.className = "cart";
modalCarrito.innerHTML = "";
if (cart == null) {
  $('#cart').append(`<div class= "total"> EL CARRITO SE ENCUENTRA VACÍO</div>`);
        $('.total').css('width', 'auto');
        $('.cart').css('margin-top', '70px');
        $('.platita').hide();
}

if (cart.length > 0) {
    for (const producto of cart) {
        total = total + producto.price * producto.cantidad;
        const carritoContainer = document.createElement("div");
        carritoContainer.className = "producto-carrito";
        carritoContainer.innerHTML = `
          <img class="car-img" src="${producto.img}"/>
          <div class="product-details">
            ${producto.name}
          </div>
          <div class="product-details" > Cantidad: ${producto.cantidad}</div>
          <div class="product-details"> Precio: $ ${producto.price}</div>
          <div class="product-details"> Subtotal: $ ${
            producto.price * producto.cantidad
          }</div>
          <button class="btn btn-danger"  id="remove-product" onClick="removeProduct(${producto.id})">Eliminar producto</button>
           `;
        modalCarrito.appendChild(carritoContainer);
      };
      // Dibujo el total y lo appendeo en el div capturado y guardado en la variable modalCarrito
      const totalContainer = document.createElement("div");
      totalContainer.className = "total-carrito";
      totalContainer.innerHTML = `<div class= "total"> TOTAL $ ${total}</div>`;
      modalCarrito.appendChild(totalContainer);
    } 
  
  const removeProduct = (id) => {
    //console.log(id);
    const removedItemId = cart.findIndex( (item) =>{
      return item.id == id;
    })
    total = 0;
    let removed = cart.splice(removedItemId, 1);
    console.log(removed);
    console.log(cart);
    // Actualizar localStorage
    localStorage.clear();
    localStorage.setItem( 'carritos', JSON.stringify(cart));

    $('#cart').empty();
    if (cart.length > 0) {
      for (const producto of cart) {
          total += producto.price * producto.cantidad;
          const carritoContainer = document.createElement("div");
          carritoContainer.className = "producto-carrito";
          carritoContainer.innerHTML = `
            <img class="car-img" src="${producto.img}"/>
            <div class="product-details">
              ${producto.name}
            </div>
            <div class="product-details" > Cantidad: ${producto.cantidad}</div>
            <div class="product-details"> Precio: $ ${producto.price}</div>
            <div class="product-details"> Subtotal: $ ${
              producto.price * producto.cantidad
            }</div>
            <button class="btn btn-danger"  id="remove-product" onClick="removeProduct(${producto.id})">Eliminar producto</button>`;
          modalCarrito.appendChild(carritoContainer);
        };
        // Dibujo el total y lo appendeo en el div capturado y guardado en la variable modalCarrito
        const totalContainer = document.createElement("div");
        totalContainer.className = "total-carrito";
        totalContainer.innerHTML = `<div class= "total"> TOTAL $ ${total}</div>`;
        modalCarrito.appendChild(totalContainer);
      }else{
        $('#cart').append(`<div class= "total"> EL CARRITO SE ENCUENTRA VACÍO</div>`);
        $('.total').css('width', 'auto');
        $('.cart').css('margin-top', '70px');
        $('.platita').hide();
  }}