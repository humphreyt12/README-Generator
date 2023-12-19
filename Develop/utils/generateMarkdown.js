// TODO: Create a function to generate markdown for README, returns a license badge, returns the license section of README, and returns the license link

function generateMarkdown(data) {
  return `# ${data.name}

  ## Table of Contents
  * [Description](#Description)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Contribute](#Contribute)
  * [Tests](#Tests)
  * [License](#License)
  * [Contact_Me](#Contact_Me)
  
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
  ![license](https://img.shields.io/badge/License-${data.license}-yellow.svg)
  This project uses a ${data.license} license.

  ## Contact Me
  Github: ${data.github}
  Email: ${data.email}
`;
}

module.exports = generateMarkdown;