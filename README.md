# Mohammed Saqib — Portfolio

A responsive, dark, cyber-inspired personal portfolio built with React, Vite, Three.js, and React Three Fiber. It presents Mohammed Saqib's background, technical skills, selected projects, internship experience, résumé, and contact links in a single-page website.

🌐 Live website: https://saqib-portfolio-psi.vercel.app/
💻 GitHub repository: https://github.com/saqib-ai18/saqib-portfolio

Table of Contents

Project Overview

Features

Technology Stack

How the Website Works

Project Structure

Code Walkthrough

Run the Project Locally

Build for Production

Deploy on Vercel

Customize the Portfolio

Troubleshooting

Security Notes

Author

Project Overview

This is a single-page React portfolio. Visitors can navigate between sections without opening separate pages:

Hero — introduction, focus areas, résumé download, and calls to action.

About — professional summary and education.

Skills — data analytics, AI/machine learning, and development tools.

Projects — selected project summaries and their technology stacks.

Experience — Data Science internship details.

Contact — email, LinkedIn, and GitHub links.

The visual style uses a near-black background, cyan and violet highlights, subtle gradients, animated elements, and responsive layouts.

Current implementation note: The portfolio is a front-end website. It does not currently include a backend, database, authentication system, or a working contact-form submission API. The project cards display project summaries; repository/demo links can be added when available.

Features

Responsive single-page layout with section-based navigation.

Dark cyber-inspired visual design.

Animated Three.js scene with particles, holographic rings, nodes, and an energy orb.

Scroll-triggered reveal component for selected sections.

Skills and project cards generated from JavaScript arrays.

Résumé download from the public directory.

Direct email, LinkedIn, and GitHub links.

Smooth scrolling and hover transitions.

Vite development server and production build workflow.

Deployment-ready static output for Vercel or another static hosting provider.

Technology Stack

Technology

Purpose

React 18

Builds the interface from reusable components.

Vite 6

Runs the local development server and bundles the production website.

JavaScript (ES modules)

Defines page content, state, and component behavior.

CSS3

Controls layout, colours, typography, responsiveness, and transitions.

Three.js

Provides the underlying 3D rendering engine.

React Three Fiber

Lets the 3D scene be written using React components.

@react-three/drei

Provides helpers such as point rendering/materials.

Google Fonts

Loads Manrope and DM Mono typography.

Vercel

Hosts the deployed website.

The exact dependency versions are recorded in package-lock.json; package.json defines the project's scripts and direct dependencies.

How the Website Works

The browser loads index.html, which contains the root HTML element and starts the JavaScript entry point at /src/main.jsx.

The application then follows this sequence:

index.html provides the HTML shell, page title, description, viewport settings, and font links.

src/main.jsx imports React, the App component, and the global stylesheet. It mounts the application into the element with id="root".

src/App.jsx builds the page layout and defines the portfolio content, navigation, skills, project summaries, experience, and contact links.

src/ParticleScene.jsx renders the animated 3D visual using React Three Fiber and Three.js.

src/Reveal.jsx uses the browser's IntersectionObserver API to add a reveal class when an element enters the viewport.

src/index.css styles the page and defines the visual system, layout, animations, and responsive behavior.

Vite serves the application during development and creates optimized static files in dist/ when you build for production.

Data and rendering

The skills, projects, and navItems arrays are defined near the top of src/App.jsx. React's .map() method renders those arrays into repeated cards, tags, and navigation links. This makes the content easier to update without duplicating the same markup.

Navigation and state

The navigation menu uses React's useState hook to track whether the mobile menu is open. Navigation links point to section IDs such as #about, #skills, and #contact. Selecting a navigation link closes the menu.

3D animation

ParticleScene.jsx creates a transparent WebGL canvas containing several visual elements:

ParticleSphere: creates a field of points and animates its rotation and subtle pulse.

EnergyOrb: displays a wireframe icosahedron with a pulsing scale.

