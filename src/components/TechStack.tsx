import { motion } from "framer-motion";
// On garde les icônes SI qui fonctionnent
import { 
  SiTypescript, SiHtml5, SiCss3, SiNodedotjs, 
  SiDotnet, SiReact, SiNextdotjs, SiAngular, 
  SiDocker, SiGithubactions, SiPrisma, SiGit
} from "react-icons/si";

// On importe les icônes manquantes depuis TB (Tabler Icons)
import { 
  TbSql, 
  TbBrandCSharp, 
  TbBrandAzure, 
  TbBrandWindows 
} from "react-icons/tb";

const skills = [
  {
    category: "Langages",
    items: [
      // Utilisation de TbBrandCSharp ici
      { name: "C#", icon: TbBrandCSharp, color: "group-hover:text-purple-500" },
      { name: "TypeScript", icon: SiTypescript, color: "group-hover:text-blue-500" },
      { name: "HTML5", icon: SiHtml5, color: "group-hover:text-orange-500" },
      { name: "CSS3", icon: SiCss3, color: "group-hover:text-blue-400" },
      { name: "SQL", icon: TbSql, color: "group-hover:text-cyan-400" },
      { name: "Node.js", icon: SiNodedotjs, color: "group-hover:text-green-500" },
    ]
  },
  {
    category: "Frameworks & Libs",
    items: [
      { name: ".NET 8.0", icon: SiDotnet, color: "group-hover:text-purple-600" },
      // Remplacement de SiWindows par TbBrandWindows
      { name: "WPF", icon: TbBrandWindows, color: "group-hover:text-blue-400" }, 
      { name: "React", icon: SiReact, color: "group-hover:text-cyan-400" },
      { name: "Next.js", icon: SiNextdotjs, color: "group-hover:text-white" },
      { name: "Angular", icon: SiAngular, color: "group-hover:text-red-500" },
    ]
  },
  {
    category: "Tools & CI/CD",
    items: [
      { name: "Docker", icon: SiDocker, color: "group-hover:text-blue-500" },
      { name: "GitHub Actions", icon: SiGithubactions, color: "group-hover:text-blue-400" },
      // Remplacement de SiMicrosoftazure par TbBrandAzure
      { name: "Azure", icon: TbBrandAzure, color: "group-hover:text-blue-600" },
      { name: "Prisma", icon: SiPrisma, color: "group-hover:text-white" },
      { name: "Git", icon: SiGit, color: "group-hover:text-orange-600" },
    ]
  }
];

export default function TechStack() {
  return (
    <section className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        
        {/* Titre de section */}
        <motion.h3 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center text-white"
        >
          Compétences Techniques
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((group, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 backdrop-blur-sm"
            >
              <h4 className="text-xl font-semibold mb-6 text-cyan-400 text-center border-b border-slate-700 pb-3">
                {group.category}
              </h4>
              
              <div className="flex flex-wrap justify-center gap-4">
                {group.items.map((tech) => (
                  <div key={tech.name} className="group flex flex-col items-center gap-2">
                    <div className={`p-3 rounded-lg bg-slate-900 border border-slate-700 transition-all duration-300 group-hover:border-slate-500 group-hover:scale-110 ${tech.color}`}>
                      <tech.icon size={28} className="text-slate-400 transition-colors duration-300 group-hover:text-inherit" />
                    </div>
                    <span className="text-xs text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity absolute mt-12 font-medium">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}