# LifeBack

**AI-Assisted Behavioral Screening for Early Depression Detection**

LifeBack is a healthcare technology platform focused on early depression detection through structured behavioral screening, voice-based signal analysis, and future multimodal research initiatives.

The platform is designed around:
* Research credibility
* Privacy-first principles
* Human-in-the-loop AI
* Clinical responsibility
* Early intervention

> **Note:** LifeBack is NOT a diagnostic tool. LifeBack is an AI-assisted behavioral screening platform.

---

## Current Status

**Frontend Phase Completed**

### Implemented:
* Public Landing Page
* About Page
* Research Page
* Past Work Page
* Login UI
* Dashboard UI
* Responsive Design System
* Enterprise Frontend Architecture

### Not Yet Implemented:
* Backend
* Authentication
* Database
* Assessment Engine
* Voice Processing
* Video Analysis
* Genomics Processing
* Clinician Portal
* Admin Portal

---

## Tech Stack

### Frontend
* Next.js 15
* TypeScript
* Tailwind CSS
* Framer Motion
* Lucide React

### Architecture
* App Router
* Domain-Driven Structure
* Server Components
* Strict TypeScript

---

## Features

### Public Website
* Landing Page
* About
* Research
* Past Work

### Platform UI
* Login Gateway
* User Dashboard
* Detection Hub
* Mental Health Awareness Hub
* Crisis Resource Center

---

## Project Structure

The frontend architecture follows a domain-driven and feature-based structure:

```text
frontend/
└── src/
    ├── app/           # Next.js App Router (Pages & Layouts)
    ├── features/      # Domain-specific modules
    │   ├── public/    # Public-facing website sections
    │   ├── user/      # User dashboard and screening flows
    │   ├── clinician/ # Clinician portal features (Planned)
    │   └── admin/     # Admin dashboard features (Planned)
    ├── shared/        # Shared application resources
    │   ├── ui/        # Reusable UI components
    │   ├── hooks/     # Custom React hooks
    │   ├── api/       # API integration utilities
    │   ├── lib/       # Utility functions and configurations
    │   └── store/     # Global state management
    ├── layouts/       # Reusable page layouts
    └── types/         # Global TypeScript definitions
```

---

## Getting Started

### Prerequisites
* Node.js 20+
* npm

### Installation

```bash
git clone <repository-url>
cd LifeBack
cd frontend
npm install
```

### Run Development Server

```bash
npm run dev
```

Application runs on:
```text
http://localhost:3000
```

### Build for Production

```bash
npm run build
```

### Run Production Build

```bash
npm start
```

---

## Architecture Principles

* **Feature-driven architecture:** Organized by business domains.
* **Reusable UI primitives:** Consistent design system components.
* **Strict typing:** TypeScript for end-to-end type safety.
* **Accessibility-first development:** Inclusive design practices.
* **Scalability:** Prepared for future User, Clinician, and Admin layers.

---

## Roadmap

### Phase 1 (Completed)
* Public Website
* Dashboard Foundation
* Design System

### Phase 2 (Planned)
* Authentication
* Assessment Flow
* Voice Recording
* Backend APIs

### Phase 3 (Planned)
* Clinician Portal
* Reporting
* Longitudinal Tracking

### Phase 4 (Research)
* Video Analysis
* Genomics Integration
* Multimodal Detection

---

## Accessibility

* WCAG AA considerations
* Keyboard navigation
* Responsive design
* Reduced motion support

---

## Disclaimer

LifeBack is an AI-assisted behavioral screening and research platform intended to support awareness and early identification efforts. It is not a diagnostic tool, medical device, or replacement for professional clinical evaluation. Individuals experiencing mental health concerns should consult qualified healthcare professionals.
