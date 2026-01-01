// src/components/index.js

/**
 * Barrel file for components
 * --------------------------
 * This file re-exports all components from the components folder.
 * Purpose:
 *   1. Simplifies imports throughout the project.
 *   2. Keeps import statements clean and consistent.
 *   3. Makes refactoring easier (move components without changing import paths everywhere).
 */

export { default as CTAButton } from './CTAButton';
export { default as Logo } from './Logo';
export { default as NavLink } from './NavLink';
export { default as SectionHeader } from './SectionHeader';
