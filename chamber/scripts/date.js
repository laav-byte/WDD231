// Current Year
const year = document.querySelector("#currentyear");
year.textContent = new Date().getFullYear();

// Last Modified Date
const lastModified = document.querySelector("#lastModified");
lastModified.textContent = `Last Modified: ${document.lastModified}`;