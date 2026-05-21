import { Container, FadeIn, Section } from '../ui/Layout';

const faqs = [
  {
    question: 'Will the website be registered in my name?',
    answer: 'Yes. The domain and hosting are registered using the client’s details. You receive access details and control over the website.',
  },
  {
    question: 'Will I be able to edit the website myself?',
    answer: 'Yes. After the website is handed over, you will be able to change texts, images, products, and other information through the admin panel.',
  },
  {
    question: 'Do you only create WordPress websites?',
    answer: 'We usually create online stores on WordPress + WooCommerce. Simple websites can be built in another format if it better suits the task.',
  },
  {
    question: 'Can I order only the website without domain and hosting?',
    answer: 'Yes. If you already have a domain and hosting, we can work with them.',
  },
  {
    question: 'Do you add products to the website?',
    answer: 'Yes, content filling can be included in the project separately.',
  },
  {
    question: 'Can the website be improved later?',
    answer: 'Yes, the website can be developed further: pages, features, integrations, and new sections can be added.',
  },
];

export function FAQ() {
  return (
    <Section bg="white" id="faq">
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Frequently asked questions
            </h2>
          </div>
        </FadeIn>
        
        <div className="mx-auto max-w-3xl divide-y divide-gray-900/10">
          <dl className="space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq, index) => (
              <div key={faq.question} className="pt-6">
                <FadeIn delay={index * 0.1}>
                  <dt>
                    <span className="text-lg font-semibold leading-7 text-gray-900">{faq.question}</span>
                  </dt>
                  <dd className="mt-4 pr-12">
                    <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                  </dd>
                </FadeIn>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </Section>
  );
}
