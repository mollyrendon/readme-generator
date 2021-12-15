// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(!license) {
    return ``;
  }
  else {
    return `${license.badge}`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(!license) {
    return ``;
  }
  else {
    return `${license.link}`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license) {
    return ``;
  }
  else {
    return `${license.section}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}
  
  #Description  
  ${data.description}

  #Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  #Installation
  These programs need to be installed for the application to run: 
  ${data.installation}

  #Usage
  The application's primary use is 
  ${data.usage}

  #Contributing
  Contributing:  
  ${data.contributing}

  #Tests
  The following commands are needed to run tests: 
  ${data.tests}

  #Questions
  For any questions please contact ${data.userName} at this email ${data.email}.

`;
}

module.exports = generateMarkdown;
