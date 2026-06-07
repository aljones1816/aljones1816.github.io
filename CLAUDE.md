# Claude Instructions for aljones1816.github.io

This is a personal portfolio website for a data engineer, built with React, TypeScript, and Vite, deployed to GitHub Pages at alanjones.dev.

## Project Structure
- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: CSS modules
- **Icons**: Tabler Icons React
- **Deployment**: GitHub Pages via `gh-pages`
- **API**: Vercel serverless functions in `/api/`

## Development Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production (runs TypeScript compiler + Vite build)
- `npm run lint` - Run ESLint on TypeScript/TSX files
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy to GitHub Pages

## Key Files
- `/src/components/App.tsx` - Main application component
- `/src/components/ProjectCard.tsx` - Project showcase component
- `/src/assets/content.ts` - Content data
- `/api/github-events.ts` - Vercel API endpoint for GitHub events
- `/vercel.json` - Vercel deployment configuration

## Build Process
1. TypeScript compilation (`tsc`)
2. Vite build
3. CNAME file creation for custom domain
4. Deployment to `gh-pages` branch

## Linting & Type Checking
Always run `npm run lint` and `npm run build` after making changes to ensure code quality and type safety.