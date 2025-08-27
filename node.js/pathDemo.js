import path from 'path';
import url from 'url';

const filePath = './dir1/dir2/test.txt';

//basename(); gives only the base (last file)

console.log(path.basename(filePath));

//dirname() the path until the last file;
console.log(path.dirname(filePath));

//extname() only the file extension
console.log(path.extname(filePath));

//parse() - gives an object with the whole path
console.log(path.parse(filePath));

const __filename = url.fileURLToPath(import.meta.url);
console.log(__filename); // gives whole path and filename

const __dirname = path.dirname(__filename);
console.log(__dirname); // path until the file (without the filename )

//join() - joins path's automatically to the windows/linux/mac counterpart (different \/);
const filePath2 = path.join(__dirname, 'dir1', 'dir2', 'test.txt');
console.log(filePath2);

//resolve() - makes an absolute path !
const filePath3 = path.resolve(__dirname, 'dir1', 'dir2');
console.log(filePath3);
