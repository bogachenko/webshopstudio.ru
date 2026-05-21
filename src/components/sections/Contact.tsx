import { Container, FadeIn, Section } from '../ui/Layout';

export function Contact() {
  return (
    <Section bg="dark" id="contact">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Want to launch a website or online store?
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Tell us what kind of website you need, and we will suggest a suitable solution, timeline, and cost.
            </p>
          </FadeIn>
        </div>
        
        <FadeIn delay={0.1}>
          <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor="name" className="block text-sm font-semibold leading-6 text-white">
                  Name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    placeholder="John Doe"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="contact-info" className="block text-sm font-semibold leading-6 text-white">
                  Phone number or messenger
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="contact-info"
                    id="contact-info"
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    placeholder="+1 (555) 000-0000 or @telegram"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="website-type" className="block text-sm font-semibold leading-6 text-white">
                  Website type
                </label>
                <div className="mt-2.5">
                  <select
                    id="website-type"
                    name="website-type"
                    className="block w-full rounded-md border-0 bg-slate-800 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  >
                    <option>Business card website</option>
                    <option>Landing page</option>
                    <option>Online store (WooCommerce)</option>
                    <option>Corporate website</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-white">
                  Brief task description
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    placeholder="Tell us a little bit about your business and needs..."
                    defaultValue={''}
                  />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="block w-full rounded-md bg-indigo-500 px-3.5 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 transition-colors"
                onClick={(e) => e.preventDefault()}
              >
                Discuss a project
              </button>
            </div>
          </form>
        </FadeIn>
      </Container>
    </Section>
  );
}
