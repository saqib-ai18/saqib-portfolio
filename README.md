Saqib — AI & Data Analytics Portfolio

A personal portfolio website showcasing my background, technical skills, projects, internship experience, and contact information across AI/ML, data science, data analytics, and software development.

🌐 Live portfolio: https://saqib-portfolio-psi.vercel.app/
💻 GitHub repository: https://github.com/saqib-ai18/saqib-portfolio
💼 LinkedIn: https://www.linkedin.com/in/saqib-kolkar-3222a6379/
✉️ Email: saqibsaakii@gmail.com

Table of Contents

Overview

Features

Technology Stack

Project Structure

Run Locally

Available Scripts

Build for Production

Deployment

Customize the Portfolio

Current Project Cards

Contact

Overview

This website is a responsive portfolio built with React and Vite. It uses a dark, cyber-inspired visual style with animated particle graphics, glowing accents, section reveals, and responsive layouts.

The portfolio includes a hero section with a résumé link, About, Skills, Projects, Experience, and Contact sections.

Features

Responsive layout with mobile-specific styling.

Interactive 3D particle scene built with Three.js and React Three Fiber.

Particle effects, holographic rings, lighting, and interactive visual elements.

Scroll reveal effects for selected content sections.

Dark cyber-inspired design with gradients and glowing accents.

Résumé download from the public directory.

Contact links for email, LinkedIn, and GitHub.

Mobile navigation menu.

Technology Stack

Technology

Purpose

React

Component-based user interface

Vite

Development server and production build

JavaScript (ES modules)

Application logic

HTML and CSS

Structure, styling, responsiveness, animations

Three.js

3D graphics

React Three Fiber

React renderer for Three.js

@react-three/drei

Helpers for React Three Fiber

Git and GitHub

Version control and source hosting

Vercel

Deployment and hosting

Project Structure

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
└── README.md

The exact file list may evolve. node_modules/ and dist/ are generated locally and should not be committed.

Main files

src/App.jsx — Main page layout, navigation, portfolio sections, skills and project data, and contact links.

src/index.css — Global styling, section layouts, visual effects, and responsive/mobile rules.

src/ParticleScene.jsx — Three-dimensional particle and holographic visual scene.

src/Reveal.jsx — Scroll-based reveal wrapper used by selected sections.

src/TypingText.jsx — Typing-text component available in the project.

public/Saqib-Resume.pdf — Résumé file linked from the hero section.

public/cyber-background.png — Image used in the hero section.

Run Locally

Prerequisites

Install a current version of Node.js and npm. Git is recommended if you plan to clone the repository.

1. Clone the repository

git clone https://github.com/saqib-ai18/saqib-portfolio.git
cd saqib-portfolio

2. Install dependencies

npm install

3. Start the development server

npm run dev

Open the local address printed by Vite in the terminal (commonly http://localhost:5173/). Stop the server with Ctrl + C.

Available Scripts

Command

Description

npm run dev

Starts the local development server

npm run build

Creates the production build in dist/

npm run preview

Serves the production build locally for testing

Build for Production

Run a production build before deploying:

npm run build

To preview the production build locally:

npm run preview

Deployment

The portfolio is deployed on Vercel and connected to the GitHub repository. When the configured branch is pushed, Vercel can automatically build and deploy the latest commit.

Push changes to GitHub

After editing and testing:

git status
git add .
git commit -m "Describe your changes"
git push origin main

Check the deployment status in Vercel. Once the deployment is marked Ready, open the live site and refresh it.

Security reminders

Keep node_modules/, dist/, and local .env files out of Git.

Never commit API keys, access tokens, passwords, or other secrets.

If deployment fails, inspect the Vercel build logs and run npm run build locally.

Customize the Portfolio

Personal details and content

Edit src/App.jsx to update the introduction, About section, experience, contact links, skills, and project descriptions.

Skills

The skills are stored in the skills array near the top of src/App.jsx.

Project cards

The projects are stored in the projects array near the top of src/App.jsx. Each project currently includes number, type, title, description, stack, and mark.

To add a project, add another object using the same structure. The cards currently show summaries and technology tags; repository or live-demo links still need to be added to the project data and card markup if you want each card to link to a project.

Résumé

Replace public/Saqib-Resume.pdf with your updated résumé, keeping the same filename if you want the existing download link to keep working.

Hero image

Replace public/cyber-background.png with your preferred image, keeping the same filename, or update its path in src/App.jsx.

Design and mobile layout

Edit src/index.css. After changing responsive rules, test the site in desktop and mobile viewport sizes.

Current Project Cards

AI Data Analyst Chatbot — A conversational analytics assistant for exploring datasets and asking natural-language questions. Technologies listed: Python, Streamlit, LangChain, Pandas, and Groq API.

Gymnastics SaaS Application — A full-stack application concept featuring backend APIs, structured data storage, and payment integration. Technologies listed: Django, React, PostgreSQL, REST APIs, AWS, and Docker.

Automated Defect Detection — A computer-vision project description focused on identifying defects and analyzing model results. Technologies listed: PyTorch, YOLO, NumPy, Matplotlib, and Django.

Project descriptions are summaries. Ensure they accurately describe the implementation and add repository or live-demo links when those are available.

Contact

Mohammed Saqib
Email: saqibsaakii@gmail.com
LinkedIn: https://www.linkedin.com/in/saqib-kolkar-3222a6379/
GitHub: https://github.com/saqib-ai18

Made with curiosity and a focus on AI, data, and useful software.