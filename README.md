<div align="center">

  <img src="public/AiTool.png" alt="DigiTools Logo" width="100" height="100" />

  # ⚡ DigiTools Platform
  ### Next-Generation Digital Tools & AI Marketplace

  <p align="center">
    A premium, blazingly fast, and beautifully designed digital marketplace crafted with <b>React 19</b>, <b>Tailwind CSS v4</b>, <b>DaisyUI 5</b>, and <b>Vite 8</b>.
  </p>

  <p align="center">
    <a href="https://github.com/ArifKhanEver/DigiTools-Platform/stargazers"><img src="https://img.shields.io/github/stars/ArifKhanEver/DigiTools-Platform?style=for-the-badge&color=8B5CF6&logo=github" alt="Stars" /></a>
    <a href="https://github.com/ArifKhanEver/DigiTools-Platform/network/members"><img src="https://img.shields.io/github/forks/ArifKhanEver/DigiTools-Platform?style=for-the-badge&color=3B82F6&logo=github" alt="Forks" /></a>
    <a href="https://github.com/ArifKhanEver/DigiTools-Platform/blob/main/LICENSE"><img src="https://img.shields.io/github/license/ArifKhanEver/DigiTools-Platform?style=for-the-badge&color=10B981" alt="License" /></a>
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/React_19-20232A?style=flat-square&logo=react&logoColor=61DAFB" alt="React 19" />
    <img src="https://img.shields.io/badge/Vite_8-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite 8" />
    <img src="https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" alt="Tailwind CSS v4" />
    <img src="https://img.shields.io/badge/DaisyUI_5-5A0EF8?style=flat-square&logo=daisyui&logoColor=white" alt="DaisyUI 5" />
    <img src="https://img.shields.io/badge/Vercel_Ready-000000?style=flat-square&logo=vercel&logoColor=white" alt="Vercel Ready" />
  </p>

  ---

  <p align="center">
    <a href="#-key-features"><b>Key Features</b></a> •
    <a href="https://digitools-platform-zeta.vercel.app"><b>Live Demo</b></a> •
    <a href="#-tech-stack"><b>Tech Stack</b></a> •
    <a href="#-architecture"><b>Architecture</b></a> •
    <a href="#-getting-started"><b>Getting Started</b></a> •
    <a href="#-deployment"><b>Deployment</b></a> •
    <a href="#-author"><b>Author</b></a>
  </p>

</div>

---

## 🌟 Overview

**DigiTools** is a curated digital marketplace and discovery platform designed for software engineers, product designers, content creators, and modern digital entrepreneurs worldwide. 

Engineered with performance and aesthetics at its core, DigiTools delivers instant filtering, live debounced search, rich product catalog management, interactive shopping cart with promo coupon discounting, dark/light theme switching, and smooth micro-interactions.

---

## ✨ Key Features

### 🔍 1. Real-Time Intelligent Catalog & Search
- **Instant Debounced Search:** Zero-latency query matching across tool names, categories, and technical descriptions.
- **Dynamic Category Filtering:** Filter tools instantly by tags (`Exclusive`, `Top Pick`, `Essential`, `Enterprise`, `All`).
- **Multi-Criteria Sorting:** Sort by `Featured`, `Price: Low to High`, `Price: High to Low`, and `Alphabetical (A-Z)`.
- **Zero-State Handling:** Elegant empty-state display with a single-click reset button.

### 🛒 2. Reactive Shopping Cart & Coupon Engine
- **Global Cart Synchronization:** Live cart item counter badge in the sticky navigation header.
- **Interactive Discount Vouchers:**
  - `DIGI20` — Unlocks **20% instant discount** across total cart value.
  - `WELCOME10` — Unlocks **$10 flat discount**.
- **Cart Protection:** Automatic duplicate item prevention with contextual feedback alerts.
- **Simulated Checkout Flow:** Clear cart and checkout workflows with animated notifications.

### 🌓 3. Theme Customization & Accessibility
- **Light & Dark Mode:** Native toggle with automatic system color scheme preference detection.
- **Persistent State:** Saves user theme preferences across sessions via `useLocalStorage`.
- **High-Contrast Design:** Tested for readability and accessible color contrast.

### ⚡ 4. Modern UX & Robust Stability
- **React 19 Architecture:** ErrorBoundary protection and resilient data fetching.
- **Skeleton Loading Placeholders:** Shimmer UI feedback during catalog resolution.
- **Micro-Animations:** Smooth spring hover elevation effects, glowing gradients (`#4F39F6` to `#9514FA`), and floating back-to-top navigation.
- **Interactive Modals & Toasts:** Reusable toast notification system and comprehensive legal/privacy modals.

---

## 🛠️ Tech Stack

