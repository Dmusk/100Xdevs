const express = require("express");

const app = express();

app.get("/sum", (req, res) => {
  var a = parseInt(req.query.a);
  var b = parseInt(req.query.b);

  const ans = a + b;
  res.send(ans.toString());
});

app.listen(4500);
