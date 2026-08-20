# FrontPrep AI

FrontPrep AI is an AI-powered frontend interview preparation platform that helps developers practice technical interviews through realistic mock interviews and receive instant AI-generated feedback.

## 📈 Current Progress

### ✅ Completed

- Project setup using Vite
- Project folder structure
- Reusable Button component
  - Variant-based styling
  - `children` prop support
  - Custom `className`
- Navbar
  - Dynamic navigation links using `.map()`
  - Reusable Button integration
- Hero Section
  - Badge
  - Heading
  - Description
  - Call-to-action buttons
  - Dashboard preview placeholder

- Features Section
  - Reusable `FeatureCard` component
  - Dynamic rendering using `.map()`
  - Icons, title, and description
  - Grid layout

- Testimonials Section
  - Reusable `TestimonialCard` component
  - Dynamic rendering using `.map()`
  - Rating, review, avatar, name, and job title

- FAQ Section
  - Reusable `FaqCard` component
  - Dynamic rendering using `.map()`

- Call-to-Action (CTA) Section
  - Encourages users to start AI interview practice
  - Reuses `SectionHeader` and `Button` components

- Footer
  - Reusable `FooterLinks` component
  - Dynamic Quick Links
  - Dynamic Resources
  - Dynamic Social Links

- React Router setup using `createBrowserRouter`
- Authentication routing
  - Login page
  - Signup page
  - Forgot Password page
- Reusable authentication components
  - AuthLayout
  - AuthInput
  - PasswordInput
  - Divider
- Authentication UI
  - Login page
  - Signup page
  - Forgot Password page
  - Google Sign-In button
  - Navigation between authentication pages
- Improved form accessibility
  - Proper `label` and `htmlFor` usage
  - `aria-label` for icon-only buttons
  - Focus styles using `focus-within`
- Reusable component structure for authentication pages
- Form Validation
  - Set up Validation for Login
  - Set up Validation for signup
- Integrated Firebase
- Enabled Email/Password Authentication
- Implemented User Signup with Firebase Authentication
- Updated User Profile with Display Name
- Redirect to Dashboard after Successful Signup
- Added Firebase Error Handling for Signup
- Implemented User Signin with Firebase Authentication
- Redirect to Dashboard after Successful Signin
- Configured Redux Store using Redux Toolkit
- Created User Slice for authentication state management
- Implemented Email/Password Signup and Login with Firebase Authentication
- Implemented Google Sign-In with Firebase Authentication
- Synced Firebase authentication state with Redux using `onAuthStateChanged`
- Implemented Logout using Firebase `signOut`
- Created Protected Routes for private pages
- Created Public Routes for authentication pages
- Refactored routing using Layout Routes (`App` + `Outlet`)
- Added authentication loading state to prevent page flicker during refresh
- Improved authentication flow by separating Redux updates from route navigation
- Organized dashboard structure
  - Created `dashboard` folder for pages
  - Created `DashboardLayout`
  - Created `Sidebar`
  - Created `Header`
- Planned scalable dashboard layout using nested routes and `<Outlet />`
- Implemented Dashboard Layout with nested routing
- Added reusable Sidebar and Header components
- Built Dashboard Home page structure
- Configured dashboard navigation using `NavLink` with active route highlighting
- Built Dashboard Home page
- Added reusable `StatCard` and `ActionCard` components
- Rendered dashboard sections dynamically using `.map()`
- Improved Dashboard UI with stats, quick actions, and hover effects
- Built `RecentActivity` section for Dashboard Home
- Created reusable `ActivityCard` component
- Displayed recent activities dynamically using `.map()`
- Improved Dashboard UI with activity feed and hover interactions
- Built Mock Interview setup page
- Added interview configuration form (Topic, Difficulty, Questions, Interview Type)
- Designed responsive interview setup card
- Added Start Interview action and AI helper message
- Created interview state with Redux Toolkit
- Integrated Gemini API for AI question generation
- Stored generated questions in Redux
- Built Interview Session page with progress tracking.
- Added question navigation (Previous / Next / Finish).
- Connected answer input with Redux for auto-saving.
- Implemented interview completion flow.
- Integrated Gemini AI to generate interview feedback.
- Built AI-powered interview feedback page.
- Displayed overall score and summary.
- Added detailed feedback for each question.
- Implemented "Start Another Interview" flow with Redux reset.
- Added loading pages for interview generation and AI feedback.
- Added reusable error message component.
- Added Redux error and loading state handling.
- Added error handling for Gemini API failures.

- Learned and implemented Firestore fundamentals
  - Collections, documents, fields, document IDs, and subcollections
  - CRUD operations
  - Authentication vs authorization
  - Firestore security rules
  - Document references and queries
- Created and configured Firestore `(default)` database
- Connected Firestore with the React application using `getFirestore`
- Created user documents using Firebase Auth UID
- Implemented saving and reading user details from Firestore
- Implemented updating and deleting Firestore documents
- Created user-specific interview documents
- Stored interview metadata
  - Topic
  - Difficulty
  - Question count
  - Interview type
  - Interview status
- Created `questions` subcollection for each interview
- Stored each generated interview question as an individual Firestore document
- Used question IDs as Firestore question document IDs
- Stored generated questions and expected answers in Firestore
- Stored the current `interviewId` in Redux
- Persisted user answers to the corresponding Firestore question documents
- Saved final interview answer before generating AI feedback
- Stored overall AI interview score and summary in Firestore
- Updated interview status to `completed` after successful feedback generation
- Added interview timestamps for tracking interview progress
- Built Interview History page
- Integrated Firestore reads using `getDocs()`
- Created reusable `InterviewHistoryCard` component
- Displayed real user interview data from Firestore
- Added interview creation timestamps using `createdAt`
- Implemented Firestore queries using `query()` and `orderBy()`
- Sorted interview history by newest interviews first
- Formatted Firestore timestamps for UI display

## ✨ Planned Features

- User Authentication
- AI-powered Mock Interviews
- Frontend Interview Question Bank
- Personalized AI Feedback
- Interview History
- Performance Dashboard
- Responsive Design

## 🛠️ Tech Stack

- React
- Vite
- React Router DOM
- Tailwind CSS
- Firebase (Planned)
- Redux Toolkit (Planned)
- Gemini API (Planned)

## 📂 Folder Structure

```
src/
├── assets/
├── components/
├── common/
├── pages/
├── hooks/
├── utils/
├── constants/
├── App.jsx
└── main.jsx
```

## 🎯 Goal

The goal of this project is to build a real-world AI SaaS application while following professional development practices and learning how to build products independently.

---

## 👨‍💻 Author

**Vijay Goswami**

Building FrontPrep AI to help frontend developers prepare for technical interviews with AI-powered practice sessions.
