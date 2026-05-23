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
    <div className="relative min-h-screen overflow-x-clip selection:bg-indigo-100 selection:text-indigo-900 font-sans antialiased">
      <div className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(circle_at_10%_10%,rgba(99,102,241,0.18),transparent_42%),radial-gradient(circle_at_80%_5%,rgba(34,211,238,0.16),transparent_38%),radial-gradient(circle_at_40%_75%,rgba(244,114,182,0.15),transparent_45%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-50 [background:linear-gradient(to_right,rgba(15,23,42,.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,.06)_1px,transparent_1px)] [background-size:3rem_3rem] [mask-image:radial-gradient(circle_at_center,black,transparent_75%)]" />
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
