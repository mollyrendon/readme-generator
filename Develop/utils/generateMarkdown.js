// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license, userName, project) {
  if(license === 'None') {
    return ``;
  }
  else {
    return `https://img.shields.io/github/${license}/${userName}/${project}`
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'None') {
    return ``;
  }
  else {
    return `* [License](#license)`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'None') {
    return ``;
  }
  else {
    return `# License`;
  }
}

// TODO: Create a function to generate markdown for README

/*- The code is a function that takes in data and returns the markdown text.
- The code starts by declaring a variable called data, which is an object with properties for title, description, table of contents, installation instructions, usage instructions, 
contributing instructions (license), tests (commands needed to run tests), and questions.

- The first line of the function declares the return type as string.
- This means that when you call this function it will return a string value back.*/

function generateMarkdown(data) {
  return `
  
  # ${data.title}
  
  # Description  
  ${data.description}

  # Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseLink(data.license)}
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  # Installation
  These programs need to be installed for the application to run: 
  ${data.installation}

  # Usage
  The application's primary use is 
  ${data.usage}

  ${renderLicenseSection(data.license)}
  ${renderLicenseBadge(data.license, data.userName, data.title)}n


  # Contributing  
  ${data.contributing}

  # Tests
  The following commands are needed to run tests: 
  ${data.tests}

  # Questions
  For any questions please contact ${data.userName} at this email ${data.email}.

`;
}

module.exports = generateMarkdown;
