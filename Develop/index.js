// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name:  'title',
    },
    {
        type: 'input',
        message: 'What is the description of your project?',
        name:  'description',
    },
    {
        type: 'input',
        message: 'What are the installation instructions? Dependencies, commands that are needed.',
        name:  'installation',
    },
    {
        type: 'input',
        message: 'How do you use this application?',
        name:  'usage',
    },
    {
        type: 'input',
        message: 'Type in the license you want to use, if none just hit enter',
        name:  'license',
    },
    {
        type: 'input',
        message: 'Who are the contributors for this project?',
        name:  'contributing',
    },
    {
        type: 'input',
        message: 'What commands do you need to run a test on your project?',
        name:  'tests',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name:  'userName',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name:  'email',
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile("./read-me-files"+fileName, data, function(err) {
        if (err) {
            return console.log(err);
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("read-me-filesREADME.md", generateMarkdown(data));
    })
}

// Function call to initialize app
init();
