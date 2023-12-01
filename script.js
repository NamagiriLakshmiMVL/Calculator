const headDiv = document.createElement("div")
headDiv.className = "headDiv";
document.body.appendChild(headDiv)

const titleDiv = document.createElement("h1");
titleDiv.id = "title"
titleDiv.style.color = "blue"
titleDiv.style.width = "100%"
titleDiv.className = "text-center"
headDiv.appendChild(titleDiv)

const pDiv = document.createElement("p")
pDiv.innerText = "Calculator"
pDiv.id = "description"
titleDiv.appendChild(pDiv)

function display(num) {
  displayButton.value += num // append each value to end
}

function Calculate() {
  try {
    displayButton.value = eval(displayButton.value)  //perform operations
  }
  catch {
    alert("Invalid Input") // used when invalid input is given 
  }
}

function Clr() {
  displayButton.value = ""; //clear all values
}

function del() {
  displayButton.value = displayButton.value.slice(0, -1);  //remove last element
  return del;
}

const contDiv = document.createElement("div")
contDiv.className = "container-sm";
pDiv.appendChild(contDiv)


const rowcls = document.createElement("div")
rowcls.className = "row"
contDiv.appendChild(rowcls)

const colcls = document.createElement("div")
colcls.className = "col-12 col-sm-4 mx-auto my-5";
rowcls.appendChild(colcls)


const calDiv = document.createElement("div")
calDiv.setAttribute("class", "calculator");
colcls.appendChild(calDiv)

const inputdiv = document.createElement("div")
inputdiv.className = "inputDiv";
calDiv.appendChild(inputdiv)

const displayButton = document.createElement("input")
displayButton.id = "result"
displayButton.setAttribute("type", "text")
displayButton.setAttribute("placeholder", "0")
displayButton.className = "col-12"
displayButton.style.textAlign = "right";
inputdiv.appendChild(displayButton)

let newfunction = (tagname, Attribute, value,) => {         // function to create each button
  let elem = document.createElement(tagname);
  if (Attribute)
    elem.setAttribute("onclick", Attribute)
  elem.innerText = value;
  return elem
}

let div1 = document.createElement("div")
calDiv.appendChild(div1)
clearButton = newfunction("button", "Clr()", "C")
clearButton.id = "clear"
delButton = newfunction("button", "del()", "D")
button1 = newfunction("button", "display('%')", "%")
button6 = newfunction("button", "display('*')", "*")
clearButton.style.color = "blue";
delButton.style.color = "blue";
button1.style.color = "blue";
button6.style.color = "blue";
div1.append(clearButton, delButton, button1, button6)




let div2 = document.createElement("div")
calDiv.appendChild(div2)
value7 = newfunction("button", "display('7')", "7")
value8 = newfunction("button", "display('8')", "8")
value9 = newfunction("button", "display('9')", "9")
valueDiv = newfunction("button", "display('/')", "/")
valueDiv.style.color = "blue";
div2.append(value7, value8, value9, valueDiv)

let div3 = document.createElement("div")
calDiv.appendChild(div3)
value4 = newfunction("button", "display('4')", "4")
value5 = newfunction("button", "display('5')", "5")
value6 = newfunction("button", "display('6')", "6")
valueMinus = newfunction("button", "display('-')", "-")

valueMinus.id = "subtract"


valueMinus.style.color = "blue";
div3.append(value4, value5, value6, valueMinus)

let div4 = document.createElement("div")
calDiv.appendChild(div4)
value1 = newfunction("button", "display('1')", "1")
value2 = newfunction("button", "display('2')", "2")
value3 = newfunction("button", "display('3')", "3")
valuePlus = newfunction("button", "display('+')", "+")
valuePlus.id = "add"
value1.id = "1";
value2.id = "2";
value3.id = "3";
valuePlus.style.color = "blue";
div4.append(value1, value2, value3, valuePlus)

let div5 = document.createElement("div")
calDiv.appendChild(div5)
button16 = newfunction("button", "display('0')", "0")
button17 = newfunction("button", "display('00')", "00")
button15 = newfunction("button", "display('.')", ".")
button15.style.color = "blue";
button18 = newfunction("button", "Calculate()", "=")
button18.id = "equal"
button18.style.color = "blue";
div5.append(button16, button17, button15, button18)


