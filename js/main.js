// Nutze
// querySelector()
// addEventListener()
// let counter = 0;
// createElement()
// createTextNode()
// appendChild()
// classList

let counter = 0
const output = document.querySelector(".umwickeln")
let numField
let num

let button = document.getElementsByTagName("button")

button[0].addEventListener('click', event => {
    console.log(counter)
    numField = document.createElement("span")
    output.appendChild(numField)
    num = document.createTextNode(counter)
    numField.appendChild(num)
    if (counter % 10 == 0) {
        numField.className ="weiss"
    } else {
        numField.className ="rechteck"
    }
    counter++
  });

