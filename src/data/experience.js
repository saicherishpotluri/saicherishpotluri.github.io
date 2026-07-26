const experience = [
  {
    id: "paypal",
    company: "PayPal",
    title: "Software Engineer (Contract)",
    location: "San Jose, CA",
    dates: "Feb 2025 – Present",
    branch: "main",
    bullets: [
      "Built and enhanced high-volume Java/Spring Boot OAuth2/OIDC services for merchant, partner, and internal identity workflows across PayPal's distributed Identity Platform.",
      "Reduced merchant login latency by ~400ms by eliminating redundant service calls and optimizing multithreaded request processing.",
      "Designed federated identity capabilities for JWT validation, token issuance, scope enforcement, and privilege checks supporting secure third-party integrations.",
      "Delivered authorization hardening (client-level access restrictions, least-privilege scope validation) and structured error telemetry that sped up production auth-failure diagnosis.",
    ],
    tags: ["Java", "Spring Boot", "OAuth2/OIDC", "JWT", "Datadog"],
  },
  {
    id: "devoir",
    company: "Devoir Software Solutions LLC",
    title: "Software Engineer",
    location: "Chicago, IL",
    dates: "Jun 2023 – Jan 2025",
    branch: "main",
    bullets: [
      "Developed microservice-style backend services in ASP.NET Core for user management, assessments, certification requirements, payments, and integrations on a large enterprise platform.",
      "Designed REST APIs and integration workflows with Pearson VUE, ExcelSoft, and BenchPrep for reliable cross-service data exchange.",
      "Improved API and database performance by optimizing SQL queries, stored procedures, and response flows with automated CI/CD releases.",
      "Implemented secure role-based auth using Azure AD B2C and legacy SSO integrations while enforcing coding, testing, and maintainability standards.",
    ],
    tags: ["ASP.NET Core", "C#", "Azure AD B2C", "SQL", "CI/CD"],
  },
  {
    id: "ace-data",
    company: "Ace Data Solutions",
    title: "Software Engineer Intern",
    location: "Remote",
    dates: "May 2022 – Jul 2022",
    branch: "intern/2022",
    bullets: [
      "Developed RESTful APIs and GraphQL services using C# and ASP.NET Core in a multilayer architecture, applying Factory and Singleton patterns.",
      "Integrated AWS S3, EC2, RDS, and Route 53, configuring monitoring alarms to improve operational visibility and issue detection.",
    ],
    tags: ["C#", "ASP.NET Core", "GraphQL", "AWS"],
  },
  {
    id: "smartbridge",
    company: "Smartbridge Solutions",
    title: "Software Developer",
    location: "Hyderabad, India",
    dates: "Apr 2019 – Jun 2019",
    branch: "intern/2019",
    bullets: [
      "Developed RESTful APIs using Django and Flask and built a PostgreSQL-based location service for a ride-hailing platform.",
      "Integrated Razorpay payment services, performed API testing, resolved backend defects, and developed React UI components.",
    ],
    tags: ["Django", "Flask", "PostgreSQL", "React"],
  },
];

export default experience;
