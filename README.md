# Travel Concierge AI

A modern, AI-powered travel planning web app. Plan, manage, and navigate personalized itineraries with real-time chat, map integration, and seamless export options.

---

## 🚦 Project Rules (Summary)
- **App Flow:** Onboarding carousel → Auth (Google/Apple/Phone) → Dashboard (Create Trip, Past Trips) → Trip Form (city, dates, interests) → AI Itinerary → Edit via Chat → Map Navigation → Export (ICS/PDF/Email) → Offline & Notifications
- **Frontend:**
  - Atomic design: `/components/atoms`, `/components/molecules`
  - Pages: `/pages` (React Router v6)
  - API: `/services` (Axios, JWT)
  - Hooks: `/hooks` (custom, typed)
  - Styles: Tailwind, custom theme (forest green #2F855A, sky blue #4299E1, white backgrounds)
  - Accessibility: ARIA, keyboard nav, focus outlines, WCAG 2.1 AA
  - Responsive: Mobile-first, all modern browsers
- **Backend:** Node.js (16+), Express, PostgreSQL (AWS RDS), OpenAI GPT-4, Mapbox/Google Maps, OAuth2, AWS SNS (SMS/Push)
- **Non-Functional:** 99% uptime, <3s load, GDPR/CCPA-ready, CircleCI, Jest

---

## ✨ Features
- Onboarding carousel (AI, map, chat preview)
- OAuth login (Google, Apple, phone/OTP)
- Dashboard: Create Trip, Past Trips
- Trip creation: City, dates, interests → AI itinerary
- Itinerary: Chronological, editable, exportable
- Real-time chat for itinerary edits
- Embedded map navigation
- Export: Calendar (ICS), PDF, Email
- Offline mode, push notifications

---

## 🛠️ Tech Stack
- **Frontend:** React 18+, TypeScript, Tailwind CSS, React Router v6, Framer Motion, Lucide Icons, PWA-ready
- **Backend:** Node.js, Express, PostgreSQL, OpenAI GPT-4, Mapbox/Google Maps, AWS (ECS, Fargate, S3, SNS)
- **DevOps:** CircleCI, Jest, Supertest

---

## 📁 Folder Structure
```
src/
  components/
    atoms/        # Button, Input, Logo, Toast, etc.
    molecules/    # FeatureCard, StatCard, Layout, etc.
  pages/          # Landing, Onboarding, Login, Dashboard, TripForm, etc.
  services/       # API clients (Axios)
  hooks/          # Custom hooks (useNavigation, etc.)
  styles/         # Tailwind config, global styles
  assets/         # Images, icons
  utils/          # Helpers
  App.tsx         # Main app with routing
  index.tsx       # Entry point
  index.css       # Global styles
```

---

## 🚀 Getting Started
1. **Clone the repo:**
   ```bash
   git clone <repo-url>
   cd vibe-coded-web-app
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the dev server:**
   ```bash
   npm start
   ```
4. **Open:** [http://localhost:3001](http://localhost:3001)

---

## 🧭 App Flow
1. **Onboarding:** Carousel with AI, map, chat preview
2. **Auth:** Google, Apple, or phone (OTP)
3. **Dashboard:** Create Trip, view Past Trips
4. **Trip Form:** Enter city, dates, interests → AI generates itinerary
5. **Itinerary:** Chronological, editable, exportable (ICS/PDF/Email)
6. **Chat:** Real-time AI edits to itinerary
7. **Map:** Embedded navigation, step controls
8. **Export:** Calendar, PDF, Email
9. **Offline/Notifications:** Cache today's stops, push alerts

---

## 🧩 Development Guidelines
- **Atomic components:** Use `/components/atoms` and `/components/molecules`
- **Typed props:** All components/interfaces in TypeScript
- **Accessibility:** ARIA, keyboard nav, focus outlines
- **Styling:** Tailwind utility classes, custom theme
- **Routing:** React Router v6, protected routes for auth
- **API:** Use Axios instance with JWT
- **Testing:** Use Jest for unit tests
- **PWA:** Service worker for offline (future)

---

## 🤝 Contributing
1. Fork the repo
2. Create a feature branch
3. Make changes & test
4. Submit a pull request

---

## 📄 License
MIT

---

Built with ❤️ for the Vibe Coding Workshop
