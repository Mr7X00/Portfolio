import React from 'react';
import TechLogo from './TechLogo';
import './TechnologyCard.css';

/**
 * TechnologyCard — Phase 9 Reusable Interactive Technology Card Component
 *
 * Displays:
 * - Official vector logo
 * - Technology name
 * - Category badge
 * - Short usage description
 * - Interactive hover, focus, and tap transitions
 */
export const TechnologyCard = ({ tech }) => {
  if (!tech) return null;

  // Format concise usage description
  const getUsageText = () => {
    switch (tech.id) {
      case 'react':
        return 'Used for building reactive, component-based user interfaces.';
      case 'nodejs':
        return 'Used for asynchronous backend services and server-side runtimes.';
      case 'mongodb':
        return 'Used for flexible NoSQL document modeling and data persistence.';
      case 'javascript':
        return 'Used for ES6+ modern application logic and asynchronous workflows.';
      case 'html5':
        return 'Used for semantic layout structure and accessible web platform APIs.';
      case 'css3':
        return 'Used for responsive styling, modern layout systems, and animations.';
      case 'tailwindcss':
        return 'Used for utility-first styling and glassmorphic UI design tokens.';
      case 'python':
        return 'Used for backend services, automation scripting, and algorithms.';
      case 'java':
        return 'Used for Object-Oriented Programming, DSA, and robust architectures.';
      case 'mysql':
        return 'Used for relational schemas, structured SQL queries, and ACID consistency.';
      case 'git':
        return 'Used for distributed version control, branching, and commit history.';
      case 'github':
        return 'Used for remote repository hosting, code reviews, and collaboration.';
      case 'linux':
        return 'Used for command-line scripting, system utilities, and deployment.';
      case 'express':
        return 'Used for server middleware pipelines and RESTful endpoint routing.';
      case 'bootstrap':
        return 'Used for responsive grid systems and rapid component prototyping.';
      case 'vite':
        return 'Used for instant Hot Module Replacement and production bundling.';
      case 'api':
        return 'Used for client-server communication and structured data contracts.';
      default:
        return `Used for ${tech.summary.toLowerCase()}.`;
    }
  };

  return (
    <div
      className="tech-interactive-card"
      tabIndex={0}
      role="article"
      aria-label={`${tech.name} — ${tech.category}: ${getUsageText()}`}
    >
      {/* Top Header: Logo & Category */}
      <div className="tech-card-header">
        <div className="tech-card-logo-box">
          <TechLogo techObj={tech} size={32} />
        </div>

        <span className="tech-card-category-badge">
          {tech.category}
        </span>
      </div>

      {/* Technology Name */}
      <h3 className="tech-card-name">
        {tech.name}
      </h3>

      {/* Short Usage Description */}
      <p className="tech-card-usage">
        {getUsageText()}
      </p>

      {/* Key Focus Area / Summary Pill */}
      <div className="tech-card-feature">
        <span className="tech-card-feature-dot" aria-hidden="true" />
        <span>{tech.summary}</span>
      </div>
    </div>
  );
};

export default TechnologyCard;
