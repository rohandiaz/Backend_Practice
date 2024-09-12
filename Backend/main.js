import express from 'express';

const app = express();

app.get('/', (req,res) => {
    res.send('<h1>Server is ready</h1>');
});

app.get('/api/jokes', (req,res) => {
    const jokes = [
        {
          id: 1,
          setup: "Why don't scientists trust atoms?",
          punchline: "Because they make up everything!"
        },
        {
          id: 2,
          setup: "Why did the math book look sad?",
          punchline: "Because it had too many problems."
        },
        {
          id: 3,
          setup: "Why do cows wear bells?",
          punchline: "Because their horns don't work!"
        },
        {
          id: 4,
          setup: "Why was the computer cold?",
          punchline: "Because it left its Windows open!"
        },
        {
          id: 5,
          setup: "Why don't skeletons fight each other?",
          punchline: "They don't have the guts."
        }
      ];
      res.send(jokes)
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });