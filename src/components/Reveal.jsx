import { motion, useReducedMotion } from "framer-motion";

/** A consistent, accessible in-view reveal for portfolio content. */
function Reveal({ children, delay = 0, className = "", as = "div" }) {
  const reduceMotion = useReducedMotion();
  const MotionComponent = motion[as] || motion.div;

  return (
    <MotionComponent
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 40 }}
      whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionComponent>
  );
}

export default Reveal;
