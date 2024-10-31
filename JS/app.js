let first = document.querySelector(".first");
let second = document.querySelector(".second");

let button = document.querySelector(".button");
const result = document.querySelector(".results");



button.addEventListener("click", () =>{
  let calculate = Math.random();
  calculate = calculate * 100;
  calculate = Math.floor(calculate) + 1;
  let errorMessage = "";
  
  if (first.value.trim() === "" && second.value.trim() === "") {
    errorMessage="Both name fields are required: Input name.";
  }
  
  else if (first.value.trim() === "") {
    errorMessage="First name needed: Input first name.";
  }
  
  else if (second.value.trim() === "") {
    errorMessage="Second name needed: Input second name.";
  }

  if (errorMessage) {
    result.innerHTML = errorMessage; 
  } else {
    result.innerHTML = `Your love score is ${calculate}%`;
  }
  first.value = ""
  second.value = ""
  });

