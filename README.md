# Portfolio - Naila Dahmani

This project is [my personal portfolio](https://mon-site.com), developed using: 
<p >
  <!-- React -->
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="70"/>

<!-- TypeScript -->
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="70"/>

<!-- Bootstrap -->
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" width="70"/>

<!-- HTML -->
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="70"/>

<!-- CSS -->
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="70"/>

<!-- JavaScript -->
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="70"/>

<!-- Node.js -->
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="70"/>

<!-- npm -->
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" width="70"/>

  
</p>


to showcase my **skills**, **projects**, and **background**.

## Features

- Modern and responsive interface
- Project overview with details and GitHub links
- Technical skills section with logos
- Academic background and experience
- Contact form

## ⚙️ Installation & local execution
```bash
# Clone the repository
git clone https://github.com/username/portfolio.git
# Go to the folder
cd portfolio
# Install dependencies
npm install
# Start the local server
npm start
```
Open in browser Navigate to : [http://localhost:5173/](http://localhost:5173/)
## Project structure 

### Technical Skills Organization

Skills are managed using a data-driven approach:
- Data (categories, logos, strengths, length of experience) is defined in the dedicated SkillsData tsx file.
- React components (Skills.tsx, SkillCategory.tsx, SkillCard.tsx) dynamically display this data.
- Skill logos are stored in src/assets/skills.

#### Structure  
```bash
src/
 ┣ assets/
 ┃ ┗ skillsIMG/            # images (ex: pythonICON.png )
 ┣ components/
 ┃ ┗ Skills/ 
 ┃    ┗ Skills.tsx         # main component (shows all categories)
 ┃    ┣ SkillCategory.tsx  # displays a category with its skills
 ┃    ┣ SkillCard.tsx      # displays individual skill
 ┃    ┣ SkillsData.tsx     # skills data
 ┃    ┗ StyleSkills.css    
```
🔹 This method provides a clear separation between data and components and makes it easier to add skills later.

### Projects Organization
#### Data  :
Projects are defined in a JSON file located in the `src\assets\projects.json` , Example content:
```bash
[
  {
    "id": , 
    "state": , 
    "Featured": ,
    "title": ,
    "category": ,
    "description":  ,
    "image": ,
    "link":  ,
    "code_link" : , 

  },
]
```
#### Loading into the application
The `projects.json` file is retrieved using fetch:
```bash
useEffect(() => {
  fetch("/projects.json")
    .then(res => res.json())
    .then(data => setProjects(data));
}, []);
```
#### Component architecture
```bash
src/
 ┣ assets/
 ┃      ┗ Projectsimg/            # images associated with projects
 └── components/
        ┗ Projects/
            ├── ProjectsSection.jsx   # Main component 
            ├── ProjectsFilter.jsx    # Filtering area
            ├── ProjectsGrid.jsx      # Grid displaying filtered projects
            └── ProjectCard.jsx       # displays individual project
```
#### Image Management 
- In `projects.json` , each project references its image using a relative path , for exemple :
```bash
    image: `/images/portfolio.png`
```
#### Future development
🔹This structure was designed to evolve towards an external data source Google Sheets API.
