const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

let server;
if (require.main === module) {
  server = app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
  });
} else {
  server = app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
  });
}

module.exports = { app, server };
