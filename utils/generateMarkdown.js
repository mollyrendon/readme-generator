// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license, github, titleInput) {
  if(license === 'None') {
    return ``;
  }
  else {
    return `<img src="https://img.shields.io/github/license/${github}/${titleInput}">`
  }
}

//npm init for next assignment
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
    return `# License 
    ${license}`;
  }
}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  return `
  ${renderLicenseBadge(data.license, data.github, data.title)}

  
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
  

  # Contributing  
  ${data.contributing}

  # Tests
  The following commands are needed to run tests: 
  ${data.tests}

  # Questions
  For any questions please contact ${data.github} at this email ${data.email}.

`;
}

module.exports = generateMarkdown;
