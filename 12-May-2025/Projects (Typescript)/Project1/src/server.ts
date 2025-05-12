import express, { Request, Response } from 'express';
import path from 'path';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;

// In-memory user store
const users: { [username: string]: string } = {};

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

// Routes
app.get('/', (_req: Request, res: Response) => {
  res.redirect('/login.html');
});

app.post('/signup', (req: Request, res: Response) => {
  const { username, password } = req.body;
  if (users[username]) {
    return res.send('User already exists. <a href="/signup.html">Try again</a>.');
  }
  users[username] = password;
  return res.send('Signup successful! <a href="/login.html">Login here</a>.');
});

app.post('/login', (req: Request, res: Response) => {
  const { username, password } = req.body;
  if (users[username] === password) {
    return res.send(`Welcome, ${username}! You are logged in.`);
  }
  return res.send('Invalid credentials. <a href="/login.html">Try again</a>.');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
