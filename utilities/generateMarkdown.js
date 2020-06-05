function generateMarkdown(data) {
  return `
  AS A developer

  I WANT a README generator
  
  SO THAT I can easily put together a good README for a new project
  __________________________________________________________________________
  
  * ![profile picture](./assets/profilepicture1.jpg)

  * ![GIT LOGO](./assets/git - sticker.jpg)

  * ![Node Gif](./assets/gif.gif)

  
  ###### Table of Contents
  * Project title
  * Description
  * Installation
  * Usage
  * License
  * Contributions
  * Tests
  * Questions
  
  # Hi! My name is:
    ${ data.name}
  # Hi! My email is:
    ${ data.email}
  # Hi! My Github username is:
    ${ data.username}
  # Project description:
    ${ data.description}
  # My role:
    ${ data.role}
  # My poject purpose
    ${ data.usage}
  # Necessary dependencies
    ${ data.installation}
  # Licenses used:
    ${ data.license}
  # Languages used:
    ${ data.languages}
  # DEMO URL:
    ${ data.demo}
  # Test Command:
    ${ data.test}
    
    
    
    `}

module.exports = generateMarkdown;
