export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-8 px-6 bg-neutral-900 border-t border-neutral-800">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-xs text-neutral-600 tracking-widest uppercase">Portfolio</p>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/yururu884411"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors tracking-wide"
          >
            GitHub
          </a>
          <p className="text-xs text-neutral-600">© {year} 優斗. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
