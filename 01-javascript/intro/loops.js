console.log('loops');
var cakePudding = function() {
  for (var number = 1; number <= 100; number++) {
    if (number % 3 === 0 && number % 5 === 0) {
      console.log("CakePudding");
      }else if (number % 3 === 0) {
        console.log("Cake");
        }else if (number % 5 === 0) {
          console.log("Pudding");
        }else {
          console.log(number)
        }
}
};

var secretNumber = 42;

var promptedNumber =Number (prompt('Guess a number between 1 and 50:'));

while (promptedNumber !== secretNumber) {
  promptedNumber = Number(prompt("Hint: Douglas Adams is awesome!:"));
  //if (promptedNumber === secretNumber) {
  alert("Congrats!");
 // break;
//}
}
