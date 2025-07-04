# IITJSenatePortal

**IITJSenatePortal** is a web application built using [Next.js](https://nextjs.org), [ShadCN UI](https://ui.shadcn.com/), [Tailwind CSS](https://tailwindcss.com/), and TypeScript. It provides a modern, customizable interface for managing and interacting with the IITJ Senate portal.

---

## Getting Started

Follow these steps to set up the project locally:

1. **Fork the repository** on GitHub.

2. **Clone your forked repository:**
   ```bash
   git clone <your-forked-repo-url>
   cd

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

---

## Folder Structure

- **app/**  
  Main Next.js application code, including pages and layouts.

- **app/(name)/**  
  A route-group folder. Does not affect the url.

- **app/fests/**  
  Contains the page.tsx file available at /fests url.

- **app/fests/\[festname]/**  
  Contains the page.tsx file available at /fests/festname url.

- **app/fests/layout.tsx**  
  Layout file applies to both /fests and /fests/festname url.

- **components/**  
  Reusable React components, including ShadCN UI components.

- **components/ui**  
  ShadCN UI components.

- **components/shared**  
  React components shared between pages.

- **components/home**  
  React components for home page.

- **lib/**  
  Utility functions and libraries.

- **hooks/**  
  React custom hooks.

- **providers/**  
  React context providers.

- **public/**  
  Static assets such as images and icons.

- **types/**  
  TypeScript type definitions.

- **.env.local**  
  Environment variables (not committed to version control).

---

## ShadCN UI Documentation

For more information on customizing and using ShadCN UI components, visit the [ShadCN UI Documentation](https://ui.shadcn.com/docs).

---

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [ShadCN UI Documentation](https://ui.shadcn.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

---

## Deployed on Vercel

Dev: [https://iitjsenateportal.vercel.app/](https://iitjsenateportal.vercel.app/).
