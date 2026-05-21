import { CheckCircle } from 'lucide-react';
import { Container, FadeIn, Section } from '../ui/Layout';

const features = [
  'easy to manage products and orders',
  'the store can be developed gradually',
  'many ready-made solutions and integrations',
  'suitable for small and medium-sized businesses',
  'the website belongs to the client, not to a website builder platform',
  'design and functionality can be customized for business needs',
];

export function WhyWP() {
  return (
    <Section bg="white">
      <Container>
        <div className="mx-auto max-w-2xl lg:text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why we use WordPress + WooCommerce for online stores
            </h2>
          </FadeIn>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature, index) => (
              <FadeIn key={feature} delay={index * 0.1}>
                <div className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <CheckCircle className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                  </dt>
                  <dd className="text-base leading-7 text-gray-600">{feature}</dd>
                </div>
              </FadeIn>
            ))}
          </dl>
        </div>
      </Container>
    </Section>
  );
}
