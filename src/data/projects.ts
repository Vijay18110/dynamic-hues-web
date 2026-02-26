export type ProjectCategory = "official" | "personal";

export interface Project {
  id: string;
  name: string;
  tech: string;
  url: string;
  description: string;
  features: string[];
  category: ProjectCategory;
}

export const projects: Project[] = [
  // === Official Projects ===

  {
    id: "ecommerce-dashboard",
    name: "E-commerce Dashboard",
    tech: "React, Node.js, REST APIs, Bootstrap",
    url: "",
    description:
      "Enterprise-level e-commerce dashboard at Papaya Coders Private Limited to manage products, orders, users, and sales operations.",
    features: [
      "Product Management",
      "Order Tracking",
      "Admin Workflows",
      "Real-time Data Sync",
    ],
    category: "official",
  },
  {
    id: "rav-download",
    name: "RAV Download Ecommerce",
    tech: "React, Redux, CSS3, HTML5",
    url: "",
    description:
      "Ecommerce application featuring secure registration via email/phone OTP, a user-friendly interface comparable to Amazon and Flipkart.",
    features: [
      "OTP Authentication",
      "Wishlist",
      "Fast Product Search",
      "Interactive UI",
    ],
    category: "official",
  },
  {
    id: "organic-web-app",
    name: "Organic Ecommerce Web App",
    tech: "React, Bootstrap, CSS3",
    url: "https://dev.ravorganics.com/",
    description:
      "Organic Ecommerce application with secure registration, OTP login, wishlist management, and a seamless shopping experience.",
    features: [
      "Product Catalog",
      "Cart & Checkout",
      "OTP Auth",
      "Responsive Design",
    ],
    category: "official",
  },
  {
    id: "pos-web-app",
    name: "POS Web App",
    tech: "React, Redux, Bootstrap",
    url: "",
    description:
      "High-performance Point of Sale system for scalable business management with real-time inventory tracking, automated GST-compliant billing, and detailed sales analytics.",
    features: [
      "Real-time Inventory",
      "GST Billing",
      "Sales Analytics",
      "Scalable Architecture",
    ],
    category: "official",
  },
  {
    id: "infiniox-web-app",
    name: "Infiniox Web App",
    tech: "Next.js, React, Redux Toolkit, Bootstrap",
    url: "",
    description:
      "Designed and developed a scalable web application for Infiniox as a freelance project to manage and sell products including smart benches, toys, and furniture.",
    features: [
      "Next.js SSR & SEO",
      "REST API Integration",
      "Redux Toolkit State Management",
      "Session Storage",
    ],
    category: "official",
  },
  {
    id: "associate-panel",
    name: "Associate Panel",
    tech: "React.js, Redux, Bootstrap",
    url: "https://cp.tantrash.com/#/Dashboard",
    description:
      "Comprehensive Associate panel web application (cp.tantrash.com) to streamline internal workflows, data visualization, and associate activity tracking.",
    features: [
      "Dashboard Analytics",
      "Data Visualization",
      "Activity Tracking",
    ],
    category: "official",
  },
  {
    id: "customer-panel",
    name: "Customer Panel",
    tech: "React, Redux, Bootstrap",
    url: "https://customer.ravgroup.org/",
    description:
      "Feature-rich customer panel for RAV Organics with high-level security protocols and real-time data synchronization for profile management.",
    features: ["Secure Profiles", "Real-time Sync", "Transaction Summaries"],
    category: "official",
  },
  {
    id: "property-atm",
    name: "Property ATM",
    tech: "React, Redux, Bootstrap",
    url: "https://propertyatm.in/",
    description:
      "Property dealing webapp for viewing properties in Lucknow for rent or purchase with dealer contact and real estate filters.",
    features: ["Property Listings", "Search & Filters", "Dealer Contact"],
    category: "official",
  },
  // === Personal Projects ===

  {
    id: "credentials-app",
    name: "Credentials Manager",
    tech: "React, Redux, Firebase",
    url: "https://credentials-manager-webapp.netlify.app/",
    description:
      "Secure vault for managing social media credentials with encryption logic and cloud-based realtime database.",
    features: [
      "Encrypted Storage",
      "Account Categorization",
      "Firebase Realtime DB",
    ],
    category: "personal",
  },
  {
    id: "atm-machine",
    name: "ATM Machine WebApp",
    tech: "React, Redux, Bootstrap",
    url: "https://vijayatm.netlify.app/",
    description:
      "Secure ATM simulation with algorithmic PIN management, transaction logging, and real-time currency conversion tools.",
    features: [
      "PIN Management",
      "Transaction Logging",
      "Currency Conversion",
      "LocalStorage Persistence",
    ],
    category: "personal",
  },
  {
    id: "student-grievance",
    name: "Student Grievance System",
    tech: "React, Bootstrap, MongoDB",
    url: "https://student-grievance.netlify.app/",
    description:
      "Complaints management system where students can register, submit grievances with attachments, and track real-time status through an admin dashboard.",
    features: [
      "Grievance Submission",
      "Status Tracking",
      "Role-Based Access",
      "Admin Dashboard",
    ],
    category: "personal",
  },
  {
    id: "flipkart-clone",
    name: "Flipkart Clone",
    tech: "React, Node.js, MongoDB",
    url: "",
    description:
      "Pixel-perfect clone of Flipkart with responsive design across mobile and desktop, using MongoDB for product catalog data.",
    features: [
      "Responsive Design",
      "Product Catalog",
      "Shopping Cart",
      "User Auth",
    ],
    category: "personal",
  },
  {
    id: "nest-ecommerce",
    name: "Specialized Ecommerce App",
    tech: "React, Bootstrap, MongoDB",
    url: "",
    description:
      "Specialized ecommerce application with account validation, cart/wishlist management, and product tracking for real-time shipping updates.",
    features: ["Cart & Wishlist", "Product Tracking", "Optimized Checkout"],
    category: "personal",
  },
  {
    id: "initial-portfolio",
    name: "My Initial Portfolio",
    tech: "React, Node.js, MongoDB",
    url: "https://main--vnportfolio.netlify.app/",
    description: "My first portfolio website showcasing projects and skills.",
    features: ["Project Showcase", "Contact Form", "Responsive Layout"],
    category: "personal",
  },
];
