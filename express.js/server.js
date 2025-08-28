import express from 'express';
import path from 'path';
import url from 'url';
import posts from './routes/posts.js';
import logger from './middleware/logger.js';
const port = process.env.PORT || 8000;
const app = express();

//Body parses middleware;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Logger middleware
app.use(logger);

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

//Routes
app.use('/api/posts', posts);

app.listen(port, () => console.log(`Server is running on port ${port}`));