HolographicRings: renders three rotating torus rings with cyan and violet colours.

AINodes: places small glowing nodes around the scene and rotates the group.

Lighting: uses ambient and point lights to give the scene its neon appearance.

Animation updates are performed with React Three Fiber's useFrame hook. Pointer movement also influences parts of the scene.

Scroll reveals

Reveal.jsx observes its wrapper element. When the element becomes visible in the viewport, it adds the reveal-visible class. The stylesheet controls the appearance of the reveal transition. The observer is disconnected when the component is unmounted.

Styling

src/index.css defines global styles and the page's visual design, including:

CSS custom properties for background, panels, borders, muted text, cyan, and violet.

Typography and heading sizes.

Navigation, buttons, cards, tags, and section layouts.

Gradient text, ambient glow effects, and the moving skills ticker.

Hover effects and reveal transitions.

Responsive breakpoints for smaller screens.

The CSS file is the main place to adjust colours, spacing, typography, and layout.

Project Structure

saqib-portfolio/
├── public/
│   ├── Saqib-Resume.pdf       # Downloadable résumé
│   └── cyber-background.png   # Hero-section visual asset
├── src/
│   ├── App.jsx                # Main page, content, and section layout
│   ├── ParticleScene.jsx      # Three.js / React Three Fiber animation
│   ├── Reveal.jsx             # Scroll-triggered reveal wrapper
│   ├── TypingText.jsx         # Reusable rotating typewriter-text component
│   ├── index.css              # Global styles and responsive design
│   └── main.jsx               # React entry point
├── .gitignore                 # Files Git should ignore
├── index.html                 # HTML shell and page metadata
├── package.json               # Project metadata, dependencies, and scripts
├── package-lock.json          # Locked dependency tree
└── README.md                  # Project documentation

What each file does

File

Responsibility

index.html

Defines the page metadata, font imports, root element, and script entry point.

src/main.jsx

Mounts <App /> using React's createRoot and loads index.css.

src/App.jsx

Defines the main page, section navigation, skills, projects, internship, and contact links.

src/ParticleScene.jsx

Builds the animated 3D scene and its components.

src/Reveal.jsx

Adds a viewport-triggered visibility class to wrapped content.

src/TypingText.jsx

Contains a typewriter effect that cycles through professional role titles. It is currently defined as a reusable component and is not imported by App.jsx.

src/index.css

Contains the visual design, layout rules, effects, transitions, and responsive styles.

public/Saqib-Resume.pdf

Static résumé file linked from the hero section.

public/cyber-background.png

Image displayed in the hero visual.

package.json

Lists direct dependencies and the dev, build, and preview commands.

package-lock.json

Helps npm install a consistent dependency tree.

.gitignore

Excludes configured files and folders from Git.

Run the Project Locally

Prerequisites

Install the following:

Node.js (Node.js 20 or a compatible supported version is recommended).

npm, included with Node.js.

Git, if you want to clone the repository.

A code editor such as Visual Studio Code.

Check that Node.js and npm are installed:

node --version
npm --version

Option 1: Clone from GitHub

Open a terminal and run:

git clone https://github.com/saqib-ai18/saqib-portfolio.git
cd saqib-portfolio
npm install
npm run dev

Vite prints a local URL in the terminal, normally:

http://localhost:5173

Open that address in your browser. Keep the terminal running while you work.

Option 2: Use an existing local project folder

Open the saqib-portfolio folder in Visual Studio Code.

Select Terminal → New Terminal.

Run:

npm install
npm run dev

Open the local URL printed by Vite.

Stop the development server

Return to the terminal and press Ctrl + C.

Build for Production

Create an optimized production build:

npm run build

Vite writes the generated website to the dist/ directory.

To preview the production build locally:

npm run preview

Open the preview URL printed in the terminal. The preview command is for checking the built site; it does not deploy the website.

Available npm scripts

Command

What it does

npm run dev

Starts the Vite development server.

npm run build

Creates the production build in dist/.

npm run preview

