function calculateBMI() {
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);

  if (weight > 0 && height > 0) {
    const bmi = (weight / (height * height)).toFixed(2);
    document.getElementById("result").textContent = `Your BMI is ${bmi}`;
  } else {
    document.getElementById("result").textContent = "Please enter valid values";
  }
}
