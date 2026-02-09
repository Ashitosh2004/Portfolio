import { motion } from "framer-motion";

const PageLoader = () => (
  <motion.div
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
    className="fixed inset-0 z-50 flex items-center justify-center bg-background"
  >
    <div className="flex flex-col items-center gap-6">
      {/* Animated Logo */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="text-2xl font-bold tracking-tight"
      >
        Portfolio<span className="text-primary">.</span>
      </motion.div>
      
      {/* Minimal Loading Bar */}
      <div className="w-32 h-[2px] bg-border rounded-full overflow-hidden">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="h-full w-1/2 bg-primary rounded-full"
        />
      </div>
    </div>
  </motion.div>
);

export default PageLoader;
