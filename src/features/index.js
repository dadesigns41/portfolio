// src/features/index.js

/**
 * Barrel file for features
 * ------------------------
 * This file re-exports all feature components from the features folder.
 * Purpose:
 *   1. Simplifies imports throughout the project.
 *   2. Keeps import statements clean and consistent.
 *   3. Makes refactoring easier (move features without changing import paths everywhere).
 */

export { default as Contact } from './Contact';
export { default as DevToolbelt } from './DevToolbelt';
export { default as Footer } from './Footer';
export { default as Header } from './Header';
export { default as Intro } from './Intro';
export { default as Projects } from './Projects';
export { default as Skills } from './Skills';
