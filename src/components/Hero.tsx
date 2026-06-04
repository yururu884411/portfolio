export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-neutral-50 px-6">
      <div className="max-w-2xl w-full">
        <p className="text-xs tracking-widest uppercase text-neutral-400 mb-6">
          Freelance Engineer
        </p>
        <h1 className="text-5xl md:text-7xl font-light text-neutral-900 leading-tight mb-6">
          優斗
        </h1>
        <p className="text-lg md:text-xl text-neutral-500 font-light leading-relaxed mb-10 max-w-lg">
          AIを活用したWebサイト制作・アプリ開発に取り組むフリーランスエンジニア。
          幅広い言語・技術スタックでアイデアを形にします。
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#works"
            className="inline-flex items-center justify-center h-12 px-8 bg-neutral-900 text-white text-sm tracking-wide hover:bg-neutral-700 transition-colors duration-200"
          >
            制作実績を見る
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center h-12 px-8 border border-neutral-300 text-neutral-900 text-sm tracking-wide hover:border-neutral-900 transition-colors duration-200"
          >
            お問い合わせ
          </a>
        </div>
      </div>
    </section>
  );
}
