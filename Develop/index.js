// To Do:  
//Make everything but licenses required 
//Make license a checkbox that you can choose form and add none as an option


// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project? (Required)',
        name:  'title',
    },
    {
        type: 'input',
        message: 'What is the description of your project? (Required)',
        name:  'description',
    },
    {
        type: 'input',
        message: 'What are the installation instructions? Dependencies, commands that are needed. (Required)',
        name:  'installation',
    },
    {
        type: 'input',
        message: 'How do you use this application? (Required)',
        name:  'usage',
    },
    {
        type: 'checkbox',
        message: 'Choose the license you would like to use',
        name:  'license',
        //choices: [''],
    },
    {
        type: 'input',
        message: 'Who are the contributors for this project? (Required)',
        name:  'contributing',
    },
    {
        type: 'input',
        message: 'What commands do you need to run a test on your project? (Required)',
        name:  'tests',
    },
    {
        type: 'input',
        message: 'What is your GitHub username? (Required)',
        name:  'userName',
    },
    {
        type: 'input',
        message: 'What is your email? (Required)',
        name:  'email',
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile("./read-me-files/"+fileName, data, function(err) {
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
