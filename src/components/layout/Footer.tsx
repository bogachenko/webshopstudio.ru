import { Code2 } from 'lucide-react';
import { Container } from '../ui/Layout';

export function Footer() {
  return (
    <footer className="pb-6">
      <Container className="rounded-3xl border border-white/70 bg-white/70 py-12 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.5)] backdrop-blur md:flex md:items-center md:justify-between">
        <div className="flex justify-center flex-col items-center gap-4 md:flex-row md:justify-start">
          <a href="#" className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-indigo-600">
             <Code2 className="h-4 w-4 text-white" />
            </div>
            <span className="font-bold text-lg tracking-tight text-gray-900">WebStudio</span>
          </a>
          <p className="text-center text-sm leading-5 text-gray-500 md:text-left md:ml-4">
            &copy; {new Date().getFullYear()} Web Studio. All rights reserved.
          </p>
        </div>
        <div className="mt-8 flex justify-center gap-x-6 md:mt-0">
          <a href="#services" className="text-sm text-gray-600 hover:text-gray-900">Services</a>
          <a href="#portfolio" className="text-sm text-gray-600 hover:text-gray-900">Portfolio</a>
          <a href="#pricing" className="text-sm text-gray-600 hover:text-gray-900">Pricing</a>
          <a href="#contact" className="text-sm text-gray-600 hover:text-gray-900">Contact</a>
        </div>
      </Container>
    </footer>
  );
}
