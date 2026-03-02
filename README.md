# Anirudh Kandwal - Personal Portfolio

Welcome to the source code for my personal portfolio website! This project showcases my skills, projects, and tech stack, featuring a modern, responsive design with smooth animations.

## 🚀 Tech Stack

- **Frontend:** React.js, React-Bootstrap
- **Animations:** Framer Motion, Animate.css
- **Styling:** Custom CSS with a glassmorphism aesthetic and CSS custom properties (variables)
- **Backend/API:** Netlify Functions (Serverless) & Nodemailer for the contact form
- **Icons:** React Devicons, Custom SVGs

## 🛠️ Features

- **Dynamic Hero Section:** Animated gradient blobs and a typing effect.
- **Infinite Skills Marquee:** A smooth, continuously scrolling showcase of my technical skills.
- **Interactive Projects Gallery:** A mix of custom image cards and sleek glass-morphism list items for research projects.
- **Working Contact Form:** A fully functional contact form powered by a Netlify serverless function and Nodemailer.
- **Responsive Design:** Optimized for all screen sizes using Bootstrap's grid system and fluid typography.

## 💻 Running Locally

To run this project locally, you will need Node.js and the Netlify CLI installed (the Netlify CLI is required to serve the serverless function for the contact form).

### 1. Install Dependencies

```bash
npm install
```

### 2. Install Netlify CLI (Global)

If you don't have it installed already:

```bash
npm install -g netlify-cli
```

### 3. Setup Environment Variables

Create a `.env` file in the root of the project and add your Gmail credentials for the contact form to work:

```env
EMAIL=your_email@gmail.com
PASSWORD=your_gmail_app_password
```
*(Note: You must use a Google "App Password" if you have 2-Factor Authentication enabled).*

### 4. Start the Development Server

Start the project using the Netlify CLI to ensure both the React app and the serverless functions run together:

```bash
netlify dev
```

*(If you encounter PowerShell execution policy errors, you can run `npx netlify dev` instead).*

Open [http://localhost:8888](http://localhost:8888) to view it in your browser.

## 🌐 Deployment

This site is optimized to be hosted on **Netlify**.
When deploying, ensure you add the `EMAIL` and `PASSWORD` environment variables in your Netlify site settings.

---
*Designed & Built by Anirudh Kandwal*
