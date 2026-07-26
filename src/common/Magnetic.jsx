import { useRef } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

function Magnetic({ as: Component = "button", className, children, strength = 10, ...rest }) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  if (prefersReducedMotion) {
    return (
      <Component className={className} {...rest}>
        {children}
      </Component>
    );
  }

  const handleMouseMove = (event) => {
    const rect = ref.current.getBoundingClientRect();
    x.set(((event.clientX - rect.left) / rect.width - 0.5) * strength);
    y.set(((event.clientY - rect.top) / rect.height - 0.5) * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const MotionComponent = motion[Component] ?? motion.button;

  return (
    <MotionComponent
      ref={ref}
      className={className}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.95 }}
      {...rest}
    >
      {children}
    </MotionComponent>
  );
}

export default Magnetic;
