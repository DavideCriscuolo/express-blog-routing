const express = require("express");
const app = express();
const port = 3000;
const PostsRouter = require("./routes/posts");

app.use("/posts", PostsRouter);
app.listen(port, () => {
  console.log(`Il server è in ascolto`);
});
