// function to generate markdown for README
function generateMarkdown(data) {
  console.log("The generateMarkdown() export says hi!");
  return `# ${data.title}

## Description
${data.description}

## Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

license badge (chosen by user from list of options; simultaneously adds notice in ##License)

## Installation 
${data.installation}

## Usage
${data.usage}

## License 
Covered under ${data.license}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions 
instructions of how to reach user for additional questions (dev)
GitHub Username: ${data.username} 
Email: ${data.email}
  `;
}

module.exports = generateMarkdown;
