// function that returns a license badge based on which license is passed in. If there is no license, return an empty string
function renderLicenseBadge(data) {
  if (data.license == 'MIT') {
    return `[![License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)`
  }
  else if (data.license == 'Apache 2.0') {
    return `[![License](https://img.shields.io/badge/license-Apache%202.0-green.svg)](https://www.apache.org/licenses/LICENSE-2.0)`
  }
  else if (data.license == 'General Public License') {
    return `[![License](https://img.shields.io/badge/license-General%20Public%20License-yellow.svg)](https://gist.github.com/nicolasdao/a7adda51f2f185e8d2700e1573d8a633#gpl-license-aka-gnu-general-public-license-v30)`
  }
  else if (data.license == 'BSD 2-clause') {
    return `[![License](https://img.shields.io/badge/license-BSD%202--clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
  }
  else if (data.license == 'BSD 3-clause') {
    return `[![License](https://img.shields.io/badge/license-BSD%203--clause-orange.svg)](https://opensource.org/licenses/BSD-3-Clause)`
  }
  else if (data.license == 'BSD 4-clause') {
    return `[![License](https://img.shields.io/badge/license-BSD%204--clause-orange.svg)](https://gist.github.com/nicolasdao/a7adda51f2f185e8d2700e1573d8a633#4-clause)`
  }
  else {
    return ``
  }
}

// function that returns the license link on Table of Content. If there is no license, return an empty string
function renderLicenseLink(data) {
  if (data.license.length === 0) {
    return ``
  }
  else {
    return `* [License](#license)`
  }
}

// function that returns the license section of README. If there is no license, return an empty string
function renderLicenseSection(data) {
  if (data.license.length === 0) {
    return ``
  }
  else {
    return `
## License
${renderLicenseBadge(data)}
`
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

## Table of Contents
${renderLicenseLink(data)}
* [Installation](#installation)
* [Usage](#usage)
* [Contributions](#contributions)
* [Tests](#tests)
* [Questions](#questions)
${renderLicenseSection(data)}
## Installation
${data.installation}

## Usage
${data.usage}

## Contributions
${data.contributions}

## Tests
${data.tests}

## Questions
If you have any questions, please send me an email at <${data.email}> or visit my [GitHub](https://github.com/${data.github}).
`;
}

// export function
module.exports = generateMarkdown;