Serves the production build locally for review.

Deploy on Vercel

This is a Vite project, so configure the deployment as a Vite/static frontend project.

Push the latest code to the main branch on GitHub.

Sign in to Vercel and import the repository saqib-ai18/saqib-portfolio.

Confirm the build settings:

Setting

Value

Framework preset

Vite

Root directory

./

Install command

npm install

Build command

npm run build

Output directory

dist

Deploy the project.

Open the deployment URL and test the navigation, image, résumé download, 3D scene, and contact links.

No environment variables are currently required by the code described in this README. If a future feature introduces a backend or API credentials, configure the required variables in the hosting provider rather than committing secrets to Git.

Customize the Portfolio

Most portfolio content is defined directly in src/App.jsx.

1. Update your introduction

Find the hero section and update the heading, name, summary, location, and focus areas. Keep the text accurate to your real experience.

2. Update skills

At the top of src/App.jsx, find the skills array. Each group contains a label and an items array. Update these values to change the skill cards.

3. Update projects

Find the projects array in src/App.jsx. Each project contains:

number — its display number.

type — category or project area.

title — project name.

description — short project summary.

stack — technologies displayed as tags.

mark — decorative symbol.

The current cards are informational and do not automatically link to repositories or live demos. Add verified project URLs and link elements in the JSX if you want visitors to open the code or demo.

4. Update internship and education details

Edit the About and Experience sections in src/App.jsx. Ensure dates, company names, responsibilities, and qualifications are correct before publishing.

5. Update contact links

In the Contact section of src/App.jsx, update the email, LinkedIn profile, and GitHub profile URLs. Test each link after editing.

6. Replace the résumé

Replace public/Saqib-Resume.pdf with your updated résumé, keeping the same filename so the existing download link continues to work. Alternatively, change the link in src/App.jsx to match the new filename.

7. Replace the hero image

Replace public/cyber-background.png with your chosen image, keeping the same filename, or update the image path in src/App.jsx.

8. Change the design

Edit src/index.css to adjust the colour variables, font sizes, spacing, backgrounds, transitions, and responsive layouts.

9. Change the typewriter roles

src/TypingText.jsx contains a titles array. Edit the role names there to change the text sequence. The component must also be imported and rendered in src/App.jsx before it will appear on the page.

10. Verify before publishing

After editing, run:

npm run build

Resolve any build errors, then test the site in a browser at desktop and mobile widths.

Troubleshooting

npm is not recognized

Install Node.js, close and reopen the terminal, and run node --version and npm --version again.

Dependencies are missing

From the project root, run:

npm install

The local port is already in use

Vite may offer another available port in the terminal. Open the exact URL it prints.

The résumé does not download

Confirm that the file exists at public/Saqib-Resume.pdf and that the link in src/App.jsx points to /Saqib-Resume.pdf.

The hero image is missing

Confirm that cyber-background.png exists in public/ and that the image path is /cyber-background.png.

The 3D scene is not visible

Check the browser console for WebGL or JavaScript errors, ensure the dependencies installed successfully, and try a browser with WebGL enabled. Rendering performance may vary by device.

The website looks different after deployment

Run npm run build locally and inspect the production build with npm run preview. Confirm that the hosting configuration uses npm run build and dist as the output directory.

Security Notes

Never commit passwords, API keys, access tokens, private keys, or other credentials.

Do not upload private personal documents unless you intend to make them publicly accessible. Files in the public/ directory of this site are served as public assets.

The current portfolio is a front-end site and does not securely store or process contact-form submissions.

Review project descriptions and external links before publishing.

Author

Mohammed Saqib
AI & Machine Learning graduate interested in data analytics, data science, machine learning, and AI-powered applications.

Portfolio: https://saqib-portfolio-psi.vercel.app/

GitHub: https://github.com/saqib-ai18

LinkedIn: https://www.linkedin.com/in/saqib-kolkar-3222a6379/

Email: saqibsaakii@gmail.com

