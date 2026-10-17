# Saqib Portfolio

A modern, responsive personal portfolio built with React and Vite, featuring a dark cyber-inspired interface, interactive 3D particle effects, animated components, and responsive navigation.

🌐 **Live Website:** https://saqib-portfolio-psi.vercel.app/

💻 **Source Code:** https://github.com/saqib-ai18/saqib-portfolio

---

## Overview

This project is my personal portfolio website, designed to present my professional background, technical skills, experience, and contact information through a modern web interface.

The website combines a dark visual theme with animated backgrounds, glowing accents, interactive graphics, and responsive layouts to create an engaging browsing experience.

## Features

- Responsive layout for desktop and mobile devices.
- Dark cyber-inspired visual design.
- Interactive 3D particle scene.
- Animated visual effects and glowing accents.
- Scroll-based reveal animations.
- Typing-text component.
- Navigation between portfolio sections.
- Skills and experience sections.
- Project cards with descriptions and technology tags.
- Live-demo links for projects where available.
- Résumé access.
- Contact links for email, LinkedIn, and GitHub.
- Mobile navigation menu.

## Technology Stack

| Technology | Purpose |
|---|---|
| React | Builds the user interface using reusable components |
| Vite | Provides the development server and production build |
| JavaScript | Implements application logic and interactions |
| HTML5 | Defines the page structure |
| CSS3 | Handles styling, animations, and responsive layouts |
| Three.js | Renders 3D graphics |
| React Three Fiber | Integrates Three.js with React |
| @react-three/drei | Provides utilities for React Three Fiber |
| Git | Version control |
| GitHub | Source code hosting |
| Vercel | Website deployment and hosting |

## Portfolio Sections

The application includes the following sections:

- **Home:** Introduction and résumé access.
- **About:** Personal and professional background.
- **Skills:** Technical skills and technologies.
- **Projects:** Project descriptions, technology tags, and available demo links.
- **Experience:** Professional and internship experience.
- **Contact:** Contact information and external profile links.

## Project Structure

```text
saqib-portfolio/
├── public/
│   ├── Saqib-Resume.pdf
│   └── cyber-background.png
├── src/
│   ├── App.jsx
│   ├── index.css
│   ├── ParticleScene.jsx
│   ├── Reveal.jsx
│   └── TypingText.jsx
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── .gitignore
└── README.md
```

This represents the main project files. The actual repository may contain additional assets or configuration files.

### Main Components

| File | Responsibility |
|---|---|
| `src/App.jsx` | Main application layout, navigation, sections, skills, project data, and contact links |
| `src/index.css` | Global styling, animations, visual effects, and responsive layouts |
| `src/ParticleScene.jsx` | Interactive 3D particle visuals |
| `src/Reveal.jsx` | Reusable scroll-reveal animation component |
| `src/TypingText.jsx` | Typing-text component |
| `public/` | Static assets such as résumé and background images |
| `index.html` | HTML entry point |
| `package.json` | Dependencies and available npm scripts |
| `vite.config.js` | Vite configuration |

## Getting Started

Follow these steps to run the application locally.

### Prerequisites

Install the following:

- [Node.js](https://nodejs.org/)
- npm
- [Git](https://git-scm.com/)

### 1. Clone the repository

```bash
git clone https://github.com/saqib-ai18/saqib-portfolio.git
```

### 2. Navigate to the project directory

```bash
cd saqib-portfolio
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL displayed in your terminal.

The default Vite development address is usually:

```text
http://localhost:5173/
```

If the port is occupied, Vite may automatically select another available port.

To stop the development server, press `Ctrl + C`.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the development server |
| `npm run build` | Builds the application for production |
| `npm run preview` | Previews the production build locally |

## Production Build

To create a production-ready build, run:

```bash
npm run build
```

Vite generates the production files in the `dist/` directory.

To test the production build locally:

```bash
npm run preview
```

Review the application before deploying changes.

## Deployment

The portfolio is deployed using Vercel and connected to its GitHub repository.

**Live Website:**  
https://saqib-portfolio-psi.vercel.app/

When the configured production branch is updated, Vercel can automatically build and deploy the latest commit.

### Deploying Updates

After modifying the application, run:

```bash
git status
git add .
git commit -m "Describe your changes"
git push origin main
```

Check the deployment status in Vercel. Once the deployment shows `Ready`, open the live website and verify the changes.

## Customization

### Update Portfolio Content

Edit `src/App.jsx` to modify the introduction, About section, skills, projects, experience, and contact information.

### Update Skills

Modify the `skills` array in `src/App.jsx`.

### Update Project Cards

Modify the `projects` array in `src/App.jsx`.

Project entries contain information such as the project title, category, description, technology stack, and visual mark.

Projects with a deployed application can include a `liveUrl` property to display a live-demo link.

### Update the Résumé

Replace `public/Saqib-Resume.pdf` with your updated résumé.

Keep the filename unchanged if the existing application code references that path.

### Update the Background Image

Replace `public/cyber-background.png` or update its reference in the application code.

### Customize the Design

Edit `src/index.css` to modify colors, typography, layouts, animations, and responsive behavior.

## Repository Maintenance

- Keep `node_modules/` out of version control.
- Keep generated build files out of Git unless your deployment workflow requires them.
- Never commit API keys, passwords, access tokens, or other secrets.
- Run `npm run build` before pushing significant changes.
- Review Git changes before committing.

## Contact

**Mohammed Saqib**

- **Portfolio:** https://saqib-portfolio-psi.vercel.app/
- **GitHub:** https://github.com/saqib-ai18
- **LinkedIn:** https://www.linkedin.com/in/saqib-kolkar-3222a6379/
- **Email:** saqibsaakii@gmail.com

---

Built with React, Vite, and CSS.