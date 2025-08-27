import express from 'express';
import path from 'path';
import url from 'url';
const port = process.env.PORT || 8000;
const app = express();

const __filename = url.fileURLToPath(import.meta.url); // shows current file location
// console.log(__filename);

const __dirname = path.dirname(__filename); //shows path until our current file
// console.log(__dirname);

//setup static folder
app.use(express.static(path.join(__dirname, 'public'))); // this creates static routes -
// anything in that folder can and will be rendered
// you need to put .html at the end (or however the fiels end in !)

// express automatically handles what content type you use !
//this is how to create routes manually !
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

let posts = [
  { id: 1, title: 'Post one' },
  { id: 2, title: 'Post two' },
  { id: 3, title: 'Post three' },
  { id: 4, title: 'Post four' },
];

//Get all posts
app.get('/api/posts', (req, res) => {
  const limit = parseInt(req.query.limit);
  if (!isNaN(limit) && limit > 0) {
    res.json(posts.slice(0, limit));
  } else {
    res.json(posts);
  }
});

//Get single post
app.get('/api/posts/:id', (req, res) => {
  const id = parseInt(req.params.id);
  res.json(posts.filter((post) => post.id === id));
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
