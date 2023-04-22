const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


const questions = [{ 
                    message: "Please enter the title of your project:",
                    type: "input",
                    name: "title",
                    validate: function(input) { 
                        return input.length >= 2;
                    }
                   }, 
                   {
                    message:  "Please enter your project's description:",
                    type: "input",
                    name: "description",
                   },
                   {
                    message:  "Please enter installation instructions.",
                    type: "input",
                    name: "installation",
                   },
                   {
                    message: "Please enter usage information.",
                    type: "input",
                    name: "usage",
                   },
                   {
                    message: "Please enter contribution guidelines.",
                    type: "input",
                    name: "contribution",
                   },
                   {
                    message: "Please enter test instructions.",
                    type: "input",
                    name: "tests",
                   },
                   {
                    message: "Please enter your email",
                    type: "input",
                    name: "email",
                    validate: function(input){ 
                        if (!input.includes('@')){
                            return false; 
                        }
                        emailparts = input.split('@');
                        if (emailparts.length != 2){
                            return false;
                        }
                        if (!emailparts[1].includes('.')){
                            return false;
                        }
                        return true;
                    }
                   },
                   {
                    message: "Please enter your GitHub username",
                    type: "input",
                    name: "username",
                    validate: function (input) { 
                        return input.length >= 2
                    }
                   },
                   {
                    message: "Please enter your license",
                    type: 'list',
                    name: "license",
                    choices: ['MIT License', 'Apache License 2.0', 'GNU General Public License v3.0', 'BSD 2-Clause \"Simplified\" License', 
                              'BSD 3-Clause \"New\" or \"Revised\" License', 'GNU General Public License v2.0', 'The Unlicense', 'None'],
                    }
                ];


//generates the markdown content by calling the generateMarkdown function with the data 
function writeToFile(fileName, data) {
    text = generateMarkdown(data);
    fs.writeFile(fileName, text, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
}
//uses the inquirer package to prompt the user with a set of questions. Once the user provides answers to these questions, the answers are stored in the data object.
function init() {
   inquirer
  .prompt(questions)
  .then((data) => {
    const fileName =  `README_${data.username.toLowerCase().split(' ').join('')}.md`;
    writeToFile(fileName, data);
  });

}

// Function call to initialize app
init();


