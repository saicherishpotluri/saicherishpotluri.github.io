import { motion, useReducedMotion } from "framer-motion";

function Reveal({
  children,
  as: Component = "div",
  delay = 0,
  y = 24,
  className,
  once = true,
  ...rest
}) {
  const prefersReducedMotion = useReducedMotion();
  const MotionComponent = motion[Component] ?? motion.div;

  if (prefersReducedMotion) {
    return (
      <Component className={className} {...rest}>
        {children}
      </Component>
    );
  }

  return (
    <MotionComponent
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      {...rest}
    >
      {children}
    </MotionComponent>
  );
}

export default Reveal;
