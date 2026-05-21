import { Building2, ShoppingBag, User, Briefcase } from 'lucide-react';
import { Container, FadeIn, Section } from '../ui/Layout';

const audiences = [
  {
    title: 'Online stores',
    description: 'Product catalog, cart, checkout, payment, delivery, customer account.',
    icon: ShoppingBag,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    title: 'Small businesses',
    description: 'A website for services, inquiries, company presentation, and customer acquisition.',
    icon: Briefcase,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
  },
  {
    title: 'Experts and professionals',
    description: 'Personal website, portfolio, services page, booking or inquiry form.',
    icon: User,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
  },
  {
    title: 'Companies without a website',
    description: 'Full launch from scratch: domain, hosting, structure, design, setup, and handover.',
    icon: Building2,
    color: 'text-rose-600',
    bgColor: 'bg-rose-50',
  },
];

export function Audience() {
  return (
    <Section bg="gray" id="audience">
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              We create websites for businesses that need a fast and clear way to get online.
            </h2>
          </div>
        </FadeIn>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:max-w-none lg:grid-cols-4">
          {audiences.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.1}>
              <div className="flex h-full flex-col rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-200/50 transition-shadow hover:shadow-md">
                <div className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl ${item.bgColor}`}>
                  <item.icon className={`h-6 w-6 ${item.color}`} />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">{item.title}</h3>
                <p className="text-base text-gray-600 flex-grow leading-relaxed">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
