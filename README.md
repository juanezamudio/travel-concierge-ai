# Travel Concierge AI

A modern, AI-powered travel planning web app. Plan, manage, and navigate personalized itineraries with real-time chat, map integration, and seamless export options.

---

## 🚦 Project Overview & App Flow
- **App Flow:**
  1. Onboarding carousel (AI, map, chat preview)
  2. Auth (Google OAuth implemented; Apple/Phone UI only)
  3. Dashboard (Create Trip, Past Trips [stub])
  4. Trip Form (city, dates, interests → AI itinerary [stub])
  5. Itinerary (chronological, editable [stub], exportable [stub])
  6. Real-time chat for itinerary edits [UI stub]
  7. Embedded map navigation [UI stub]
  8. Export: Calendar (ICS), PDF, Email [UI stub]
  9. Offline mode, push notifications [future]

---

## 📁 Folder Structure
```
backend/                # Node.js/Express backend (Google OAuth, API)
src/
  components/
    atoms/              # Button, Input, Logo, Toast
    molecules/          # FeatureCard, StatCard, Layout
  pages/                # Landing, Onboarding, Login, Dashboard, TripForm, etc.
  services/             # API client (Axios)
  hooks/                # useNavigation
  styles/               # (empty)
  assets/               # (empty)
  utils/                # (empty)
  App.tsx               # Main app with routing
  index.tsx             # Entry point
  index.css             # Global styles
```

---

## ✨ Features (Current State)
- Onboarding carousel: **Implemented**
- OAuth login: **Google implemented** (Apple/Phone UI only)
- Dashboard: **Create Trip UI, Past Trips stub**
- Trip creation: **Form UI implemented, AI itinerary stub**
- Itinerary: **UI stub, edit/export buttons**
- Real-time chat: **UI stub only**
- Embedded map navigation: **UI stub only**
- Export: **UI stub (ICS/PDF/Email)**
- Offline mode, push notifications: **Not implemented**

---

## 🛠️ Tech Stack
- **Frontend:** React 18, TypeScript, Tailwind CSS, React Router v6, Framer Motion, Lucide Icons
- **Backend:** Node.js 16+, Express, Passport (Google OAuth), JWT, dotenv
- **DevOps:** (Planned: CircleCI, Jest)

---

## 🚀 Getting Started
### 1. Clone the repo
```bash
git clone <repo-url>
cd travel-concierge-ai
```

### 2. Install dependencies
#### Frontend
```bash
npm install
```
#### Backend
```bash
cd backend
npm install
```

### 3. Start the servers
#### Backend (port 3001)
```bash
cd backend
npm run dev
```
#### Frontend (port 3000)
```bash
cd ..
npm start
```

### 4. Open:
- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend: [http://localhost:3001](http://localhost:3001)

---

## 🧭 App Flow (Implemented/Stub)
1. **Onboarding:** Carousel with AI, map, chat preview (**implemented**)
2. **Auth:** Google OAuth (**implemented**), Apple/Phone (**UI only**)
3. **Dashboard:** Create Trip (**UI**), Past Trips (**stub**)
4. **Trip Form:** Enter city, dates, interests (**UI**), AI itinerary (**stub**)
5. **Itinerary:** UI stub, edit/export buttons
6. **Chat:** UI stub only
7. **Map:** UI stub only
8. **Export:** UI stub only
9. **Offline/Notifications:** Not implemented

---

## 🧩 Development Guidelines
- **Atomic components:** `/components/atoms` and `/components/molecules`
- **Typed props:** All components/interfaces in TypeScript
- **Accessibility:** ARIA, keyboard nav, focus outlines
- **Styling:** Tailwind utility classes, custom theme
- **Routing:** React Router v6, protected routes for auth (planned)
- **API:** Use Axios instance with JWT (see `src/services/api.ts`)
- **Testing:** (Planned: Jest)
- **PWA:** (Planned: Service worker for offline)

---

## 🔒 Backend API & Auth
- **Google OAuth:** `/api/auth/google` and `/api/auth/google/callback` (see `backend/routes/auth.js`)
- **JWT:** Issued on successful login, sent to frontend via URL param
- **Passport:** Configured for Google (see `backend/passport.js`)
- **Environment:** Requires `.env` with Google credentials, JWT secret, and `FRONTEND_URL`
- **Endpoints:**
  - `GET /api/auth/google` — Start Google OAuth
  - `GET /api/auth/google/callback` — OAuth callback, issues JWT
  - `GET /` — Health check

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
