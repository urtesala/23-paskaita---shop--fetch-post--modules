"use strict";
console.log("pr.js");

// suzinoti koks dabartinio produkto id
// Create urlParams query string
console.log("window.location.search ===", window.location.search);
const urlParams = new URLSearchParams(window.location.search);

// Get value of single parameter
const procutId = urlParams.get("prId");

// Output value to console
console.log(procutId);

// parsiusti ta produka
getSingleProduct(procutId).then((productObj) => {
  console.log("productObj ===", productObj);
  renderHTML(productObj);
});

// sugeneruoti jo html arba supildyti html
