const profileItems = [
  { label: "氏名", value: "優斗" },
  { label: "居住地", value: "東京都" },
  { label: "職種", value: "フリーランスエンジニア" },
  { label: "学歴", value: "東洋大学 情報連携学部 卒" },
  { label: "趣味", value: "サッカー観戦、英語学習" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Text */}
          <div>
            <p className="text-xs tracking-widest uppercase text-neutral-400 mb-4">About</p>
            <h2 className="text-3xl md:text-4xl font-light text-neutral-900 mb-8">
              自己紹介
            </h2>
            <div className="space-y-4 text-neutral-600 font-light leading-relaxed">
              <p>
                東洋大学情報連携学部を卒業後、フリーランスエンジニアとして活動。
                AIを活用したWebサイト制作・アプリ開発に取り組んでいます。
              </p>
              <p>
                HTML/CSS/JavaScriptをベースに、Python、PHP、Solidity、Rubyなど
                幅広い言語を扱い、フロントからバックまで一気通貫で対応できます。
              </p>
              <p>
                サッカー観戦が趣味で、英語も勉強中。
                技術を通じて、アイデアを素早く形にすることを得意としています。
              </p>
            </div>
          </div>

          {/* Profile table */}
          <div>
            <p className="text-xs tracking-widest uppercase text-neutral-400 mb-4">Profile</p>
            <h2 className="text-3xl md:text-4xl font-light text-neutral-900 mb-8">
              プロフィール
            </h2>
            <dl className="divide-y divide-neutral-100">
              {profileItems.map((item) => (
                <div key={item.label} className="flex py-4 gap-6">
                  <dt className="text-xs tracking-wide text-neutral-400 uppercase w-24 shrink-0 pt-0.5">
                    {item.label}
                  </dt>
                  <dd className="text-sm text-neutral-700">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
