// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
        // title prompt
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter the title of your project');
                    return false;
                }
            }
        },
        // description prompt
        {
            type: 'confirm',
            name: 'confirmDescription',
            message: 'Would you like to enter some information about the project for a description section?',
            default: true
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description of your project (Required)',
            when: ({ confirmDescription }) => confirmDescription,
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter your project description');
                    return false;
                }
            }
        },
        // License prompt
        {
            type: 'checkbox',
            name: 'license',
            message: 'Please choose a license for your README. Check all that apply',
            choices: ['MIT', 'Apache 2.0', 'General Public License', 'BSD 2-clause', 'BSD 3-clause', 'BSD 4-clause']
        },
        // installation prompt
        {
            type: 'input',
            name: 'installation',
            message: 'Please enter any installation instructions',
            default: 'Installation instructions will go here'
        },
        // usage prompt
        {
            type: 'input',
            name: 'usage',
            message: 'Please enter usage information',
            default: 'Usage information will go here'
        },
        // contributions prompt
        {
            type: 'input',
            name: 'contributions',
            message: 'Please enter contributions',
            default: 'Contributions information will go here'
        },
        // tests prompt
        {
            type: 'input',
            name: 'tests',
            message: 'Please enter testing information',
            default: 'Testing information will go here'
        },
        // github username for questions prompt
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your GitHub username (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your GibHub Username');
                    return false;
                }
            }
        },
        // email for questions prompt
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email address');
                    return false;
                }
            }
        },
    ]

// function writeToFile(markdownContent) {
//     return new Promise((resolve, reject) => {
//         fs.writeFile('./README.md', markdownContent, err => {
//             if (err) {
//                 reject(err);
//                 return;
//             }
//             resolve({
//                 ok: true,
//                 message: 'Readme created!'
//             })
//         })
//     })
// }


// TODO: Create a function to initialize app
function init() {
    inquirer
     .prompt(questions)
     .then(data => {
         const pageReadme = generateMarkdown(data);
         fs.writeFile('./README.md', pageReadme, err => {
             if (err) throw new Error(err);
             console.log('Readme created! Check out README.md in this directory to see it');
         })
        })
    //  .then(data => generateMarkdown(data))
    //  .then(markdownContent => writeToFile(markdownContent))
    //  .catch(err => console.log(err))
}



// Function call to initialize app
init();
