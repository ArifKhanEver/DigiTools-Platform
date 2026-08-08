# 🚀 DigiTools — Premium Digital Tools Platform

A modern, high-performance, and responsive web application designed to provide a seamless digital marketplace experience. DigiTools enables creators, developers, and businesses to explore, search, filter, and acquire curated digital assets and AI tools.

> **v2.0** — Major update with animated counter, testimonials carousel, newsletter section, cookie consent, features grid, custom hooks (useScrollReveal, useLocalStorage, useDebounce), skeleton loading, and enhanced accessibility.

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

1. **⚡ Dynamic Catalog, Instant Search & Sorting:**
   - Real-time client-side search across tool titles and descriptive metadata.
   - Dynamic category tag filtering (`All`, `Exclusive`, `Top Pick`, `Essential`, `Enterprise`).
   - Multiple sorting modes (`✨ Featured`, `💵 Price: Low to High`, `💎 Price: High to Low`, `🔤 Name: A to Z`).
   - Graceful zero-state views with single-click filter resets and live result counters.

2. **🛒 Reactive Cart, State Synchronization & Coupons:**
   - Bidirectional state syncing between Header badge indicator and Cart view.
   - Integrated promo coupon discount system (`DIGI20` for 20% off, `WELCOME10` for $10 off).
   - Instant subtotal/total calculation with automatic duplicate item prevention.
   - Interactive checkout simulation with contextual feedback.

3. **💬 Interactive FAQ & Onboarding:**
   - Smooth accordion collapse components for common questions regarding commercial licensing, updates, and refunds.
   - Clear 3-step feature roadmap for new users.

4. **🎨 Modern Aesthetics, Micro-interactions & A11y:**
   - Curated linear gradient palettes (`#4F39F6` to `#9514FA`).
   - Floating `BackToTop` button with window scroll triggers.
   - Subtle card hover elevations, smooth anchor scrolling, and spring transitions.
   - Accessible modal dialogues for Privacy Policy and Terms of Service.
   - Comprehensive OpenGraph and Twitter card metadata for optimal search engine indexing.

---

## 📂 Project Architecture

```plaintext
src/
├── assets/                  # Optimized raster and SVG graphic assets
├── components/
│   ├── DigitalTools/
│   │   ├── AllTools.jsx       # Grid display of filtered tool cards with result count
│   │   ├── DigitalTools.jsx   # Catalog state, search, category filter & sorting controller
│   │   ├── SelectedTools.jsx  # Cart checkout view with coupon engine & item summary
│   │   └── Tool.jsx           # Individual product card component with rating tags
│   ├── BackToTop.jsx          # Smooth floating back-to-top scroll trigger
│   ├── Counter.jsx            # Platform engagement metrics and statistics
│   ├── FAQ.jsx                # Interactive FAQ accordion component
│   ├── Footer.jsx             # Footer with newsletter form, repo links & legal modals
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

## 🚀 Vercel Deployment

This project is pre-configured with `vercel.json` for zero-configuration deployment to Vercel:

1. Import repository on [vercel.com](https://vercel.com/new).
2. Framework Preset: **Vite** (auto-detected).
3. Build Command: `npm run build`
4. Output Directory: `dist`
5. Click **Deploy**.

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
