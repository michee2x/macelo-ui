import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SciFiTextWriterProps {
    text:string,
  speed:number,
  glitchChance:number,
  showCursor?:boolean,
  className:string,
  onComplete: () => void
}

const SciFiTextWriter = ({
  text,
  speed = 80,
  glitchChance = 0.1,
  showCursor = true,
  className = "",
  onComplete,
}:SciFiTextWriterProps) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [glitchChar, setGlitchChar] = useState("");
  const [showGlitch, setShowGlitch] = useState(false);

  const glitchChars = "!@#$%^&*()_+-=[]{}|;:,.<>?`~";
  const matrixChars = "01";

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        // Random glitch effect
        if (Math.random() < glitchChance) {
          setGlitchChar(
            glitchChars[Math.floor(Math.random() * glitchChars.length)]
          );
          setShowGlitch(true);

          setTimeout(() => {
            setShowGlitch(false);
            setDisplayText(text.slice(0, currentIndex + 1));
            setCurrentIndex(currentIndex + 1);
          }, 50);
        } else {
          setDisplayText(text.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        }
      }, speed);

      return () => clearTimeout(timer);
    } else {
      setIsComplete(true);
      if (onComplete) onComplete();
    }
  }, [currentIndex, text, speed, glitchChance, onComplete]);

  const MatrixRain = () => {
    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-green-400 text-xs font-mono"
            initial={{ y: -20, x: Math.random() * 100 + "%" }}
            animate={{ y: "100vh" }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            {matrixChars[Math.floor(Math.random() * matrixChars.length)]}
          </motion.div>
        ))}
      </div>
    );
  };

  const ScanLine = () => {
    return (
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ backgroundPosition: "0 -100%" }}
        animate={{ backgroundPosition: "0 100%" }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(0, 255, 255, 0.03) 50%, transparent 100%)",
          backgroundSize: "100% 200px",
        }}
      />
    );
  };

  return (
    <div className={`relative ${className}`}>
      {/* Matrix rain background */}
      <MatrixRain />

      {/* Scan line effect */}
      <ScanLine />

      {/* Glitch overlay */}
      <AnimatePresence>
        {showGlitch && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.05 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-red-500 mix-blend-multiply opacity-20" />
              <div className="absolute inset-0 bg-cyan-500 mix-blend-multiply opacity-20" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="font-mono text-lg leading-relaxed min-h-[2rem]">
        <span className="text-cyan-400">{">"} </span>
        <span className="text-green-400">
          {showGlitch ? displayText + glitchChar : displayText}
        </span>

        {/* Cursor */}
        {showCursor && (
          <motion.span
            className="text-cyan-400 ml-1"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            █
          </motion.span>
        )}
      </div>

      {/* Completion effect */}
      <AnimatePresence>
        {isComplete && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 border-2 border-cyan-400 rounded-lg"
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="absolute -inset-1 bg-cyan-400/10 rounded-lg blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Demo component
export default function SciFiTextDemo() {
  const [currentText, setCurrentText] = useState(0);

  const messages = [
    "Initializing neural interface...",
    "Connecting to quantum servers...",
    "Decrypting alien transmissions...",
    "Welcome to the future, human.",
    "Your consciousness has been uploaded successfully.",
    "Reality.exe has stopped working. Please reboot the matrix.",
  ];

  const handleComplete = () => {
    setTimeout(() => {
      setCurrentText((prev) => (prev + 1) % messages.length);
    }, 2000);
  };

  return (
    <div className="w-full max-w-2xl">
      <SciFiTextWriter
        key={currentText}
        text={messages[currentText]}
        speed={60}
        glitchChance={0.15}
        onComplete={handleComplete}
        className="w-full"
      />
    </div>
  );
}
