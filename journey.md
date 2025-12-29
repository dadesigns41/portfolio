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

---

*This file serves as a snapshot of my thought process and technical journey in redesigning my portfolio from CRA to a modern, modular Vite application.*