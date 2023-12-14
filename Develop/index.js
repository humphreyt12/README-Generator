// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateREADMEfile = ({title, description, TableOfContents, installation, usage, license, contributing, tests, questions })
// TODO: Create an array of questions for user input
const questions = [
      {
        type: 'input',
        name: 'name',
        message: "What is your project's title?",
      },
      {
        type: 'input',
        name: 'description',
        message: "Enter a description for the project explaining the what, why, and how of your project.",
      },
      {
        type: 'input',
        name: 'installation',
        message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
      },
      {
        type: 'input',
        name: 'usage',
        message: "Provide instructions and examples for use.",
      },
      {
        type: 'input',
        name: 'contribute',
        message: "If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so.",
      },

      {
        type: 'input',
        name: 'tests',
        message: "Provide examples of commands on how to run tests for your project?",
      },
      {
        type: 'checkbox',
        message: 'What type of license do you want for the project?',
        name: 'license',
        choices: ['MIT', 'GNU GPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'The Unlicense', 'Boost Software License 1.0'],
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username.',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email.',
      },  
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
generateREADMEfile(answers);
}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();