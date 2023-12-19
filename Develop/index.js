// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { Console } = require('console');
const generateMarkdown = require("./utils/generateMarkdown");

const generateREADMEfile = ({title, description, TableOfContents, installation, usage, license, contributing, tests, questions }) => {}
// TODO: Create an array of questions for user input
const questions = [
      {
        type: 'input',
        name: 'name',
        message: "What is your project's title?",
        validate: function (answer) {
          if (answer.length < 1) {
              return console.log("A valid project title is required.");
          }
          return true;
      }
      },
      {
        type: 'input',
        name: 'description',
        message: "Enter a description for the project explaining the what, why, and how of your project.",
        validate: function (answer) {
          if (answer.length < 1) {
              return console.log("A valid project description is required.");
          }
          return true;
      }
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
        choices: ['MIT_License', 'GNU_GPLv3', 'Mozilla_Public_License_2.0', 'Apache_License_2.0', 'The_Unlicense', 'Boost_Software_License_1.0'],
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username.',
        validate: function (answer) {
          if (answer.length < 1) {
              return console.log("A valid GitHub username is required.");
          }
          return true;
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email.',
        validate: function (answer) {
          if (answer.length < 1) {
              return console.log("A valid email is required.");
          }
          return true;
      }
      },  
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
fs.generateREADMEfile(fileName, data, err => {
  if (err) {
    return console.log(err);
  }
  console.log("Success! Your README.md file has been generated")
    });
}

// TODO: Create a function to initialize app
function init() {
  inquirer
  .prompt(questions)
  .then((answers) => {
    const writeToFile =  generateMarkdown(answers);
    
    fs.writeFile('README.md', writeToFile, (err) =>
      err ? console.log(err) : console.log('You successfully created a README file!')
    );
  });
}

// Function call to initialize app
init();