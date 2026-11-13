import React, { useEffect, useState } from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { ArchitecturalImage } from './components/ArchitecturalImage';
import {
  ConsistencyAndProcessSection,
  OperationsSupportSection,
  TrustAndQualitySection,
} from './components/ApproachAndTrustSections';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { IndustriesSection } from './components/IndustriesSection';
import { ServiceAreasSection } from './components/ServiceAreasSection';
import { ServicesSection } from './components/ServicesSection';
import {
  AboutPage,
  ContactPage,
  FaqsPage,
  IndustriesPage,
  OurApproachPage,
  ServiceAreasPage,
  ServiceDetailPage,
  WalkthroughPage,
} from './components/SubPages';
import { BUSINESS_INFO, HERO_IMAGE, PAGE_TITLES, SERVICES } from './data/spotlessData';
import { PageId, WalkthroughPrefill } from './types/navigation';

const VALID_PAGES = new Set<PageId>([
  'home',
  'commercial-cleaning',
  'office-cleaning',
  'medical-office-cleaning',
  'janitorial-services',
  'retail-cleaning',
  'post-construction-cleaning',
  'industries',
  'our-approach',
  'service-areas',
  'about',
  'faqs',
  'walkthrough',
  'contact',
]);

function getInitialPage(): PageId {
  const hash = window.location.hash.replace('#', '') as PageId;
  return VALID_PAGES.has(hash) ? hash : 'home';
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>(getInitialPage);
  const [walkthroughPrefill, setWalkthroughPrefill] = useState<WalkthroughPrefill | undefined>(
    undefined
  );

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (VALID_PAGES.has(hash)) {
        setCurrentPage(hash);
      } else if (!hash) {
        setCurrentPage('home');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    document.title = PAGE_TITLES[currentPage];
  }, [currentPage]);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRequestWalkthrough = (prefill?: WalkthroughPrefill) => {
    if (prefill) {
      setWalkthroughPrefill(prefill);
    }
    navigateTo('walkthrough');
  };

  const scrollToServices = () => {
    if (currentPage !== 'home') {
      navigateTo('home');
      setTimeout(() => {
        document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' });
      }, 120);
      return;
    }
    document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const activeService = SERVICES.find((s) => s.id === currentPage);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFBFA] text-[#17262D] overflow-x-hidden">
      <Header currentPage={currentPage} onNavigate={navigateTo} />

      <main className="flex-1">
        {currentPage === 'home' && (
          <>
            {/* B. Exceptional Architectural Hero */}
            <section
              aria-labelledby="hero-heading"
              className="relative bg-[#17262D] text-[#FAFBFA] overflow-hidden border-b border-[#FAFBFA]/12"
            >
              <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
                <div className="lg:col-span-6 flex flex-col justify-between py-2">
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-[#B8A185] tracking-wide mb-5">
                      Exclusively Commercial · Locally Owned · Oklahoma City
                    </p>
                    <h1
                      id="hero-heading"
                      className="font-display font-semibold tracking-tight text-[#FAFBFA] leading-[1.06] [text-wrap:balance]"
                      style={{ fontSize: 'clamp(2.25rem, 4.1vw, 3.75rem)' }}
                    >
                      Your Business Deserves a Higher Standard of Clean.
                    </h1>
                    <p className="mt-6 text-base sm:text-lg text-[#E6EBEA]/85 leading-relaxed max-w-xl">
                      Dependable commercial cleaning and janitorial services tailored to your
                      facility, schedule, and operational needs across the Oklahoma City metro.
                    </p>

                    <div className="mt-9 flex flex-wrap items-center gap-4">
                      <button
                        type="button"
                        onClick={() => handleRequestWalkthrough()}
                        className="px-6 py-4 bg-[#B8A185] text-[#17262D] text-sm font-semibold hover:bg-[#FAFBFA] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                      >
                        Request Your Free Walkthrough
                      </button>
                      <button
                        type="button"
                        onClick={scrollToServices}
                        className="inline-flex items-center gap-2 px-5 py-4 border border-[#FAFBFA]/25 text-[#FAFBFA] text-sm font-medium hover:bg-[#FAFBFA]/10 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                      >
                        <span>Explore Our Services</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="mt-10 pt-6 border-t border-[#FAFBFA]/12 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-[#E6EBEA]/80">
                    <a
                      href={BUSINESS_INFO.phoneHref}
                      className="inline-flex items-center gap-2 font-semibold text-[#FAFBFA] hover:text-[#B8A185] transition-colors tabular-nums"
                    >
                      <Phone className="w-4 h-4 text-[#B8A185]" />
                      <span>Call {BUSINESS_INFO.phoneDisplay}</span>
                    </a>
                    <span className="text-[#E6EBEA]/70">
                      Commercial Properties Only · No Residential Maid Service
                    </span>
                  </div>
                </div>

                {/* Dominant 16:9 Architectural Hero Image */}
                <div className="lg:col-span-6 relative min-h-[280px] sm:min-h-[380px] lg:min-h-[500px] bg-[#123C4A] border border-[#FAFBFA]/15">
                  <ArchitecturalImage
                    src={HERO_IMAGE.src}
                    alt={HERO_IMAGE.alt}
                    caption="A Higher Standard for Every Commercial Space"
                    priority
                    width={1376}
                    height={768}
                    className="w-full h-full object-cover lg:absolute lg:inset-0"
                  />
                  <div className="hidden sm:block absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-[#17262D]/90 via-[#17262D]/45 to-transparent">
                    <div className="flex items-center justify-between gap-4 text-xs text-[#E6EBEA]">
                      <span>A Higher Standard for Every Space</span>
                      <span className="text-[#B8A185]">Oklahoma City Metro (~30 mi)</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* C. Clean Spaces. Smoother Operations. */}
            <OperationsSupportSection onNavigate={navigateTo} />

            {/* D. Six Commercial Services */}
            <ServicesSection
              onSelectServicePage={navigateTo}
              onRequestWalkthrough={handleRequestWalkthrough}
            />

            {/* E. Industries We Serve */}
            <IndustriesSection
              onDiscussFacility={(prefill) => handleRequestWalkthrough(prefill)}
              onViewService={navigateTo}
            />

            {/* F & G. Consistency + Four-Step Process */}
            <ConsistencyAndProcessSection
              onRequestWalkthrough={() => handleRequestWalkthrough()}
              onNavigate={navigateTo}
            />

            {/* H & I. Trust & Credibility + Quality-Control Transparency */}
            <TrustAndQualitySection
              onRequestWalkthrough={() => handleRequestWalkthrough()}
              onNavigate={navigateTo}
            />

            {/* J. Service Areas */}
            <ServiceAreasSection
              onConfirmAvailability={(prefill) => handleRequestWalkthrough(prefill)}
            />

            {/* K. Frequently Asked Questions */}
            <FaqSection onRequestWalkthrough={() => handleRequestWalkthrough()} />

            {/* L. Final CTA */}
            <section
              aria-labelledby="final-cta-heading"
              className="py-20 lg:py-28 bg-[#123C4A] text-[#FAFBFA]"
            >
              <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8">
                  <p className="text-xs font-medium tracking-wide text-[#B8A185] mb-3">
                    Complimentary On-Site Assessment
                  </p>
                  <h2
                    id="final-cta-heading"
                    className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.08] [text-wrap:balance]"
                  >
                    A Cleaner Facility Starts With One Conversation.
                  </h2>
                  <p className="mt-4 text-base sm:text-lg text-[#E6EBEA]/85 leading-relaxed max-w-2xl">
                    Tell us about your business and let our team help define a cleaning plan
                    that fits your facility—even if you don’t know your square footage yet.
                  </p>
                </div>

                <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
                  <button
                    type="button"
                    onClick={() => handleRequestWalkthrough()}
                    className="w-full lg:w-auto px-7 py-4 bg-[#B8A185] text-[#17262D] text-sm font-semibold hover:bg-[#FAFBFA] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    Request Your Free Walkthrough
                  </button>
                  <a
                    href={BUSINESS_INFO.phoneHref}
                    className="w-full lg:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 border border-[#FAFBFA]/30 text-[#FAFBFA] text-sm font-semibold hover:bg-[#FAFBFA]/10 transition-colors whitespace-nowrap shrink-0"
                  >
                    <Phone className="w-4 h-4 text-[#B8A185]" />
                    <span>Call Our Team · {BUSINESS_INFO.phoneDisplay}</span>
                  </a>
                </div>
              </div>
            </section>
          </>
        )}

        {activeService && (
          <ServiceDetailPage
            service={activeService}
            onNavigate={navigateTo}
            onRequestWalkthrough={handleRequestWalkthrough}
          />
        )}

        {currentPage === 'industries' && (
          <IndustriesPage
            onNavigate={navigateTo}
            onRequestWalkthrough={handleRequestWalkthrough}
          />
        )}

        {currentPage === 'our-approach' && (
          <OurApproachPage
            onNavigate={navigateTo}
            onRequestWalkthrough={() => handleRequestWalkthrough()}
          />
        )}

        {currentPage === 'service-areas' && (
          <ServiceAreasPage
            onNavigate={navigateTo}
            onRequestWalkthrough={handleRequestWalkthrough}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onRequestWalkthrough={() => handleRequestWalkthrough()}
            onNavigate={navigateTo}
          />
        )}

        {currentPage === 'faqs' && (
          <FaqsPage
            onNavigate={navigateTo}
            onRequestWalkthrough={() => handleRequestWalkthrough()}
          />
        )}

        {currentPage === 'walkthrough' && (
          <WalkthroughPage prefill={walkthroughPrefill} onNavigate={navigateTo} />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onRequestWalkthrough={() => handleRequestWalkthrough()}
            onNavigate={navigateTo}
          />
        )}
      </main>

      <Footer onNavigate={navigateTo} />
    </div>
  );
}
