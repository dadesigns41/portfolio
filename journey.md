# Portfolio Redesign Journey

## 1. Project Overview
This portfolio showcases my programming chops and journey as a software developer. I rebuilt it using **Vite** to take advantage of modern tooling, faster builds, and a modular React structure.

Main goals:
- Make the project **modular and maintainable**.
- Highlight **features and skills** through reusable components.
- Improve **load times and developer experience**.

## 2. Motivation & Challenges
- **Pain points with the old CRA structure**:
  - Monolithic `portfolio.js` with all data in one place.
  - Containers and components mixed together, making updates harder.
  - Slower build times and heavier dependencies.
- **Challenges** faced during the redesign:
  - Understanding which parts belong to `components` vs `features`.
  - Migrating old assets and Lottie animations.
  - Preserving the same design while cleaning up the architecture.

## 3. Technology Choices
- **React** with JSX and hooks for dynamic and reusable UI.
- **Vite** for lightning-fast development and native ES modules.
- **Lottie animations** for interactive elements.
- **Contexts and custom hooks** for state management and theme toggling.

## 4. Folder & Component Structure
The new structure separates **small reusable components** from **feature-based sections**:



src/
├─ assets/ # Fonts, images, Lottie files
├─ components/ # Buttons, cards, toggles, header, footer
├─ features/ # Page sections: Greeting, Skills, Projects, WorkExperience, Achievement, Blogs, Contact
├─ contexts/ # React Contexts
├─ hooks/ # Custom hooks
├─ utils/ # Utility functions
├─ App.jsx
└─ main.jsx


- Components are independent, reusable pieces.
- Features map directly to sections of the portfolio and compose multiple components.

## 5. Implementation Journey
- **Header** → implemented first as a global entry point.
- **Greeting & Skills** → feature sections importing components like buttons and icons.
- **Projects & WorkExperience** → modular features, easy to add or update.
- **Achievement, Blogs, Podcast, Talks** → built feature-by-feature for maintainability.
- **Styling** → SCSS modules per component/feature for scoped styles.
- **Lottie Animations** → integrated in features with `DisplayLottie` component.

## 6. Lessons Learned
- A modular **feature-based approach** improves maintainability and readability.
- Components should be **reusable and independent** of the page structure.
- Planning folder structure upfront saves headaches during future expansions.

## 7. Next Steps / Future Improvements
- Add more **dynamic interactivity** (e.g., filters for projects, blog previews).
- Enhance **responsive design and animations**.
- Consider integrating **analytics and feedback tracking**.
- Document the **workflow for future developers or my own reference**.

## 8. Architectural Refinements
As the project matured, I focused on **cleaning up imports and solidifying boundaries** between files.

- Introduced **barrel files (`index.js`)** to centralize exports and reduce noisy relative imports.
- Refactored `App.jsx` to act purely as a **composition layer**, assembling features instead of containing logic.
- Clarified that:
  - **Components** are generic UI building blocks.
  - **Features** own layout and section-level composition.
- Ensured no feature directly depends on another feature—only shared components.

This made the project easier to reason about and scale.

## 9. Rendering & Entry Point Cleanup
- Fixed initial **rendering issues** between `main.jsx` and `App.jsx`.
- Properly wrapped the app in **`StrictMode`** to surface potential issues early.
- Verified that the app renders consistently across refreshes and environments.
- Tagged a stable milestone (`v0.1`) once all sections rendered correctly.

This step helped lock in a **known-good baseline** before continuing development.

## 10. Git Workflow & Discipline
I treated this redesign as a real-world project, not a sandbox.

- Used **incremental commits** to reflect meaningful changes:
  - structural refactors
  - rendering fixes
  - component migrations
- Practiced writing **clear commit messages** that explain *why* a change was made.
- Leveraged tags to mark stable checkpoints instead of guessing later.

This reinforced good habits around **traceability and rollback safety**.

## 11. React Fundamentals Reinforced
While building, I intentionally slowed down to solidify core React concepts:

- Gained clarity on:
  - **props** as component-defined inputs (not predefined magic)
  - component reusability through props
  - how JSX maps to function calls
- Began demystifying **hooks** by understanding *why* they exist before using them.
- Learned how data flows **top-down**, reducing confusion around state and re-renders.

This groundwork made later features feel *earned*, not copied.

## 12. Responsive & Cross-Device Awareness
- Identified layout inconsistencies between macOS and Windows displays.
- Recognized how:
  - viewport sizing
  - font rendering
  - flex/grid behavior  
  can differ across environments.
- Flagged responsive behavior as an area for focused iteration rather than quick fixes.

## 13. Current State of the Project
At this point, the portfolio:

- Renders all major sections correctly.
- Has a **clear, scalable folder structure**.
- Uses clean imports and predictable composition.
- Is backed by real Git history, not experimental throwaways.
- Serves as both:
  - a **public-facing portfolio**
  - a **learning artifact** documenting architectural growth.

---

### Closing Note
This project marks the transition from *“learning React syntax”* to *“thinking like a frontend engineer.”*  
The emphasis shifted from just making things work to making them **understandable, maintainable, and evolvable**.

---

*This file serves as a snapshot of my thought process and technical journey in redesigning my portfolio from CRA to a modern, modular Vite application.*