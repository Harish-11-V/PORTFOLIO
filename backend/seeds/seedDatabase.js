const mongoose = require('mongoose');
const Project = require('../models/Project');
const Skill = require('../models/Skill');
require('dotenv').config();

const projects = [
  {
    title: 'EduEase-Interactive OD Approval Application',
    description: 'Built a digital platform to revolutionize OD leave management in institutions by automating request & approval workflows including student request submission with proof upload, faculty dashboards for approval/rejection, real-time notifications & report generation. Achieved 70% faster processing, 60% improved faculty efficiency & 90% accuracy in student submissions, ensuring transparency.',
    technologies: ['React.js', 'MongoDB', 'Node.js', 'HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/Harish-11-V',
    liveUrl: '',
    category: 'fullstack',
    featured: true,
    order: 1,
  },
  {
    title: 'Gen-AI Material Assistant',
    description: 'Built a GenAI-powered Material Assistant Automation by a RAG-based LLM/NLP architecture integrated to automate intelligent material selection. Designed a Multi-stage criteria decision-support engine, with AI-driven ranking, real-time dashboards, and an Interactive RAG chatbot for semantic/User prompts reducing manual standards evaluation effort by ~25-30% while improving NPD decision accuracy.',
    technologies: ['React 18', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Gemini 1.5 Flash', 'LLMs', 'RAG Engine'],
    githubUrl: 'https://github.com/Harish-11-V',
    liveUrl: '',
    category: 'fullstack',
    featured: true,
    order: 2,
  },
  {
    title: 'EduMate-AI Powered Adaptive Learning Platform',
    description: 'Developed an adaptive learning platform for personalized education and skill enhancement. Used Python, TensorFlow for AI-driven recommendations 80% accuracy, OpenCV, WebRTC for real-time feedback 75% engagement improvement, and React for an interactive interface 60% faster task completion. Integrated Twilio notifications, AI chatbots for 70% faster responsiveness.',
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenCV', 'React', 'PostgreSQL', 'MongoDB'],
    githubUrl: 'https://github.com/Harish-11-V',
    liveUrl: '',
    category: 'fullstack',
    featured: true,
    order: 3,
  },
  {
    title: 'Pneumonia Detection With ViT Model & MC Dropout',
    description: 'Developed a deep learning framework using ViT, Monte Carlo Dropout, and Active Learning for automated pneumonia diagnosis from chest X-rays. Achieved 94.1% accuracy, 96% sensitivity, and 0.98 AUC, outperforming ResNet-50, with 85% predictions >90% confidence. Active learning improved performance to 89.26%, reducing labeling effort & ensuring reliable classification models.',
    technologies: ['Python', 'PyTorch', 'ViT', 'OpenCV', 'MC Dropout'],
    githubUrl: 'https://github.com/Harish-11-V',
    liveUrl: '',
    category: 'fullstack',
    featured: true,
    order: 4,
  }
];

const skills = [
  { name: 'React Js', category: 'Programming & Web Dev', proficiency: 90, icon: '⚛️', order: 1 },
  { name: 'JavaScript', category: 'Programming & Web Dev', proficiency: 88, icon: 'JS', order: 2 },
  { name: 'HTML & CSS', category: 'Programming & Web Dev', proficiency: 92, icon: 'UI', order: 3 },
  { name: 'Python', category: 'Programming & Web Dev', proficiency: 90, icon: '🐍', order: 4 },
  { name: 'Java', category: 'Programming & Web Dev', proficiency: 85, icon: '☕', order: 5 },
  { name: 'C', category: 'Programming & Web Dev', proficiency: 82, icon: 'C', order: 6 },
  { name: 'API Handling', category: 'Programming & Web Dev', proficiency: 85, icon: 'API', order: 7 },
  { name: 'Frontend (UI)', category: 'Programming & Web Dev', proficiency: 88, icon: 'UI', order: 8 },

  { name: 'Git & GitHub', category: 'Tools & Automation', proficiency: 87, icon: 'git', order: 1 },
  { name: 'VS Code', category: 'Tools & Automation', proficiency: 90, icon: 'VS', order: 2 },
  { name: 'UiPath Studio', category: 'Tools & Automation', proficiency: 82, icon: 'Ui', order: 3 },
  { name: 'Canva', category: 'Tools & Automation', proficiency: 85, icon: 'C', order: 4 },

  { name: 'Team Leadership & Mentoring', category: 'Soft Skills', proficiency: 90, icon: 'L', order: 1 },
  { name: 'Adaptability', category: 'Soft Skills', proficiency: 85, icon: 'A', order: 2 },
  { name: 'Time Management', category: 'Soft Skills', proficiency: 85, icon: 'TM', order: 3 },
  { name: 'Attention to detail', category: 'Soft Skills', proficiency: 85, icon: 'D', order: 4 },
  { name: 'Active Learner', category: 'Soft Skills', proficiency: 90, icon: 'AL', order: 5 },
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
