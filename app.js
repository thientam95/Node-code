const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("In the middleware !");
  next(); // Allows the request to continue to the next middleware
});

app.use((req, res, next) => {
  console.log("In another middleware !");
  res.send("<h1>Hello from middleware.</h1>");
  // Send respond, ta sẽ không đi đến đc middleware tiếp theo
  // Chúng tả chỉ co thể đi đến middleware tiếp theo bằng câu lệnh next
});

app.use((req, res, next) => {
  console.log("In the final middleware !");
});

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server listening on port 3000!");
});
