import { MessageSquare, Globe, Laptop, Wrench, Key } from 'lucide-react';
import { Container, FadeIn, Section } from '../ui/Layout';

const stages = [
  {
    name: 'We discuss the task',
    description: 'We understand what kind of website is needed, what pages, features, and goals it should have.',
    icon: MessageSquare,
  },
  {
    name: 'We choose a domain and hosting',
    description: 'We help register the domain name and hosting using the client’s details.',
    icon: Globe,
  },
  {
    name: 'We create the website',
    description: 'We develop the structure, design, pages, and functionality.',
    icon: Laptop,
  },
  {
    name: 'We configure and test everything',
    description: 'We check forms, responsiveness, speed, and basic settings.',
    icon: Wrench,
  },
  {
    name: 'We hand over the website to the client',
    description: 'We provide access details and explain how to use the website and manage content.',
    icon: Key,
  },
];

export function Turnkey() {
  return (
    <Section bg="dark" id="turnkey">
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              We handle the entire website launch process
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              You do not need to buy a domain yourself, choose hosting, install WordPress, configure the website, or deal with technical details. We support the project from the idea to a finished website that can be used for your business.
            </p>
          </FadeIn>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-5">
            {stages.map((stage, index) => (
              <FadeIn key={stage.name} delay={index * 0.1}>
                <div className="flex flex-col relative">
                  <dt className="text-base font-semibold leading-7 text-white">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/20">
                      <stage.icon className="h-6 w-6 text-indigo-400" aria-hidden="true" />
                    </div>
                    {/* Step number indicator */}
                    <span className="absolute -top-3 -left-3 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-sm font-bold text-white ring-4 ring-slate-900">
                      {index + 1}
                    </span>
                    {stage.name}
                  </dt>
                  <dd className="mt-2 flex flex-auto flex-col text-base leading-7 text-gray-400">
                    <p className="flex-auto">{stage.description}</p>
                  </dd>
                </div>
              </FadeIn>
            ))}
          </dl>
        </div>
      </Container>
    </Section>
  );
}
