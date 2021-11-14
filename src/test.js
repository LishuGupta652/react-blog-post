function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Language: java
// Path: src\test.js
// TODO: Add tests.
// Create a function that open a web browser and open a url.

function openPage(url) {
  return new Promise(function (resolve) {
    const browser = new Browser();
    browser.visit(url, function () {
      resolve();
    });
  });
}

openPage("https://www.gitman.ml").then(function () {
    console.log("Task completed"));
