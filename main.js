function calcularCompraTotal(precio, interesCuotas) {
    return precio + interesCuotas;
  }
  
  let interesCuotas = 3000;
  
  while (true) {
    let precio = parseInt(prompt("Ingrese el precio del producto"));
  
    let compraTotal = calcularCompraTotal(precio, interesCuotas);
  
    for (let cuotas = 2; cuotas <= 6; cuotas++) {
      let interes = 0;
  
      switch (cuotas) {
        case 2:
          interes = 0.10; // 10% de interés para 2 cuotas
          break;
        case 3:
          interes = 0.15; // 15% de interés para 3 cuotas
          break;
        case 4:
          interes = 0.20; // 20% de interés para 4 cuotas
          break;
        case 5:
          interes = 0.25; // 25% de interés para 5 cuotas
          break;
        case 6:
          interes = 0.30; // 30% de interés para 6 cuotas
          break;
        default:
          alert("Cantidad de cuotas no válida. Solo se permiten cuotas de 2 a 6.");
          continue;
      }
  
      let totalConInteres = precio * (1 + interes);
      alert(`El total a pagar con ${cuotas} cuotas es: ${totalConInteres}`);
      
      if (totalConInteres <= 50000) {
        alert("Puedes realizar tu compra.");
      } else {
        alert("No tienes límite suficiente para realizar la compra.");
        break;
      }
    }
  
    if (compraTotal <= 50000) {
      while (true) {
        alert("¿Quieres agregar otro producto?");
        let respuesta = prompt("Respuesta").toLowerCase();
  
        if (respuesta === "si") {
          alert("Volver a la sección productos!");

          break;
        } else if (respuesta === "no") {
          alert("¡Nos vemos la próxima!");
          break; 
        } else {
          alert("Respuesta inválida. Por favor, responde con 'si' o 'no'.");
        }
      }
    }
  }
  
