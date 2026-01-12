import { motion } from 'framer-motion';
import { FiDownload, FiAward, FiBook } from 'react-icons/fi';

const Resume = () => {
  const experience = [
    {
      title: 'Secretariat',
      company: 'IEEE SOCIETY - Rajalakshmi Engineering College',
      period: 'Aug 2025 - Present',
      description: 'Managed documentation, coordinated meetings, and facilitated communication among members to ensure smooth operations of the IEEE student chapter.',
      technologies: ['Documentation', 'Communication', 'Event Management', 'Team Coordination'],
    },
    {
      title: 'Event Management Lead',
      company: 'PHOENIX CLUB - Rajalakshmi Engineering College',
      period: 'Oct 2024 - Aug 2025',
      description: 'Led planning and execution of college events, supervising teams and timelines. Assisted in organizing technical events, coordinating logistics, and ensuring smooth execution.',
      technologies: ['Leadership', 'Event Planning', 'Team Management', 'Logistics'],
    },
    {
      title: 'Internship Trainee',
      company: 'Multiple Organizations',
      period: 'Nov 2024 - Mar 2025',
      description: 'Gained hands-on experience in Cloud Computing, IoT, and real-time sensor data projects across various companies including tech startups and established firms.',
      technologies: ['Cloud Computing', 'IoT', 'Python', 'Arduino', 'Sensor Integration'],
    },
  ];

  const education = [
    {
      degree: 'Bachelor of Technology in Artificial Intelligence & Machine Learning',
      institution: 'Rajalakshmi Engineering College, Chennai',
      period: 'September 2023 - Present',
      description: 'CGPA: 8.53. Focusing on fundamentals and advancement of Artificial Intelligence, Machine Learning, Deep Learning, and their integration across various domains.',
    },
    {
      degree: 'Higher Secondary (XII)',
      institution: 'Christ The King Matric Boys Higher Secondary School, Kumbakonam',
      period: 'July 2022 - April 2023',
      description: 'Scored 92.83% with focus on Mathematics and Computer Science.',
    },
  ];

  const certifications = [
    'Nptel Certification (2025) - Completed 3+ Nptel courses & received Gold Badge',
    'Paper Presentation (2025) - "LMS Using Generative AI" at Chennai Institute of Technology',
    'Paper Presentation (2023) - "Pneumonia Detection with VIT+MC Dropout" at VFSTR University',
    'Hackathon Winner (2024) - 2nd Prize Winner at IEEE Breadboard Hackathon',
    'Newsletter Contributor (2025) - Content creator & Editor for AI/ML dept. newsletter at REC',
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
          
          <motion.button
            onClick={handleDownloadResume}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-lg shadow-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-300"
          >
            <FiDownload className="w-5 h-5" />
            Download Resume
          </motion.button>
        </motion.section>

        {/* Work Experience Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 rounded-full bg-purple-600/20 backdrop-blur-sm flex items-center justify-center border border-purple-500/30">
              <span className="text-xl font-bold text-purple-400">1</span>
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
            <div className="w-12 h-12 rounded-full bg-purple-600/20 backdrop-blur-sm flex items-center justify-center border border-purple-500/30">
              <FiBook className="w-6 h-6 text-purple-400" />
            </div>
            <h2 className="text-3xl font-bold text-white">Education</h2>
          </motion.div>

          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass rounded-xl p-6 border border-gray-800/50"
            >
              <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
              <div className="flex flex-wrap items-center text-gray-400 mb-3 gap-4">
                <span className="font-medium text-purple-400">{edu.institution}</span>
                <span className="text-sm">{edu.period}</span>
              </div>
              <p className="text-gray-300">{edu.description}</p>
            </motion.div>
          ))}
        </motion.section>

        {/* Certifications Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-purple-600/20 backdrop-blur-sm flex items-center justify-center border border-purple-500/30">
              <FiAward className="w-6 h-6 text-purple-400" />
            </div>
            <h2 className="text-3xl font-bold text-white">Certifications</h2>
          </motion.div>

          <motion.div variants={itemVariants} className="glass rounded-xl p-6 border border-gray-800/50">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3 text-gray-300"
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500" />
                  <span>{cert}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default Resume;
