const url = require('url');

const myUrl = new URL('http://localhost:8080/hello.html?id=100&status=active');

console.log(myUrl.host);

//Host name(does not get the port number)
console.log(myUrl.hostname);

//Pathname
console.log(myUrl.pathname);

//Serialized query
console.log(myUrl.search);

//param object
console.log(myUrl.searchParams);

//Add Params
myUrl.searchParams.append('abc','123');
console.log(myUrl.searchParams)

//Loop the Params
myUrl.searchParams.forEach((value,name)=>console.log('${name}: ${value}'));