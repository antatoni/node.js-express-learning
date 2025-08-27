import url from 'url';

const urlString = 'https://www.google.com/search?q=hello+world';

//URL object
const urlObj = new URL(urlString);
console.log(urlObj);

//format(); takes obj and makes it  a string
console.log(url.format(urlObj));

//import.meta.url - import.meta provides metadata for the URL
console.log(import.meta.url);

//fileURLToPath() - gives the path for a given URL
console.log(url.fileURLToPath(import.meta.url));

//get only search params
//manual
console.log(urlObj.search); //gives the whole query
//with URLSearchParams()
const params = new URLSearchParams(urlObj.search);
console.log(params);
console.log(params.get('q'));
params.append('limit', '5');
console.log(params);
params.delete('limit');
console.log(params);
