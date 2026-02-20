const fs = require('fs/promises');
async function readFileData() {
    try {
        const data = await fs.readFile('demo.txt', 'utf8');
        console.log(data);
    } catch (error) {
            console.log("Error:", error.message);
       }
}
readFileData();