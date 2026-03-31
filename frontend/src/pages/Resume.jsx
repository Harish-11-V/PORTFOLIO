import { motion } from 'framer-motion';
import { FiDownload, FiAward, FiBook, FiBriefcase } from 'react-icons/fi';
import { Tilt } from 'react-tilt';
import MagneticButton from '../components/MagneticButton';
import AnimatedSection from '../components/AnimatedSection';

const Resume = () => {
  const experience = [
    {
      title: 'AI Engineering Intern',
      company: 'L&T Technology Services, DLF Cybercity',
      period: 'Dec 2025 - Feb 2026',
      description: 'Developed AI-driven solutions integrating APIs, Frontend-backend systems, and Workflow automation.',
      technologies: ['AI', 'APIs', 'Frontend', 'Backend', 'Workflow Automation'],
    },
    {
      title: 'Secretary',
      company: 'IEEE SOCIETY - Rajalakshmi Engineering College',
      period: 'Aug 2025 - Present',
      description: 'Managed documentation, coordinated meetings, and facilitated communication among members.',
      technologies: ['Leadership', 'Documentation', 'Communication'],
    },
    {
      title: 'Event Management Lead',
      company: 'PHOENIX CLUB - Rajalakshmi Engineering College',
      period: 'Aug 2025 - Present',
      description: 'Led planning and execution of college events, supervising teams and timelines.',
      technologies: ['Event Planning', 'Team Management', 'Leadership'],
    },
    {
      title: 'Event Management Junior Associate',
      company: 'IEEE CIS SOCIETY - Rajalakshmi Engineering College',
      period: 'Oct 2024 - Aug 2025',
      description: 'Assisted in organizing technical events, coordinating logistics, and ensuring smooth execution.',
      technologies: ['Event Setup', 'Logistics Strategy'],
    },
    {
      title: 'Internship Trainee',
      company: 'National Institute Of Technology, Silchar',
      period: 'Jan 2025 - Mar 2025',
      description: 'Implemented AI/ML models for medical imaging projects.',
      technologies: ['AI', 'Machine Learning', 'Medical Imaging'],
    },
    {
      title: 'Internship Trainee',
      company: 'InternEzy',
      period: 'Nov 2024 - Jan 2025',
      description: 'Gained hands-on experience in Cloud Computing with AWS, focusing on deployment and services.',
      technologies: ['Cloud Computing', 'AWS', 'Deployment'],
    },
    {
      title: 'Internship Trainee',
      company: 'ReTech Solutions Pvt. Limited, Chennai',
      period: 'Dec 2024 - Dec 2024',
      description: 'Worked on IoT and real-time sensor data projects.',
      technologies: ['IoT', 'Real-time Data', 'Sensors'],
    }
  ];

  const education = [
    {
      degree: 'B.Tech Artificial Intelligence & Machine Learning',
      institution: 'Rajalakshmi Engineering College, Chennai',
      period: 'September 2023 - Present',
      description: 'CGPA: 8.52',
    },
    {
      degree: 'Higher Secondary (XII)',
      institution: 'Christ The King Matric Boys Higher Secondary School, Kumbakonam',
      period: 'July 2022 - April 2023',
      description: 'Percentage: 92.83%',
    },
    {
      degree: 'Secondary (X)',
      institution: 'Christ The King Matric Boys Higher Secondary School, Kumbakonam',
      period: 'June 2020 - April 2021',
      description: 'Percentage: 89%',
    },
  ];

  const certifications = [
    'Fortinet Certification (2026): Earned Fortinet Certified Fundamentals & Fortinet Certified Associate in Fortinet Training Institute (Cybersecurity).',
    'Paper Presentation (2025): Presented a paper on "LMS Using Generative AI" at Chennai Institute of Technology with a team of 3.',
    'Nptel Certification(2025): Completed 3+ Nptel courses & received one Gold Badge.',
    'Paper Presentation (2025): Presented a paper on "Pneumonia Detection with VIT+MC Dropout" at VFSTR University via online.',
    'Hackathon Winner(2024): 2nd Prize winner, IEEE Breadths hackathon under the theme "Environmental monitoring" with a team of 4.',
  ];

  const handleDownloadResume = () => {
    // Create a link to download the resume
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // You'll need to add your actual resume PDF to the public folder
    link.download = 'Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section with Download Resume */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-200 mb-8 leading-tight">
            My professional journey and experience
          </h1>
          
          <div className="flex justify-center">
            <MagneticButton
              onClick={handleDownloadResume}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-lg shadow-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform-3d hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]"
            >
              <FiDownload className="w-5 h-5 animate-bounce-slow" />
              Download Resume
            </MagneticButton>
          </div>
        </motion.section>

        {/* Work Experience Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 rounded-full bg-purple-600/20 backdrop-blur-sm flex items-center justify-center border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.4)]">
              <FiBriefcase className="w-6 h-6 text-purple-400" />
            </div>
            <h2 className="text-3xl font-bold text-white">Work Experience</h2>
          </motion.div>

          <div className="space-y-6">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative bg-gradient-to-br from-gray-900/60 via-gray-900/40 to-gray-900/20 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300 overflow-hidden"
                style={{
                  backgroundColor: 'rgba(15, 15, 25, 0.85)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)'
                }}
              >
                {/* Purple gradient left border */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-purple-600 to-cyan-500 rounded-l-2xl" />
                
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-cyan-900/10" />
                
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                    <h3 className="text-2xl font-bold text-white">{job.title}</h3>
                    <span className="text-purple-400 font-medium text-sm md:whitespace-nowrap">{job.period}</span>
                  </div>
                  
                  <p className="text-gray-400 text-lg font-medium mb-4">{job.company}</p>
                  
                  <p className="text-gray-300 leading-relaxed mb-6">{job.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm bg-gray-900/60 text-gray-300 rounded-md border border-gray-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-cyan-600/20 backdrop-blur-sm flex items-center justify-center border border-cyan-500/30">
              <FiBook className="w-6 h-6 text-cyan-400" />
            </div>
            <h2 className="text-3xl font-bold text-white">Education</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <Tilt key={index} options={{ max: 10, scale: 1.02, speed: 400 }} className="h-full">
                <motion.div
                  variants={itemVariants}
                  className="group relative glass-interactive rounded-2xl overflow-hidden border border-white/5 h-full p-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
                  style={{
                    backgroundColor: 'rgba(15, 15, 25, 0.85)',
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-bl from-cyan-600/10 via-transparent to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{edu.degree}</h3>
                    <div className="flex flex-col sm:flex-row sm:items-center text-gray-400 mb-4 gap-2">
                      <span className="font-semibold text-purple-400">{edu.institution}</span>
                      <span className="hidden sm:inline text-gray-600">•</span>
                      <span className="text-sm bg-white/5 px-3 py-1 rounded-full">{edu.period}</span>
                    </div>
                    <div className="mt-auto">
                      <span className="inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-cyan-300 font-medium">
                        {edu.description}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </Tilt>
            ))}
          </div>
        </motion.section>

        {/* Certifications Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-purple-600/20 backdrop-blur-sm flex items-center justify-center border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.4)]">
              <FiAward className="w-6 h-6 text-purple-400" />
            </div>
            <h2 className="text-3xl font-bold text-white">Certifications & Achievements</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => {
              const [title, ...descParts] = cert.split(': ');
              const desc = descParts.join(': ');

              return (
                <Tilt key={index} options={{ max: 15, scale: 1.02, speed: 400 }} className="h-full">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="group relative glass-interactive rounded-2xl overflow-hidden border border-white/5 h-full"
                    style={{
                      backgroundColor: 'rgba(15, 15, 25, 0.85)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)'
                    }}
                  >
                    {/* Subtle animated background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-cyan-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Glowing border effect underneath */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
                    
                    <div className="relative z-10 p-6 h-full flex flex-col justify-start">
                      <div className="flex items-start gap-4 mb-3">
                        <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center shadow-[0_0_10px_rgba(168,85,247,0.5)] group-hover:shadow-[0_0_20px_rgba(6,182,212,0.8)] transition-all duration-300 transform group-hover:scale-110">
                          <FiAward className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-200 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                          {title}
                        </h3>
                      </div>
                      {desc && (
                        <p className="text-gray-400 text-sm leading-relaxed pl-14 group-hover:text-gray-300 transition-colors">
                          {desc}
                        </p>
                      )}
                    </div>

                    {/* Bottom animated border line */}
                    <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-purple-500 via-cyan-400 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </motion.div>
                </Tilt>
              );
            })}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Resume;
