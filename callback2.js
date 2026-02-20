const fs = require('fs');
console.log("Program Started");
fs.readFile('demo.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err.message);
        return;
    }
    console.log(data);
});
console.log("Program Ended");

