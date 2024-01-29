//Declaring Variables
var textInput = document.getElementById("text-input");
var checkButton = document.getElementById("check-btn");
var result = document.getElementById("result");
var answer = document.getElementById("answer");

//checking if the sentence is a palindrome or not

checkButton.addEventListener("click", checkInput);
function checkInput() {
  var textInputValue = textInput.value;
  if (textInputValue === "") {
    alert("Please input a value");
  } else {
    var textInputValueLittle = textInputValue.toLowerCase();
    var textInputValueCleaned = textInputValueLittle.replace(
      /[\s # \-_,./|()]/g,
      ""
    );
    result.style.display = "block";
    for (var i = 0, j = textInputValueCleaned.length - 1; i <= j; i++, j--) {
      if (textInputValueCleaned[i] === textInputValueCleaned[j]) {
        answer.innerHTML = `<span style="font-weight: bold;">${textInputValue}</span> is a palindrome.`;
      } else if (textInputValueCleaned[i] !== textInputValueCleaned[j]) {
        answer.innerHTML = `<span style="font-weight: bold;">${textInputValue}</span> is not a palindrome.`;
        break;
      }
    }
  }
}
