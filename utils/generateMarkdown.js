// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license){
    case "MIT License": return "https://choosealicense.com/licenses/mit/";
    case "Apache License 2.0": return "https://choosealicense.com/licenses/apache-2.0/";
    case "GNU General Public License v3.0": return "https://choosealicense.com/licenses/lgpl-3.0/";
    case "BSD 2-Clause \"Simplified\" License": return "https://opensource.org/license/bsd-2-clause/";
    case "BSD 3-Clause \"New\" or \"Revised\" License": return "https://choosealicense.com/licenses/bsd-3-clause/";
    case "GNU General Public License v2.0": return "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html";
    case "The Unlicense": return "https://choosealicense.com/licenses/unlicense/";
    default: return "";             
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch(license){
      case  "MIT License": return `![${license}](https://img.shields.io/badge/license-MIT-green.svg)`;
      case "Apache License 2.0": return `![${license}](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
      case "GNU General Public License v3.0": return `![${license}](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
      case "BSD 2-Clause \"Simplified\" License": return `![${license}](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)`;
      case "BSD 3-Clause \"New\" or \"Revised\" License": return  `![${license}](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)`
      case "GNU General Public License v2.0": return `![${license}](https://img.shields.io/badge/License-GPL%20v2-blue.svg)`;
      case "The Unlicense": return  `![${license}](https://img.shields.io/badge/license-Unlicense-blue.svg)`;
      default: return "";             
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  console.log
  if (license !== "None"){
    return `## Licence
  ${renderLicenseBadge(license)} <br/>
  Licensed under the [${license}](${renderLicenseLink(license)}).`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  
  ## Description
  ${data.description}

  ## Table Of Content 
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Contribution Guidelines](#Contribution-Guidelines)
  * [Tests](#Tests)
  * [Questions](#Questions)

  ## Installation
  ${data.installation}
  
  ${renderLicenseSection(data.license)}

  ## Usage
  ${data.usage}

  ## Contribution Guidelines
  
  ${data.contribution}
    
  ## Tests
  ${data.test}
    
  ## Questions
  Please feel free to reach me at [my email](mailto:${data.email}) or at [${data.username}](https://github.com/${data.username})
  `;
}

module.exports = generateMarkdown;




