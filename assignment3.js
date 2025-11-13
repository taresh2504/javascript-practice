// Task 1
document.getElementById("form1").addEventListener("submit", function(e){
  e.preventDefault();
  const name = document.getElementById("nameInput").value;
  document.getElementById("nameOutput").innerText = name.toUpperCase();
});

// Task 2 
document.getElementById("form2").addEventListener("submit", function(e){
  e.preventDefault();
  const city = document.getElementById("cityInput").value.toLowerCase();
  document.getElementById("cityOutput").innerText = `You live in ${city}`;
});

// Task 3 
document.getElementById("form3").addEventListener("submit", function(e){
  e.preventDefault();
  const str = document.getElementById("trimInput").value;
  document.getElementById("trimOutput").innerText = `"${str.trim()}"`;
});

// Task 4 
document.getElementById("form4").addEventListener("submit", function(e){
  e.preventDefault();
  const str = document.getElementById("trimStartInput").value;
  document.getElementById("trimStartOutput").innerText = `"${str.trimStart()}"`;
});

// Task 5 
document.getElementById("form5").addEventListener("submit", function(e){
  e.preventDefault();
  const str = document.getElementById("trimEndInput").value;
  document.getElementById("trimEndOutput").innerText = `"${str.trimEnd()}"`;
});

// Task 6 
document.getElementById("form6").addEventListener("submit", function(e){
  e.preventDefault();
  const name = document.getElementById("firstNameInput").value;
  const course = document.getElementById("courseInput").value;
  document.getElementById("courseOutput").innerText =
    `My name is ${name} and I am learning ${course}.`;
});

// Task 7 
document.getElementById("form7").addEventListener("submit", function(e){
  e.preventDefault();
  const msg = document.getElementById("messageInput").value;
  const trimmed = msg.trim();
  document.getElementById("messageOutput").innerHTML = `
    Uppercase: ${msg.toUpperCase()}<br>
    Lowercase: ${msg.toLowerCase()}<br>
    Trimmed: "${trimmed}"<br>
    Template Literal: Your final message is: ${trimmed}
  `;
});
