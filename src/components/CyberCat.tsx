import { useState, useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";

export default function CyberCat() {
  const [clickCount, setClickCount] = useState(0);
  const [hasLeft, setHasLeft] = useState(false);
  const controls = useAnimationControls();

  // Gère la séquence d'animation quand on atteint 3 clics
  useEffect(() => {
    if (clickCount === 3) {
      const sequence = async () => {
        // Étape 1 : Réveil ( petit sursaut et changement de couleur )
        await controls.start({
          scale: 1.2,
          rotate: [0, -10, 10, 0], // Petit secouement
          color: "#a855f7", // Passe au violet (purple-500)
          filter: "drop-shadow(0 0 15px rgba(168,85,247,0.8))",
          transition: { duration: 0.5 }
        });
        
        // Petite pause dramatique
        await new Promise(resolve => setTimeout(resolve, 300));

        // Étape 2 : Départ vers la gauche hors de l'écran
        await controls.start({
          x: -300, // Sort de l'écran vers la gauche
          opacity: 0,
          transition: { duration: 0.8, ease: "backIn" }
        });

        setHasLeft(true); // Marque comme parti pour ne plus le rendre
      };
      
      sequence();
    }
  }, [clickCount, controls]);

  const handleClick = () => {
    if (clickCount < 3) {
      setClickCount(prev => prev + 1);
      if (clickCount < 2) {
          controls.start({
              scale: [1, 0.9, 1],
              transition: { duration: 0.2 }
          });
      }
    }
  };

  if (hasLeft) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 cursor-pointer group">
      {clickCount < 3 && (
        <div className="absolute -top-10 left-0 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-xs text-cyan-400 px-2 py-1 rounded border border-cyan-500/30 whitespace-nowrap pointer-events-none mb-2">
          Zzz... ({clickCount}/3)
        </div>
      )}

      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        width="64"
        height="64"
        onClick={handleClick}
        animate={controls}
        initial={{
          scale: 1,
          color: "#22d3ee",
          filter: "drop-shadow(0 0 5px rgba(34,211,238,0.5))",
        }}
        style={{
            scale: clickCount < 3 ? [1, 1.05, 1] : undefined,
            transition: clickCount < 3 ? { repeat: Infinity, duration: 3, ease: "easeInOut" } : undefined
        } as any}
        className="fill-transparent stroke-current stroke-2"
      >
        <path d="M 12 45 C 12 45, 8 38, 14 32 C 18 28, 24 28, 28 32 C 32 36, 38 36, 42 32 C 46 28, 52 24, 58 28 C 64 32, 60 40, 54 44 C 48 48, 42 52, 32 52 C 22 52, 16 48, 12 45 Z" />
        <path d="M 28 32 C 28 32, 26 24, 32 20 C 38 16, 44 20, 42 32" /> {/* Tête/Oreilles */}
        <path d="M 34 28 L 38 28" className="stroke-1 opacity-70" /> {/* Yeux fermés */}
      </motion.svg>
    </div>
  );
}