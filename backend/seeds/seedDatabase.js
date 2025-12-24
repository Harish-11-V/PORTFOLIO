const mongoose = require('mongoose');
const Project = require('../models/Project');
const Skill = require('../models/Skill');
require('dotenv').config();

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with payment integration, admin dashboard, and real-time inventory management using Stripe API.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux', 'Express'],
    githubUrl: 'https://github.com/harishkumar/ecommerce',
    liveUrl: 'https://ecommerce-demo.com',
    category: 'fullstack',
    featured: true,
    order: 1,
  },
  {
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media management with real-time data visualization, post scheduling, and engagement tracking.',
    technologies: ['React', 'TypeScript', 'Chart.js', 'Firebase', 'Material-UI'],
    githubUrl: 'https://github.com/harishkumar/social-dashboard',
    liveUrl: 'https://social-dashboard-demo.com',
    category: 'frontend',
    featured: true,
    order: 2,
  },
  {
    title: 'Task Management API',
    description: 'RESTful API for task management with JWT authentication, role-based access control, and real-time notifications using WebSockets.',
    technologies: ['Express', 'PostgreSQL', 'Socket.io', 'Redis', 'JWT'],
    githubUrl: 'https://github.com/harishkumar/task-api',
    category: 'backend',
    featured: false,
    order: 3,
  },
  {
    title: 'Weather Forecast App',
    description: 'Beautiful weather application with location-based forecasts, interactive maps, and weather alerts using OpenWeather API.',
    technologies: ['React', 'Tailwind CSS', 'OpenWeather API', 'Leaflet'],
    githubUrl: 'https://github.com/harishkumar/weather-app',
    liveUrl: 'https://weather-forecast-demo.com',
    category: 'frontend',
    featured: false,
    order: 4,
  },
  {
    title: 'Blog Platform',
    description: 'Full-featured blogging platform with markdown support, comments, tags, and SEO optimization.',
    technologies: ['Next.js', 'MongoDB', 'Tailwind CSS', 'MDX'],
    githubUrl: 'https://github.com/harishkumar/blog-platform',
    liveUrl: 'https://blog-demo.com',
    category: 'fullstack',
    featured: true,
    order: 5,
  },
  {
    title: 'Real-time Chat Application',
    description: 'Instant messaging application with group chats, file sharing, and video call capabilities.',
    technologies: ['React', 'Node.js', 'Socket.io', 'WebRTC', 'MongoDB'],
    githubUrl: 'https://github.com/harishkumar/chat-app',
    liveUrl: 'https://chat-demo.com',
    category: 'fullstack',
    featured: false,
    order: 6,
  },
];

const skills = [
  { name: 'React', category: 'Frontend', proficiency: 90, icon: '⚛️', order: 1 },
  { name: 'TypeScript', category: 'Frontend', proficiency: 85, icon: '📘', order: 2 },
  { name: 'Tailwind CSS', category: 'Frontend', proficiency: 90, icon: '🎨', order: 3 },
  { name: 'Next.js', category: 'Frontend', proficiency: 80, icon: '▲', order: 4 },
  { name: 'Vue.js', category: 'Frontend', proficiency: 70, icon: '💚', order: 5 },
  
  { name: 'Node.js', category: 'Backend', proficiency: 85, icon: '🟢', order: 1 },
  { name: 'Express', category: 'Backend', proficiency: 85, icon: '🚂', order: 2 },
  { name: 'Python', category: 'Backend', proficiency: 75, icon: '🐍', order: 3 },
  { name: 'Django', category: 'Backend', proficiency: 70, icon: '🎸', order: 4 },
  
  { name: 'MongoDB', category: 'Database', proficiency: 80, icon: '🍃', order: 1 },
  { name: 'PostgreSQL', category: 'Database', proficiency: 75, icon: '🐘', order: 2 },
  { name: 'Redis', category: 'Database', proficiency: 70, icon: '🔴', order: 3 },
  { name: 'MySQL', category: 'Database', proficiency: 65, icon: '🐬', order: 4 },
  
  { name: 'Docker', category: 'DevOps', proficiency: 70, icon: '🐋', order: 1 },
  { name: 'AWS', category: 'DevOps', proficiency: 65, icon: '☁️', order: 2 },
  { name: 'GitHub Actions', category: 'DevOps', proficiency: 75, icon: '⚙️', order: 3 },
  { name: 'Nginx', category: 'DevOps', proficiency: 60, icon: '🌐', order: 4 },
  
  { name: 'Git', category: 'Tools', proficiency: 90, icon: '📚', order: 1 },
  { name: 'VS Code', category: 'Tools', proficiency: 95, icon: '💻', order: 2 },
  { name: 'Postman', category: 'Tools', proficiency: 85, icon: '📮', order: 3 },
  { name: 'Figma', category: 'Tools', proficiency: 70, icon: '🎨', order: 4 },
];

const seedDatabase = async () => {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');

    // Clear existing data
    console.log('Clearing existing data...');
    await Project.deleteMany({});
    await Skill.deleteMany({});
    console.log('Existing data cleared');

    // Insert projects
    console.log('Seeding projects...');
    await Project.insertMany(projects);
    console.log(`${projects.length} projects inserted`);

    // Insert skills
    console.log('Seeding skills...');
    await Skill.insertMany(skills);
    console.log(`${skills.length} skills inserted`);

    console.log('✅ Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