| Layer | Tool / Library | Version | Purpose |
| :--- | :--- | :--- | :--- |
| **Frontend Framework** | [React](https://react.dev/) | `^19.2.4` | Component architecture & modern state hooks |
| **Bundler & Dev Server** | [Vite](https://vitejs.dev/) | `^8.0.1` | Instant HMR & Rolldown production bundling |
| **Styling Engine** | [Tailwind CSS](https://tailwindcss.com/) | `^4.2.2` | Modern utility-first CSS design tokens |
| **Component Library** | [DaisyUI](https://daisyui.com/) | `^5.5.19` | Accessible UI primitives & theme management |
| **Icons** | [React Icons](https://react-icons.github.io/react-icons/) | `^5.2.0` | Feather & Lucide icon collections |
| **Notifications** | [React-Toastify](https://fkhadra.github.io/react-toastify/) | `^11.0.5` | Non-intrusive alert toasts |
| **Deployment** | [Vercel](https://vercel.com/) | Edge | Production hosting with SPA routing & edge caching |

---

## 📂 Project Architecture

```plaintext
DigiTools-Platform/
├── public/                       # Static public assets
│   ├── AiTool.png                # Brand favicon & icon
│   ├── data.json                 # Digital tools JSON dataset
│   ├── favicon.svg               # Vector brand badge
│   └── icons.svg                 # SVG sprite sheet
├── src/
│   ├── assets/                   # Vector & raster UI artwork
│   ├── components/
│   │   ├── DigitalTools/
│   │   │   ├── AllTools.jsx      # Product grid with result counter
│   │   │   ├── DigitalTools.jsx  # Catalog controller & filter bar
│   │   │   ├── SelectedTools.jsx # Cart summary & coupon system
│   │   │   └── Tool.jsx          # Individual product card
│   │   ├── BackToTop.jsx         # Floating back-to-top trigger
│   │   ├── CookieBanner.jsx      # Privacy compliance banner
│   │   ├── Counter.jsx           # Platform statistics metrics
│   │   ├── ErrorBoundary.jsx     # Graceful UI crash protection
│   │   ├── FAQ.jsx               # Interactive accordion
│   │   ├── Features.jsx          # Feature highlights grid
│   │   ├── Footer.jsx            # Multi-column footer & modals
│   │   ├── Hero.jsx              # Hero banner with social proof
│   │   ├── Navbar.jsx            # Sticky glassmorphism header
│   │   ├── NotFound.jsx          # Modern custom 404 page
│   │   ├── Pricing.jsx           # Tiered subscription plans
│   │   ├── SkeletonCard.jsx      # Shimmer loading placeholders
│   │   ├── Steps.jsx             # 3-Step user onboarding flow
│   │   ├── Testimonials.jsx      # Customer review cards
│   │   └── Workflow.jsx          # Value proposition showcase
│   ├── context/
│   │   └── ThemeContext.jsx      # Dark/Light mode context provider
│   ├── hooks/
│   │   ├── useDebounce.js        # Debounce hook for real-time search
│   │   ├── useLocalStorage.js    # LocalStorage persistence hook
│   │   ├── useScrollReveal.js    # Intersection observer reveal hook
│   │   ├── useTheme.js           # Theme consumer hook
│   │   └── useToast.js           # Notification trigger hook
│   ├── App.jsx                   # Root application container
│   ├── index.css                 # Global design tokens & styles
│   └── main.jsx                  # Application bootstrap
├── eslint.config.js              # ESLint 9 configuration
├── vercel.json                   # Vercel SPA routing & security headers
├── vite.config.js                # Vite 8 configuration with code splitting
└── package.json                  # Dependencies and scripts
```

---

## 💻 Getting Started

### Prerequisites
- **Node.js**: `v18.0.0` or higher
- **Package Manager**: `npm`, `yarn`, or `pnpm`

### Local Setup

```bash
# 1. Clone the repository
git clone https://github.com/ArifKhanEver/DigiTools-Platform.git

# 2. Enter the project root
cd DigiTools-Platform

# 3. Install dependencies
npm install

# 4. Launch development server
npm run dev
```

Visit `http://localhost:5173` in your browser to explore the platform locally.

### Production Build

```bash
# Compile and bundle for production
npm run build

# Preview the production bundle locally
npm run preview
```

---

## 🚀 Deployment to Vercel

This repository includes a production-ready `vercel.json` configuration with automated SPA rewrites, security headers, and asset caching rules.

### One-Click Deploy via Git:
1. Push your changes to GitHub.
2. Go to [Vercel Dashboard](https://vercel.com/new).
3. Import the `ArifKhanEver/DigiTools-Platform` repository.
4. Framework Preset will auto-detect as **Vite**.
5. Click **Deploy**.

---

## 📜 Available Scripts

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts Vite local development server with Hot Module Replacement |
| `npm run build` | Compiles optimized production bundle into `dist/` |
| `npm run preview` | Spins up local HTTP server to preview production build |
| `npm run lint` | Runs ESLint 9 checks across all source files |

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m "feat: add some AmazingFeature"`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

<div align="center">
  <sub>Crafted with ❤️ by <a href="https://github.com/ArifKhanEver"><b>Shafiqul Islam Khan</b></a></sub>
</div>
