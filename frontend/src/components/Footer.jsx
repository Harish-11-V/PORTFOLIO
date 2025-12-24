import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi';

const Footer = () => {
  const socialLinks = [
    { 
      icon: FiGithub, 
      url: 'https://github.com/Harish-11-V', 
      label: 'GitHub',
      color: 'hover:text-gray-400'
    },
    { 
      icon: FiLinkedin, 
      url: 'https://www.linkedin.com/in/harish-kumar-v-a412092a2/', 
      label: 'LinkedIn',
      color: 'hover:text-blue-400'
    },
    { 
      icon: FiTwitter, 
      url: 'https://twitter.com/harishkumar', 
      label: 'Twitter',
      color: 'hover:text-cyan-400'
    },
    { 
      icon: FiMail, 
      url: 'mailto:231501057@rajalakshmi.edu.in', 
      label: 'Email',
      color: 'hover:text-purple-400'
    },
  ];

  return (
    <footer className="relative bg-dark-900/50 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold font-display mb-4"
            >
              <span className="gradient-text">Harish Kumar</span>
            </motion.h3>
            <p className="text-gray-400 text-sm">
              Full-stack developer passionate about creating elegant solutions
              to complex problems.
            </p>
          </div>

          <div>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg font-semibold mb-4 text-white"
            >
              Quick Links
            </motion.h4>
            <ul className="space-y-2">
              {['Home', 'Projects', 'Skills', 'Resume', 'Contact'].map((link, index) => (
                <motion.li
                  key={link}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={`/${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg font-semibold mb-4 text-white"
            >
              Connect
            </motion.h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-3 glass-hover rounded-full text-gray-400 ${social.color} transition-colors`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-white/5 text-center"
        >
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Harish Kumar. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Built with React, Tailwind CSS, and Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
