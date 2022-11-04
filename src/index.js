import express from "express";

const app = express();
app.use(express.json());

const users = [];
const tweets = [];

app.post("/sign-up", (req, res) => {
  const { username, avatar } = req.body;

  const user = {
    username,
    avatar,
  };

  users.push(user);
  res.send("OK");
});

app.post("/tweets", (req, res) => {
  const { username, tweet } = req.body;

  const userTweet = {
    username,
    tweet,
  };

  tweets.push(userTweet);
  res.send("OK");
});

app.get("/tweets", (req, res) => {
  const lastTenTweets = tweets.reverse().slice(0, 10);
  const lastTenAvatar = users.reverse().slice(0, 10);

  const lastTenTweetsWithAvatar = lastTenTweets.map(
    ({ username, tweet }, index) => {
      const avatar = lastTenAvatar[index].avatar;
      return {
        username,
        avatar,
        tweet,
      };
    }
  );

  res.send(lastTenTweetsWithAvatar);
});

app.listen(5000, () => {
  console.log("server running in port: 5000");
});
