const celsious = document.getElementById("inputCelsius");
const fahrenhite = document.getElementById("inputFahrenheit");
const kelvin = document.getElementById("inputKelvin");

 // celcious to fahrenhite formul IS  (celsius * 9/5) + 32;
 // celcious to kelvin formula is celsius + 273.15;
 celsious.addEventListener("input" ,() => {
     let c = parseFloat(celsious.value);
     let f = (c-32 * 9/5) + 32;
     let k = c+ 273;
     fahrenhite.value = f;
     kelvin.value = k;

 })
 fahrenhite.addEventListener('input', () => {
    let f = parseFloat(fahrenhite.value);
    let c = (f-32) * 5/9;
    let k = f - 273.15;
    celsious.value = c;
    kelvin.value = k;


 })
 kelvin.addEventListener('input' , () => {
    let k = parseFloat(kelvin.value);
    let c = k - 273;
    let f = k - 273.15;
    celsious.value = c;
    fahrenhite.value = f;
 })