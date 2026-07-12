import React, { useEffect, useRef, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import TerminalWindow from "@/components/TerminalWindow";
import { projects } from "@/data/projects";
import { navigate } from "@/lib/router";
import { cn } from "@/lib/utils";

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const lineVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const ProjectsTerminal = () => {
  const modalRef = useRef(null);
  const [isMaximized, setIsMaximized] = useState(false);

  const handleClose = () => {
    navigate("/");
  };

  // Lock body scroll and handle focus restoration
  useEffect(() => {
    const previouslyFocused = document.activeElement;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
      if (previouslyFocused) {
        previouslyFocused.focus();
      }
    };
  }, []);

  // Handle Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Move focus inside the overlay when opened
  useEffect(() => {
    if (modalRef.current) {
      const closeButton = modalRef.current.querySelector('[aria-label="Close terminal"]');
      if (closeButton) {
        closeButton.focus();
      } else {
        modalRef.current.focus();
      }
    }
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={handleClose}
        className="absolute inset-0 bg-black/75 backdrop-blur-sm cursor-pointer"
      />

      {/* Terminal Window Wrapper */}
      <motion.div
        ref={modalRef}
        tabIndex={-1}
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className={cn(
          "relative w-full z-10 focus:outline-none transition-all duration-300",
          isMaximized ? "max-w-none h-full" : "max-w-3xl"
        )}
      >
        <TerminalWindow
          title="projects.log"
          onClose={handleClose}
          isMaximized={isMaximized}
          onMaximizeChange={setIsMaximized}
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-10"
          >
            {projects.map((proj) => (
              <div key={proj.id} className="space-y-4">
                {/* Prompt line */}
                <motion.div variants={lineVariants} className="flex flex-wrap items-center gap-2">
                  <span className="text-[#22c55e]">➜</span>
                  <span className="text-[#3b82f6]">~/projects</span>
                  <span className="text-[#8a8a8a]">cat</span>
                  <span className="text-[#e0e0e0]">
                    {proj.name.toLowerCase().replace(/\s+/g, "_")}.log
                  </span>
                </motion.div>

                {/* Output Content */}
                <div className="pl-4 border-l border-[#2a2a2a] space-y-3 font-mono text-sm sm:text-base">
                  <motion.div variants={lineVariants}>
                    <span className="text-[#8a8a8a] inline-block w-24">Project:</span>
                    <span className="text-[#e0e0e0] font-semibold">{proj.name}</span>
                  </motion.div>
                  <motion.div variants={lineVariants}>
                    <span className="text-[#8a8a8a] inline-block w-24">Tagline:</span>
                    <span className="text-[#e0e0e0] italic">{proj.tagline}</span>
                  </motion.div>
                  <motion.div variants={lineVariants}>
                    <span className="text-[#8a8a8a] inline-block w-24">About:</span>
                    <span className="text-[#d0d0d0]">{proj.description}</span>
                  </motion.div>

                  {/* GitHub URL */}
                  <motion.div variants={lineVariants}>
                    <span className="text-[#8a8a8a] inline-block w-24">GitHub:</span>
                    {proj.github !== "#" ? (
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#60a5fa] hover:underline"
                      >
                        {proj.github}
                      </a>
                    ) : (
                      <span className="text-[#8a8a8a] italic">private repository</span>
                    )}
                  </motion.div>

                  {/* Live URL */}
                  <motion.div variants={lineVariants}>
                    <span className="text-[#8a8a8a] inline-block w-24">Live Demo:</span>
                    {proj.live !== "#" ? (
                      <a
                        href={proj.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#60a5fa] hover:underline"
                      >
                        {proj.live}
                      </a>
                    ) : (
                      <span className="text-[#8a8a8a] italic">not deployed</span>
                    )}
                  </motion.div>

                  {/* Tech stack line formatted as a JSON array */}
                  <motion.div variants={lineVariants} className="text-xs sm:text-sm pt-2">
                    <span className="text-[#c084fc]">tags</span>
                    <span className="text-[#8a8a8a]">: </span>
                    <span className="text-[#e0e0e0]">[</span>
                    {proj.stack.map((tech, idx) => (
                      <span key={tech}>
                        <span className="text-[#60a5fa]">"{tech}"</span>
                        {idx < proj.stack.length - 1 && <span className="text-[#8a8a8a]">, </span>}
                      </span>
                    ))}
                    <span className="text-[#e0e0e0]">]</span>
                  </motion.div>
                </div>
              </div>
            ))}

            {/* Blinking Cursor block */}
            <motion.div variants={lineVariants} className="flex items-center gap-2 text-sm sm:text-base pt-4">
              <span className="text-[#22c55e]">➜</span>
              <span className="text-[#3b82f6]">~/projects</span>
              <span className="w-2.5 h-5 bg-[#e0e0e0] animate-pulse inline-block align-middle ml-1"></span>
            </motion.div>
          </motion.div>
        </TerminalWindow>
      </motion.div>
    </div>
  );
};

export default ProjectsTerminal;
