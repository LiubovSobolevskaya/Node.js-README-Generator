
// returns a link to the license information based on the provided license
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

// returns a link to the license badge image based on the provided license
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

// takes rendered license badge and link to the license info to generate a correspondig section in README
function renderLicenseSection(license) {
  if (license !== "None"){
    return `## Licence
  ${renderLicenseBadge(license)} <br/>
  Licensed under the [${license}](${renderLicenseLink(license)}).`
  }
  else{
    return "";
  }
}

//function to generate markdown for README that uses temlate literals and provided data
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  
  ## Description
  ${data.description}

  ## Table Of Content 
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [Questions](#Questions)

  ## Installation
  ${data.installation}
  
  ${renderLicenseSection(data.license)}

  ## Usage
  ${data.usage}

  ## Contributing
  
  ${data.contribution}
    
  ## Tests
  ${data.tests}
    
  ## Questions
  Please feel free to reach me with any questions at [my email](mailto:${data.email}) or at [${data.username}](https://github.com/${data.username})
  `;
}

module.exports = generateMarkdown;




