// collects input and populates an array from 0 to userNumber  
function populateUserArray(num) {
    let numArray = [];
    for (let i = 0; i <= num; i++) {
      numArray.push(i);
    }
    return numArray;
  };


  // DOM -- UI
$(document).ready(() => {
    // form submission
    $('#form').submit(e => {
        e.preventDefault();
        // collect user input
        let userNumber, roboArray, result;
        userNumber = parseInt($('#number').val());
        console.log(userNumber)

        // generate an array, modify elements by certain rules, convert to displayable data type

        // display result || invalidate input
        if (userNumber > 0 && userNumber < 100000) {
            $("#print-result").text(userNumber);
        } else {
            alert("invalid input")
        }
    })
});