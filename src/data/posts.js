/**
 * Blog Posts Data Structure
 * Designed for scalability, SEO optimization, and AI indexing
 * 
 * Schema:
 * - id: unique slug for URL routing
 * - title: post title (used in H1 and meta tags)
 * - summary: short excerpt for preview cards and meta description
 * - content: full post content (Markdown or HTML string)
 * - author: post author name
 * - date: ISO 8601 publication date
 * - tags: array of topics for categorization
 * - coverImage: optional image URL (for preview and OG meta)
 * - readingTime: estimated reading time in minutes
 * - meta: SEO metadata
 *   - description: meta description (max 160 chars)
 *   - keywords: comma-separated keywords for SEO
 *   - og_title: Open Graph title
 *   - og_description: Open Graph description
 */

export const POSTS = [
  {
    id: 'full-stack-react-nodejs-2026',
    title: 'Full-Stack Web Development with React & Node.js: Best Practices in 2026',
    summary: 'Learn modern full-stack development patterns, from component architecture to API design, with real-world examples.',
    author: 'Lior Lazar',
    date: '2026-03-10',
    tags: ['React', 'Node.js', 'Full-Stack', 'Web Development', 'JavaScript'],
    readingTime: 12,
    coverImage: 'https://primedev.co.il/og-post-fullstack.png',
    meta: {
      description: 'Master full-stack development with React + Node.js. Learn architecture patterns, API design, and production best practices.',
      keywords: 'full-stack development, react, node.js, web development, javascript, backend',
      og_title: 'Full-Stack Web Development with React & Node.js',
      og_description: 'Learn modern full-stack development patterns and best practices for building scalable web applications.'
    },
    content: `
<article>
  <section>
    <h2>Introduction</h2>
    <p>
      In 2026, full-stack JavaScript development has become the standard for building modern web applications. 
      This guide covers essential patterns and practices we use at PrimeDev to build scalable, maintainable systems.
    </p>
  </section>

  <section>
    <h2>Frontend Architecture with React</h2>
    <p>
      React continues to dominate the frontend ecosystem. Modern patterns include:
    </p>
    <ul>
      <li><strong>Component Composition:</strong> Breaking UI into reusable, testable components</li>
      <li><strong>State Management:</strong> Using Redux or Context API for complex state</li>
      <li><strong>Hooks Pattern:</strong> Custom hooks for logic reuse and separation of concerns</li>
      <li><strong>Performance Optimization:</strong> Memoization, lazy loading, and code splitting</li>
    </ul>
  </section>

  <section>
    <h2>Backend Architecture with Node.js</h2>
    <p>
      Node.js provides the event-driven architecture needed for scalable backends:
    </p>
    <ul>
      <li><strong>REST API Design:</strong> Proper HTTP methods, status codes, and response formats</li>
      <li><strong>Middleware Pattern:</strong> Request/response processing pipelines</li>
      <li><strong>Error Handling:</strong> Centralized error handling and logging</li>
      <li><strong>Database Optimization:</strong> Connection pooling and query optimization</li>
    </ul>
  </section>

  <section>
    <h2>Testing & Quality Assurance</h2>
    <p>
      Quality is non-negotiable. Implement comprehensive testing strategies:
    </p>
    <ul>
      <li>Unit tests for business logic</li>
      <li>Integration tests for API endpoints</li>
      <li>E2E tests for critical user journeys</li>
    </ul>
  </section>

  <section>
    <h2>Conclusion</h2>
    <p>
      Full-stack development requires mastering both frontend and backend principles. 
      The key is choosing the right patterns for your specific use case.
    </p>
  </section>
</article>
    `
  },

  {
    id: 'devops-cicd-automation-kubernetes',
    title: 'CI/CD Automation & Kubernetes Deployment: From GitHub to Production',
    summary: 'Automate your deployment pipeline with GitHub Actions, Docker, and Kubernetes. Reduce manual work by 80%.',
    author: 'Lior Lazar',
    date: '2026-03-05',
    tags: ['DevOps', 'CI/CD', 'Kubernetes', 'Docker', 'GitHub Actions', 'Automation'],
    readingTime: 14,
    coverImage: 'https://primedev.co.il/og-post-devops.png',
    meta: {
      description: 'Master CI/CD pipelines with GitHub Actions and Kubernetes. Deploy faster, more reliably, with zero downtime.',
      keywords: 'devops, cicd, kubernetes, docker, github actions, automation, deployment',
      og_title: 'CI/CD Automation & Kubernetes Deployment',
      og_description: 'Complete guide to automating your deployment pipeline and managing containerized applications in Kubernetes.'
    },
    content: `
<article>
  <section>
    <h2>What is CI/CD?</h2>
    <p>
      CI/CD (Continuous Integration/Continuous Deployment) automates the entire software delivery pipeline:
    </p>
    <ul>
      <li><strong>Continuous Integration:</strong> Automatically test code on every push</li>
      <li><strong>Continuous Deployment:</strong> Automatically deploy to production when tests pass</li>
    </ul>
  </section>

  <section>
    <h2>Setting Up GitHub Actions</h2>
    <p>
      GitHub Actions provides powerful workflow automation directly in your repository. 
      Define workflows using YAML files in the <code>.github/workflows</code> directory.
    </p>
  </section>

  <section>
    <h2>Docker & Container Strategy</h2>
    <p>
      Containerization ensures consistency across development, testing, and production environments.
    </p>
  </section>

  <section>
    <h2>Kubernetes Deployment</h2>
    <p>
      Kubernetes orchestrates containerized applications, handling scaling, updates, and networking automatically.
    </p>
  </section>

  <section>
    <h2>Best Practices</h2>
    <ul>
      <li>Use semantic versioning for releases</li>
      <li>Implement health checks and monitoring</li>
      <li>Plan for rollback strategies</li>
      <li>Automate database migrations safely</li>
    </ul>
  </section>
</article>
    `
  },

  {
    id: 'soar-automation-security-playbooks',
    title: 'Building SOAR Solutions with Cortex XSOAR: Security Automation at Scale',
    summary: 'Accelerate incident response and reduce alert fatigue with automated security workflows and playbooks.',
    author: 'Lior Lazar',
    date: '2026-02-28',
    tags: ['SOAR', 'Security', 'Automation', 'Cortex XSOAR', 'Incident Response', 'Playbooks'],
    readingTime: 15,
    coverImage: 'https://primedev.co.il/og-post-soar.png',
    meta: {
      description: 'Learn to build SOAR solutions with Cortex XSOAR. Automate security workflows and reduce incident response time by 75%.',
      keywords: 'soar, security automation, cortex xsoar, playbooks, incident response, siem integration',
      og_title: 'Building SOAR Solutions with Cortex XSOAR',
      og_description: 'Complete guide to security automation, playbook development, and SOAR implementation for enterprise security.'
    },
    content: `
<article>
  <section>
    <h2>What is SOAR?</h2>
    <p>
      SOAR (Security Orchestration, Automation, and Response) platforms reduce the time security teams spend on manual tasks.
      Cortex XSOAR is a leading SOAR platform used by enterprises worldwide.
    </p>
  </section>

  <section>
    <h2>Core Components</h2>
    <ul>
      <li><strong>Playbooks:</strong> Automated workflows triggered by alerts or events</li>
      <li><strong>Integrations:</strong> Connections to EDR, SIEM, email, ticketing systems</li>
      <li><strong>Automations:</strong> Custom scripts in Python or JavaScript</li>
      <li><strong>Dashboards:</strong> Real-time visibility into security operations</li>
    </ul>
  </section>

  <section>
    <h2>Building Your First Playbook</h2>
    <p>
      A playbook is a sequence of tasks triggered by an event. Start simple:
    </p>
    <ol>
      <li>Define the trigger (e.g., high-risk alert)</li>
      <li>Add decision logic (incident severity, type)</li>
      <li>Execute remediation actions (isolate endpoint, block IP)</li>
      <li>Send notifications (Slack, email, SIEM)</li>
    </ol>
  </section>

  <section>
    <h2>Integration Strategies</h2>
    <p>
      The power of SOAR comes from integrating with your entire security stack:
    </p>
    <ul>
      <li>Fetch threat intelligence from external APIs</li>
      <li>Enrich alerts with asset information</li>
      <li>Trigger automated remediation in endpoint tools</li>
      <li>Create tickets in your ticketing system</li>
    </ul>
  </section>

  <section>
    <h2>Monitoring & Optimization</h2>
    <p>
      Track playbook execution metrics to continuously improve your automation.
    </p>
  </section>
</article>
    `
  },

  {
    id: 'api-design-best-practices-rest',
    title: 'RESTful API Design Best Practices: Building Scalable Web Services',
    summary: 'Design APIs that scale. Learn HTTP methods, status codes, versioning, and authentication strategies.',
    author: 'Lior Lazar',
    date: '2026-02-20',
    tags: ['API', 'REST', 'Web Services', 'Backend', 'Design Patterns', 'Node.js'],
    readingTime: 10,
    coverImage: 'https://primedev.co.il/og-post-api.png',
    meta: {
      description: 'Master RESTful API design principles. Build scalable, maintainable APIs with proper status codes, versioning, and security.',
      keywords: 'rest api, api design, web services, http, backend, node.js, best practices',
      og_title: 'RESTful API Design Best Practices',
      og_description: 'Complete guide to designing RESTful APIs that scale, with proper HTTP conventions and security practices.'
    },
    content: `
<article>
  <section>
    <h2>REST Principles</h2>
    <p>REST (Representational State Transfer) is an architectural style for web services. It emphasizes:</p>
    <ul>
      <li>Resources (nouns) instead of actions (verbs)</li>
      <li>Standard HTTP methods (GET, POST, PUT, DELETE)</li>
      <li>Statelessness for scalability</li>
      <li>Proper HTTP status codes</li>
    </ul>
  </section>

  <section>
    <h2>HTTP Methods & Status Codes</h2>
    <p>Use HTTP verbs semantically:</p>
    <ul>
      <li><code>GET /users</code> → 200 (retrieve list)</li>
      <li><code>POST /users</code> → 201 (create new)</li>
      <li><code>PUT /users/1</code> → 200 (update)</li>
      <li><code>DELETE /users/1</code> → 204 (delete)</li>
    </ul>
  </section>

  <section>
    <h2>Versioning Strategies</h2>
    <p>Plan for API evolution:</p>
    <ul>
      <li>URL versioning: /api/v1/users</li>
      <li>Header versioning: X-API-Version: 1</li>
      <li>Backwards compatibility for smooth transitions</li>
    </ul>
  </section>

  <section>
    <h2>Authentication & Security</h2>
    <p>
      Always secure your APIs. Use JWT tokens, OAuth 2.0, or API keys depending on your use case.
    </p>
  </section>
</article>
    `
  }
];

