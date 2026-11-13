import React, { useState } from 'react';
import { ArrowRight, MapPin, Search } from 'lucide-react';
import { BUSINESS_INFO, SERVICE_AREA_CITIES } from '../data/spotlessData';
import { WalkthroughPrefill } from '../types/navigation';

interface ServiceAreasSectionProps {
  onConfirmAvailability: (prefill: WalkthroughPrefill) => void;
}

export const ServiceAreasSection: React.FC<ServiceAreasSectionProps> = ({
  onConfirmAvailability,
}) => {
  const [selectedCityName, setSelectedCityName] = useState<string>('Oklahoma City');
  const [lookupInput, setLookupInput] = useState<string>('');
  const [lookupStatus, setLookupStatus] = useState<{
    query: string;
    matchedCity?: string;
    message: string;
  } | null>(null);

  const selectedCity =
    SERVICE_AREA_CITIES.find((c) => c.name === selectedCityName) ||
    SERVICE_AREA_CITIES[0];

  const handleLookupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = lookupInput.trim();
    if (!trimmed) {
      setLookupStatus({
        query: '',
        message: 'Enter a city name or 5-digit ZIP code in the Oklahoma City metro.',
      });
      return;
    }

    const lower = trimmed.toLowerCase();
    const matched = SERVICE_AREA_CITIES.find(
      (city) =>
        city.name.toLowerCase() === lower ||
        city.name.toLowerCase().includes(lower) ||
        city.sampleZips.some((zip) => zip === trimmed)
    );

    if (matched) {
      setSelectedCityName(matched.name);
      setLookupStatus({
        query: trimmed,
        matchedCity: matched.name,
        message: `${matched.name} (${matched.corridor}) falls within Spotless Society’s published Oklahoma City metro coverage area (~30 driving miles). Exact facility address availability is confirmed on inquiry.`,
      });
    } else if (/^73[01]\d{2}$/.test(trimmed)) {
      setLookupStatus({
        query: trimmed,
        message: `ZIP ${trimmed} is in the greater central Oklahoma region. Service availability depends on driving distance within roughly 30 miles of Oklahoma City—submit your facility details to confirm.`,
      });
    } else {
      setLookupStatus({
        query: trimmed,
        message: `Spotless Society serves commercial properties within approximately 30 driving miles of Oklahoma City and cannot guarantee coverage at every address. Contact our team or request a walkthrough check for "${trimmed}".`,
      });
    }
  };

  return (
    <section
      id="service-areas-section"
      aria-labelledby="service-areas-heading"
      className="py-20 lg:py-28 bg-[#E6EBEA]/55 border-b border-[#17262D]/10"
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-[#17262D]/12 items-end">
          <div className="lg:col-span-7">
            <p className="text-xs font-medium tracking-wide text-[#6C8790] mb-3">
              Geographic Coverage · {BUSINESS_INFO.serviceRadiusNote}
            </p>
            <h2
              id="service-areas-heading"
              className="font-display text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-tight text-[#17262D] leading-[1.12] [text-wrap:balance]"
            >
              Commercial Facility Coverage Across the Oklahoma City Metro.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base text-[#17262D]/75 leading-relaxed">
              Spotless Society publishes coverage within approximately 30 driving miles of
              Oklahoma City across eleven core metro communities. Coverage is confirmed by exact
              commercial address rather than guaranteed for every location.
            </p>
          </div>
        </div>

        {/* Interactive City Selection + Coverage Schematic */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left: City Selection & ZIP Lookup */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
            <div>
              <h3 className="text-xs font-semibold tracking-wide text-[#123C4A] mb-4">
                Published Service Municipalities (Select a City)
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {SERVICE_AREA_CITIES.map((city) => {
                  const isActive = city.name === selectedCity.name;
                  return (
                    <button
                      key={city.name}
                      type="button"
                      onClick={() => setSelectedCityName(city.name)}
                      className={`px-3.5 py-3 text-left text-sm font-medium border transition-colors cursor-pointer whitespace-nowrap truncate ${
                        isActive
                          ? 'bg-[#123C4A] text-[#FAFBFA] border-[#123C4A]'
                          : 'bg-[#FAFBFA] text-[#17262D] border-[#17262D]/12 hover:border-[#123C4A]/45'
                      }`}
                    >
                      {city.name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selected City Brief */}
            <div className="p-6 bg-[#FAFBFA] border border-[#17262D]/12">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-[#17262D]/10">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#123C4A]" />
                  <h4 className="font-display text-lg font-semibold text-[#17262D]">
                    {selectedCity.name}
                  </h4>
                </div>
                <span className="text-xs text-[#6C8790]">
                  {selectedCity.corridor} · {selectedCity.distanceNote}
                </span>
              </div>
              <p className="text-sm text-[#17262D]/80 leading-relaxed">
                {selectedCity.summary}
              </p>
              <div className="mt-4 flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-[#17262D]/10">
                <span className="font-mono text-xs text-[#6C8790] tabular-nums">
                  Sample ZIPs: {selectedCity.sampleZips.slice(0, 4).join(', ')}
                </span>
                <button
                  type="button"
                  onClick={() => onConfirmAvailability({ cityOrZip: selectedCity.name })}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#123C4A] hover:text-[#17262D] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <span>Check {selectedCity.name} Availability</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* City or ZIP Inquiry Field */}
            <form
              onSubmit={handleLookupSubmit}
              className="p-6 bg-[#FAFBFA] border border-[#17262D]/12"
            >
              <label
                htmlFor="service-area-lookup"
                className="block font-display text-sm font-semibold text-[#17262D]"
              >
                Check a City or ZIP Code
              </label>
              <p className="text-xs text-[#6C8790] mt-1">
                Enter your facility city or 5-digit ZIP code to check proximity to our Oklahoma
                City service footprint.
              </p>

              <div className="mt-4 flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-[#6C8790] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    id="service-area-lookup"
                    type="text"
                    value={lookupInput}
                    onChange={(e) => setLookupInput(e.target.value)}
                    placeholder="e.g., Edmond or 73102"
                    className="w-full pl-10 pr-4 py-3 text-sm bg-[#FAFBFA] border border-[#17262D]/20 text-[#17262D] placeholder:text-[#6C8790] focus:border-[#123C4A] focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="px-5 py-3 bg-[#17262D] text-[#FAFBFA] text-sm font-semibold hover:bg-[#123C4A] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  Check Coverage
                </button>
              </div>

              {lookupStatus && (
                <div className="mt-4 pt-4 border-t border-[#17262D]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <p className="text-xs text-[#17262D]/85 leading-relaxed">
                    {lookupStatus.message}
                  </p>
                  <button
                    type="button"
                    onClick={() =>
                      onConfirmAvailability({
                        cityOrZip: lookupStatus.matchedCity || lookupStatus.query,
                      })
                    }
                    className="px-4 py-2.5 bg-[#123C4A] text-[#FAFBFA] text-xs font-semibold hover:bg-[#17262D] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    Confirm Service Availability
                  </button>
                </div>
              )}
            </form>
          </div>

          {/* Right: Architectural Oklahoma City Metro Coverage Schematic */}
          <div className="lg:col-span-6 bg-[#17262D] text-[#FAFBFA] p-6 sm:p-8 flex flex-col justify-between border border-[#17262D]">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#FAFBFA]/12">
              <div>
                <div className="font-display text-base font-semibold">
                  Oklahoma City Metro Coverage Schematic
                </div>
                <div className="text-xs text-[#E6EBEA]/70 mt-0.5">
                  Approximate 30-driving-mile radius centered on Oklahoma City
                </div>
              </div>
              <span className="font-mono text-xs text-[#B8A185] tabular-nums">~30 MI</span>
            </div>

            <div className="my-4">
              <svg
                viewBox="0 0 500 420"
                className="w-full h-auto"
                role="img"
                aria-label="Schematic map of Oklahoma City metro service area showing Oklahoma City at center and surrounding cities including Edmond, Nichols Hills, Bethany, Yukon, Mustang, Moore, Norman, Del City, Midwest City, and Choctaw"
              >
                {/* Architectural Grid */}
                <defs>
                  <pattern
                    id="metroGrid"
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 40 0 L 0 0 0 40"
                      fill="none"
                      stroke="rgba(250,251,250,0.06)"
                      strokeWidth="1"
                    />
                  </pattern>
                </defs>
                <rect width="500" height="420" fill="url(#metroGrid)" />

                {/* Approximate Corridor Axes (I-35 North-South, I-40 East-West) */}
                <line
                  x1="262"
                  y1="24"
                  x2="275"
                  y2="396"
                  stroke="rgba(184,161,133,0.28)"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
                <line
                  x1="36"
                  y1="196"
                  x2="464"
                  y2="220"
                  stroke="rgba(184,161,133,0.28)"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />

                {/* 30-mile approximate radius ring */}
                <circle
                  cx="250"
                  cy="210"
                  r="175"
                  fill="rgba(18,60,74,0.32)"
                  stroke="#6C8790"
                  strokeWidth="1.25"
                  strokeDasharray="6 4"
                />
                <circle
                  cx="250"
                  cy="210"
                  r="92"
                  fill="none"
                  stroke="rgba(250,251,250,0.14)"
                  strokeWidth="1"
                />

                {/* Corridor Labels */}
                <text x="270" y="38" fill="#6C8790" fontSize="9" fontFamily="IBM Plex Mono, monospace">
                  I-35 N
                </text>
                <text x="280" y="394" fill="#6C8790" fontSize="9" fontFamily="IBM Plex Mono, monospace">
                  I-35 S
                </text>
                <text x="40" y="186" fill="#6C8790" fontSize="9" fontFamily="IBM Plex Mono, monospace">
                  I-40 W
                </text>
                <text x="424" y="236" fill="#6C8790" fontSize="9" fontFamily="IBM Plex Mono, monospace">
                  I-40 E
                </text>

                {/* City Nodes */}
                {SERVICE_AREA_CITIES.map((city) => {
                  const isSelected = city.name === selectedCity.name;
                  const isCenter = city.name === 'Oklahoma City';
                  const labelOffsetY =
                    city.name === 'Del City'
                      ? 18
                      : city.name === 'Midwest City'
                      ? -12
                      : city.name === 'Nichols Hills'
                      ? -12
                      : city.name === 'Oklahoma City'
                      ? -14
                      : -11;

                  return (
                    <g
                      key={city.name}
                      onClick={() => setSelectedCityName(city.name)}
                      className="cursor-pointer"
                    >
                      {isSelected && (
                        <circle
                          cx={city.coordinates.x}
                          cy={city.coordinates.y}
                          r={isCenter ? 16 : 13}
                          fill="none"
                          stroke="#B8A185"
                          strokeWidth="1.5"
                        />
                      )}
                      <circle
                        cx={city.coordinates.x}
                        cy={city.coordinates.y}
                        r={isCenter ? 7 : 5}
                        fill={isSelected ? '#B8A185' : '#FAFBFA'}
                        stroke="#17262D"
                        strokeWidth="1.5"
                      />
                      <text
                        x={city.coordinates.x}
                        y={city.coordinates.y + labelOffsetY}
                        textAnchor="middle"
                        fill={isSelected ? '#B8A185' : '#E6EBEA'}
                        fontSize={isSelected ? '11.5' : '10'}
                        fontWeight={isSelected ? '700' : '500'}
                        fontFamily="Plus Jakarta Sans, sans-serif"
                      >
                        {city.name}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            <div className="pt-4 border-t border-[#FAFBFA]/12 flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs text-[#E6EBEA]/75 max-w-sm">
                Schematic representation only. Service availability depends on specific commercial
                property address and schedule requirements.
              </p>
              <button
                type="button"
                onClick={() => onConfirmAvailability({ cityOrZip: selectedCity.name })}
                className="px-4 py-2.5 bg-[#B8A185] text-[#17262D] text-xs font-semibold hover:bg-[#FAFBFA] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                Confirm Service Availability
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
