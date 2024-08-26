import { motion, MotionProps } from "framer-motion";
import { ReactNode } from "react";

interface ScrollAnimationWrapperProps extends MotionProps {
  children: ReactNode;
  className?: string;
}

export default function ScrollAnimationWrapper({
  children,
  className,
  ...props
}: ScrollAnimationWrapperProps) {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
