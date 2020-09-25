// function to generate markdown for README
function generateMarkdown(data) {
  // console.log("The generateMarkdown() export says hi!");
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
  
  [![License](https://img.shields.io/badge/License-${data.license}-green.svg)]
  
  ## Installation 
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License 
  This project is covered under the ${data.license} license.
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions 
  If you have additional question, please contact me directly:
  
  - [GitHub](https://github.com/${data.username}) <br>
  - [Email](${data.email})
  `
};

module.exports = generateMarkdown;
