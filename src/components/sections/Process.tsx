import { Container, FadeIn, Section } from '../ui/Layout';

const steps = [
  {
    name: 'Request',
    description: 'You submit a request or message us.',
  },
  {
    name: 'Consultation',
    description: 'We discuss the task, niche, website, features, and timeline.',
  },
  {
    name: 'Project estimate',
    description: 'We suggest a solution, price, and work stages.',
  },
  {
    name: 'Development',
    description: 'We create the website and approve key stages with you.',
  },
  {
    name: 'Launch',
    description: 'We connect the domain, set up hosting, test the website, and hand over access details.',
  },
];

export function Process() {
  return (
    <Section bg="gray" id="process">
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              How the work process goes
            </h2>
          </div>
        </FadeIn>
        
        <div className="mx-auto mt-16 max-w-3xl">
          <div className="relative border-l border-gray-200 ml-3 md:ml-0 md:border-none md:flex md:justify-center">
            {/* Mobile line is handled by border-l, Desktop needs a horizontal line or vertical centered line */}
            <div className="absolute top-0 bottom-0 left-[2.25rem] hidden w-px bg-gray-200 md:block" />
            
            <div className="space-y-12 md:space-y-0 relative z-10 w-full">
              {steps.map((step, index) => (
                <FadeIn key={step.name} delay={index * 0.1}>
                  <div className="relative pl-10 md:pl-0 md:mb-12">
                    <div className="md:flex md:items-center">
                      <div className="absolute left-[-5px] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 ring-4 ring-gray-50 md:relative md:left-0 md:top-0 md:mx-auto md:h-12 md:w-12 md:flex-shrink-0 md:ring-8">
                        <span className="text-xs font-bold text-white md:text-lg">{index + 1}</span>
                      </div>
                      
                      <div className="md:ml-6 md:w-full md:pl-16 lg:ml-0 lg:pl-20 md:-mt-2">
                        <h3 className="text-xl font-bold text-gray-900 md:mt-2">{step.name}</h3>
                        <p className="mt-2 text-base text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
