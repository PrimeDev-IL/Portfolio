# 🚀 PrimeDev Solutions – Official Website

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://primedev.co.il)
[![Tech Stack](https://img.shields.io/badge/React-Vite-61DAFB?logo=react&logoColor=black)](https://reactjs.org/)
[![CI/CD](https://img.shields.io/badge/CI%2FCD-GitHub%20Actions-2088FF?logo=github-actions&logoColor=white)](https://github.com/features/actions)

> The official source code for [**PrimeDev.co.il**](https://primedev.co.il) — A Full-Stack & DevOps boutique agency.

---

## 📋 Overview

This repository hosts the frontend codebase for the **PrimeDev** commercial portfolio.
Unlike standard portfolio sites, this project serves as a **live demonstration of our engineering standards**: clean architecture, performance optimization, and automated delivery pipelines.

**Live URL:** [https://primedev.co.il](https://primedev.co.il)

---

## 🛠️ Tech Stack

The application is built for speed and maintainability using a modern React ecosystem:

* **Core:** [React 18](https://react.dev/)
* **Build Tool:** [Vite](https://vitejs.dev/) (For blazing fast HMR & bundling)
* **Styling:** Modern CSS3 with responsive Mobile-First methodology
* **Routing:** React Router DOM
* **Package Manager:** NPM

---

## 🤖 DevOps & CI/CD Pipeline

We practice what we preach. This project implements a fully automated **Continuous Deployment** pipeline using **GitHub Actions**.

### How it works (see `.github/workflows`):
1.  **Push to Main:** Every code commit triggers the pipeline.
2.  **Automated Build:** The workflow installs dependencies and runs `npm run build` to generate production artifacts (`dist/` folder).
3.  **Deployment:** The optimized build is automatically deployed to the production environment (Zero-downtime deployment).
4.  **Security:** All sensitive credentials (API keys, Deployment secrets) are managed via GitHub Secrets and are **not** exposed in the source code.

---

## 📂 Project Structure

```bash
├── .github/workflows   # ⚙️ CI/CD Configurations (GitHub Actions)
├── public/             # 📦 Static Assets (Images, Icons)
├── src/
│   ├── components/     # 🧩 Reusable React Components
│   ├── pages/          # 📄 Application Views/Routes
│   ├── assets/         # 🎨 Styles and Graphics
│   ├── App.jsx         # ⚛️ Main Application Entry
│   └── main.jsx        # ⚡ DOM Rendering
├── vite.config.js      # 🛠️ Build Configuration
└── package.json        # 📦 Dependencies & Scripts
```

## 🚀 Local Development

To run this project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/PrimeDev-IL/Portfolio.git
   cd Portfolio
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   ```
4. Open ```http://localhost:5173``` in your browser.

## ⚖️ License

This project is proprietary software. All rights reserved to **PrimeDev**.
Code is available for viewing and evaluation purposes only.

## 📬 Contact

**PrimeDev**

* 🌐 Website: [primedev.co.il](https://primedev.co.il)
* 📧 Email: [contact@primedev.co.il](mailto:contact@primedev.co.il)
* 💼 LinkedIn: [PrimeDev](https://www.linkedin.com/company/primedev-il)

---

© 2026 PrimeDev. All rights reserved.