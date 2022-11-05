# SportSee

- ![Author](<https://img.shields.io/badge/Author-Lamine MESSACI-">)
- ![GitHub repo size](<https://img.shields.io/github/repo-size/laminemessaci/SportSee>)  
- ![GitHub top language](https://img.shields.io/github/languages/top/laminemessaci/SportSee)
- ![GitHub language count](https://img.shields.io/github/languages/count/laminemessaci/SportSee)

## Frontend

### General information

This repo contains all the source code to run the application of the sports analytics dashboard SportSee.

### Prerequisites

- A text editor like `VSCode, Vim,SublimeText, IntelliJ...`
- [Node.js < v.16](https://nodejs.org/en/)
- [Git](https://git-scm.com/)

### Project setup

- Clone this repo on your computer:

````bash
git clone https://github.com/laminemessaci/SportSee.git
````

- Package installations after cloning.

```bash
# with NPM
cd front-end && npm install && cd..    
cd backend && npm i && cd..     

# with YARN
cd front-end && yarn && cd..    
cd backend && yarn && cd..   
 
```

- Start the application

```bash
npm run dev
# with Yarn
yarn dev
```

### Added dependencies

 "@testing-library/jest-dom": "^5.16.5"  
    "@testing-library/react": "^13.4.0"  
    "@testing-library/user-event": "^13.5.0"  
    "axios": "^1.1.2"     
    "react": "^18.2.0"      
    "react-dom": "^18.2.0"       
    "react-loading": "^2.0.3"      
    "react-router": "^6.4.2"          
    "react-router-dom": "^6.4.2"       
    "react-scripts": "5.0.1"       
    "react-switch": "^7.0.0"     
    "recharts": "^2.1.14"      
    "styled-components": "^5.3.0"     
    "web-vitals": "^2.1.4"    

---
dev dependencies:

"jsdoc": "^3.6.11"     
"stylelint": "13.13.1"       
"stylelint-config-standard": "22.0.0"         


### N.B:
- _SportSee_ API only contains data for users with id 12 and 18.
- user 18 has an alternative version of the chart "Sessions average duration", more relevant than the one on the [Figma mock-up](https://www.figma.com/file/BMomGVZqLZb811mDMShpLu/UI-design-Sportify-FR).
- For more information on the documentation of the code connect on this link: [jsDoc](http://127.0.0.1:5500/docs/index.html).# SportSee
