import {
  SiPython,
  SiTypescript,
  SiJavascript,
  SiSpringboot,
  SiDotnet,
  SiGraphql,
  SiOpenid,
  SiJsonwebtokens,
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiGithubactions,
  SiRedis,
  SiPostgresql,
  SiDatadog,
  SiPrometheus,
  SiJunit5,
  SiPostman,
  SiGit,
  SiJira,
} from "react-icons/si";

const skills = [
  {
    category: "Languages",
    items: [
      { label: "Java", icon: null },
      { label: "C#", icon: null },
      { label: "Python", icon: SiPython },
      { label: "SQL", icon: null },
      { label: "TypeScript", icon: SiTypescript },
      { label: "JavaScript", icon: SiJavascript },
    ],
  },
  {
    category: "Backend",
    items: [
      { label: "Spring Boot", icon: SiSpringboot },
      { label: "ASP.NET Core", icon: SiDotnet },
      { label: "REST APIs", icon: null },
      { label: "GraphQL", icon: SiGraphql },
      { label: "Microservices", icon: null },
      { label: "OAuth2/OIDC", icon: SiOpenid },
      { label: "JWT", icon: SiJsonwebtokens },
      { label: "Multithreading", icon: null },
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      { label: "AWS", icon: null },
      { label: "Azure", icon: null },
      { label: "Docker", icon: SiDocker },
      { label: "Kubernetes", icon: SiKubernetes },
      { label: "Jenkins", icon: SiJenkins },
      { label: "Azure DevOps", icon: null },
      { label: "GitHub Actions", icon: SiGithubactions },
      { label: "CI/CD", icon: null },
    ],
  },
  {
    category: "Data & Observability",
    items: [
      { label: "JunoDB", icon: null },
      { label: "Redis", icon: SiRedis },
      { label: "PostgreSQL", icon: SiPostgresql },
      { label: "SQL Server", icon: null },
      { label: "Oracle", icon: null },
      { label: "Datadog", icon: SiDatadog },
      { label: "Prometheus", icon: SiPrometheus },
    ],
  },
  {
    category: "Testing & Tools",
    items: [
      { label: "JUnit", icon: SiJunit5 },
      { label: "Mockito", icon: null },
      { label: "NUnit", icon: null },
      { label: "Postman", icon: SiPostman },
      { label: "Git", icon: SiGit },
      { label: "Jira", icon: SiJira },
    ],
  },
];

export default skills;
