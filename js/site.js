// Get the values from the interface
// Start or controller function
function getValues() {
  //Get values from page
  let startValue = document.getElementById("startValue").value;
  let endValue = document.getElementById("endValue").value;

  // Must validate input
  // Parse into integers
  startValue = parseInt(startValue);
  endValue = parseInt(endValue);

  if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
    //Call generate numbers
    let numbers = generateNumbers(startValue, endValue);
    //Call display numbers
    displayNumbers(numbers);
  } else {
    alert("You must enter integers");
  }
}

// Generate numbers from startValue to the endValue
// Logic function(s)
function generateNumbers(sValue, eValue) {
  let numbers = [];

  // Get all numbers from start to end
  for (let index = sValue; index <= eValue; index++) {
    // Will execute in a loop until index = eValue
    numbers.push(index);
  }

  return numbers;
}

// Display numbers and mark even numbers in bold
// Display or view function
function displayNumbers(numbers) {
  let templateRows = "";
  for (let index = 0; index < numbers.length; index++) {
    let className = "even";

    let number = numbers[index];

    if (number % 2 == 0) {
      className = "even";
    } else {
      className = "odd";
    }

    templateRows += `<tr><td class="${className}">${number}</td></tr>`;
  }
  document.getElementById("results").innerHTML = templateRows;
}
