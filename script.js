const weightValue = document.querySelector("#weight");
const heightValue = document.querySelector("#height");
const button = document.querySelector("button");
const result =  document.querySelector("#bmi");
const weight = weightValue.value;
const height = heightValue.value;


function calculatebmi(weight, height) {
    const finalBmi = (weight/height**2);
   result.innerText = finalBmi;
}

button.onclick(bmiCalculator(weight, height));