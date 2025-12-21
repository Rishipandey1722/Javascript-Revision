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


