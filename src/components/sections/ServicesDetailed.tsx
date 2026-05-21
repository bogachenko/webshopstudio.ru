import { Check, ShoppingCart, Layout } from 'lucide-react';
import { Container, FadeIn, Section } from '../ui/Layout';

const services = [
  {
    title: 'Online stores on WordPress + WooCommerce',
    description: 'We create online stores with convenient management of products, orders, and customers.',
    icon: ShoppingCart,
    features: [
      'WordPress and WooCommerce installation',
      'product catalog setup',
      'categories, filters, product pages',
      'cart and checkout',
      'payment and delivery method setup',
      'basic SEO setup',
      'mobile adaptation',
      'store management instructions',
    ],
  },
  {
    title: 'Simple turnkey websites',
    description: 'We develop websites of any format: landing pages, business card websites, corporate websites, promo pages, and portfolios.',
    icon: Layout,
    features: [
      'website structure',
      'design or adaptation of a ready-made template',
      'page layout',
      'inquiry forms',
      'domain connection',
      'hosting setup',
      'basic technical setup',
      'website handover to the client',
    ],
  },
];

export function ServicesDetailed() {
  return (
    <Section bg="white" id="services">
      <Container>
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {services.map((service, index) => (
              <FadeIn key={service.title} delay={index * 0.1}>
                <div className="flex flex-col h-full rounded-3xl bg-gray-50 p-8 sm:p-10">
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600 shadow-xl shadow-indigo-600/20">
                    <service.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-lg text-gray-600 mb-8 border-b border-gray-200 pb-8">
                    {service.description}
                  </p>
                  <div className="flex flex-col flex-grow">
                    <p className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-6">What is included:</p>
                    <ul className="space-y-4">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <div className="flex-shrink-0 mt-1">
                            <Check className="h-5 w-5 text-indigo-600" />
                          </div>
                          <span className="ml-3 text-base text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
