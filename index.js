

// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [{ 
                    message: "Please enter the title of your project.",
                    type: "input",
                    name: "title",
                    validate: function (input) { 
                        return input.length >= 2
                    }
                   }, 
                   {
                    message:  "Please enter your project's description.",
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
                    validate: function (input) { 
                        if (!input.uncludes('@')){
                            return false; 
                        }
                        emailparts = input.split('@');
                        if (emailparts.length !=2){
                            return false;
                        }
                        if (!emailparts[-1].includes('.')){
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
                    name: "licence",
                    choices: ['MIT License', 'Apache License 2.0', 'GNU General Public License v3.0', 'BSD 2-Clause \"Simplified\" License', 
                              'BSD 3-Clause \"New\" or \"Revised\" License', 'GNU General Public License v2.0', 'The Unlicense'],
                   }
                ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    text = generateMarkdown(data);
    fs.appendFile(filename, text, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
   inquirer
  .prompt(questions)
  .then((data) => {
    console.log(data);
    const filename = `README_${data.name.toLowerCase().split(' ').join('')}.md`;

    
  });

}

// Function call to initialize app
init();


