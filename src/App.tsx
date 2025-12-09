import Hero from "./components/Hero";
import Experience from "./components/Experience";
import TechStack from "./components/TechStack";
import CyberCat from "./components/CyberCat"; // <-- 1. Importer le chat

function App() {
  return (
    <main className="bg-slate-900 min-h-screen text-slate-200 selection:bg-cyan-500/30 relative"> {/* Ajout de 'relative' au cas où */}
      <Hero />
      <TechStack />
      <Experience />
      
      <CyberCat /> {/* <-- 2. Ajouter le composant ici */}

      <footer className="py-8 text-center text-slate-500 text-sm bg-slate-900 border-t border-slate-800">
        <p>© 2024 Adrien Raynaud. Construit avec React & Vite.</p>
      </footer>
    </main>
  );
}

export default App;