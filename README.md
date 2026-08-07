# 🚀 DigiTools — Premium Digital Tools Platform

A modern, high-performance, and responsive web application designed to provide a seamless digital marketplace experience. DigiTools enables creators, developers, and businesses to explore, search, filter, and acquire curated digital assets and AI tools.

---

## 📸 Overview & Live Demo

* **Live Site:** [digitoolsfordigitalworkflow.netlify.app](https://digitoolsfordigitalworkflow.netlify.app/)
* **Repository:** [github.com/ArifKhanEver/DigiTools-Platform](https://github.com/ArifKhanEver/DigiTools-Platform)

---

## 🛠️ Tech Stack & Dependencies

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **UI Library** | [React 19](https://react.dev/) | Component-driven declarative UI architecture |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) & [DaisyUI 5](https://daisyui.com/) | Utility-first styling & accessible component primitives |
| **Build Tool** | [Vite](https://vitejs.dev/) | Lightning-fast HMR and optimized production bundling |
| **Notifications** | [React-Toastify](https://fkhadra.github.io/react-toastify/) | Non-intrusive interactive feedback and alerts |
| **Typography** | [Manrope](https://fonts.google.com/specimen/Manrope) | Modern geometric sans-serif typeface |

---

## ✨ Key Features & Architectural Highlights

1. **⚡ Dynamic Catalog & Instant Search:**
   - Real-time client-side search across tool titles and descriptive metadata.
   - Dynamic category tag filtering (`All`, `Exclusive`, `Top Pick`, `Essential`, `Enterprise`).
   - Graceful zero-state views with single-click filter resets.

2. **🛒 Reactive Cart & State Synchronization:**
   - Bidirectional state syncing between Header badge indicator and Cart view.
   - Instant subtotal calculation with automatic duplicate item prevention.
   - Interactive checkout simulation with contextual feedback.

3. **🎨 Modern Aesthetics & Micro-interactions:**
   - Curated linear gradient palettes (`#4F39F6` to `#9514FA`).
   - Subtle card hover elevations, smooth anchor scrolling, and spring transitions.
   - Accessible modal dialogues for Privacy Policy and Terms of Service.

4. **📱 Responsive & Accessible (A11y):**
   - Fully optimized for Mobile, Tablet, and Ultra-wide screens.
   - Proper heading hierarchy (`h1` -> `h2` -> `h3`), descriptive ARIA labels, and keyboard-navigable controls.

---

## 📂 Project Architecture

```plaintext
src/
├── assets/                  # Optimized raster and SVG graphic assets
├── components/
│   ├── DigitalTools/
│   │   ├── AllTools.jsx       # Grid display of filtered tool cards
│   │   ├── DigitalTools.jsx   # Catalog state, search, and category filter controller
│   │   ├── SelectedTools.jsx  # Cart checkout view with item summary & actions
│   │   └── Tool.jsx           # Individual product card component
│   ├── Counter.jsx            # Platform engagement metrics and statistics
│   ├── Footer.jsx             # Footer with newsletter form & legal modal dialogs
│   ├── Hero.jsx               # Hero banner with social proof badges & CTA
│   ├── Navbar.jsx             # Sticky glassmorphism header with navigation & cart badge
│   ├── Pricing.jsx            # Tiered pricing plans (Starter, Pro, Enterprise)
│   ├── Steps.jsx              # Onboarding 3-step feature roadmap
│   └── Workflow.jsx           # Value proposition & conversion CTA section
├── App.jsx                  # Root component coordinating global state
├── index.css                # Global design system variables & font imports
└── main.jsx                 # React entry point with toast notifications provider
```

---

## 💻 Getting Started Locally

### Prerequisites
- Node.js (v18.0.0 or higher recommended)
- npm or yarn

### Installation & Development

```bash
# 1. Clone the repository
git clone https://github.com/ArifKhanEver/DigiTools-Platform.git

# 2. Navigate into project directory
cd B13-Assignment-6

# 3. Install dependencies
npm install

# 4. Start Vite local development server
npm run dev

# 5. Build for production
npm run build

# 6. Preview production build
npm run preview
```

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
