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
  {
    id: "associate-panel",
    name: "Associate Panel",
    tech: "React.js, Redux.js, Bootstrap",
    url: "https://cp.tantrash.com/#/Dashboard",
    description: "A comprehensive associate management panel with dashboard analytics and data management features.",
    features: ["Dashboard Analytics", "User Management", "Real-time Updates"],
    category: "official",
  },
  {
    id: "organic-web-app",
    name: "Organic Web App",
    tech: "React, Redux, Bootstrap",
    url: "https://dev.ravorganics.com/",
    description: "An organic products e-commerce web application with modern design and seamless shopping experience.",
    features: ["Product Catalog", "Cart & Checkout", "Responsive Design"],
    category: "official",
  },
  {
    id: "property-atm",
    name: "Property ATM",
    tech: "React, Redux, Bootstrap",
    url: "https://propertyatm.in/",
    description: "A property management and listing platform with search and filtering capabilities.",
    features: ["Property Listings", "Search & Filters", "Map Integration"],
    category: "official",
  },
  {
    id: "customer-panel",
    name: "Customer Panel",
    tech: "React, Node.js, Bootstrap",
    url: "https://customer.ravgroup.org/",
    description: "Customer relationship management panel with order tracking and communication features.",
    features: ["Order Tracking", "Customer Support", "Analytics Dashboard"],
    category: "official",
  },
  {
    id: "student-grievance",
    name: "Student Grievance System",
    tech: "React, Node.js, MongoDB",
    url: "https://student-grievance.netlify.app/",
    description: "A system for students to submit and track grievances with real-time status updates.",
    features: ["Grievance Submission", "Status Tracking", "Admin Dashboard"],
    category: "personal",
  },
  {
    id: "atm-machine",
    name: "ATM Machine WebApp",
    tech: "React, Bootstrap, Database",
    url: "https://vijayatm.netlify.app/",
    description: "A simulated ATM machine web application with account management and transaction features.",
    features: ["Account Management", "Transactions", "Balance Inquiry"],
    category: "personal",
  },
  {
    id: "text-editor",
    name: "Text Editor",
    tech: "React, Database",
    url: "",
    description: "A feature-rich text editor with formatting tools and cloud save functionality.",
    features: ["Rich Text Editing", "Cloud Save", "Export Options"],
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
  {
    id: "flipkart-clone",
    name: "Flipkart Clone",
    tech: "React, Node.js, MongoDB",
    url: "",
    description: "A Flipkart e-commerce clone with product listing, cart, and checkout features.",
    features: ["Product Listing", "Shopping Cart", "User Auth"],
    category: "personal",
  },
  {
    id: "password-generator",
    name: "Password Generator",
    tech: "React",
    url: "https://main--vnpasswordgenerator.netlify.app/",
    description: "A secure password generator with customizable options for length and character types.",
    features: ["Custom Length", "Character Options", "Copy to Clipboard"],
    category: "personal",
  },
  {
    id: "todo-app",
    name: "Todo App",
    tech: "React",
    url: "",
    description: "A task management application with CRUD operations and filtering.",
    features: ["Add/Edit/Delete", "Filter Tasks", "Local Storage"],
    category: "personal",
  },
  {
    id: "phone-book",
    name: "Phone Book",
    tech: "React",
    url: "https://phonebookweb.netlify.app/",
    description: "A contact management application with search and organize features.",
    features: ["Contact Management", "Search", "Categories"],
    category: "personal",
  },
  {
    id: "chat-app",
    name: "Chat App",
    tech: "React, Node.js, MongoDB",
    url: "",
    description: "A real-time chat application with messaging and user management.",
    features: ["Real-time Messaging", "User Profiles", "Group Chats"],
    category: "personal",
  },
  {
    id: "credentials-app",
    name: "Credentials Manager",
    tech: "React, Firebase",
    url: "https://credentials-manager-webapp.netlify.app/",
    description: "A secure credentials management app with encrypted storage.",
    features: ["Secure Storage", "Auto-fill", "Firebase Auth"],
    category: "personal",
  },
  {
    id: "nest-ecommerce",
    name: "Nest E-Commerce",
    tech: "React, Firebase, MongoDB, Redux",
    url: "",
    description: "A full-featured e-commerce platform with product management and payment integration.",
    features: ["Product Management", "Payment Gateway", "Order Tracking"],
    category: "personal",
  },
];
