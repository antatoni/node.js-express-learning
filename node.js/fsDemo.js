import fs from 'fs/promises';

//readFile() - callback
// fs.readFile('./node.js/test.txt', 'utf8', (err, data) => {
//   if (err) throw err;

//   console.log(data);
// });

// //readFileSync() - Synchronous version

// const data = fs.readFileSync('./node.js/test.txt', 'utf8');
// console.log(data);

// //readFile() - Promise .then()
// fs.readFile('./node.js/test.txt', 'utf8')
//   .then((data) => console.log(data))
//   .catch((err) => {
//     console.log(err);
//   });

// //readFile() - Async/Await version
const readFile = async () => {
  try {
    const data = await fs.readFile('./node.js/test.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

// writeFile() async/await
const writeFile = async () => {
  try {
    await fs.writeFile('./node.js/test.txt', 'Hello i am writing to this file');
    console.log('File written to');
  } catch (err) {
    console.log(err);
  }
};

//appendFile();
const appendFile = async () => {
  try {
    await fs.appendFile('./node.js/test.txt', '\nThis is appended text');
    console.log('File being appended');
  } catch (err) {
    console.log(err);
  }
};
writeFile();
appendFile();
readFile();
