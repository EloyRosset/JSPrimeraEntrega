let totalCarrito = 0;
let totalProductos = 0;
let producto = "";
let precio = 0;
let cantidad = 0;
let continuacomprando = "";
function agregarcarrito (precio, cantidad){                         // agrego un producto al carrito sumando el precio segun la cantidad seleccionada del producto
    return totalCarrito = totalCarrito + (precio*cantidad);
}


continuacomprando = prompt("Desea comprar productos? Escriba 'si'");
while (continuacomprando=="si"){
    producto = prompt("Escriba el prodcuto que desea comprar (barrendero, escoba, anden, pincel)");

    if(producto==="barrendero"){                                            // agrega BARRENDEROS al carrito
        precio = 700;
        cantidad = Number(prompt("Ingrese la cantidad de barrenderos"));
        agregarcarrito(precio, cantidad);
        totalProductos = totalProductos + cantidad;                        
    } else if (producto==="anden"){                                         // agrega ANDENES al carrito, segun la medida elegida
        let medida = Number(prompt("Ingrese la medida deseada del producto: 40, 60, 80 o 100 cm"));
        switch (medida){
            case 40:
                precio=700;
                break;
            case 60:
                precio=850;
                break;
            case 80:
                precio=1000;
                break;
            case 100:
                precio=1150;
                break;
            default:
                alert("Ingrese una medida valida de anden");
        }
        cantidad = Number(prompt("Ingrese la cantidad de anden de "+medida));
        agregarcarrito(precio, cantidad);
        totalProductos = totalProductos + cantidad;   
    } else if(producto==="escoba"){                                      // agrega ESCOBAS al carrito
        precio = 450;
        cantidad = Number(prompt("Ingrese la cantidad de escobas"));
        agregarcarrito(precio, cantidad);
        totalProductos = totalProductos + cantidad;   
    } else if(producto==="pincel"){                                    // agrega PINCELES al carrito
        precio = 150;
        cantidad = Number(prompt("Ingrese la cantidad de escobas"));
        agregarcarrito(precio, cantidad);
        totalProductos = totalProductos + cantidad;   
    } else{
        alert("Error. Ingrese un producto valido")
    }
    continuacomprando = prompt("Desea continuar comprando? Escriba 'si'");  // consulta si agrega mas productos
}

if(totalProductos>=10 && totalProductos<25){                             // Aplico descuento del 10% cuando compra mas de 10 productos
    totalCarrito = totalCarrito*0.9;
    alert("El total es de "+totalCarrito+" pesos, con un descuento aplicado del 10%");
} else if(totalProductos>=25 && totalProductos<50){                      // Aplico descuento del 20% cuando compra mas de 25 productos
    totalCarrito = totalCarrito*0.8;
    alert("El total es de "+totalCarrito+" pesos, con un descuento aplicado del 20%");
} else if(totalProductos>=50){                      // Aplico descuento del 30% cuando compra mas de 50 productos
    totalCarrito = totalCarrito*0.7;
    alert("El total es de "+totalCarrito+" pesos, con un descuento aplicado del 30%");
} else{
    alert("El total es de "+totalCarrito+" pesos");
}



