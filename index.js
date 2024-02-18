//Declaring Variables
const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");
const answer = document.getElementById("answer");

//checking if the sentence is a palindrome or not

checkButton.addEventListener("click", checkInput);
function checkInput() {
  var textInputValue = textInput.value;
  if (textInputValue === "") {
    alert("Please input a value");
  } else {
    const textInputValueLittle = textInputValue.toLowerCase();
    const textInputValueCleaned = textInputValueLittle.replace(
      /[\s # \-_,./|()]/g,
      ""
    );
    result.style.display = "block";
    for (let i = 0, j = textInputValueCleaned.length - 1; i <= j; i++, j--) {
      if (textInputValueCleaned[i] === textInputValueCleaned[j]) {
        answer.innerHTML = `<span style="font-weight: bold;">${textInputValue}</span> is a palindrome.`;
      } else if (textInputValueCleaned[i] !== textInputValueCleaned[j]) {
        answer.innerHTML = `<span style="font-weight: bold;">${textInputValue}</span> is not a palindrome.`;
        break;
      }
    }
  }
}