/**
 * Helper function to get all posts
 * @returns {Array} Array of post objects
 */
export const getAllPosts = () => POSTS;

/**
 * Helper function to get a single post by ID/slug
 * @param {string} postId - The post ID/slug
 * @returns {Object|null} Post object or null if not found
 */
export const getPostById = (postId) => {
  return POSTS.find(post => post.id === postId) || null;
};

/**
 * Helper function to get posts by tag
 * @param {string} tag - Tag to filter by
 * @returns {Array} Array of posts with the specified tag
 */
export const getPostsByTag = (tag) => {
  return POSTS.filter(post => post.tags.includes(tag));
};

/**
 * Helper function to get unique tags
 * @returns {Array} Array of unique tags across all posts
 */
export const getAllTags = () => {
  const tags = new Set();
  POSTS.forEach(post => {
    post.tags.forEach(tag => tags.add(tag));
  });
  return Array.from(tags).sort();
};

/**
 * Helper function to search posts
 * @param {string} query - Search query
 * @returns {Array} Array of matching posts
 */
export const searchPosts = (query) => {
  const lowerQuery = query.toLowerCase();
  return POSTS.filter(post => 
    post.title.toLowerCase().includes(lowerQuery) ||
    post.summary.toLowerCase().includes(lowerQuery) ||
    post.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
};
