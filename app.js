const path = require("path");
const express = require("express");
const app = express();
const router = new express.Router();
const port = process.env.PORT || 3030;
const source = "./pelumi-calculategp/public";
// app.set("view-engine", "ejs");

// app.get("/", (req, res) => {
//   res.render(".ejs");
// });
app.use(express.static(source));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build", "Index.html"));
}
app.get("*", (request, response) => {
  response.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
