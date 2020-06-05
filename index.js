// requirements_________________________
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
const generateMarkdown = require("./utilities/generateMarkdown.js");

// requirements_________________________

function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "Give your project a title:"

        },
        {
            type: "input",
            name: "name",
            message: "Please Enter Your Name:",
        },
        {
            type: "input",
            name: "email",
            message: "What is your preferred e-mail address?",
        },
        {
            type: "input",
            name: "username",
            message: "Enter your GitHub username:",
        },
        {
            type: "input",
            name: "description",
            message: "please give a two sentance desciption of your project:"

        },
        {
            type: "input",
            name: "role",
            message: "What is your role?",
        },
        {
            type: "input",
            name: "usage",
            message: "What is the purpose of your project?",
        },
        {
            type: "input",
            name: "installation",
            message: "To install necessary dependencies, run the following command:",
        },
        {
            type: "input",
            name: "license",
            message: "What licenses did you use??",
        },
        {
            type: "input",
            name: "languages",
            message: "What languages are you using?",
        },
        {
            type: "input",
            name: "demo",
            message: "Provide a Demo file URL:",
        },
        {
            type: "input",
            name: "test",
            message: "To run tests, run 'npm test'"
        },

        // ______________
    ]);
}

promptUser()

    .then((responses) => {
        const read = generateMarkdown(responses);
        return writeFileAsync("README.md", read);
    })
    .then(() => {
        console.log("Successfully wrote to README.md");
    })
    .catch((err) => {
        console.log(err);
    });