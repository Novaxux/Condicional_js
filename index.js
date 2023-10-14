// if-else
let edad = 50;

if (edad>=18 && edad<100) {
    console.log('Eres mayor de edad');
}else if(edad<18 && edad>0){
    console.log('Eres menor de edad');
}
else if (edad>=100 || edad<=0 ) {
    console.log('Ingrese una edad válida');
}
// switch
let Ave = "Pato";
switch (Ave) {
  case "Gallina":
  case "Pato":
  case "Cuervo":
  case "Paloma":
    console.log("Este animal es un ave.");
    break;
  case "Perro":
  default:
    console.log("Este animal no es un ave");
}