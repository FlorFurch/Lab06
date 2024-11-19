// Generar un número aleatorio entre 1 y 100
const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;

function adivinarNumero() {
  // Solicitar al usuario que ingrese un número
  const adivinanza = parseInt(prompt("Adivina el número (entre 1 y 100):"));
  intentos++;

  // Verificar si el número es correcto
  if (adivinanza === numeroSecreto) {
    alert(`¡Felicidades! Adivinaste el número en ${intentos} intentos.`);
  } else if (adivinanza > numeroSecreto) {
    alert("El número es más bajo. ¡Intenta de nuevo!");
    adivinarNumero(); // Llamar de nuevo a la función
  } else if (adivinanza < numeroSecreto) {
    alert("El número es más alto. ¡Intenta de nuevo!");
    adivinarNumero(); // Llamar de nuevo a la función
  } else {
    alert("Por favor, ingresa un número válido.");
    adivinarNumero(); // Llamar de nuevo a la función si el ingreso no es válido
  }
}



Explicación del código
Generación del Número Secreto: Se utiliza Math.random() para generar un número aleatorio entre 1 y 100.
Función de Adivinanza: La función adivinarNumero() pide al usuario un número mediante prompt().
Comparación:
Si el número es correcto, se muestra un mensaje de felicitación con la cantidad de intentos.
Si el número es incorrecto, se indica al usuario si el número es más alto o más bajo, y se llama nuevamente a la función para que el usuario pueda volver a intentarlo.
Validación: Si el usuario no ingresa un número válido, le pedimos que ingrese un número otra vez.