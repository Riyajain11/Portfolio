import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaGithub, FaCloud, FaDatabase, FaCode, FaEnvelope, FaLinkedin, FaMapMarkerAlt, FaExternalLinkAlt, FaDownload
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiExpress, SiMongodb, SiMongoose, SiJsonwebtokens, SiPostman, SiVercel, SiRender, SiCloudinary, SiPython, SiFastapi, SiOpenstreetmap
} from 'react-icons/si';

export const portfolioData = {
  name: "RIYA JAIN",
  title: "Full Stack MERN Developer",
  tagline: "Building scalable, secure, and modern web applications.",
  about: "I am a MERN Stack Developer and Electronics & Communication Engineering student passionate about building scalable full-stack web applications with secure authentication, clean UI/UX, cloud deployment, and real-world problem solving.",
  email: "jainriya5454@gmail.com",
  github: "https://github.com/Riyajain11",
  linkedin: "https://linkedin.com/in/riya-jain-b31558299",
  resumeUrl: "#", // Add resume link if available
  location: "Technocrats Institute of Technology, Bhopal",
  education: {
    degree: "B.Tech in Electronics & Communication Engineering",
    institution: "Technocrats Institute of Technology",
    period: "2023–2027",
    cgpa: "8.04"
  },
  skills: [
    { name: "React.js", icon: FaReact, color: "#61DAFB" },
    { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Node.js", icon: FaNodeJs, color: "#339933" },
    { name: "Express.js", icon: SiExpress, color: "#ffffff" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "REST APIs", icon: FaCode, color: "#007ACC" },
    { name: "Git & GitHub", icon: FaGithub, color: "#ffffff" },
    { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    { name: "Cloud Deployment", icon: SiRender, color: "#46E3B7" },
  ],
  experience: [
    {
      title: "Web Developer Intern",
      company: "InspireLeap",
      period: "Sep–Oct 2025",
      description: "Built SalonGlow, a full-stack MERN salon booking application.",
      responsibilities: [
        "Built SalonGlow, a full-stack MERN salon booking application",
        "Integrated Twilio OTP authentication with secure login flow",
        "Designed responsive UI with Tailwind CSS",
        "Developed optimized REST APIs with CRUD operations",
        "Improved backend performance through query optimization"
      ]
    }
  ],
  projects: [
    {
      id: "greenpath",
      title: "GreenPath",
      subtitle: "AI Powered Farmer-Buyer Marketplace",
      description: "Built a full-stack MERN platform connecting farmers with buyers. Integrated AI crop price prediction using Python, Pandas, NumPy, and FastAPI microservice architecture.",
      tech: ["React", "Node.js", "Express", "MongoDB", "FastAPI", "Python", "Cloudinary", "Render"],
      github: "https://github.com/Riyajain11/Greenpath",
      demo: "https://greenpath-mua3.onrender.com",
      image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: "salonglow",
      title: "SalonGlow",
      subtitle: "Salon Booking Application",
      description: "Full-stack booking platform with OTP authentication, secure user login, CRUD APIs, responsive design, and booking management.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind", "Twilio"],
      github: "https://github.com/Riyajain11/SalonGlow",
      demo: "https://salonglow-frontend.onrender.com",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: "wanderlust",
      title: "Wanderlust",
      subtitle: "Travel Discovery Platform",
      description: "Travel platform with OpenStreetMap integration, dynamic destination exploration, category filtering, secure authentication, and responsive design.",
      tech: ["React", "Node.js", "Express", "MongoDB", "OpenStreetMap"],
      github: "https://github.com/Riyajain11/Wanderlust",
      demo: "#",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1000&auto=format&fit=crop"
    }
  ],
  certifications: [
    {
      name: "MERN Stack",
      link: "https://drive.google.com/file/d/1n-jVPeQKAWdCWuYdCMjjDUVcpyI3qD94/view"
    },
    {
      name: "Oracle Cloud DB",
      link: "https://drive.google.com/file/d/1N5_CwZsRUh7i7WGmGU0_QoLFRLMQDevH/view"
    },
    {
      name: "NPTEL AI",
      link: "https://drive.google.com/file/d/1y-NSlIVomw2xbykqJf8bSJFEML1GMGfX/view"
    },
    {
      name: "InspireLeap Internship",
      link: "https://drive.google.com/file/d/1V6eBv0uStBoz9HCDxnuEbkAS94tY5Rul/view"
    }
  ]
};
