const express = require("express");
const app = express();
const port = 3000;
const PostsRouter = require("./routes/posts");

app.listen(port, () => {
  console.log(`Il server è in ascolto`);
});
app.use("/posts", PostsRouter);
