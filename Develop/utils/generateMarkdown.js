// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.name}

  ## Table of Contents
  * [Description](#Description)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Contribute](#Contribute)
  * [Tests](#Tests)
  * [License](#License)
  * [Contact Me](#Contact Me)
  
  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contribute
  ${data.contribute}

  ## Tests
   ${data.tests}

  ## License 
  ![license](http://img.shields.io/badge/license-${data.license}-informational.svg?style=for-the-badge&logo=appveyor)
  This project uses a ${data.license} license.

  ## Contact Me
  Github: ${data.github}
  Email: ${data.email}
`;
}

module.exports = generateMarkdown;