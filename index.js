const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your message?',
            name: 'readMeMessage',
        }
    ])
    .then(function(results) {
        const outputText = `\n${results.readMeMessage}`;
        fs.appendFile('README.md', outputText, (error) =>
        {
            if (error) {
                console.log(error);
            } else {
                console.log('Success!');
            }
        })
    })