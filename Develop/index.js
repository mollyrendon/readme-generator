// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
//List of questions the user will be asked, each one is a variable and all of them but license are required.
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
        message: 'Choose the license you would like to use. If none, press enter.',
        name:  'license',
        choices: ['MIT', 'Apache', 'MPL',]
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

/*The is the writeToFile Function and it takes two arguments: fileName and data.
The first argument is the name of the file that will be written to.
The second argument is an object containing whatever data the I want to write into the file.

The code then uses fs.writeFile() to write out the contents of the data onto a new text document 
in a folder called read-me-files on the computer's hard drive (the ./ at the beginning of the "fs" refers to the home directory).

If there is an error writing out the document it would print out on console.log().*/

function writeToFile(fileName, data) {
    fs.writeFile("./read-me-files/"+fileName, data, function(err) {
        if (err) {
            return console.log(err);
        }
    })
}

// TODO: Create a function to initialize app

/*This is a function that prompts the user with questions and then writes the answers to a file

The code starts by asking the user what they want to do, which is "init"
Then it asks them what question they would like answered.

The first thing this function does is ask the user if they would like to init or not.
If so, it will prompt them with questions and write their responses in a file called README.md

The code will prompt the user with a list of questions, and then write the text to a file*/


function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("README.md", generateMarkdown(data));
    })
}

// Function call to initialize app
init();
