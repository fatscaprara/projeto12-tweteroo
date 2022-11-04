import express from "express";

const app = express();
app.use(express.json());

const users = [];

app.post("/sign-up", (req, res) => {
  const { username, avatar } = req.body;

  const user = {
    username,
    avatar,
  };

  users.push(user);
  res.send("OK");
});

app.listen(5000, () => {
  console.log("server running in port: 5000");
});
