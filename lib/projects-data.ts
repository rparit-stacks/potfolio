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
  extraLinks?: { label: string; url: string }[]
  adminCredentials?: {
    email: string
    password: string
    note?: string
    loginUrl: string
  }
  skills: string[] // All skills used in the project
  primarySkill: string // Main skill this project showcases
}

export const projectsData: Project[] = [
  {
    id: "quout-studio-sara",
    title: "Quout (Studio Sara)",
    description:
      "Full e-commerce platform for custom and digital products with a customer storefront, admin dashboard, mockup service, and separate quotation tool.",
    techStack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Spring Boot",
      "PostgreSQL",
      "Node.js",
      "Express",
      "Cloudinary",
    ],
    github: "https://github.com/rparit-stacks/sara-backend-ecom",
    docker: null,
    demo: "https://studiosara.in/",
    blog: "https://www.studiosara.in/admin-sara",
    image: "/Studio-Sara-Custom-Prints-Embroidery-Design-Studio-Low-MOQ-Printing-02-03-2026_09_18_PM.png",
    detailedDescription:
      "Quout (Studio Sara) is an end-to-end e-commerce system for custom, digital, and physical products. It includes a storefront, admin dashboard, a dedicated mockup generation service, and a separate quotation tool. The frontend UI was designed with LLM assistance.",
    features: [
      "Customer storefront with product search, filters, cart, wishlist, and checkout",
      "Admin dashboard for product, category, order, user, and content management",
      "Custom product design tool with design library and mockup generation",
      "Digital product uploads with Cloudinary processing and secure ZIP downloads",
      "Payments via Stripe, Razorpay, and COD with partial COD support",
      "Shipping rules, ranges, slabs, and unit rate calculations",
      "CMS pages, blog, banners, testimonials, and marketing sections",
    ],
    technologies: [
      "React 18",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "shadcn-ui (Radix)",
      "React Router",
      "React Hook Form + Zod",
      "TanStack Query",
      "Framer Motion",
      "Spring Boot 3.5",
      "Java 21",
      "PostgreSQL",
      "Spring Data JPA",
      "Spring Security + JWT",
      "OAuth2",
      "Stripe",
      "Razorpay",
      "Node.js",
      "Express",
      "Sharp",
      "Cloudinary",
    ],
    keyFeatures: [
      "Multi-app architecture: storefront, admin dashboard, mockup service, quotation tool",
      "Custom product configuration with pricing slabs and design requests",
      "Secure digital product delivery with preview vs download files",
      "Comprehensive admin tooling: CMS, shipping, payments, coupons, and audit logs",
    ],
    extraLinks: [{ label: "Design Observer Pro Repo", url: "https://github.com/rparit-stacks/design-observer-pro" }],
    adminCredentials: {
      email: "admin@studiosara.com",
      password: "admin@sara",
      note: "Password will expire when the project is handed over to the client.",
      loginUrl: "https://www.studiosara.in/admin-sara",
    },
    skills: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Spring Boot",
      "PostgreSQL",
      "Node.js",
      "Express",
      "Cloudinary",
      "Stripe",
      "Razorpay",
    ],
    primarySkill: "Full-Stack",
  },
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
  {
    id: "smart-split",
    title: "SmartSplit",
    description:
      "Comprehensive expense splitting application with Spring Boot backend and TypeScript frontend. Enables users to create groups, split expenses, track balances, and settle debts with friends and family. Features OTP-based authentication, real-time balance calculations, and comprehensive analytics.",
    techStack: ["Spring Boot", "Spring Security", "REST API", "Java", "MySQL", "TypeScript", "Spring Data JPA"],
    github: "https://github.com/rparit-stacks/smart-split",
    docker: null,
    demo: null,
    blog: null,
    image: "/project_img/smart-split.svg",
    detailedDescription:
      "SmartSplit is a full-stack expense splitting application designed to simplify how friends and family split bills and track shared expenses. The backend is built with Spring Boot, providing a robust RESTful API with comprehensive authentication, group management, expense tracking, and settlement features. The system supports multiple split types (equal, exact amounts, percentages), automatic balance calculations, and detailed analytics for spending patterns.",
    features: [
      "OTP-based Two-Factor Authentication (Email & Mobile)",
      "Group Management - Create and manage expense groups with friends",
      "Expense Splitting - Split expenses equally, by exact amounts, or percentages",
      "Balance Tracking - Automatic calculation of who owes whom",
      "Settlement Management - Record payments to settle debts",
      "Category Management - Categorize expenses (Food, Travel, Utilities, etc.)",
      "Activity Feed - Track all expenses and settlements in real-time",
      "Analytics Dashboard - Spending insights, trends, and category breakdowns",
      "Multi-group Support - Manage expenses across multiple groups",
      "Payment History - Complete settlement and payment tracking",
    ],
    technologies: [
      "Java 17+",
      "Spring Boot 3.x",
      "Spring Data JPA",
      "Spring Security",
      "Spring Web",
      "MySQL",
      "TypeScript",
      "RESTful API",
      "OTP Authentication",
    ],
    keyFeatures: [
      "Comprehensive RESTful API with 137 planned endpoints (27 existing, 110 planned)",
      "OTP-based secure authentication with email and mobile verification",
      "Automatic balance calculation and recalculation on expense/settlement changes",
      "Multiple split types: Equal split, Exact amounts, Percentage-based",
      "Real-time balance tracking across all groups",
      "Transaction management with @Transactional for data consistency",
      "Layered architecture: Controller, Service, Repository, Database",
      "Comprehensive API documentation with Swagger/OpenAPI",
    ],
    entities: [
      "Users",
      "Groups",
      "Group Members",
      "Expenses",
      "Expense Participants",
      "Settlements",
      "Categories",
      "Balances",
      "OTP Records",
      "Sessions",
    ],
    apiEndpoints: [
      "POST /api/auth/register - Register new user with OTP verification",
      "POST /api/auth/login - OTP-based login flow",
      "POST /api/auth/verify-login-otp - Complete authentication",
      "POST /api/groups - Create expense groups",
      "GET /api/groups/{id} - Get group details with members",
      "POST /api/groups/{id}/members - Add members to group",
      "POST /api/expenses - Create expense with split logic (CRITICAL - Planned)",
      "GET /api/expenses/{id} - Get expense details with participants",
      "POST /api/settlements - Record payment/settlement (CRITICAL - Planned)",
      "GET /api/users/{id}/balance-summary - Get user's balance overview",
      "GET /api/dashboard - Aggregated dashboard data (Planned)",
      "GET /api/analytics/spending-by-category - Category-wise analytics (Planned)",
    ],
    skills: [
      "Spring Boot",
      "Spring Security",
      "REST API",
      "Java",
      "MySQL",
      "Spring Data JPA",
      "TypeScript",
      "OTP Authentication",
      "Balance Calculations",
      "Transaction Management",
    ],
    primarySkill: "Spring Boot",
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

