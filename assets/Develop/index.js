// TODO: Include packages needed for this application
const inquirer = require("inquirer");

const generateMarkdown = require("./utils/generateMarkdown")

const fs = require("fs")
// TODO: Create an array of questions for user input
const questions = [
    {
        name: "Title",
        type: "input",
        message: "What is the project title?"

    },
    {
        name: "Description",
        type: "input",
        message: "Describe the project"
        
    },
    {
        name: "Install",
        type: "input",
        message: "How was the project installed?"
        
    },
    {
        name: "Usage",
        type: "input",
        message: "How to use the project"
        
    },
    {
        name: "License",
        type: "list",
        message: "What is the license used for project",
        choices: ["MIT", "Apache", "None"]
    },
    {
        name: "Contribution",
        type: "input",
        message: "How can others contribute?"
        
    },
    {
        name: "Tests",
        type: "input",
        message: "How to run test for this project?"
        
    },
    {
        name: "Email",
        type: "input",
        message: "What is your email?"
        
    },
    {
        name: "Github",
        type: "input",
        message: "What is your github username?"
        
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
fs.writeFileSync(fileName, data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers)
const markdown = generateMarkdown(answers)
writeToFile("./output/README.md", markdown)
    })
}

// Function call to initialize app
init();
