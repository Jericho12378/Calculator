let interface = 0;
const inputField = document.querySelector(".inputField");
let clicked = true
function digits(event) {
  let number = event.target.value;

  return updateInputField(number);
}
function buttonCLicked(event) {

  let number = event.target.value;

  return updateInputField(number);
}

function updateInputField(userInput) {
  interface = inputField.innerHTML += userInput;
}
function output() {
    
    try{
        if (clicked == true){
            let output = eval(interface)
            inputField.innerHTML += ` = ${output}`
        clicked = false
        }else{
            alert("Result already displayed")
        }
    }catch(error){
        alert("what the fuck is that")
    }
   
}
function clearField(){
    inputField.innerHTML = " "
    clicked = true
}
