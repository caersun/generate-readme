
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Describe your project."
    },
    {
        type: "input",
        name: "installation",
        message: "How is your project installed?"
    },
    {
        type: "input",
        name: "usage",
        message: "How should users use your project?"
    },
    {
        type: "list",
        name: "license",
        message: "Under what license is your project covered?",
        choices: [ "license 1", "license 2" ]
    },
    {
        type: "input",
        name: "contributing",
        message: "What are the contribution guidelines of your project?"
    },
    {
        type: "input",
        name: "tests",
        message: "Describe the test instructions for your project."
    },
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?"
    },
];

// function that promps user with questions array
function promptUser() {
    console.log("The promptUser() says hi!");
    return inquirer.prompt([...questions]); 
}

// function to initialize program
async function init() {
    console.log("The init() says hi!");
    try {
        const data = await promptUser();
        const md = generateMarkdown(data);
        
        await writeFileAsync("sample.md", md);
        console.log("Succesfully wrote to sample.md");
    } catch (err) {
        console.log(err);
    }
}

// function call to initialize program
init();
