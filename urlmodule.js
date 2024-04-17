
//personalized url
const myURL = new URL('https://example.org');
myURL.pathname = '/a/b/c';
myURL.search = '?name=rishav';
myURL.port=8080;

console.log(myURL);
console.log(myURL.href);

