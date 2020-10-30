// collects input and populates an array from 0 to userNumber  
function populateRoboArray(num) {
    let numArray = [];
    for (let i = 0; i <= num; i++) {
      numArray.push(i);
    }
    return numArray;
};

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

  // DOM -- UI
$(document).ready(() => {
    // form submission
    $('#form').submit(e => {
        e.preventDefault();
        
        // collect user input
        let userNumber, roboArray, roboResult;
        userNumber = parseInt($('#number').val());

        // generate robo array
        roboArray = populateRoboArray(userNumber);
        console.log(roboArray);

        // iterate through robo array and return new array with robofied elements
        roboResult = roboArray.map(num => {
            return robofyArray(num);
          });

        // display result || invalidate input
        if (userNumber > 0 && userNumber < 100000) {
            $("#output").text(roboResult);
        } else {
            alert("invalid input")
        }
    })
});