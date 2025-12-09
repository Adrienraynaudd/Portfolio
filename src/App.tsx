import Hero from "./components/Hero";
import Experience from "./components/Experience";
import TechStack from "./components/TechStack";

function App() {
  return (
    <main className="bg-slate-900 min-h-screen text-slate-200 selection:bg-cyan-500/30">
      <Hero />
      <TechStack />
      <Experience />
      
      <footer className="py-8 text-center text-slate-500 text-sm">
        <p>© 2026 Adrien Raynaud. Construit avec React & Vite.</p>
      </footer>
    </main>
  );
}

export default App;