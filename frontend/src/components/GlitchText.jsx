import { motion } from 'framer-motion';

const GlitchText = ({ text, className = '' }) => {
  return (
    <h1 
      className={`glitch ${className}`}
      data-text={text}
    >
      {text}
    </h1>
  );
};

export default GlitchText;
