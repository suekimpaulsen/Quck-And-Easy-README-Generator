// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

## Description
${data.description}

## Table of Contents
* [License](#license)
* [Installation](#installation)
* [Usage](#usage)
* [Contributions](#contributions)
* [Tests](#tests)
* [Questions](#questions)

## License

## Installation
${data.installation}

## Usage
${data.usage}

## Contributions // input
${data.contributions}

## Tests
${data.tests}

## Questions
If you have any questions, please send me an email at <${data.email}> or visit my [GitHub](https://github.com/${data.github}).
`;
}

module.exports = generateMarkdown;
