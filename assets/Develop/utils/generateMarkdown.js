// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `![license](https://img.shields.io/badge/license-MIT-blue)`
  }
  if (license === "Apache") {
    return `![license](https://img.shields.io/badge/license-Apache-blue)`
  }
  if(license === "None") {
    return "" }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title} ${renderLicenseBadge(data.License)}

## Description
${data.Description}

1. [Installation](#installation)
2. [Usage](#usage)
3. [Contribution](#contribution)
4. [Tests](#tests)
5. [Contact](#contact)

## Installation
${data.Install}

## Usage
${data.Usage}

## Contribution
${data.Contribution}

## Tests
${data.Tests}

## Contact
Email: ${data.Email}
Github: [Github](www.github.com/${data.Github})
`;
}

module.exports = generateMarkdown;
