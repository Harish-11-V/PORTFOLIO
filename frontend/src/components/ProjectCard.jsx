import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiTag } from 'react-icons/fi';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="w-full group relative h-full glass-interactive rounded-2xl overflow-hidden transform-3d"
    >
        {/* Animated gradient border */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-transparent to-cyan-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Shimmer effect on hover */}
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        <div className="relative z-10 p-6 h-full flex flex-col">
          {/* Featured Badge */}
          {project.featured && (
            <motion.div 
              className="flex items-center space-x-2 mb-4"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.1 + 0.3, type: 'spring' }}
            >
              <div className="relative">
                <FiTag className="w-4 h-4 text-purple-400" />
                <motion.div
                  className="absolute inset-0"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.7, 0, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <FiTag className="w-4 h-4 text-purple-400" />
                </motion.div>
              </div>
              <span className="text-sm font-semibold gradient-text">Featured</span>
            </motion.div>
          )}

          {/* Title */}
          <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:gradient-text transition-all duration-300">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-gray-400 text-sm md:text-base mb-4 line-clamp-3 group-hover:text-gray-300 transition-colors flex-grow">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.slice(0, 5).map((tech, techIndex) => (
              <motion.span
                key={techIndex}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-purple-300 border border-purple-500/30 hover:border-purple-400/60 transition-all cursor-default backdrop-blur-sm"
              >
                {tech}
              </motion.span>
            ))}
            {project.technologies.length > 5 && (
              <span className="px-3 py-1 text-xs rounded-full bg-gray-800/50 text-gray-400 border border-gray-700">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>

          {/* Links */}
          <div className="flex items-center gap-4">
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, x: -3 }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-all group/link"
              >
                <FiGithub className="w-5 h-5 group-hover/link:rotate-12 transition-transform" />
                <span className="text-sm font-medium">Code</span>
              </motion.a>
            )}
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, x: 3 }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-all group/link"
              >
                <FiExternalLink className="w-5 h-5 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                <span className="text-sm font-medium">Demo</span>
              </motion.a>
            )}
          </div>

          {/* Hover glow effect */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        </div>
      </motion.div>
  );
};

export default ProjectCard;
