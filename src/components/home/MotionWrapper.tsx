import { motion } from "framer-motion";
import { ReactNode } from "react";
interface MotionWrapperProps {
  children: ReactNode;
  delay?: number;
}
const MotionWrapper = ({ children, delay = 0 }: MotionWrapperProps) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    {children}
  </motion.div>
);

export default MotionWrapper;
