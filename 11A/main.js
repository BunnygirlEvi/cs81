let pn = document.getElementById("pn");
let rm = document.getElementById("reminder");
let textFields = document.querySelectorAll("#text"); // Use querySelectorAll to select multiple elements

// Add event listener to pn
pn.addEventListener("focus", (event) => {
  textFields.forEach((field) => {
    rm.innerHTML = "Format: 123-456-7890";
  });
});

textFields.forEach((field) => {
  field.addEventListener("focus", (event) => {
    rm.innerHTML = "";
  });
});
