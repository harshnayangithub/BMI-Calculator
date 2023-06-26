function calculateBMI() {
    // Get input elements
    var heightInput = document.getElementById("height"); // Height input element
    var weightInput = document.getElementById("weight"); // Weight input element
    var resultDiv = document.getElementById("result"); // Result div element
  
    // Parse input values
    var height = parseFloat(heightInput.value); // Parse height value as a float
    var weight = parseFloat(weightInput.value); // Parse weight value as a float
  
    // Check for valid input
    if (isNaN(height) || isNaN(weight)) {
        resultDiv.innerHTML = "Please enter valid height and weight."; // Display error message
        return; // Exit the function
    }
  
    // Calculate BMI
    var bmi = weight / ((height / 100) ** 2); // Calculate BMI value
    var category = ""; // Variable to store BMI category
  
    // Determine BMI category
    if (bmi < 18.5) {
        category = "Underweight"; // Assign category as "Underweight"
    } else if (bmi < 25) {
        category = "Normal weight"; // Assign category as "Normal weight"
    } else if (bmi < 30) {
        category = "Overweight"; // Assign category as "Overweight"
    } else {
        category = "Obese"; // Assign category as "Obese"
    }
  
    // Display result
    resultDiv.innerHTML = "Your BMI is " + bmi.toFixed(2) + " (" + category + ")"; // Display BMI and category
}
