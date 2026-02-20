const fs = require('fs');
console.log("Program Started");
try {
    const data = fs.readFileSync('demo.txt','utf-8');
    console.log(data);
} catch (error) {
    console.error("Error reading file:", error.message);
}
console.log("Program Ended");
