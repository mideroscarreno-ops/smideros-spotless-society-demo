import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, Menu, Phone, X } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/spotlessData';
import { PageId } from '../types/navigation';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [approachMenuOpen, setApproachMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setServicesMenuOpen(false);
        setApproachMenuOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setServicesMenuOpen(false);
        setApproachMenuOpen(false);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleLinkClick = (page: PageId) => {
    setServicesMenuOpen(false);
    setApproachMenuOpen(false);
    setMobileMenuOpen(false);
    onNavigate(page);
  };

  const isServicePage = SERVICES.some((s) => s.id === currentPage);
  const isApproachGroup =
    currentPage === 'our-approach' || currentPage === 'about' || currentPage === 'faqs';

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 bg-[#FAFBFA]/95 backdrop-blur-md border-b border-[#17262D]/10"
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <button
          type="button"
          onClick={() => handleLinkClick('home')}
          className="font-display text-lg font-bold tracking-tight text-[#17262D] hover:text-[#123C4A] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
        >
          Spotless Society
        </button>

        {/* Zone 2: Clean single-line navigation links */}
        <nav
          aria-label="Primary navigation"
          className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#17262D]/80"
        >
          {/* Services Dropdown Trigger */}
          <div className="relative">
            <button
              type="button"
              aria-expanded={servicesMenuOpen}
              onClick={() => {
                setServicesMenuOpen((prev) => !prev);
                setApproachMenuOpen(false);
              }}
              className={`inline-flex items-center gap-1.5 py-2 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                isServicePage || servicesMenuOpen
                  ? 'text-[#123C4A] font-semibold'
                  : 'hover:text-[#123C4A]'
              }`}
            >
              <span>Services</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-150 ${
                  servicesMenuOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {servicesMenuOpen && (
              <div
                role="menu"
                className="absolute left-0 top-full mt-2 w-[540px] bg-[#FAFBFA] border border-[#17262D]/12 shadow-lg p-6 grid grid-cols-2 gap-3"
              >
                <div className="col-span-2 pb-3 mb-1 border-b border-[#17262D]/10 flex items-center justify-between">
                  <span className="text-xs font-medium text-[#6C8790]">
                    Commercial Cleaning Services · Oklahoma City Metro
                  </span>
                </div>
                {SERVICES.map((service) => (
                  <button
                    key={service.id}
                    type="button"
                    role="menuitem"
                    onClick={() => handleLinkClick(service.id)}
                    className={`text-left p-3 border transition-colors cursor-pointer ${
                      currentPage === service.id
                        ? 'bg-[#E6EBEA] border-[#123C4A]/30'
                        : 'border-transparent hover:bg-[#E6EBEA]/60 hover:border-[#17262D]/10'
                    }`}
                  >
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="font-display text-sm font-semibold text-[#17262D]">
                        {service.title}
                      </span>
                      <span className="font-mono text-[11px] text-[#6C8790] tabular-nums">
                        {service.index}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-[#17262D]/70 leading-relaxed line-clamp-2">
                      {service.summary}
                    </p>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={() => handleLinkClick('industries')}
            className={`py-2 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              currentPage === 'industries'
                ? 'text-[#123C4A] font-semibold'
                : 'hover:text-[#123C4A]'
            }`}
          >
            Industries
          </button>

          {/* Our Approach + About + FAQs Dropdown */}
          <div className="relative">
            <button
              type="button"
              aria-expanded={approachMenuOpen}
              onClick={() => {
                setApproachMenuOpen((prev) => !prev);
                setServicesMenuOpen(false);
              }}
              className={`inline-flex items-center gap-1.5 py-2 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                isApproachGroup || approachMenuOpen
                  ? 'text-[#123C4A] font-semibold'
                  : 'hover:text-[#123C4A]'
              }`}
            >
              <span>Our Approach</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-150 ${
                  approachMenuOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {approachMenuOpen && (
              <div
                role="menu"
                className="absolute left-0 top-full mt-2 w-72 bg-[#FAFBFA] border border-[#17262D]/12 shadow-lg p-3 space-y-1"
              >
                <button
                  type="button"
                  role="menuitem"
                  onClick={() => handleLinkClick('our-approach')}
                  className={`w-full text-left px-3 py-2.5 transition-colors cursor-pointer ${
                    currentPage === 'our-approach'
                      ? 'bg-[#E6EBEA] text-[#123C4A]'
                      : 'hover:bg-[#E6EBEA]/60'
                  }`}
                >
                  <div className="font-display text-sm font-semibold text-[#17262D]">
                    Process &amp; Quality Control
                  </div>
                  <div className="text-xs text-[#6C8790] mt-0.5">
                    Four-step onboarding &amp; ongoing audits
                  </div>
                </button>
                <button
                  type="button"
                  role="menuitem"
                  onClick={() => handleLinkClick('about')}
                  className={`w-full text-left px-3 py-2.5 transition-colors cursor-pointer ${
                    currentPage === 'about'
                      ? 'bg-[#E6EBEA] text-[#123C4A]'
                      : 'hover:bg-[#E6EBEA]/60'
                  }`}
                >
                  <div className="font-display text-sm font-semibold text-[#17262D]">
                    About Spotless Society
                  </div>
                  <div className="text-xs text-[#6C8790] mt-0.5">
                    Exclusively commercial · Locally owned
                  </div>
                </button>
                <button
                  type="button"
                  role="menuitem"
                  onClick={() => handleLinkClick('faqs')}
                  className={`w-full text-left px-3 py-2.5 transition-colors cursor-pointer ${
                    currentPage === 'faqs'
                      ? 'bg-[#E6EBEA] text-[#123C4A]'
                      : 'hover:bg-[#E6EBEA]/60'
                  }`}
                >
                  <div className="font-display text-sm font-semibold text-[#17262D]">
                    Frequently Asked Questions
                  </div>
                  <div className="text-xs text-[#6C8790] mt-0.5">
                    Scope, scheduling &amp; policy answers
                  </div>
                </button>
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={() => handleLinkClick('service-areas')}
            className={`py-2 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              currentPage === 'service-areas'
                ? 'text-[#123C4A] font-semibold'
                : 'hover:text-[#123C4A]'
            }`}
          >
            Service Areas
          </button>

          <button
            type="button"
            onClick={() => handleLinkClick('contact')}
            className={`py-2 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              currentPage === 'contact'
                ? 'text-[#123C4A] font-semibold'
                : 'hover:text-[#123C4A]'
            }`}
          >
            Contact
          </button>
        </nav>

        {/* Zone 3: 1 Primary Action + Mobile Menu Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => handleLinkClick('walkthrough')}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs sm:text-sm font-semibold bg-[#123C4A] text-[#FAFBFA] hover:bg-[#17262D] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Request a Free Walkthrough
          </button>

          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 border border-[#17262D]/15 text-[#17262D] hover:bg-[#E6EBEA] transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-16 bottom-0 z-40 bg-[#FAFBFA] border-t border-[#17262D]/10 overflow-y-auto px-5 py-6">
          <div className="space-y-6 pb-12">
            <div>
              <p className="text-xs font-medium text-[#6C8790] mb-3">
                Exclusively Commercial · Oklahoma City Metro
              </p>
              <div className="grid grid-cols-1 gap-2">
                <button
                  type="button"
                  onClick={() => handleLinkClick('walkthrough')}
                  className="w-full py-3.5 px-5 bg-[#123C4A] text-[#FAFBFA] text-sm font-semibold text-center cursor-pointer"
                >
                  Request a Free Walkthrough
                </button>
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="w-full py-3.5 px-5 border border-[#17262D]/20 text-[#17262D] text-sm font-semibold flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#123C4A]" />
                  <span>Call {BUSINESS_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>

            <div className="border-t border-[#17262D]/10 pt-5">
              <div className="text-xs font-medium text-[#6C8790] mb-2">Navigation</div>
              <div className="grid grid-cols-1 divide-y divide-[#17262D]/8">
                {(
                  [
                    ['home', 'Home'],
                    ['industries', 'Industries We Serve'],
                    ['our-approach', 'Our Approach & Quality Control'],
                    ['service-areas', 'Service Areas'],
                    ['about', 'About Spotless Society'],
                    ['faqs', 'Frequently Asked Questions'],
                    ['contact', 'Contact'],
                  ] as [PageId, string][]
                ).map(([id, label]) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => handleLinkClick(id)}
                    className={`py-3.5 text-left text-base font-medium flex items-center justify-between cursor-pointer ${
                      currentPage === id ? 'text-[#123C4A] font-semibold' : 'text-[#17262D]'
                    }`}
                  >
                    <span>{label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="border-t border-[#17262D]/10 pt-5">
              <div className="text-xs font-medium text-[#6C8790] mb-3">
                Six Commercial Services
              </div>
              <div className="grid grid-cols-1 gap-2">
                {SERVICES.map((service) => (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => handleLinkClick(service.id)}
                    className={`p-3.5 text-left border transition-colors cursor-pointer ${
                      currentPage === service.id
                        ? 'bg-[#E6EBEA] border-[#123C4A]/30'
                        : 'border-[#17262D]/10 bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-display text-sm font-semibold text-[#17262D]">
                        {service.title}
                      </span>
                      <span className="font-mono text-xs text-[#6C8790] tabular-nums">
                        {service.index}
                      </span>
                    </div>
                    <p className="text-xs text-[#17262D]/70 mt-1">{service.summary}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
