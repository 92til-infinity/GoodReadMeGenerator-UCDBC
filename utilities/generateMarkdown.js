function generateMarkdown(data) {
    return `
  ![profile picture](./assets/profilepicture1.jpg)
  ![GIT LOGO](./assets/git-sticker.jpg)
  ![GIT LOGO](./assets/gif)
  ###### Table of Contents
  *Project title
  *Description
  *Installation
  *Usage
  *License
  *Contributions
  *Tests
  *Questions
  
    #Hi! My name is:
    ${ data.name}
    #Hi! My email is:
    ${ data.email}
    #Hi! My Github username is:
    ${ data.username}
    #project description:
    ${ data.description}
    #My role:
    ${ data.role}
    #My poject purpose
    ${ data.usage}
    #Necessary dependencies
    ${ data.installation}
    #Licenses used:
    ${ data.license}
    #Languages used:
    ${ data.languages}
    #DEMO URL:
    ${ data.demo}
    #Test Command:
    ${ data.test}
    
    
    
    `}

module.exports = generateMarkdown;
