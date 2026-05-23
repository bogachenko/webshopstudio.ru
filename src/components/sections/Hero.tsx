import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Container, FadeIn, Section } from '../ui/Layout';

export function Hero() {
  return (
    <Section className="relative overflow-hidden pt-36 pb-20 lg:pt-52 lg:pb-32" bg="white">
      {/* Background decoration */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
      </div>

      <Container>
        <div className="mx-auto max-w-5xl text-center">
          <FadeIn>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 px-4 py-2 text-xs font-medium text-slate-700 shadow-lg shadow-indigo-500/10 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
              Modern websites that convert visitors into customers
            </div>
            <h1 className="fluid-title bg-gradient-to-br from-slate-950 via-slate-800 to-indigo-700 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-6xl">
              We create turnkey websites and online stores
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-6 text-lg leading-8 text-slate-600 sm:text-xl">
              We develop online stores on WordPress + WooCommerce, corporate websites, landing pages, and business card websites. We handle the domain, hosting, installation, setup, and handover of the finished website to the client.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.2} className="mt-10 flex flex-col items-center justify-center gap-y-6 sm:flex-row sm:gap-x-8">
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a href="#contact" className="rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-indigo-500/35 hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 flex items-center justify-center gap-2 transition-all">
                Discuss a project <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#pricing" className="rounded-full bg-white/80 px-8 py-4 text-sm font-semibold text-slate-900 shadow-md ring-1 ring-inset ring-white/60 hover:bg-white flex items-center justify-center transition-all backdrop-blur">
                Calculate the cost
              </a>
            </div>
            
            <div className="feature-grid grid grid-cols-1 gap-2 rounded-2xl border border-white/70 bg-white/75 p-4 text-sm text-slate-600 text-left shadow-lg shadow-slate-900/10 backdrop-blur-md sm:pl-8">
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> Website ready to use</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> Domain and hosting registered in the client&apos;s name</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> We hand over access and explain how to use it</div>
            </div>
          </FadeIn>
          <FadeIn delay={0.3} className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              ['7 days', 'Average launch timeline'],
              ['+35%', 'Average conversion uplift'],
              ['24/7', 'Post-launch support'],
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-white/70 bg-white/70 px-6 py-4 shadow-md shadow-slate-900/5 backdrop-blur-md">
                <p className="text-2xl font-bold text-slate-900">{value}</p>
                <p className="mt-1 text-sm text-slate-600">{label}</p>
              </div>
            ))}
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}
