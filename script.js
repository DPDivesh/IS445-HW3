const output = document.getElementById("output")

        // asking for inputs
        const start = parseInt(prompt('Enter the Start'))
        const end = parseInt(prompt('Enter the End'))
        const step = parseInt(prompt('Enter the Step'))

        // error handling
        if (isNaN(start) || isNaN(step) || isNaN(end) || step == 0) {

            throw (output.textContent = 'Invalid input, please refresh the page and try again')

        }

        // functions
        function generateArray(start, end, step) {
            let array = [];
            for (let i = start; i <= end; i += step) {
                array.push(i);
            }
            return array;
        }

        function sumArray(array) {
            let sum = 0;
            array.forEach(function(summand) {
                sum += summand;
            });
            return sum;
        }

        const array = generateArray(start, end, step);
        console.log(array);
        const arrayTotal = sumArray(array);
        console.log(arrayTotal);
        var startBinary = Number(Math.abs(start)).toString(2)
        var stepBinary = Number(Math.abs(step)).toString(2)
        var endBinary = Number(Math.abs(end)).toString(2)


        // alert('each function ' + output)
        output.innerHTML = 'The generated array is: ' + array + "<br>" + 'The sum is: ' + arrayTotal + "<br>" + 'The binary of the elements\' absolute values are: ' + startBinary + ', ' + stepBinary + ', ' + endBinary
