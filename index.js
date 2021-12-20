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
        validate: titleInput => {
            if (titleInput) {
              return true;
            } else {
              console.log('You need to enter a project title!');
              return false;
            }
          }
    },
    {
        type: 'input',
        message: 'What is the description of your project? (Required)',
        name:  'description',
        validate: descriptionInput => {
            if (descriptionInput) {
              return true;
            } else {
              console.log('You need to enter a project description!');
              return false;
            }
          }
    },
    {
        type: 'input',
        message: 'What are the installation instructions? Dependencies, commands that are needed. (Required)',
        name:  'installation',
        validate: installationInput => {
            if (installationInput) {
              return true;
            } else {
              console.log('You need to enter installation instructions!');
              return false;
            }
          }
    },
    {
        type: 'input',
        message: 'How do you use this application? (Required)',
        name:  'usage',
        validate: usageInput => {
            if (usageInput) {
              return true;
            } else {
              console.log('You need to describe how to use this application!');
              return false;
            }
          }
    },
    {
        type: 'list',
        message: 'Choose the license you would like to use.  Use arrow keys and hit enter when you have made your choice.',
        name:  'license',
        choices: ['MIT', 'Apache', 'MPL', 'None']
    },
    {
        type: 'input',
        message: 'Who are the contributors for this project? (Required)',
        name:  'contributing',
        validate: contributingInput => {
            if (contributingInput) {
              return true;
            } else {
              console.log('You need to list contributers to the project!');
              return false;
            }
          }
    },
    {
        type: 'input',
        message: 'What commands do you need to run a test on your project? (Required)',
        name:  'tests',
        validate: testInput => {
            if (testInput) {
              return true;
            } else {
              console.log('You need to describe which commands you need to run a test!');
              return false;
            }
          }
    },
    {
        type: 'input',
        message: 'What is your GitHub username? (Required)',
        name:  'github',
        validate: githubInput => {
            if (githubInput) {
              return true;
            } else {
              console.log('You need to enter your GitHub username!');
              return false;
            }
          }
    },
    {
        type: 'input',
        message: 'What is your email? (Required)',
        name:  'email',
        validate: emailInput => {
            if (emailInput) {
              return true;
            } else {
              console.log('You need to enter your email!');
              return false;
            }
          }
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
