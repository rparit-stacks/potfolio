export interface Project {
  id: string
  title: string
  description: string
  techStack: string[]
  github: string
  docker?: string | null
  demo: string | null
  blog: string | null
  image: string
  detailedDescription: string
  features: string[]
  technologies: string[]
  keyFeatures: string[]
  entities?: string[]
  apiEndpoints?: string[]
  videoTutorial?: string
  skills: string[] // All skills used in the project
  primarySkill: string // Main skill this project showcases
}

export const projectsData: Project[] = [
  {
    id: "eventura",
    title: "Eventura",
    description:
      "Backend service inspired by BookMyShow, developed using Spring Boot and Spring Data JPA. Provides modular architecture for managing events, users, theaters, and bookings with efficient movie booking operations.",
    techStack: ["Spring Boot", "Spring Data JPA", "REST API", "Java", "MySQL", "Spring Security"],
    github: "https://github.com/rparit-stacks/Eventura",
    docker: "https://hub.docker.com/r/rparit1934/eventure",
    demo: null,
    blog: null,
    image: "/project_img/eventturs.png",
    detailedDescription: "Eventura is a comprehensive movie ticket booking system built with Spring Boot. It provides a robust and scalable backend with a RESTful API to manage the entire lifecycle of booking movie tickets.",
    features: [
      "Browsing available movies and filtering them by various criteria",
      "Viewing showtimes for a selected movie in different theaters",
      "Selecting seats for a particular show",
      "Making a booking and completing the payment",
      "Viewing booking history",
      "Canceling a booking",
    ],
    technologies: ["Java 21", "Spring Boot 3.5.6", "Spring Data JPA", "Spring Web", "Spring Security", "MySQL"],
    keyFeatures: [
      "RESTful API with DTOs for requests and responses",
      "Pagination for efficient data retrieval",
      "Modular architecture with clear separation of concerns",
      "Complete CRUD operations for all entities",
    ],
    entities: ["Movies", "Theaters", "Screens", "Shows", "Seats", "Bookings", "Payments", "Users"],
    skills: ["Spring Boot", "Spring Data JPA", "REST API", "Java", "MySQL", "Spring Security"],
    primarySkill: "Spring Boot",
  },
  {
    id: "gold-loan",
    title: "Gold Loan Backend",
    description:
      "Gold Loan Management System using Spring Boot and Spring Security with role-based access control. Designed layered service architecture ensuring separation of concerns and maintainability.",
    techStack: ["Spring Boot", "Spring Security", "REST API", "Java", "MySQL", "Spring Mail"],
    github: "https://github.com/rparit-stacks/goldloanApplication",
    demo: null,
    blog: null,
    image: "/project_img/goldloan.jpg",
    detailedDescription: "A comprehensive Spring Boot application for managing gold loan operations with RESTful API, role-based authentication, and automated email notifications.",
    features: [
      "Full CRUD Operations for all entities",
      "Role-Based Access Control (ADMIN, MANAGER, OFFICER, AUDITOR)",
      "Service Layer Architecture with proper service-to-service communication",
      "Automatic Field Population (Application numbers, stages, createdBy, assignedTo)",
      "Email Notifications for user creation, branch creation, and loan application submission",
      "Automatic Calculations (Gold assessed value calculation)",
      "Swagger/OpenAPI Documentation",
      "Global Exception Handling",
    ],
    technologies: ["Java 17", "Spring Boot 3.5.7", "Spring Data JPA", "Spring Security", "Spring Web", "Spring Mail", "MySQL", "Swagger/OpenAPI"],
    keyFeatures: [
      "Proper layered architecture with service-to-service communication",
      "Automatic application number generation (APP-YYYYMMDD-XXXXX)",
      "Gold assessed value calculation: (Weight × Purity / 100) × MarketRate",
      "Email service for automated notifications",
    ],
    entities: ["Users", "Customers", "Branches", "Loan Applications", "Documents", "Gold Details", "Loan Terms", "Audits", "Valuation Reports"],
    videoTutorial: "https://youtu.be/jstN7swtM1E",
    skills: ["Spring Boot", "Spring Security", "REST API", "Java", "MySQL", "Microservices", "JWT"],
    primarySkill: "Spring Security",
  },
  {
    id: "formfree",
    title: "FormFree",
    description:
      "Backend-only Spring Boot REST API for dynamic form submissions with unique project-based API keys. Designed layered architecture (Controller, Service, Repository, Database) for scalability and security.",
    techStack: ["Spring Boot", "REST API", "JWT", "Java", "Maven", "Gson"],
    github: "https://github.com/rparit-stacks/formFree",
    docker: "https://hub.docker.com/r/rparit1934/formfree",
    demo: null,
    blog: null,
    image: "/project_img/formFree.png",
    detailedDescription: "FormFree is a Spring Boot-based REST API project designed to simplify the process of collecting and managing form submissions for different projects. It allows users to create projects, generate API keys, and submit form data dynamically using those keys.",
    features: [
      "Project Creation with unique API key and endpoint",
      "Dynamic Form Submission (any form data as JSON)",
      "Submission Retrieval for analysis or review",
      "Health Check Endpoint for service verification",
    ],
    technologies: ["Java 17+", "Spring Boot", "Maven", "Gson (for JSON serialization)"],
    keyFeatures: [
      "Create projects and receive unique API keys",
      "Submit any form data (as JSON) to project-specific endpoints",
      "Retrieve all submissions for a given project",
      "Layered architecture: Controller, Service, Repository, Database",
    ],
    entities: ["Projects", "Form Submissions"],
    apiEndpoints: [
      "POST /api/create-project - Create a new project",
      "POST /api/form/submit/{apiKey} - Submit form data",
      "GET /api/form/result/{projectId} - Retrieve all submissions",
      "GET /api/health - Health check endpoint",
    ],
    skills: ["Spring Boot", "REST API", "JWT", "Java", "Microservices"],
    primarySkill: "REST API",
  },
  {
    id: "project-api-hub",
    title: "ProjectAPIHub",
    description:
      "Comprehensive Spring Boot portfolio management system with role-based authentication. Provides RESTful APIs for managing profile, skills, projects, education, work experience, and website analytics with secure admin access control.",
    techStack: ["Spring Boot", "Spring Security", "REST API", "Java", "MySQL", "Spring Data JPA"],
    github: "https://github.com/rparit-stacks/portfolio-backend",
    docker: "https://hub.docker.com/r/rparit1934/portfolio",
    demo: null,
    blog: null,
    image: "/project_img/portfolio.png",
    detailedDescription: "ProjectAPIHub is a Spring Boot-based portfolio management system that provides comprehensive RESTful APIs for managing professional portfolios. It includes role-based access control, allowing administrators to manage their profile, skills, projects, education, work experience, and track website analytics. The system features secure authentication and authorization with Spring Security.",
    features: [
      "Role-Based Access Control (Admin-only endpoints for management)",
      "User Profile Management with detailed information",
      "Skills Management with categories and featured skills",
      "Projects Management with featured projects support",
      "Education and Work Experience tracking",
      "Contact Inquiry Management with status tracking",
      "Website Analytics and Visitor Tracking",
      "Public Portfolio API endpoints for frontend integration",
    ],
    technologies: ["Java 21", "Spring Boot 3.5.7", "Spring Data JPA", "Spring Security", "Spring Web", "MySQL", "SpringDoc OpenAPI"],
    keyFeatures: [
      "Comprehensive RESTful API with 50+ endpoints",
      "Role-based authentication and authorization",
      "Session-based authentication system",
      "Public and private API endpoints separation",
      "Swagger/OpenAPI documentation",
      "Layered architecture with proper separation of concerns",
    ],
    entities: ["Users", "Skills", "Projects", "Education", "Experience", "Contacts", "Analytics"],
    apiEndpoints: [
      "POST /api/auth/login - User authentication",
      "GET /api/portfolio/user/{userId} - Public profile",
      "GET /api/projects - Admin project management",
      "GET /api/skills - Admin skills management",
      "POST /api/contacts - Contact inquiry submission",
      "POST /api/analytics/track - Website visit tracking",
      "GET /api/analytics/summary - Analytics summary (Admin)",
    ],
    skills: ["Spring Boot", "Spring Security", "REST API", "Java", "MySQL", "Spring Data JPA", "Role Based Auth"],
    primarySkill: "Role Based Auth",
  },
]

// Get all unique skills from projects
export const getAllSkills = (): string[] => {
  const skillsSet = new Set<string>()
  projectsData.forEach((project) => {
    project.skills.forEach((skill) => skillsSet.add(skill))
  })
  return Array.from(skillsSet).sort()
}

// Get all unique primary skills
export const getPrimarySkills = (): string[] => {
  const primarySkillsSet = new Set<string>()
  projectsData.forEach((project) => {
    primarySkillsSet.add(project.primarySkill)
  })
  return Array.from(primarySkillsSet).sort()
}

