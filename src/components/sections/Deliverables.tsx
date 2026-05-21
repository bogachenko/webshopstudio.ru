import { CheckIcon } from 'lucide-react';
import { Container, FadeIn, Section } from '../ui/Layout';

const benefits = [
  'a website placed on hosting',
  'a domain registered in your name',
  'a configured admin panel',
  'adaptation for phones and tablets',
  'working inquiry forms',
  'basic SEO preparation',
  'access details for the website, domain, and hosting',
  'brief instructions on how to manage the website',
];

export function Deliverables() {
  return (
    <Section bg="white">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              As a result, you get a ready-to-use website
            </h2>
          </FadeIn>
        </div>
        
        <FadeIn delay={0.1}>
          <div className="mx-auto mt-16 max-w-3xl rounded-3xl bg-indigo-50 p-8 sm:p-12 ring-1 ring-indigo-100">
            <ul className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
