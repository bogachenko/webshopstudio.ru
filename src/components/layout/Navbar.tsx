import { Code2 } from 'lucide-react';
import { Container } from '../ui/Layout';

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/50 bg-white/60 backdrop-blur-xl supports-[backdrop-filter]:bg-white/45">
      <Container>
        <nav className="flex items-center justify-between py-4" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5 flex items-center gap-2">
              <span className="sr-only">Web Studio</span>
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-cyan-500 shadow-lg shadow-indigo-500/30">
                <Code2 className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900">WebStudio</span>
            </a>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <a href="#services" className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600 transition-colors">Services</a>
            <a href="#turnkey" className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600 transition-colors">Process</a>
            <a href="#portfolio" className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600 transition-colors">Portfolio</a>
            <a href="#pricing" className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600 transition-colors">Pricing</a>
            <a href="#faq" className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600 transition-colors">FAQ</a>
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
