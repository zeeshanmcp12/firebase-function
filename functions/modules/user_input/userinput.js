const functions = require("firebase-functions");

const userInput = functions.https.onRequest((request, response) => {
  const userInput = request.query.input;

  if (userInput) {
    response.send(`You entered: ${userInput}`);
  } else {
    response.send("Please provide an 'input' query parameter.");
  }
});

module.exports = userInput;
