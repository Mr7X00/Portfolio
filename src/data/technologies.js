export const technologiesData = [
  {
    id: "html5",
    name: "HTML5",
    category: "Frontend",
    summary: "Semantic Layout & Web APIs",
    tooltip: "Semantic markup, accessibility (a11y), DOM structure, Web APIs",
    color: "#E34F26",
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.14 1.86h15.72l-1.43 16.03L12 20.91l-6.43-3.02L4.14 1.86z" fill="#E34F26"/>
      <path d="M12 3.49v15.71l5.12-2.4 1.15-13.31H12z" fill="#EF652A"/>
      <path d="M12 7.02H8.38l.26 2.94H12V7.02zm0 5.4H9.68l.22 2.47L12 15.48v-2.07l-.01.01-.98-.27-.06-.72H12v-2.42z" fill="#EBEBEB"/>
      <path d="M12 7.02h3.62l-.34 3.86H12v-3.86zm0 5.4h2.29l-.22 2.47-2.07.59v2.07l3.86-1.07.54-6.06H12v2zm0-2.46v2.42h3.4l.22-2.42H12z" fill="#FFFFFF"/>
    </svg>`
  },
  {
    id: "css3",
    name: "CSS3",
    category: "Frontend",
    summary: "Responsive Layouts & Modern CSS",
    tooltip: "Modern Flexbox, CSS Grid layouts, media queries, CSS variables",
    color: "#1572B6",
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.14 1.86h15.72l-1.43 16.03L12 20.91l-6.43-3.02L4.14 1.86z" fill="#1572B6"/>
      <path d="M12 3.49v15.71l5.12-2.4 1.15-13.31H12z" fill="#33A9DC"/>
      <path d="M12 6.95H8.39l.26 2.87h3.35V6.95zm0 5.34H8.89l.26 2.88L12 15.98v-2.12l-1.47-.4-.09-1.01H12v-2.16z" fill="#EBEBEB"/>
      <path d="M12 6.95h3.61l-.34 3.87H12v-3.87zm0 5.34h2.15l-.2 2.22-1.95.53v2.12l3.66-1.01.5-5.86H12v2z" fill="#FFFFFF"/>
    </svg>`
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "Programming",
    summary: "ES6+, Async/Await & DOM APIs",
    tooltip: "Modern ECMAScript, Promises, Async/Await, event-driven DOM scripting",
    color: "#F7DF1E",
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="4" fill="#F7DF1E"/>
      <path d="M7.74 18.06c.46.27.99.44 1.56.44.87 0 1.4-.41 1.4-1.39v-6.38h-1.6v6.3c0 .35-.16.5-.47.5-.23 0-.52-.1-.71-.24l-.18.77zm6.73.54c1.87 0 3.03-1.04 3.03-2.61 0-1.45-.87-2.1-2.4-2.73-.91-.38-1.3-.67-1.3-1.25 0-.53.42-.92 1.13-.92.68 0 1.25.26 1.63.53l.42-.87c-.45-.33-1.19-.58-2.06-.58-1.68 0-2.74 1.01-2.74 2.45 0 1.34.82 2.05 2.31 2.66.95.39 1.39.73 1.39 1.35 0 .61-.51 1.05-1.36 1.05-.88 0-1.57-.35-2.02-.7l-.44.92c.51.44 1.44.75 2.41.75z" fill="#000000"/>
    </svg>`
  },
  {
    id: "tailwindcss",
    name: "Tailwind CSS",
    category: "Styling",
    summary: "Utility-First & Glass UI",
    tooltip: "Utility-first architecture, component design tokens, glassmorphism",
    color: "#06B6D4",
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.974 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.974 12 6.001 12z" fill="#06B6D4"/>
    </svg>`
  },
  {
    id: "python",
    name: "Python",
    category: "Programming",
    summary: "Automation, Scripting & Backend",
    tooltip: "Data handling, scripting, algorithms, and backend services",
    color: "#3776AB",
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.91 2.06c-5.26 0-4.93 2.28-4.93 2.28l.01 2.36h5.02v.71H4.97S2 7.08 2 12.35c0 5.26 2.59 5.09 2.59 5.09h1.55v-2.18s-.08-2.59 2.54-2.59h5.01s2.45.04 2.45-2.41V4.47s.37-2.41-4.23-2.41zm-2.73 1.54a.78.78 0 110 1.56.78.78 0 010-1.56z" fill="#3776AB"/>
      <path d="M12.09 21.94c5.26 0 4.93-2.28 4.93-2.28l-.01-2.36h-5.02v-.71h7.04s2.97.33 2.97-4.94c0-5.26-2.59-5.09-2.59-5.09h-1.55v2.18s.08 2.59-2.54 2.59h-5.01s-2.45-.04-2.45 2.41v5.79s-.37 2.41 4.23 2.41zm2.73-1.54a.78.78 0 110-1.56.78.78 0 010 1.56z" fill="#FFD438"/>
    </svg>`
  },
  {
    id: "java",
    name: "Java",
    category: "Programming",
    summary: "OOP, DSA & Architecture",
    tooltip: "Object-Oriented Programming, Data Structures, multithreading, robust backend architecture",
    color: "#ED8B00",
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.85 17.58s-1.8.35-1.25 1.34c.67 1.2 3.19 1.12 3.63 1.09 1.74-.13 3.48-.62 5.24-.76 1.79-.14 3.01.69 3.01.69s.89-.6-1.14-1.21c-2.4-.73-4.57-.45-6.66-.45-1.07 0-2.83-.7-2.83-.7zm-1.12 2.76s-2.02.6-1.08 1.48c1.19 1.11 4.6.9 6.2.73 2.37-.26 4.91-.71 7.23-.42 1.4.17 2.92.74 2.92.74s.69-.64-1.12-1.22c-2.46-.78-4.97-.56-7.46-.53-2.13.03-6.69-.78-6.69-.78z" fill="#5382A1"/>
      <path d="M13.67 9.87c.7 1.47-1.1 2.82-1.1 2.82s2.78-1.42 1.54-3.23c-1.2-1.75-2.29-2.61.99-5.46-3.8 2.06-2.3 4.14-1.43 5.87zm4.35 4.39c1.94-.97 1.04-2.8 1.04-2.8s-.24 1.39-1.92 2.1c-1.96.83-4.64.67-6.86.3-2.6-.44-4.83.21-4.83.21s1.3-.43 3.62-.27c2.7.18 5.76.15 7.42-.51.49-.19 1.04-.64 1.53-.93z" fill="#E76F00"/>
      <path d="M15.54 6.77c.86 1.05-.27 2.14-.27 2.14s1.77-.96 1.06-2.36c-.73-1.44-1.91-2.09.49-4.55-2.76 1.55-1.94 3.51-1.28 4.77z" fill="#E76F00"/>
      <path d="M5.5 22.37s1.39.46 3.66.27c2.51-.21 5.34-.67 7.76-.23 1.31.24 2.08.68 2.08.68s.77-.66-1.13-1.13c-2.33-.58-4.86-.34-7.25-.26-1.79.06-5.12-.67-5.12-.67s-1.07.67 0 1.34z" fill="#5382A1"/>
    </svg>`
  },
  {
    id: "nodejs",
    name: "Node.js",
    category: "Backend",
    summary: "Express.js & REST APIs",
    tooltip: "Asynchronous event loop, Express middleware, server-side APIs",
    color: "#339933",
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2l9 5.2v10.4L12 22.8 3 17.6V7.2L12 2z" fill="#339933"/>
      <path d="M12 3.6l7.6 4.4v8.8L12 21.2 4.4 16.8V8L12 3.6z" fill="#026E00"/>
      <path d="M12 4.8L5.6 8.5v7l6.4 3.7 6.4-3.7v-7L12 4.8z" fill="#339933"/>
      <path d="M11.9 8.2a1.6 1.6 0 00-1.6 1.6v4.4a1.6 1.6 0 003.2 0v-4.4a1.6 1.6 0 00-1.6-1.6z" fill="#FFFFFF"/>
    </svg>`
  },
  {
    id: "mongodb",
    name: "MongoDB",
    category: "Database",
    summary: "NoSQL & Document Modeling",
    tooltip: "Document-oriented collections, schema validation, aggregation pipelines",
    color: "#47A248",
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.01 2.03c-.22.25-1.92 2.1-2.84 3.77-1.46 2.65-1.98 4.77-1.98 6.94 0 4.19 2.58 7.42 4.67 8.79.16.1.18.25.18.47h.34c0-.22.02-.37.18-.47 2.09-1.37 4.67-4.6 4.67-8.79 0-2.17-.52-4.29-1.98-6.94-.92-1.67-2.62-3.52-2.84-3.77-.09-.11-.27-.11-.4 0z" fill="#47A248"/>
      <path d="M12.01 2.03v19.97c2.09-1.37 4.67-4.6 4.67-8.79 0-2.17-.52-4.29-1.98-6.94-.92-1.67-2.62-3.52-2.84-3.77l.15-.47z" fill="#499D4A"/>
      <path d="M12.01 21.6c-.16-.09-.28-.2-.36-.33l.36-.67.36.67c-.08.13-.2.24-.36.33z" fill="#A6A385"/>
    </svg>`
  },
  {
    id: "mysql",
    name: "MySQL",
    category: "Database",
    summary: "Relational Schemas & Queries",
    tooltip: "Relational data modeling, indexing, foreign keys, and ACID transactions",
    color: "#00758F",
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.91 14.07c-.44-.24-1.28-.48-2.07-.48-1.57 0-2.67.87-2.67 2.21 0 1.25.99 2.12 2.37 2.12 1.05 0 1.94-.48 2.37-.92v1.27c-.64.44-1.61.68-2.64.68-2.17 0-3.69-1.36-3.69-3.23 0-1.92 1.6-3.32 3.86-3.32.96 0 1.93.28 2.47.62v1.05zM2.09 9.38C3.5 6.64 6.8 4.27 10.74 4.04c3.48-.21 6.87 1.13 9.07 3.63.4.45.75.93 1.05 1.44-1.07-.63-2.31-1.03-3.64-1.12-3.15-.22-6.17 1.13-7.98 3.56-1.59 2.13-2.19 4.88-1.69 7.51-1.89-1.44-3.6-4.25-5.46-9.68z" fill="#00758F"/>
      <path d="M10.96 11.23c1.55-1.97 3.99-3.04 6.55-2.88 1.26.08 2.46.49 3.52 1.18.23.15.45.31.66.49-.66 1.42-1.74 2.58-3.09 3.32-1.24.68-2.68.95-4.09.77-.38-.05-.75-.14-1.12-.26-.14-.88-.47-1.77-1.01-2.47l-1.42-.15z" fill="#F29111"/>
    </svg>`
  },
  {
    id: "git",
    name: "Git",
    category: "Development Tool",
    summary: "Version Control & Branching",
    tooltip: "Distributed version control, atomic commits, interactive rebase, branch workflows",
    color: "#F05032",
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.62 10.95L13.05 2.38a1.5 1.5 0 00-2.12 0L8.8 4.5l2.67 2.68a1.78 1.78 0 012.26 2.29l2.58 2.57a1.78 1.78 0 11-1.07 1.02l-2.4-2.41v4.75a1.78 1.78 0 11-1.5-.06v-4.8a1.78 1.78 0 01-.96-2.33L7.73 5.56 2.38 10.9a1.5 1.5 0 000 2.12l8.57 8.57a1.5 1.5 0 002.12 0l8.55-8.52a1.5 1.5 0 000-2.12z" fill="#F05032"/>
    </svg>`
  },
  {
    id: "github",
    name: "GitHub",
    category: "Development Platform",
    summary: "Pull Requests & Collaboration",
    tooltip: "Remote collaboration, code reviews, issue tracking, and GitHub Actions",
    color: "#E6EDF3",
    svg: `<svg viewBox="0 0 24 24" fill="currentColor">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>`
  },
  {
    id: "linux",
    name: "Linux",
    category: "Operating System",
    summary: "Bash Shell & CLI Environment",
    tooltip: "Command line scripting, permission models, system utilities, and deployment",
    color: "#FCC624",
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="12" cy="13.5" rx="5.5" ry="7" fill="#18181B"/>
      <ellipse cx="12" cy="14" rx="4" ry="5.5" fill="#FAFAFA"/>
      <circle cx="12" cy="6.5" r="4" fill="#18181B"/>
      <ellipse cx="10.8" cy="6" rx="0.75" ry="1.1" fill="#FFFFFF"/>
      <ellipse cx="13.2" cy="6" rx="0.75" ry="1.1" fill="#FFFFFF"/>
      <circle cx="10.9" cy="6.2" r="0.4" fill="#000000"/>
      <circle cx="13.1" cy="6.2" r="0.4" fill="#000000"/>
      <path d="M10.5 7.8c.8.6 2.2.6 3 0l-.5 1.2c-.4.5-1.6.5-2 0l-.5-1.2z" fill="#F59E0B"/>
      <path d="M6 13c-.6 1.8.2 4.2 1.4 5.2.3.2.7.2.9-.1.3-.4.4-1.2.2-2.1-.2-1.1-.9-2.2-1.7-3-.4-.4-.7-.3-.8 0z" fill="#18181B"/>
      <path d="M18 13c.6 1.8-.2 4.2-1.4 5.2-.3.2-.7.2-.9-.1-.3-.4-.4-1.2-.2-2.1.2-1.1.9-2.2 1.7-3 .4-.4.7-.3.8 0z" fill="#18181B"/>
      <ellipse cx="9" cy="20.5" rx="2.5" ry="1.2" fill="#F59E0B"/>
      <ellipse cx="15" cy="20.5" rx="2.5" ry="1.2" fill="#F59E0B"/>
    </svg>`
  },
  {
    id: "react",
    name: "React",
    category: "Frontend",
    summary: "Component Architecture & Hooks",
    tooltip: "Virtual DOM, state management, custom hooks, and modern component systems",
    color: "#61DAFB",
    svg: `<svg viewBox="-11.5 -10.23174 23 20.46348" fill="none" stroke="#61DAFB" stroke-width="1" xmlns="http://www.w3.org/2000/svg">
      <circle r="2.05" fill="#61DAFB" stroke="none"/>
      <ellipse rx="11" ry="4.2"/>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    </svg>`
  },
  {
    id: "express",
    name: "Express.js",
    category: "Backend",
    summary: "REST APIs & Middleware",
    tooltip: "Middleware pipelines, routing, REST endpoints, and authentication",
    color: "#FFFFFF",
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="4" fill="#18181B"/>
      <path d="M5 15.5l3.5-7h1.8l-3.5 7H5zm5.5 0l2.5-4.5-2.2-2.5h2l1.3 1.6 1.3-1.6h2l-2.2 2.5 2.5 4.5h-2l-1.6-3-1.6 3h-2z" fill="#FFFFFF"/>
    </svg>`
  },
  {
    id: "bootstrap",
    name: "Bootstrap",
    category: "Styling",
    summary: "Responsive Grid & Components",
    tooltip: "12-column grid system, utility classes, and rapid responsive UI prototyping",
    color: "#7952B3",
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="5" fill="#7952B3"/>
      <path d="M7 6h5.8c1.6 0 2.7.9 2.7 2.2 0 1-.6 1.8-1.5 2.1 1.2.3 1.9 1.2 1.9 2.4 0 1.5-1.2 2.5-2.9 2.5H7V6zm2.4 3.7h3.1c.6 0 1-.3 1-.8s-.4-.8-1-.8H9.4v1.6zm0 3.8h3.3c.7 0 1.2-.4 1.2-.9s-.5-.9-1.2-.9H9.4v1.8z" fill="#FFFFFF"/>
    </svg>`
  },
  {
    id: "vite",
    name: "Vite",
    category: "Build Tool",
    summary: "ESM Bundler & HMR",
    tooltip: "Next-gen frontend tooling, instant hot module replacement, and optimized rollups",
    color: "#646CFF",
    svg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.5 3.5L12.7 19.8a1 1 0 01-1.8 0L2.5 3.5a1 1 0 011.3-1.4l8.2 4.1 8.2-4.1a1 1 0 011.3 1.4z" fill="#646CFF"/>
      <path d="M14.5 2.5L11 9.5l3.5-.5-5 8.5 2-6-3 .5 6-9.5z" fill="#FFD62E"/>
    </svg>`
  },
  {
    id: "api",
    name: "REST APIs",
    category: "Architecture",
    summary: "Endpoints & Data Contracts",
    tooltip: "HTTP methods, JSON serialization, stateless client-server architectures",
    color: "#c59b63",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
      <line x1="6" y1="6" x2="6.01" y2="6"/>
      <line x1="6" y1="18" x2="6.01" y2="18"/>
      <path d="M14 6h4"/>
      <path d="M14 18h4"/>
    </svg>`
  }
];

