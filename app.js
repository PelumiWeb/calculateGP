const path = require("path");
const express = require("express");
const app = express();
const router = new express.Router();
const port = process.env.PORT || 3030;
const source = "./pelumi-calculategp/public";
console.log(source);
const test = app.use(express.static(source));

app.listen(port, () => {
  console.log("Server is up on port " + port);
});

// if (process.env.NODE_ENV === 'production') {
// 	app.use(express.static('client/build'));
// }
// app.get('*', (request, response) => {
// 	response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
// });
