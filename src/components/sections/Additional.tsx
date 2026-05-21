import { CheckCircle2 } from 'lucide-react';
import { Container, FadeIn, Section } from '../ui/Layout';

const services = [
  'adding products or texts to the website',
  'online payment connection',
  'delivery setup',
  'SEO optimization',
  'technical support',
  'website improvements',
  'website migration to another hosting provider',
  'analytics connection',
  'corporate email setup',
  'backups',
];

export function Additional() {
  return (
    <Section bg="gray">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Additional services
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We provide full support for your online business beyond just website creation.
            </p>
          </FadeIn>
        </div>
        
        <FadeIn delay={0.1}>
          <div className="mx-auto mt-16 max-w-4xl columns-1 sm:columns-2 gap-8">
            {services.map((service, index) => (
              <div key={service} className="flex items-center gap-3 py-3 break-inside-avoid">
                <CheckCircle2 className="h-5 w-5 text-indigo-500 shrink-0" />
                <span className="text-gray-700">{service}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
