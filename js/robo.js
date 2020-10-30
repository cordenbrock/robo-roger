// Controller -- Business logic

// collects input and populates an array from 0 to userNumber  
function populateUserArray(num) {
    let numArray = [];
    for (let i = 0; i <= num; i++) {
      numArray.push(i);
    }
    return numArray;
};
//  iterates through array, converts each element to a string, "robofies" certain elements, returns "robofied" array
function robofyArray(num) {
    num = num.toString();
    console.log(num)
    if (num.includes(3)) {
        return "neighbor!!!";
      } else if (num.includes(2)) {
        return "boop!!";
      } else if (num.includes(1)) {
        return "beep!";
      } else {
        return num;
      };
}

// DOM -- UI logic
$(document).ready(() => {
    // form submission
    $('#form').submit(e => {
        e.preventDefault();
        // collect user input, converts to number data type
        let userNumber, userArray, roboResult;
        userNumber = parseInt($('#number').val());
        // generate robo array
        userArray = populateUserArray(userNumber);
        // iterate through robo array and return new array with robofied elements
        roboResult = userArray.map(num => {
            return robofyArray(num);
          });
        // display result || invalidate input
        if (userNumber > 0) {
            $("#output").text(roboResult.join(' '));
        } else {
            alert("invalid input")
        }
    })
});