// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Unlicense') {
    return `![License: ${license}](https://img.shields.io/badge/license-Unlicense-green.svg)`;
  } else if (license === 'MIT license (Massachusetts Institute of Technology)') {
    return `![License: ${license}](https://img.shields.io/badge/license-MIT-green.svg)`;
  } else if (license === 'GNU General Public License (GNU GPL)') {
    return `![License: ${license}](https://img.shields.io/badge/license-GNU-GPL-green.svg)`;
  } else if (license === 'Internet Systems Consortium (ISC) License') {
    return `![License: ${license}](https://img.shields.io/badge/license-ISC-green.svg)`;
  } else if (license === 'Apache License 2.0') {
    return `![License: ${license}](https://img.shields.io/badge/license-Apache2.0-green.svg)`;
  } else (license === '') 
    return '';
  }


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'Unlicense') {
    return 'https://opensource.org/license/unlicense/';
  } else if (license === 'MIT license (Massachusetts Institute of Technology)') {
    return 'https://opensource.org/license/mit/';
  } else if (license === 'GNU General Public License (GNU GPL)') {
    return 'https://opensource.org/license/gpl-2-0/';
  } else if (license === 'Internet Systems Consortium (ISC) License') {
    return 'https://opensource.org/license/isc/';
  } else if (license === 'Apache License 2.0') {
    return 'https://opensource.org/license/apache-2-0/';
  } else (license === '') 
    return '';
  }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `This application is covered under ${license}.\n${renderLicenseLink(license)}\nClick link for details.`;
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title} ${renderLicenseBadge(data.license)}
  
  ## Description

  ${data.description}
  
  ## Table of Contents

  > [Installation](#installation)
  >
  > [Usage](#usage)
  >
  > [License](#license)
  >
  > [Contribution Guidelines](#contribution)
  >
  > [Testing](#testing)
  >
  > [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License 

 ${renderLicenseSection(data.license)}

  ## Contribution Guidelines

  ${data.contribution}
  
  ## Testing

  ${data.testing}

  
  ## Questions

  * My Github: [${data.username}](https://github.com/${data.username})

  * Email me at ${data.email} with any questions.

  ## Video Walkthrough 
  (https://drive.google.com/file/d/1J98ggOcxf92yuBNrMSL3zF8tKX84Kv-Q/view)
  - - -`;
}

module.exports = generateMarkdown;
