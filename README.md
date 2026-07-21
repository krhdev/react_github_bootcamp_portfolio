# 🐾 KRHDev React GitHub Portfolio

A dynamic, responsive React portfolio that pulls project data live from the GitHub API — built as part of the Full Stack Web Development Bootcamp.

---

## Overview

This portfolio showcases eight projects built during my Full Stack Web Development Bootcamp, alongside my GitHub bio, skills, and live project links — all pulled dynamically from the [GitHub API](https://docs.github.com/en/rest) so the site stays current without manual updates. It was built to demonstrate React fundamentals, component-based architecture, responsive design, and third-party API integration.

## Features

- 🏠 **Homepage** with a live GitHub bio (rendered from my profile README via Markdown), skills overview, and a featured projects preview
- 📂 **Projects page** displaying all eight bootcamp challenges in a responsive card grid
- 🔄 **Live GitHub API integration** — project cards (name, description, language, links) are fetched directly from my repositories, so the gallery updates automatically as I push new work
- 🖼️ **Screenshots** for every project, paired with each repo via a maintainable mapping object
- 🔗 **Dual links per project** — GitHub source and, where available, a live/deployed preview link
- 👥 **Contributor avatars** on collaborative projects, pulled from the GitHub contributors API
- 📱 **Fully responsive** — collapsing hamburger navigation on mobile, fluid card grid that reflows at any screen width
- 🎨 **Consistent brand styling** — deep purple (`#510061`) and orange (`#f0a500`) throughout, managed via CSS custom properties
- 🧭 **Client-side routing** with React Router — no full page reloads between Home and Projects

## Getting Started

Clone the repo and install dependencies:

```bash
git clone https://github.com/krhdev/react_github_bootcamp_portfolio.git
cd react_github_bootcamp_portfolio
npm install
```

Run the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

## 🌐 How the GitHub API Integration Works

- **Project data** — `ProjectGallery.jsx` fetches from `https://api.github.com/users/krhdev/repos`, then filters out non-portfolio repos (forks, exercises, private tooling) via an editable exclusion list
- **Live links** — each card checks the repo's `homepage` field (set in the GitHub repo settings) to conditionally show a "Live Preview" link alongside the GitHub source link
- **Bio** — `GithubBio.jsx` fetches the raw Markdown from my GitHub profile README (`krhdev/krhdev`) and renders it with `react-markdown`, so updating my GitHub profile updates this site automatically
- **Contributors** — for flagged collaborative projects, `ProjectCard.jsx` fetches `/repos/{owner}/{repo}/contributors` and displays avatars linking to each contributor's profile

## Featured Projects

The gallery includes:

- Interactive To-Do List PWA
- Node.js/Express/MySQL Tech Blog
- Note Taking Application
- README Generator (CLI tool)
- SpaceX Rebuild challenge
- DJ Website challenge
- Bootcamp Portfolio challenge
- Darkside Coders Collab App *(team project — see contributor credits on the card)*

## Responsive Design

Built mobile-first with a collapsing hamburger navigation menu and a CSS Grid project layout (`auto-fit, minmax(280px, 1fr)`) that reflows automatically across breakpoints without extra media query overhead.

## About Me

Built by **Kat (KRHDev)** — Full Stack Web Development bootcamp student, and founder of [Design & Innovative IT Services](https://github.com/krhdev).

- GitHub: [@krhdev](https://github.com/krhdev)

## 📄 License

This project was built for educational purposes as part of a bootcamp curriculum.

[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-Build-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![Deployed on Render](https://img.shields.io/badge/Deployed%20on-Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)](https://render.com/)

** Live site:** [my-react-app-2af7.onrender.com](https://my-react-app-2af7.onrender.com/)