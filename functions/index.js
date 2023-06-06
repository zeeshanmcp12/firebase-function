/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const functions = require("firebase-functions");
// const userInput = require("./modules/user_input/userinput");

exports.home = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase Functions!");
});

// exports.string = functions.https.onRequest((request, response) => {
//   const name = "Abdullah";
//   response.send("Hello from string functions!");
//   console.info("This is " + name + " from nowhere.");
// });

// exports.printInput = functions.https.onRequest((request, response) => {
//   const userInput = request.query.input;

//   if (userInput) {
//     response.send(`You entered: ${userInput}`);
//   } else {
//     response.send("Please provide an 'input' query parameter.");
//   }
// });


// exports.echoInput = userInput;
