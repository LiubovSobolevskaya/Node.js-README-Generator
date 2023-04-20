# Node.js-README-Generator
7th assignment of UCB Extension Web Development Bootcamp

Here is the link to video about how this application operates ![](todo)

## Desciption
If you use a command-line application that asks for information about your application repository, a high-quality and professional README.md file will be generated for you. This README file will include the title of your project and sections for Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions.

You will need to enter your project title, description, installation instructions, usage information, contribution guidelines, and test instructions, which will be added to their respective sections in the README file.

You will also need to choose a license for your application from a list of options, which will add a badge for that license to the top of the README file and a notice in the License section explaining which license your application is covered under.

Additionally, you can enter your GitHub username and email address, which will be added to the Questions section of the README file with a link to your GitHub profile and instructions on how to reach you with additional questions.

Finally, if you click on the links in the Table of Contents, you will be taken to the corresponding section of the README file.

## Technology Used 
   
* [Git](https://git-scm.com/)   
* [JavaScript](https://www.javascript.com/)   
* [Node.js](https://nodejs.dev/)


__________________________

## Code Example

This is a function called renderLicenseSection that takes in a license parameter. If the license is not equal to "None", it returns a string with a License section that includes a rendered license badge and a link to the license. If the license is "None", it returns an empty string.

```javascript
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
```
____________________________________

## Web application's appearance and functionality

![](todo)

## Author Info

### Liubov Sobolevskaya
* [LinkedIn](https://www.linkedin.com/in/liubov-sobolevskaya-45756a101/)
* [Github](https://github.com/LiubovSobolevskaya)
* [Kaggle](https://www.kaggle.com/lyubovsobolevskaya)









