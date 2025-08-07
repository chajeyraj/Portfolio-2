import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "default" | "strong";
  hover?: boolean;
  delay?: number;
}

export function GlassCard({ 
  children, 
  className, 
  variant = "default", 
  hover = true,
  delay = 0,
  ...props 
}: GlassCardProps) {
  const variants = {
    default: "glass-effect",
    strong: "glass-effect-strong"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        variants[variant],
        "rounded-3xl shadow-xl",
        hover && "hover:shadow-2xl transition-all duration-300 transform hover:scale-105",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
