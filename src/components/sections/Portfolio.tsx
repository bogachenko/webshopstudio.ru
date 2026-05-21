import { Container, FadeIn, Section } from '../ui/Layout';
import { ExternalLink } from 'lucide-react';

export function Portfolio() {
  return (
    <Section bg="white" id="portfolio">
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Work examples
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We can show demo website examples and suggest a structure for your niche.
            </p>
          </div>
        </FadeIn>
        
        {/* Placeholder for future portfolio items */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {[1, 2].map((i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="group relative flex flex-col items-start justify-between rounded-3xl bg-gray-50 p-6 sm:p-8 ring-1 ring-gray-200 transition-all hover:shadow-lg">
                <div className="relative w-full mb-6 aspect-video rounded-2xl bg-gray-200 object-cover sm:aspect-[2/1] lg:aspect-video flex items-center justify-center overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-tr from-gray-300 to-gray-100 opacity-50" />
                   <span className="text-gray-500 font-medium z-10 flex items-center gap-2">Demo Project {i} <ExternalLink className="h-4 w-4" /></span>
                </div>
                <div className="max-w-xl">
                  <div className="mt-2 flex items-center gap-x-4 text-xs">
                    <span className="relative z-10 rounded-full bg-indigo-50 px-3 py-1.5 font-medium text-indigo-600">
                      {i === 1 ? 'Online Store' : 'Corporate Website'}
                    </span>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-indigo-600">
                      Client&apos;s task
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      A brief description of what the client wanted to achieve. Increase sales, showcase portfolio, etc.
                    </p>
                  </div>
                  <div className="mt-4">
                     <h4 className="text-sm font-semibold text-gray-900">What was done:</h4>
                     <p className="mt-1 text-sm text-gray-600">Full cycle development, custom design, WooCommerce integration.</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
