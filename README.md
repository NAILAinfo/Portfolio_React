# Portfolio - Naila Dahmani

This project is [my personal portfolio](https://mon-site.com), developed using:
- Front-end library: React
- CSS framework: React-bootstrap
- CSS animation library: Animate.css <br>
to showcase my **skills**, **projects**, and **background**.

## Features

- Modern and responsive interface
- Project overview with details and GitHub links
- Technical skills section with logos
- Academic background and experience
- Contact form

## Technologies used

Frontend: React / HTML / CSS / JavaScript / Bootstrap / Tailwind 
Tools: Vercel / Netlify (where you hosted it)


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

## Project structure 

### Technical Skills Organization

Skills are managed using a data-driven approach:
- Data (categories, logos, strengths, length of experience) is defined in the dedicated SkillsData tsx file.
- React components (Skills.tsx, SkillCategory.tsx, SkillCard.tsx) dynamically display this data.
- Skill logos are stored in src/assets/skills.

#### Structure  
src/
 ┣ assets/
 ┃ ┗ skillsIMG/            ← images (ex: pythonICON.png )
 ┣ components/
 ┃ ┗ Skills/ 
 ┃    ┗ Skills.tsx         ← main component (shows all categories)
 ┃    ┣ SkillCategory.tsx  ← displays a category with its skills
 ┃    ┣ SkillCard.tsx      ← displays individual competence
 ┃    ┣ SkillsData.tsx     ← skills data
 ┃    ┗ StyleSkills.css    
🔹 This method provides a clear separation between data and components and makes it easier to add skills later.