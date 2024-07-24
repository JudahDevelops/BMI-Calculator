const weightValue = document.querySelector("#weight");
const heightValue = document.querySelector("#height");
const button = document.querySelector("#calculate");
const result = document.querySelector("#bmi");
const reset = document.querySelector("#reset");

function calculatebmi(weight, height) {
    const finalBmi = weight / (height ** 2);
    result.innerText = finalBmi;
  }

button.addEventListener("click", () => {
  if (weightValue.value === "" || heightValue.value === "") {
   result.innerText = "Please enter valid values";
  } else {
    const weight = parseFloat(weightValue.value);
    const height = parseFloat(heightValue.value);
    calculatebmi(weight, height);
    reset.style.display = "block";
  }
});

reset.addEventListener(
    "click", () => {
        weightValue.value = "";
        heightValue.value = "";
        result.innerText = "";
        reset.style.display = "none";
    }
)

