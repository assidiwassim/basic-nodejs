const express = require("express");
const app = express();

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));



app.get("/", (req, res) => {
  res.send("Hello bro bro... ");
});

const port = 3000;

app.listen(port, () => console.log("Server running on port 3000"));