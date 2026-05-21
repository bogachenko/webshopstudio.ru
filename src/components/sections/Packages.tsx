import { Container, FadeIn, Section } from '../ui/Layout';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Business card website',
    id: 'tier-business',
    description: 'For professionals, small companies, and services.',
    features: [
      'up to 5 pages',
      'responsive design',
      'inquiry form',
      'domain and hosting connection',
      'basic setup',
    ],
    mostPopular: false,
  },
  {
    name: 'Landing page',
    id: 'tier-landing',
    description: 'For advertising, a service, a product, or a promotion.',
    features: [
      'sales page structure',
      'sections for the offer, benefits, services, reviews, and inquiry form',
      'responsive layout',
      'analytics connection',
      'inquiry form setup',
    ],
    mostPopular: true,
  },
  {
    name: 'Online store',
    id: 'tier-ecommerce',
    description: 'For selling products online.',
    features: [
      'WordPress + WooCommerce',
      'product catalog',
      'cart and checkout',
      'payment and delivery setup',
      'basic training on store management',
    ],
    mostPopular: false,
  },
];

export function Packages() {
  return (
    <Section bg="gray" id="pricing">
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Service packages</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Clear fixed-price packages depending on your business needs.
            </p>
          </div>
        </FadeIn>

        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-stretch gap-y-6 sm:mt-20 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
          {tiers.map((tier, index) => (
            <FadeIn key={tier.id} delay={index * 0.1}>
              <div className={`flex flex-col h-full rounded-3xl p-8 ring-1 ${tier.mostPopular ? 'bg-indigo-900 ring-indigo-900 shadow-xl' : 'bg-white ring-gray-200'} transition-transform hover:-translate-y-1`}>
                <h3 className={`text-xl font-bold ${tier.mostPopular ? 'text-white' : 'text-gray-900'}`}>
                  {tier.name}
                </h3>
                <p className={`mt-4 text-sm leading-6 ${tier.mostPopular ? 'text-indigo-200' : 'text-gray-600'}`}>
                  {tier.description}
                </p>
                <ul className={`mt-8 space-y-4 text-sm leading-6 flex-grow ${tier.mostPopular ? 'text-indigo-100' : 'text-gray-600'}`}>
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Check className={`h-6 w-5 flex-none ${tier.mostPopular ? 'text-indigo-400' : 'text-indigo-600'}`} aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`mt-8 block rounded-xl px-3 py-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                    tier.mostPopular
                      ? 'bg-indigo-500 text-white hover:bg-indigo-400 focus-visible:outline-indigo-500'
                      : 'bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-indigo-600'
                  }`}
                >
                  Discuss a project
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
