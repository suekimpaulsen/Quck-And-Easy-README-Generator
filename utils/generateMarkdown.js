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
  return `# ${data.title}

`;
}

// template with notes
// const generateMarkdown

// `# title // input

// ## Description // input

// ## Table of Contents
// // click the link > go to the corresponding section
// * [License](#license)
// * [Installation](#installation)
// * [Usage](#usage)
// * [Contributing](#contributing)
// * [Tests](#tests)
// * [Questions](#questions)

// ## License // checkbox
// // badge for that license is added
// // a notice is added that
// // explains which license the application is covered under

// ## Installation // input
// // change directory, npm package step by step instruction how to use it
// // development container on vs code github

// ## Usage -- instructions // input
// // what it's used for?

// ## Contributing // input

// ## Tests // input
// // validate

// ## Questions // input (github username & email)
// // add github username
// // link to my github profile
// // add email address
// // with instructions on how to reach me with additional questions
// `


module.exports = generateMarkdown;
