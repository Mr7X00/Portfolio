# Codebase Maintenance & Future Updates Guide

This guide describes how to maintain, update content, and evolve the Lav Pandey Portfolio project over time.

---

## 1. Updating Project Information & URLs

All project data is centralized in [`src/data/projects.js`](file:///c:/Users/lavpa/Desktop/Portfolio/src/data/projects.js).

When a project gains a live production domain or GitHub repository:
1. Open `src/data/projects.js`.
2. Locate the project by its `id`.
3. Set the `liveUrl` and `githubUrl`:
   ```javascript
   {
     id: "examzone",
     title: "ExamZone",
     // ...
     liveUrl: "https://your-examzone-domain.com",
     githubUrl: "https://github.com/Mr7X00/ExamZone"
   }
   ```
4. Run `npm run build` and push to GitHub. The project card UI will automatically display live action buttons without any component modifications.

---

## 2. Adding a New Project

1. Add the project's cover poster image to `public/assets/projects/<project-id>.jpg`.
2. Append a new project object to the array in `src/data/projects.js`:
   ```javascript
   {
     id: "new-project",
     title: "New Project Title",
     subtitle: "Project Subtitle",
     role: "Your Role",
     category: "Category Name",
     status: "Production Ready",
     image: "/assets/projects/new-project.jpg",
     description: "Clear summary of the project without emojis...",
     technologies: ["Tech1", "Tech2"],
     liveUrl: "",
     githubUrl: ""
   }
   ```

---

## 3. Adding a New Certificate

1. Place the certificate image in `public/certificate/<filename>.jpeg`.
2. Open [`src/data/showcaseCertificates.js`](file:///c:/Users/lavpa/Desktop/Portfolio/src/data/showcaseCertificates.js).
3. Append a new certificate record:
   ```javascript
   {
     id: "new-credential",
     title: "Certificate Title",
     issuer: "Issuing Organization",
     badge: "Distinction or Podium",
     date: "Month Year",
     image: "/certificate/<filename>.jpeg",
     description: "Detailed description of the achievement...",
     highlight: "Key standout takeaway"
   }
   ```

---

## 4. Updating Skills & Tech Stack

1. Open [`src/data/technologies.js`](file:///c:/Users/lavpa/Desktop/Portfolio/src/data/technologies.js).
2. Locate the appropriate category (`languages`, `frontend`, `backend`, `database`, `tools`).
3. Add the technology with its SVG logo string, documentation URL, and tooltip text.

---

## 5. Updating Personal Profile & Socials

Open [`src/data/profile.js`](file:///c:/Users/lavpa/Desktop/Portfolio/src/data/profile.js) to modify:
- Bio narrative
- Phone / Email contact points
- Social profile links (GitHub, LinkedIn, Instagram)
- Location text
- Resume path

---

## 6. Dependency Maintenance

Periodically check for security advisories and framework updates:
```bash
# Check for vulnerabilities
npm audit

# Check for outdated packages
npm outdated

# Test build integrity after any upgrade
npm run build
```
Keep the dependency footprint small. Avoid adding UI component libraries that conflict with the custom Vanilla CSS token system.
