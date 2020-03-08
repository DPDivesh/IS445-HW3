const output = document.getElementById("output")

// asking for inputs for start end and step
const start = parseInt(prompt('Enter the Start'))
const end = parseInt(prompt('Enter the End'))
const step = parseInt(prompt('Enter the Step'))

var array = [];
var binaryArray = [];
var sumArray = 0;
// error handling checks for numbers
if (isNaN(start) || isNaN(step) || isNaN(end) || step == 0) {

  throw (output.textContent = 'Invalid input, please refresh the page and try again')

}

var arrayVal = start;
var binaryVal = start.toString(2);
array.push(start);
binaryArray.push(binaryVal);
sumArray = start;

// function
function generateArray(start, end, step) {
  //step is positive
  if (step >= 0) {
    console.log('is positive');
    for (let i = start; i >= start && i < end;) {
      arrayVal = arrayVal + step;
      array.push(arrayVal);
      sumArray = sumArray + arrayVal;
      i = i + step;


  arrayBinary = (arrayVal).toString(2);
  binaryArray.push(arrayBinary);
    }
  }
  else if (step <= 0) {
    console.log('is negative');
    for (i = start; i <= start && i > end;) {
      arrayVal = arrayVal + step;
      array.push(arrayVal);

      sumArray = sumArray + arrayVal;
      i = i + step;
    arrayBinary=(arrayVal).toString(2);
    binaryArray.push(arrayBinary);
    }
  }
  // alert('each function ' + output)
  output.innerHTML = 'The generated array is: ' + array + "<br>" + 'The sum is: ' + sumArray + "<br>" + 'The binary of the elements\' absolute values are: ' + binaryArray;

}

generateArray(start, end, step);
console.log(array);
