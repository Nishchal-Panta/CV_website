# Nishchal Panta - Personal Portfolio

A modern, elegant, and professional personal portfolio website built with clean web fundamentals. This project demonstrates production-grade engineering practices, including a fully automated CI/CD pipeline.

## 🚀 Tech Stack

- **HTML5**: Semantic, accessible structure.
- **CSS3 (Tailwind)**: Utility-first styling with a custom design system for typography and spacing.
- **Vanilla JavaScript**: Lightweight interactions (ScrollReveal, Modal logic) without heavy frameworks.
- **Vite**: Modern build tool for fast development and optimized production bundles.

## ⚙️ CI/CD Pipeline

This repository implements a robust CI/CD pipeline using **GitHub Actions**.

### Workflow: `deploy.yml`
- **Trigger**: Pushes and Pull Requests to the `main` branch.
- **Jobs**:
  1.  **Build**: Sets up Node.js, installs dependencies, runs linting/validation, and builds the static assets.
  2.  **Deploy**: Automatically deploys the built artifacts to **GitHub Pages**.

## 📦 Deployment Process

The project is configured for **GitHub Pages**.

1.  Push changes to `main`.
2.  GitHub Actions automatically triggers the build.
3.  Upon success, the site is live at `https://[username].github.io/[repo-name]`.

## 🛠️ Project Structure

```
.
├── .github/workflows/   # CI/CD configurations
├── client/
│   ├── index.html       # Main entry point
│   ├── public/          # Static assets (images, CV)
│   └── src/
│       ├── script.js    # Vanilla JS logic
│       └── styles.css   # Global styles & Tailwind
└── vite.config.ts       # Build configuration
```

## 🎨 Design Philosophy

- **Typography**: A pairing of *Cormorant Garamond* (Serif) for headers and *Inter* (Sans-serif) for body text to evoke a professional yet modern feel.
- **Whitespace**: Generous spacing to improve readability and visual hierarchy.
- **Motion**: Subtle, smooth animations using `ScrollReveal` to guide the user's eye without being distracting.
