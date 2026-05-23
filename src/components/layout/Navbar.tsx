import { Code2 } from 'lucide-react';
import { Container } from '../ui/Layout';

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <Container>
        <nav className="mt-3 flex items-center justify-between rounded-2xl border border-white/65 bg-white/70 px-4 py-3 shadow-[0_20px_65px_-30px_rgba(30,41,59,0.55)] backdrop-blur-xl supports-[backdrop-filter]:bg-white/45 lg:px-6" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5 flex items-center gap-2">
              <span className="sr-only">Web Studio</span>
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-cyan-500 shadow-lg shadow-indigo-500/30">
                <Code2 className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900">WebStudio</span>
            </a>
          </div>
          <div className="hidden lg:flex lg:gap-x-3">
            {[
              ['#services', 'Services'],
              ['#turnkey', 'Process'],
              ['#portfolio', 'Portfolio'],
              ['#pricing', 'Pricing'],
              ['#faq', 'FAQ'],
            ].map(([href, label]) => (
              <a key={href} href={href} className="rounded-full px-4 py-1.5 text-sm font-semibold leading-6 text-slate-700 transition hover:bg-white/90 hover:text-indigo-600">
                {label}
              </a>
            ))}
          </div>
          <div className="flex flex-1 justify-end">
            <a href="#contact" className="text-sm font-semibold leading-6 text-white bg-slate-900/95 hover:bg-slate-800 px-4 py-2 rounded-full transition-colors flex items-center gap-2 shadow-lg shadow-slate-900/20">
              Get Started <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
      </Container>
    </header>
  );
}
