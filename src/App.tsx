/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Audience } from './components/sections/Audience';
import { ServicesDetailed } from './components/sections/ServicesDetailed';
import { Turnkey } from './components/sections/Turnkey';
import { Deliverables } from './components/sections/Deliverables';
import { Packages } from './components/sections/Packages';
import { WhyWP } from './components/sections/WhyWP';
import { Process } from './components/sections/Process';
import { Portfolio } from './components/sections/Portfolio';
import { Additional } from './components/sections/Additional';
import { FAQ } from './components/sections/FAQ';
import { Contact } from './components/sections/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-indigo-100 selection:text-indigo-900 font-sans">
      <Navbar />
      <main>
        <Hero />
        <Audience />
        <ServicesDetailed />
        <Turnkey />
        <WhyWP />
        <Deliverables />
        <Packages />
        <Additional />
        <Process />
        <Portfolio />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
