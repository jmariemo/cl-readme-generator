// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license[0]  === "MIT License") {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-orange.svg)`;
  } else if(license[0]  === "Unlicense") {
    return `![License: Unlicense](https://img.shields.io/badge/License-Unlicense-green.svg)`;
  } else if(license[0]  === "Apache License 2.0") {
    return `![License: Apache](https://img.shields.io/badge/License-Apache2.0-yellow.svg)`;
  } else {
    return ``;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license[0]  === "MIT License") {
    return `(https://mit-license.org)`;
  } else if(license[0]  === "Unlicense") {
    return `(https://unlicense.org)`;
  } else if(license[0]  === "Apache License 2.0") {
    return `(https://www.apache.org/licenses/LICENSE-2.0.html)`;
  } else {
    return ``;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title} [${renderLicenseBadge(data.license)}](#license)
  
  
  ## Description

  ${data.description}
  

  ## Table of Contents

  > [Installation](#installation)
  >
  > [Usage](#usage)
  >
  > [License](#license)
  >
  > [Contribution](#contribution)
  >
  > [Testing](#testing)
  >
  > [Questions](#questions)


  ## Installation

  ${data.installation}


  ## Usage

  ${data.usage}


  ## License 

  This application is covered under the 
  [${data.license}]${renderLicenseLink(data.license)}.
  Click for details.


  ## Contributing

  ${data.contribution}

  
  ## Testing

  ${data.testing}

  
  ## Questions

  * My Github: [${data.username}](https://github.com/${data.username})

  * Email me at ${data.email} with any questions.
  - - -`;
}

module.exports = generateMarkdown;
