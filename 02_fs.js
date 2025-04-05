const fs = require('fs');

fs.writeFile('message.txt', '"Node.js is awesome"', (err) => {
    if (err) throw err;
    console.log('File created successfully!');
});

fs.readFile('message.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('File content:', data);
    });


fs.unlink('message.txt', (err) => {
    if (err) {
        console.error('Error in deleting file:', err);
    } else {
        console.log ('File deleted successfully!');
    }
});