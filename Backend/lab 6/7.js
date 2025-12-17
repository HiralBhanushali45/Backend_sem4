
//7) Write a program to list all files in a folder called documents/ using fs.readdir() and print the file names one by one with for each loop

const fs = require('fs');
fs.readdir('Lab_6/', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    for (const files of data) {
        console.log(data);
    }
});