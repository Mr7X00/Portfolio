/**
 * Deterministic Watermark Distribution Configuration (Phase 7)
 * Distributed naturally across: About, Skills, Experience, Projects, Education, Contact.
 *
 * Tier definitions:
 * - 'all': Mobile, Tablet, Desktop
 * - 'tablet': Tablet & Desktop (>= 768px)
 * - 'desktop': Desktop only (>= 1024px)
 */

export const watermarksBySection = {
  about: [
    { id: 'wm-abt-js', techId: 'javascript', top: '8%', left: '-2%', rotate: 12, size: 54, tier: 'all' },
    { id: 'wm-abt-html', techId: 'html5', top: '15%', right: '-3%', rotate: -14, size: 60, tier: 'desktop' },
    { id: 'wm-abt-css', techId: 'css3', bottom: '10%', right: '4%', rotate: 8, size: 50, tier: 'tablet' }
  ],
  skills: [
    { id: 'wm-skl-react', techId: 'react', top: '4%', left: '-3%', rotate: 10, size: 72, tier: 'all' },
    { id: 'wm-skl-node', techId: 'nodejs', top: '12%', right: '-2%', rotate: -16, size: 62, tier: 'tablet' },
    { id: 'wm-skl-mongo', techId: 'mongodb', bottom: '6%', right: '2%', rotate: 14, size: 54, tier: 'desktop' },
    { id: 'wm-skl-express', techId: 'express', bottom: '12%', left: '3%', rotate: -8, size: 50, tier: 'desktop' }
  ],
  experience: [
    { id: 'wm-exp-java', techId: 'java', top: '10%', left: '-2%', rotate: 14, size: 58, tier: 'all' },
    { id: 'wm-exp-py', techId: 'python', top: '20%', right: '-2%', rotate: -12, size: 60, tier: 'tablet' },
    { id: 'wm-exp-git', techId: 'git', bottom: '8%', right: '5%', rotate: -8, size: 52, tier: 'desktop' }
  ],
  projects: [
    { id: 'wm-prj-gh', techId: 'github', top: '6%', right: '-3%', rotate: 16, size: 64, tier: 'all' },
    { id: 'wm-prj-vite', techId: 'vite', top: '18%', left: '-2%', rotate: -10, size: 66, tier: 'tablet' },
    { id: 'wm-prj-react', techId: 'react', bottom: '8%', right: '3%', rotate: 8, size: 70, tier: 'desktop' },
    { id: 'wm-prj-mysql', techId: 'mysql', bottom: '16%', left: '2%', rotate: -14, size: 56, tier: 'desktop' }
  ],
  education: [
    { id: 'wm-edu-linux', techId: 'linux', top: '8%', left: '-2%', rotate: 12, size: 56, tier: 'all' },
    { id: 'wm-edu-boot', techId: 'bootstrap', bottom: '12%', right: '-1%', rotate: -12, size: 52, tier: 'tablet' },
    { id: 'wm-edu-html', techId: 'html5', bottom: '6%', left: '4%', rotate: 6, size: 48, tier: 'desktop' }
  ],
  contact: [
    { id: 'wm-cnt-api', techId: 'api', top: '10%', left: '-1%', rotate: 14, size: 60, tier: 'all' },
    { id: 'wm-cnt-node', techId: 'nodejs', bottom: '14%', right: '-2%', rotate: -10, size: 54, tier: 'tablet' },
    { id: 'wm-cnt-js', techId: 'javascript', bottom: '8%', left: '3%', rotate: 8, size: 50, tier: 'desktop' }
  ]
};

export default watermarksBySection;
