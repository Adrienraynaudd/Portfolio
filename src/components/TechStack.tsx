import { motion } from "framer-motion";

const skills = [
  { category: "Langages", items: ["C#", "TypeScript", "HTML/CSS", "SQL", "Node.js"] },
  { category: "Frameworks", items: [".NET 8.0", "WPF", "React", "Next.js", "Angular"] },
  { category: "Tools & CI/CD", items: ["Docker", "GitHub Actions", "Azure", "Prisma", "Git"] },
];

export default function TechStack() {
  return (
    <section className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold mb-12 text-center text-white">Compétences Techniques</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] transition-shadow"
            >
              <h4 className="text-xl font-semibold mb-6 text-purple-400 border-b border-slate-700 pb-2">{skillGroup.category}</h4>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item) => (
                  <span key={item} className="px-3 py-1 bg-slate-900 rounded text-sm text-slate-300 border border-slate-700">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}