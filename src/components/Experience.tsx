import { motion } from "framer-motion";
import { Briefcase, Code, Database, Layout } from "lucide-react";

const experiences = [
  {
    company: "STRAMATEL",
    role: "Développeur Logiciel WPF/.NET",
    period: "Oct. 2023 - Sept. 2026",
    description: "Développement d'une application WPF (.NET 8.0) dédiée à la gestion vidéo et l'affichage sportif sur tableaux multimédias[cite: 5].",
    tasks: [
      { text: "Conception moteur vidéo (WPFMediaKit/DirectShow)", icon: <Briefcase size={16} /> }, // [cite: 6]
      { text: "Éditeur graphique Drag & Drop", icon: <Layout size={16} /> }, // [cite: 7]
      { text: "Module statistiques & SQLite", icon: <Database size={16} /> }, // [cite: 8]
      { text: "Gestion dynamique des médias", icon: <Code size={16} /> } // 
    ]
  }
];

export default function Experience() {
  return (
    <section className="py-20 px-4 max-w-4xl mx-auto">
      <h3 className="text-3xl font-bold mb-12 text-center text-white">Expérience Professionnelle</h3>
      <div className="relative border-l-2 border-slate-700 ml-4 md:ml-0 pl-8 md:pl-0">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 md:flex justify-between items-start w-full"
          >
            {/* Dot sur la timeline */}
            <div className="absolute -left-[9px] w-5 h-5 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(34,211,238,0.7)]" />
            
            <div className="md:w-full md:pl-12">
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 backdrop-blur-sm hover:border-cyan-500/50 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-cyan-400">{exp.role}</h4>
                    <h5 className="text-lg text-white">{exp.company}</h5>
                  </div>
                  <span className="text-sm text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-700">
                    {exp.period}
                  </span>
                </div>
                <p className="text-slate-300 mb-6">{exp.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {exp.tasks.map((task, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-slate-400">
                      <span className="text-purple-400">{task.icon}</span>
                      {task.text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}