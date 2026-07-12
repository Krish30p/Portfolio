import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

const TerminalWindow = ({
  title = "terminal",
  onClose,
  isMaximized: controlledMaximized,
  onMaximizeChange,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);
  const [localMaximized, setLocalMaximized] = useState(false);

  const isMaximized =
    controlledMaximized !== undefined ? controlledMaximized : localMaximized;

  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      setIsOpen(false);
    }
  };

  const toggleMaximize = () => {
    if (onMaximizeChange) {
      onMaximizeChange(!isMaximized);
    } else {
      setLocalMaximized(!isMaximized);
    }
  };

  return (
    <AnimatePresence
      onExitComplete={() => {
        if (onClose) {
          onClose();
        }
      }}
    >
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className={cn(
            "bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg shadow-2xl flex flex-col font-mono text-left w-full transition-all duration-300",
            isMaximized
              ? "fixed inset-4 sm:inset-6 z-50 m-0 rounded-lg max-w-none"
              : "relative max-w-4xl mx-auto"
          )}
        >
          {/* Title Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#121212] border-b border-[#2a2a2a] rounded-t-lg select-none relative">
            {/* Traffic lights */}
            <div className="flex items-center gap-2 z-10">
              <button
                onClick={handleClose}
                aria-label="Close terminal"
                className="w-3 h-3 rounded-full bg-[#ff5f56] hover:bg-[#ff5f56]/80 flex items-center justify-center group relative cursor-pointer border-none outline-none"
              >
                <span className="text-[6px] text-black font-bold opacity-0 group-hover:opacity-100 transition-opacity">×</span>
              </button>
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                aria-label={isMinimized ? "Restore terminal height" : "Minimize terminal height"}
                className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:bg-[#ffbd2e]/80 flex items-center justify-center group relative cursor-pointer border-none outline-none"
              >
                <span className="text-[6px] text-black font-bold opacity-0 group-hover:opacity-100 transition-opacity">-</span>
              </button>
              <button
                onClick={toggleMaximize}
                aria-label={isMaximized ? "Restore terminal size" : "Maximize terminal size"}
                className="w-3 h-3 rounded-full bg-[#27c93f] hover:bg-[#27c93f]/80 flex items-center justify-center group relative cursor-pointer border-none outline-none"
              >
                <span className="text-[5px] text-black font-bold opacity-0 group-hover:opacity-100 transition-opacity">⤢</span>
              </button>
            </div>

            {/* Title / Tab */}
            <div className="absolute inset-0 flex items-center justify-center text-xs text-[#8a8a8a] font-mono pointer-events-none">
              {title}
            </div>

            {/* Empty spacer for alignment */}
            <div className="w-12"></div>
          </div>

          {/* Terminal Body */}
          <motion.div
            animate={{ height: isMinimized ? 0 : "auto", opacity: isMinimized ? 0 : 1 }}
            className="overflow-hidden flex-grow"
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className={cn(
              "p-4 sm:p-6 text-sm sm:text-base leading-relaxed overflow-y-auto text-[#e0e0e0]",
              isMaximized ? "max-h-[calc(100vh-6rem)] h-[calc(100vh-6rem)]" : "max-h-[70vh]"
            )}>
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TerminalWindow;
