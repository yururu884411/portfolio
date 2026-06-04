const skillCategories = [
  {
    category: "フロントエンド",
    skills: [
      { name: "HTML / CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React / Next.js", level: 80 },
    ],
  },
  {
    category: "バックエンド",
    skills: [
      { name: "Python", level: 80 },
      { name: "PHP", level: 75 },
      { name: "Ruby", level: 70 },
      { name: "C# / C", level: 65 },
    ],
  },
  {
    category: "その他",
    skills: [
      { name: "SQL", level: 75 },
      { name: "Solidity", level: 60 },
      { name: "R", level: 60 },
      { name: "AI活用", level: 85 },
    ],
  },
];

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-neutral-700">{name}</span>
        <span className="text-xs text-neutral-400">{level}%</span>
      </div>
      <div className="h-0.5 bg-neutral-100 w-full">
        <div
          className="h-0.5 bg-neutral-900"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-neutral-50">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs tracking-widest uppercase text-neutral-400 mb-4">Skills</p>
        <h2 className="text-3xl md:text-4xl font-light text-neutral-900 mb-16">スキル一覧</h2>

        <div className="grid md:grid-cols-3 gap-12">
          {skillCategories.map((cat) => (
            <div key={cat.category}>
              <h3 className="text-xs tracking-widest uppercase text-neutral-400 mb-6">
                {cat.category}
              </h3>
              <div className="space-y-5">
                {cat.skills.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
