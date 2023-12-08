let presidentsData;

// Assuming 'data.json' contains your JSON data
const fs = require('fs');

fs.readFile('data.json', 'utf8', (err, jsonString) => {
  if (err) {
    console.log('Error reading file:', err);
    return;
  }
  
  const data = JSON.parse(jsonString);
  
  // Now 'data' is a JavaScript object containing your JSON data
  // You can access specific values using keys
  console.log(data.presidents);
});


let presidentsArr;

function createOptions(objOfPresidents) {
    presidentsArr = objOfPresidents.presidents;
    const optionsHolder = document.getElementById('guess');
    for (let i = 0; i < objOfPresidents.presidents.length; i++) {
        let optionEl = document.createElement('option');
        optionEl.setAttribute('value', objOfPresidents.presidents[i].name);
        optionEl.innerText = objOfPresidents.presidents[i].name;
        optionsHolder.appendChild(optionEl);
    }
}

const choosePresident = () => presidentsData.presidents[Math.floor(Math.random() * presidentsData.presidents.length)];
const hintNum = 0;

function showHint() {
    let hintBox = document.getElementById("hintBox");
    hintBox.style.display = "block";
    hintBox.innerHTML = choosePresident().hints[hintNum];
    // Update hintNum logic if needed.
}
