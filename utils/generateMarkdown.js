// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
   return  `![${license}](${renderLicenseLink(license)})`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license){
    case  "MIT License": "https://img.shields.io/badge/license-MIT-green";
    case "Apache License 2.0": return "https://img.shields.io/badge/License-Apache%202.0-blue.svg";
    case "GNU General Public License v3.0": return "https://img.shields.io/badge/License-GPLv3-blue.svg";
    case "BSD 2-Clause \"Simplified\" License": return "https://img.shields.io/badge/License-BSD%202--Clause-orange.svg";
    case "BSD 3-Clause \"New\" or \"Revised\" License": return  "https://img.shields.io/badge/License-BSD%203--Clause-blue.svg"
    case "GNU General Public License v2.0": return "https://img.shields.io/badge/License-GPL%20v2-blue.svg";
    case "The Unlicense": return  "https://img.shields.io/badge/license-Unlicense-blue.svg";
    default: return "";             
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "No licence"){
  return `#Licence
  renderLicenseBadge(license)

  Licensed under the [${license}](LICENSE.txt).
  `}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}



   ${renderLicenseSection(license)}
`;
}

module.exports = generateMarkdown;
