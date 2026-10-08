# Security Audit & Hardening Report

This document records the static security audit, dependency posture, and client-side protection measures implemented for the Lav Pandey Portfolio.

---

## 1. Security Model & Scope

- **Application Type**: Client-Side Single Page Application (React 19 + Vite 8).
- **Architecture**: Static front-end hosted on Vercel Edge CDN without an integrated private administrative backend.
- **Audit Scope**: Authorized review of local code, dependencies, asset pipelines, and deployment manifests.

---

## 2. Static Security Audit Findings

| Category | Status | Details |
| :--- | :--- | :--- |
| **Hardcoded Secrets** | **PASS (Clean)** | Zero API keys, private tokens, passwords, database credentials, or secret comments present in source code. |
| **Client Secrets** | **PASS (Clean)** | No private or server-only credentials shipped in client bundles. |
| **Environment Handling** | **PASS (Protected)** | `.env` and `.env.*` are excluded by `.gitignore`. Template variables documented in `.env.example`. |
| **Debug Endpoints** | **PASS (Clean)** | Zero internal debug hooks, development flags, or testing bypasses present in production code. |

---

## 3. Dependency Security (npm audit)

An automated vulnerability audit was conducted using `npm audit`:
- **Critical**: 0
- **High**: 0
- **Moderate**: 0
- **Low**: 0
- **Total Vulnerabilities**: 0

The project utilizes a minimal dependency manifest:
- `@vitejs/plugin-react` (6.1.2)
- `react` (19.3.0)
- `react-dom` (19.3.0)
- `vite` (8.3.3)

---

## 4. Injection & XSS Review

- **JSX Escaping**: All dynamic strings (names, roles, descriptions, dates) are rendered via standard React JSX expression curly braces `{...}`, providing automatic contextual HTML entity escaping.
- **Vector Rendering**: Static SVG icons utilize curated internal definitions from `src/data/technologies.js` with zero dynamic or user-controlled input.
- **Input Sanitization**: Contact form fields (Name, Email, Subject, Message) are validated locally for length, email format regex, and structure before submission.
- **Unsafe DOM APIs**: Zero usage of `document.write()`, `eval()`, `new Function()`, or unescaped innerHTML manipulation.

---

## 5. Link Security & Reverse Tabnabbing Protection

All outbound external anchor elements configured with `target="_blank"` enforce:
```html
rel="noopener noreferrer"
```
This isolates the browser window context (`window.opener = null`) and shields against reverse tabnabbing and referrer data leakage across all verified links (GitHub, LinkedIn, Instagram, Render, Oracle APEX, NPGC).

---

## 6. Authentication & Backend Notice

The portfolio is a public showcase with no private administrative login, session cookies, or server-side user database. If a custom administrative dashboard or CMS is engineered in the future:
1. Implement authentication and authorization strictly on an isolated server or serverless backend.
2. Enforce HTTP-only, secure, SameSite cookies or short-lived JWT tokens.
3. Keep database credentials strictly within server environment variables.
