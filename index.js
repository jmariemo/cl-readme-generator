// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
        {
            type: 'input',
            message: 'Project Title:',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Project Description:',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Installation Instructions:',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Usage Information:',
            name: 'usage',
        },
        {
            type: 'list',
            message: 'License:',
            name: 'license',
            choices: ['Unlicense', 'MIT license (Massachusetts Institute of Technology)', 'GNU General Public License (GNU GPL)', 'Internet Systems Consortium (ISC) License', 'Apache License 2.0'],
        },
        {
            type: 'input',
            message: 'Contribution Guidelines:',
            name: 'contribution',
        },
        {
            type: 'input',
            message: 'Testing Instructions:',
            name: 'testing',
        },
        {
            type: 'input',
            message: 'Project Questions:',
            name: 'questions',
        },
        {
            type: 'input',
            message: 'Github username:',
            name: 'username',
        },
        {
            type: 'input',
            message: 'Contact email:',
            name: 'email',
        },
    ];

// TODO: Create a function to write README file
function writeReadMe(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log('Success! Readme complete.');
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(results) {
        const markdownText = generateMarkdown(results);
        writeReadMe('README.md', markdownText);
    })
}

// Function call to initialize app
init();
