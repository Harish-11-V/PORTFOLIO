import { motion } from 'framer-motion';
import { FiDownload, FiBriefcase, FiAward, FiBook } from 'react-icons/fi';
import { BsBriefcase } from 'react-icons/bs';

const Resume = () => {
  const experience = [
    {
      title: 'Senior Frontend Developer',
      company: 'Tech Innovations Inc.',
      period: '2021 - Present',
      description: 'Leading the frontend team in developing interactive and accessible web applications. Implementing advanced animations and 3D experiences using Three.js and WebGL.',
      technologies: ['React', 'Three.js', 'WebGL', 'TypeScript', 'Framer Motion'],
    },
    {
      title: 'Full-Stack Developer',
      company: 'Digital Solutions Ltd.',
      period: '2019 - 2021',
      description: 'Developed and maintained multiple client projects using MERN stack. Focused on creating responsive and performant web applications.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'AWS'],
    },
    {
      title: 'Junior Web Developer',
      company: 'StartUp Hub',
      period: '2017 - 2019',
      description: 'Assisted in building modern web applications and learning best practices in software development.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap'],
    },
  ];

  const education = [
    {
      degree: 'Bachelor of Technology in Artificial Intelligence & Machine Learning',
      institution: 'Rajalakshmi Engineering College',
      period: '2023-2027',
      description: 'Cuurently focusing on the fundamentals and advancement of Artificial Intelligence along with integration of various domains',
    },
  ];

  const certifications = [
    'AWS Certified Developer - Associate',
    'MongoDB Certified Developer',
    'React Advanced Patterns',
    'Node.js Application Development',
  ];

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
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <motion.div variants={itemVariants} className="flex items-center mb-12">
            <div className="w-12 h-12 rounded-full bg-primary-500/20 backdrop-blur-sm flex items-center justify-center border border-primary-500/30 mr-4">
              <BsBriefcase className="w-6 h-6 text-primary-400" />
            </div>
            <h2 className="text-3xl font-bold text-white">Work Experience</h2>
          </motion.div>

          <div className="space-y-6">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative bg-gradient-to-br from-gray-900/60 via-gray-900/40 to-gray-900/20 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-8 hover:border-primary-500/30 transition-all duration-300 overflow-hidden"
                style={{
                  backgroundColor: 'rgba(15, 15, 25, 0.85)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)'
                }}
              >
                {/* Purple gradient left border */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-purple-600 to-cyan-500 rounded-l-2xl" />
                
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-cyan-900/10" />
                
                <div className="relative z-10 ml-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white">{job.title}</h3>
                    <span className="text-primary-400 font-medium text-sm whitespace-nowrap ml-4">{job.period}</span>
                  </div>
                  
                  <p className="text-purple-400 text-lg font-medium mb-4">{job.company}</p>
                  
                  <p className="text-gray-300 leading-relaxed mb-6">{job.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm bg-gray-800/60 text-gray-300 rounded-lg border border-gray-700/50"
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

        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.div variants={itemVariants} className="flex items-center mb-8">
            <FiBook className="w-8 h-8 text-primary-400 mr-3" />
            <h2 className="text-3xl font-bold">Education</h2>
          </motion.div>

          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass rounded-xl p-6"
            >
              <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
              <div className="flex flex-wrap items-center text-gray-400 mb-3 space-x-4">
                <span className="font-medium text-primary-400">{edu.institution}</span>
                <span className="text-sm">{edu.period}</span>
              </div>
              <p className="text-gray-300">{edu.description}</p>
            </motion.div>
          ))}
        </motion.section>

        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="flex items-center mb-8">
            <FiAward className="w-8 h-8 text-primary-400 mr-3" />
            <h2 className="text-3xl font-bold">Certifications</h2>
          </motion.div>

          <motion.div variants={itemVariants} className="glass rounded-xl p-6">
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
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500" />
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
