const works = [
  {
    id: 1,
    title: "CodeQuest",
    category: "Webサービス",
    description:
      "開発中のWebサービス。プログラミング学習をゲーム感覚で楽しめるプラットフォームを目指して制作中。",
    tech: ["Next.js", "React", "JavaScript"],
    url: "https://codequest.jp/",
    status: "開発中",
  },
  {
    id: 2,
    title: "Scoracle",
    category: "Webアプリ",
    description:
      "開発中のWebアプリ。スポーツのスコアや予測に関連する機能を備えたアプリケーション。",
    tech: ["React", "JavaScript", "Vercel"],
    url: "https://scoracle-green.vercel.app/",
    status: "開発中",
  },
  {
    id: 3,
    title: "ソダーテ（So Date）",
    category: "Webアプリ",
    description:
      "AIで習慣を育てるコーチングWebアプリ。毎日一言書くだけでAIがパーソナライズされたアドバイスを提供。月額980円のサブスクリプションモデル。",
    tech: ["Next.js", "Supabase", "Stripe", "Anthropic API", "Vercel"],
    url: "https://sodate.vercel.app",
    status: "公開中",
  },
];

export default function Works() {
  return (
    <section id="works" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs tracking-widest uppercase text-neutral-400 mb-4">Works</p>
        <h2 className="text-3xl md:text-4xl font-light text-neutral-900 mb-16">制作実績</h2>

        <div className="grid md:grid-cols-2 gap-px bg-neutral-100">
          {works.map((work) => (
            <article
              key={work.id}
              className="bg-white p-8 hover:bg-neutral-50 transition-colors duration-200 group"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-xs tracking-widest uppercase text-neutral-400">
                  {work.category}
                </span>
                <span className="text-xs text-neutral-400 border border-neutral-200 px-2 py-0.5">
                  {work.status}
                </span>
              </div>
              <h3 className="text-lg font-medium text-neutral-900 mb-3 group-hover:text-neutral-600 transition-colors">
                {work.title}
              </h3>
              <p className="text-sm text-neutral-500 font-light leading-relaxed mb-6">
                {work.description}
              </p>
              <ul className="flex flex-wrap gap-2 mb-6">
                {work.tech.map((t) => (
                  <li
                    key={t}
                    className="text-xs text-neutral-500 border border-neutral-200 px-2 py-1"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              <a
                href={work.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-wide text-neutral-900 border-b border-neutral-300 hover:border-neutral-900 transition-colors pb-0.5"
              >
                サイトを見る →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
