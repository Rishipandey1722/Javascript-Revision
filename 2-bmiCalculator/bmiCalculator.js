const form = document.querySelector('form');
const weightInput = document.querySelector('#weight');
const heightInput = document.querySelector('#height');
const result = document.querySelector('.result');

if (result) result.setAttribute('aria-live', 'polite');

function calculateBMI(heightCm, weightKg) {
    if (typeof heightCm !== 'number' || typeof weightKg !== 'number') return null;
    if (heightCm <= 0 || weightKg <= 0) return null;
    const heightM = heightCm / 100;
    const bmi = weightKg / (heightM * heightM);
    return Number(bmi.toFixed(2));
}

function bmiCategory(bmi) {
    if (bmi < 18.5) return 'Underweight';
    if (bmi < 25) return 'Normal weight';
    if (bmi < 30) return 'Overweight';
    return 'Obesity';
}

function showError(msg) {
    if (!result) return;
    result.style.color = 'red';
    result.textContent = msg;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const weightRaw = weightInput.value.trim();
    const heightRaw = heightInput.value.trim();

    if (!weightRaw) return showError('Please provide weight');
    if (!heightRaw) return showError('Please provide height');

    const weight = parseFloat(weightRaw);
    const height = parseFloat(heightRaw);

    if (isNaN(weight) || weight <= 0) return showError('Please provide a valid positive weight');
    if (isNaN(height) || height <= 0) return showError('Please provide a valid positive height');

    const bmi = calculateBMI(height, weight);
    if (bmi === null) return showError('Could not calculate BMI');

    result.style.color = 'black';
    result.innerHTML = `<span>Your BMI is <strong>${bmi}</strong> — ${bmiCategory(bmi)}</span>`;
});


/*
ORIGINAL CODE (preserved as comment):

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const weight = parseInt(document.querySelector("#weight").value);
  const height = parseInt(document.querySelector("#height").value);
  const result = document.querySelector(".result");
  console.log(weight);

//   const bmi = 

if(height === '' || height < 0 || isNaN(height)){
    result.style.color = 'red'
    result.innerHTML = "Please provide valid height"
}


else if(weight === '' || weight < 0 || isNaN(weight)){
    result.style.color = 'red'
    result.innerHTML = "Please provide valid weight"
}
else{
    const bmi = (weight/((height*height)/10000)).toFixed(2)
    result.innerHTML = `<span> ${bmi}</span>`
}

  
});

*/


