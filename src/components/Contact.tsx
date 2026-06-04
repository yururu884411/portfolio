"use client";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-neutral-900 text-white">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs tracking-widest uppercase text-neutral-500 mb-4">Contact</p>
            <h2 className="text-3xl md:text-4xl font-light mb-6">お問い合わせ</h2>
            <p className="text-neutral-400 font-light leading-relaxed">
              お仕事のご依頼・ご相談はお気軽にご連絡ください。
              通常2営業日以内にご返信いたします。
            </p>
            <div className="mt-8 space-y-3">
              <a
                href="mailto:yuruyuto593@gmail.com"
                className="flex items-center gap-4 text-sm text-neutral-400 hover:text-white transition-colors"
              >
                <span className="text-neutral-500 uppercase tracking-wide text-xs w-16 shrink-0">Email</span>
                yuruyuto593@gmail.com
              </a>
              <a
                href="https://github.com/yururu884411"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-sm text-neutral-400 hover:text-white transition-colors"
              >
                <span className="text-neutral-500 uppercase tracking-wide text-xs w-16 shrink-0">GitHub</span>
                github.com/yururu884411
              </a>
            </div>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-xs tracking-widest uppercase text-neutral-500 mb-2">
                お名前
              </label>
              <input
                type="text"
                className="w-full bg-neutral-800 border border-neutral-700 text-white text-sm px-4 py-3 focus:outline-none focus:border-neutral-400 transition-colors placeholder:text-neutral-600"
                placeholder="山田 太郎"
              />
            </div>
            <div>
              <label className="block text-xs tracking-widets uppercase text-neutral-500 mb-2">
                メールアドレス
              </label>
              <input
                type="email"
                className="w-full bg-neutral-800 border border-neutral-700 text-white text-sm px-4 py-3 focus:outline-none focus:border-neutral-400 transition-colors placeholder:text-neutral-600"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-xs tracking-widest uppercase text-neutral-500 mb-2">
                メッセージ
              </label>
              <textarea
                rows={5}
                className="w-full bg-neutral-800 border border-neutral-700 text-white text-sm px-4 py-3 focus:outline-none focus:border-neutral-400 transition-colors placeholder:text-neutral-600 resize-none"
                placeholder="お問い合わせ内容をご記入ください"
              />
            </div>
            <button
              type="submit"
              className="w-full h-12 bg-white text-neutral-900 text-sm tracking-wide hover:bg-neutral-100 transition-colors duration-200"
            >
              送信する
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
