// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the description of your project?',
        name:  'Description',
    },
    {
        type: 'input',
        message: 'What are the installation instructions? Dependencies, commands that are needed.',
        name:  'Installation',
    },
    {
        type: 'input',
        message: 'How do you use this application?',
        name:  'Usage',
    },
    {
        type: 'checkbox',
        message: 'Choose from the following licenses.',
        name:  'License',
    },
    {
        type: 'input',
        message: 'Who are the contributors for this project?',
        name:  'Contributing',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name:  'userName',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name:  'Email',
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
