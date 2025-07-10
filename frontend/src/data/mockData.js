// Mock data for Pankaj Kshetri's Portfolio

export const personalInfo = {
  name: "Pankaj Kshetri",
  title: "Software Developer",
  tagline: "I'm Pankaj",
  description: "I'm Pankaj Kshetri, a passionate software developer who enjoys turning ideas into efficient code. My core strength lies in Java and Spring Boot for backend development, with solid frontend fundamentals using HTML, CSS, and vanilla JavaScript. I'm also familiar with working on Git-based version control systems and love building responsive, user-friendly web experiences.",
  profileImage: require("../assets/WhatsApp Image 2025-07-10 at 12.45.50 PM.jpeg"),
  resume: "/resume.pdf"
};

export const skills = [
  { name: "HTML5", icon: "🌐", level: 90 },
  { name: "CSS", icon: "🎨", level: 85 },
  { name: "Java", icon: "☕", level: 95 },
  { name: "Spring Boot", icon: "🍃", level: 90 },
  { name: "MariaDB", icon: "🗄️", level: 80 },
  { name: "Git", icon: "📦", level: 85 },
  { name: "GitHub", icon: "🐙", level: 85 }
];

export const statistics = [
  { number: "10+", label: "Completed Projects", suffix: "+" },
  { number: "5+", label: "Happy Clients", suffix: "+" },
  { number: "1+", label: "Years of Experience", suffix: "+" }
];

export const services = [
  {
    id: 1,
    icon: "🌐",
    title: "Website Development",
    description: "Creating responsive and modern websites using HTML, CSS, JavaScript and modern frameworks."
  },
  {
    id: 2,
    icon: "⚙️",
    title: "Backend/API Development",
    description: "Building robust backend services and RESTful APIs using Java and Spring Boot."
  },
  {
    id: 3,
    icon: "🏠",
    title: "Website Hosting Setup",
    description: "Setting up and configuring web hosting solutions for optimal performance."
  },
  {
    id: 4,
    icon: "🗄️",
    title: "Database Design & Integration",
    description: "Designing efficient database schemas and integrating with MariaDB and other databases."
  }
];

export const projects = [
  {
    id: 1,
    title: "To-Do App",
    description: "A full-stack task management application built with Spring Boot backend and responsive HTML/CSS/JS frontend.",
    technologies: ["Java", "Spring Boot", "HTML", "CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop&auto=format&q=80",
    github: "https://github.com/baje555/todo-app",
    live: "#"
  },
  {
    id: 2,
    title: "Weather Web App",
    description: "A weather application that fetches real-time weather data through API integration with clean UI design.",
    technologies: ["Java", "Spring Boot", "API Integration", "HTML", "CSS"],
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop&auto=format&q=80",
    github: "https://github.com/baje555/weather-app",
    live: "#"
  },
  {
    id: 3,
    title: "eCommerce Backend",
    description: "A robust backend system for eCommerce applications with payment integration and inventory management.",
    technologies: ["Java", "Spring Boot", "MariaDB", "Payment API"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop&auto=format&q=80",
    github: "https://github.com/baje555/ecommerce-backend",
    live: "#"
  },
  {
    id: 4,
    title: "Chatbot Web UI",
    description: "An interactive chatbot interface with backend API integration for seamless user communication.",
    technologies: ["HTML", "CSS", "JavaScript", "Spring Boot", "WebSocket"],
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&h=250&fit=crop&auto=format&q=80",
    github: "https://github.com/baje555/chatbot-ui",
    live: "#"
  }
];

export const contactInfo = {
  email: "kshetripankaj73@gmail.com",
  github: "https://github.com/baje555",
  linkedin: "https://linkedin.com/in/pankaj55",
  location: "Available for Remote Work"
};

export const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" }
];