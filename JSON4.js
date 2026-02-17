let obj1 = { name: "John", age: 25 };
let jsonData1 = JSON.stringify(obj1);
console.log(jsonData1);
let jsonData2 = '{"name":"John","age":25}';
let obj2 = JSON.parse(jsonData2);
console.log(obj2.name);


