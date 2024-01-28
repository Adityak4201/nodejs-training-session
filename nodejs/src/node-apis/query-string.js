import querystring from "querystring";

const query = querystring.parse("test=1&name=John&email=john.doe@gmail.com");

console.log(query);

const query2 = querystring.stringify(query);
console.log(query2)

const url = new URL("https://pos.insurancedekho.com/pos-bff/api/health");

console.log(url);
