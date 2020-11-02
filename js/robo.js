// Business logic

function populateUserArray(num) {
  let numArray = [];
  for (let i = 0; i <= num; i++) {
    numArray.push(i)
  };
  return numArray;
};
function robofyArray(num) {
  num = num.toString();
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

// UI logic
$(document).ready(() => {

  $('#form').submit(e => {
    e.preventDefault();

    let userNumber, userArray, robofiedArray, roboResult;
    userNumber = parseInt($('#number').val());
    userArray = populateUserArray(userNumber);
    robofiedArray = userArray.map(num => robofyArray(num));
    roboResult = robofiedArray.join(' ')
    if (userNumber > 0) {
      $("#output").text(roboResult);
      $("#output").show();
    } else {
      alert("invalid: un-neighborly input")
    }
  })
});