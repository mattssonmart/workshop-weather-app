import { MOCK_WEATHER } from './mock_weather.js';
//import { createCordinatesURL, createTemperatureURL } from "./url.js";


const searchField = document.getElementById('search-field');
const searchBtn = document.getElementById('search-button');

const displayText = document.getElementById('display-text');

//const unitSwitch = document.getElementById("unitSwitch");//
//const unitDesc = document.getElementById("toggle-scale"); 

// LYSSNARE Searchfield = key down & click
searchField.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    let searchValue = searchField.value;
    searchField.value = '';


        const data = MOCK_WEATHER[searchValue];
    if (!data) return;

    tempC = data.tempC;

    displayText.innerHTML = returnDisplayText(MOCK_WEATHER[searchValue], searchValue);
    addBoxData(MOCK_WEATHER[searchValue], searchValue);

  }

});

searchBtn.addEventListener('click', (event) => {
  let searchValue = searchField.value;
  searchField.value = '';


  const data = MOCK_WEATHER[searchValue];
  if (!data) return;

  tempC = data.tempC;


  displayText.innerHTML = returnDisplayText(MOCK_WEATHER[searchValue], searchValue);
  addBoxData(MOCK_WEATHER[searchValue], searchValue);
});


let tempC 
let tempF

// Function to modify Display-text
function returnDisplayText(data, city) {
  let unit = '<i class="ri-celsius-line"></i>';

 const showFahrenheit = checkbox.checked; // ÄNDRAT

  let temp = data.tempC;


  tempC = temp;

 


  if (checkbox.checked) {
   //let unit = '<i class="ri-fahrenheit-line"></i>';//
    temp = convertTemperature(data.tempC);
    tempF = temp;
  }

  return `<p>Idag klockan ${data.updated} i ${city} är det ${data.description} med en temperatur på <span id="display-temp">${temp}</span> <span id="display-unit">${unit}</span> grader.</p>`
}


// Function to modify Boxes
function addBoxData(data, city) {
  // FIRST box
  const temp = document.getElementById('temp');
  temp.textContent = data.tempC;

  const unitType = document.getElementById('unit');
  const unitDescription = document.getElementById('toggle-scale');
  let unit = '<i class="ri-celsius-line"></i>';
  unitDescription.textContent = 'Celsius';

  if (checkbox.checked) {
   let unit = '<i class="ri-fahrenheit-line"></i>';
    unitDescription.textContent = 'Fahrenheit';

   // unitDescription.textContent = 'Celsius';//

    temp.textContent = convertTemperature(data.tempC);

   // temp.textContent = convertTemperature(data.tempF);//
  };

  unitType.innerHTML = unit;
 updateTemperatureUI(); // ÄNDRAT: låt en funktion sköta logiken
  // MIDDLE box
  const icon = document.getElementById('icon');
  icon.textContent = data.icon;

  const weather = document.getElementById('weather');
  weather.textContent = data.description;

  // LAST box

  const time = document.getElementById('time');
  time.textContent = data.updated

  const location = document.getElementById('location')
  location.textContent = city
}



// Toggle temp
const  checkbox = document.getElementById("unitSwitch"); // Hämtar checkbox-elementet från HTML med id "unitSwitch"
//const checkbox = document.getElementById("unit-Switch__track"); //




/*checkbox.addEventListener('change', () => {
  const displayTemp = document.getElementById('display-temp');
  const displayUnit = document.getElementById('display-unit');
 
  displayTemp.textContent = convertTemperature(tempC);
  displayUnit.innerHTML = '<i class="ri-fahrenheit-line"></i>';
} )*/


checkbox.addEventListener('change', () => {
  const displayTemp = document.getElementById('display-temp'); // text i meningen
  const displayUnit = document.getElementById('display-unit'); // ikon i meningen

  const boxTemp  = document.getElementById('temp');   // stora siffran i rutan
  const boxUnit  = document.getElementById('unit');   // ikon i rutan
  const unitDesc = document.getElementById('toggle-scale'); // "Celsius/Fahrenheit"

  if (checkbox.checked) {
    // Celsius → Fahrenheit
    const f = Math.round((tempC * 9/5 + 32) * 10) / 10;

    if (displayTemp) displayTemp.textContent = f;
    if (boxTemp)     boxTemp.textContent     = f;

    if (displayUnit) displayUnit.innerHTML = '<i class="ri-fahrenheit-line"></i>';
    if (boxUnit)     boxUnit.innerHTML     = '<i class="ri-fahrenheit-line"></i>';

    if (unitDesc) unitDesc.textContent = 'Fahrenheit';
  } else {
    // Tillbaka till Celsius
    if (displayTemp) displayTemp.textContent = tempC;
    if (boxTemp)     boxTemp.textContent     = tempC;

    if (displayUnit) displayUnit.innerHTML = '<i class="ri-celsius-line"></i>';
    if (boxUnit)     boxUnit.innerHTML     = '<i class="ri-celsius-line"></i>';

    if (unitDesc) unitDesc.textContent = 'Celsius';
  }
});




function cToF(celsius) {
  return Math.round((celsius * 9/5 + 32) * 10) / 10;
}

function fToC(fahrenheit) {
  return Math.round(((fahrenheit - 32) * 5/9) * 10) / 10;
}




// TEMPERATURE UNIT CONVERT (c/f)


//function convertTemperature(temperature) {
  // Skapar en funktion som konverterar temperatur mellan Celsius och Fahrenheit

 /* let fahrenheit = checkbox.checked;*/
  
  // Kontrollerar om checkboxen är markerad; true om markerad, false annars
/*  if (!fahrenheit) {
    // Om checkboxen är markerad

    return Math.round(((temperature - 32) * 5 / 9) * 10) / 10; // Konvertera från Fahrenheit till Celsius och runda till en decimal // Formeln: (F - 32) * 5/9
 } else {
    // Om checkboxen inte är markerad (inputen är i Celsius)
    return Math.round((temperature * (9 / 5) + 32) * 10) / 10; // Konvertera från Celsius till Fahrenheit och runda till en decimal // Formeln: C * 9/5 + 32
  }

*/


