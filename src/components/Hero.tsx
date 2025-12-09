import { motion } from "framer-motion";
import { Mail, FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
// Assure-toi que ton PDF est bien dans src/assets/cv.pdf
import cvFile from "../assets/cv.pdf";

export default function Hero() {

  // Fonction pour t'aider à trouver le problème si ça ne marche pas
  const handleDownload = (e: React.MouseEvent<HTMLAnchorElement>) => {
    console.log("--- DEBUG DOWNLOAD ---");
    console.log("1. Fichier importé :", cvFile);
    console.log("2. Lien du bouton :", e.currentTarget.href);
    
    if (!cvFile) {
      console.error("ERREUR : Le fichier PDF semble vide ou mal importé.");
      alert("Erreur : Impossible de trouver le fichier CV.");
      e.preventDefault();
    } else {
      console.log("SUCCÈS : Le téléchargement devrait se lancer.");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Background Blobs Animés */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />

      <div className="z-10 text-center max-w-4xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500"
        >
          Adrien Raynaud
        </motion.h1>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-xl md:text-2xl text-slate-300 mb-6"
        >
          Développeur C#/.NET 8.0 & Fullstack
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Passionné par la conception d'applications performantes et l'optimisation de l'expérience utilisateur.
          Basé à Nantes.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {/* GitHub */}
          <a 
            href="https://github.com/adrienraynaudd" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 hover:text-cyan-400 transition-colors border border-slate-700"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
          
          {/* LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/Raynaud_adrien" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 hover:text-cyan-400 transition-colors border border-slate-700"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          
         {/* Bouton Email */}
        <a 
        href="mailto:adrien.raynaud.pro@gmail.com?subject=Contact%20via%20Portfolio&body=Bonjour%20Adrien," 
        className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 hover:text-cyan-400 transition-colors border border-slate-700"
        aria-label="Email"
        >
        <Mail size={24} />
        </a>
          
          {/* Bouton CV */}
          <a 
            href={cvFile} 
            download="CV_Adrien_Raynaud.pdf"
            onClick={handleDownload}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 font-semibold hover:opacity-90 transition-opacity text-white cursor-pointer"
          >
            <FileText size={18} /> 
            Télécharger CV
          </a>
        </motion.div>
      </div>
    </section>
  );
}