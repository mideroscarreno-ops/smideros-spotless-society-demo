import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { BUSINESS_INFO, SERVICE_AREA_CITIES, SERVICES } from '../data/spotlessData';
import { PageId } from '../types/navigation';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#17262D] text-[#E6EBEA] border-t border-[#FAFBFA]/12">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#FAFBFA]/12">
          {/* Brand Summary */}
          <div className="lg:col-span-4 space-y-4">
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className="font-display text-xl font-bold tracking-tight text-[#FAFBFA] hover:text-[#B8A185] transition-colors cursor-pointer"
            >
              Spotless Society
            </button>
            <p className="text-sm text-[#E6EBEA]/75 leading-relaxed max-w-sm">
              Exclusively commercial cleaning and janitorial services for offices, medical
              clinics, retail spaces, and commercial properties across the Oklahoma City metro.
            </p>
            <div className="pt-2 space-y-2 text-sm">
              <a
                href={BUSINESS_INFO.phoneHref}
                className="flex items-center gap-2 text-[#FAFBFA] hover:text-[#B8A185] transition-colors tabular-nums"
              >
                <Phone className="w-4 h-4 text-[#B8A185]" />
                <span>{BUSINESS_INFO.phoneDisplay}</span>
              </a>
              <a
                href={BUSINESS_INFO.emailHref}
                className="flex items-center gap-2 text-[#FAFBFA] hover:text-[#B8A185] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#B8A185]" />
                <span>{BUSINESS_INFO.email}</span>
              </a>
              <p className="text-xs text-[#E6EBEA]/65 pt-1">
                Contact hours: {BUSINESS_INFO.contactHours}
              </p>
            </div>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-3">
            <h2 className="font-display text-xs font-semibold tracking-wide text-[#B8A185] mb-4">
              Commercial Services
            </h2>
            <ul className="space-y-2.5 text-sm">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <button
                    type="button"
                    onClick={() => onNavigate(service.id)}
                    className="text-[#E6EBEA]/80 hover:text-[#FAFBFA] transition-colors text-left cursor-pointer"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2">
            <h2 className="font-display text-xs font-semibold tracking-wide text-[#B8A185] mb-4">
              Company
            </h2>
            <ul className="space-y-2.5 text-sm">
              {(
                [
                  ['home', 'Home'],
                  ['industries', 'Industries We Serve'],
                  ['our-approach', 'Our Approach'],
                  ['service-areas', 'Service Areas'],
                  ['about', 'About'],
                  ['faqs', 'FAQs'],
                  ['walkthrough', 'Request Walkthrough'],
                  ['contact', 'Contact'],
                ] as [PageId, string][]
              ).map(([id, label]) => (
                <li key={id}>
                  <button
                    type="button"
                    onClick={() => onNavigate(id)}
                    className="text-[#E6EBEA]/80 hover:text-[#FAFBFA] transition-colors text-left cursor-pointer"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Footprint */}
          <div className="lg:col-span-3">
            <h2 className="font-display text-xs font-semibold tracking-wide text-[#B8A185] mb-4">
              Oklahoma City Metro
            </h2>
            <p className="text-xs text-[#E6EBEA]/75 leading-relaxed mb-3">
              {BUSINESS_INFO.serviceRadiusNote}. Does not provide residential cleaning.
            </p>
            <p className="text-xs text-[#E6EBEA]/65 leading-relaxed">
              {SERVICE_AREA_CITIES.map((c) => c.name).join(' · ')}
            </p>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#E6EBEA]/65">
          <div>
            Spotless Society · {BUSINESS_INFO.location} · Commercial Cleaning Only
          </div>
          <div className="text-[#B8A185]">{BUSINESS_INFO.disclosure}</div>
        </div>
      </div>
    </footer>
  );
};
