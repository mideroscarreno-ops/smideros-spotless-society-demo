import React, { useEffect, useState } from 'react';
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  Check,
  Info,
  Mail,
  Phone,
  Upload,
} from 'lucide-react';
import { BUSINESS_INFO, FACILITY_TYPES, SERVICES } from '../data/spotlessData';
import { WalkthroughPrefill } from '../types/navigation';

interface WalkthroughFormProps {
  prefill?: WalkthroughPrefill;
}

type FormMode = 'quick' | 'detailed';

interface QuickFormState {
  contactName: string;
  businessName: string;
  email: string;
  phone: string;
  cityOrZip: string;
  facilityType: string;
  message: string;
}

interface DetailedFormState {
  contactName: string;
  businessName: string;
  email: string;
  phone: string;
  cityOrZip: string;
  facilityType: string;
  serviceNeeded: string;
  squareFootage: string;
  facilityAddress: string;
  cleaningFrequency: string;
  preferredHours: string;
  priorities: string[];
  additionalNotes: string;
  photoNames: string[];
}

const CLEANING_PRIORITIES = [
  'Reception & client-facing lobbies',
  'Restroom sanitation & supply restocking',
  'Conference rooms & interior glass',
  'Hard-surface floor care & vacuuming',
  'Breakrooms & kitchenettes',
  'Trash & recycling removal',
  'Post-construction / commercial turnover dust removal',
];

const FREQUENCY_OPTIONS = [
  'Daily (5–7 days / week)',
  '3x per week',
  '2x per week',
  'Weekly',
  'One-time commercial / post-construction turnover',
  'Not sure yet — recommend during walkthrough',
];

const HOUR_OPTIONS = [
  'Evening / after business hours',
  'Early morning before opening',
  'Weekends',
  'Daytime business hours',
  'Flexible / discuss during walkthrough',
];

export const WalkthroughForm: React.FC<WalkthroughFormProps> = ({ prefill }) => {
  const [mode, setMode] = useState<FormMode>('quick');
  const [detailedStep, setDetailedStep] = useState<1 | 2 | 3>(1);
  const [isReviewing, setIsReviewing] = useState(false);
  const [isSubmittedDemo, setIsSubmittedDemo] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [quickData, setQuickData] = useState<QuickFormState>({
    contactName: '',
    businessName: '',
    email: '',
    phone: '',
    cityOrZip: prefill?.cityOrZip || '',
    facilityType: prefill?.facilityType || '',
    message: '',
  });

  const [detailedData, setDetailedData] = useState<DetailedFormState>({
    contactName: '',
    businessName: '',
    email: '',
    phone: '',
    cityOrZip: prefill?.cityOrZip || '',
    facilityType: prefill?.facilityType || '',
    serviceNeeded: prefill?.serviceNeeded || 'Commercial Cleaning',
    squareFootage: '',
    facilityAddress: '',
    cleaningFrequency: '',
    preferredHours: '',
    priorities: [],
    additionalNotes: '',
    photoNames: [],
  });

  useEffect(() => {
    if (prefill?.cityOrZip || prefill?.facilityType || prefill?.serviceNeeded) {
      setQuickData((prev) => ({
        ...prev,
        cityOrZip: prefill.cityOrZip || prev.cityOrZip,
        facilityType: prefill.facilityType || prev.facilityType,
      }));
      setDetailedData((prev) => ({
        ...prev,
        cityOrZip: prefill.cityOrZip || prev.cityOrZip,
        facilityType: prefill.facilityType || prev.facilityType,
        serviceNeeded: prefill.serviceNeeded || prev.serviceNeeded,
      }));
    }
  }, [prefill]);

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  const validatePhone = (phone: string) => phone.replace(/\D/g, '').length >= 7;

  const activeFacilityType =
    mode === 'quick' ? quickData.facilityType : detailedData.facilityType;
  const isMedicalInquiry = activeFacilityType.toLowerCase().includes('medical');

  const validateQuick = () => {
    const nextErrors: Record<string, string> = {};
    if (!quickData.contactName.trim()) nextErrors.contactName = 'Enter your contact name.';
    if (!quickData.businessName.trim())
      nextErrors.businessName = 'Enter your business or property name.';
    if (!validateEmail(quickData.email))
      nextErrors.email = 'Enter a valid business email address.';
    if (!validatePhone(quickData.phone))
      nextErrors.phone = 'Enter a valid phone number (at least 7 digits).';
    if (!quickData.cityOrZip.trim())
      nextErrors.cityOrZip = 'Enter a city or ZIP code in the Oklahoma City metro.';
    if (!quickData.facilityType.trim())
      nextErrors.facilityType = 'Select your commercial facility type.';
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const validateDetailedStep = (step: 1 | 2 | 3) => {
    const nextErrors: Record<string, string> = {};
    if (step === 1) {
      if (!detailedData.contactName.trim()) nextErrors.contactName = 'Enter your contact name.';
      if (!detailedData.businessName.trim())
        nextErrors.businessName = 'Enter your business or property name.';
      if (!validateEmail(detailedData.email))
        nextErrors.email = 'Enter a valid business email address.';
      if (!validatePhone(detailedData.phone))
        nextErrors.phone = 'Enter a valid phone number (at least 7 digits).';
      if (!detailedData.facilityType.trim())
        nextErrors.facilityType = 'Select your commercial facility type.';
    }
    if (step === 2) {
      // CRITICAL SQUARE-FOOTAGE RULE:
      // Square footage and street address are NEVER required. Only City or ZIP is needed.
      if (!detailedData.cityOrZip.trim()) {
        nextErrors.cityOrZip =
          'Enter at least a city or ZIP code (street address and square footage are optional).';
      }
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleQuickProceedToReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateQuick()) {
      setIsReviewing(true);
    }
  };

  const handleDetailedNext = () => {
    if (validateDetailedStep(detailedStep)) {
      if (detailedStep < 3) {
        setDetailedStep((prev) => (prev + 1) as 1 | 2 | 3);
      } else {
        setIsReviewing(true);
      }
    }
  };

  const togglePriority = (priority: string) => {
    setDetailedData((prev) => ({
      ...prev,
      priorities: prev.priorities.includes(priority)
        ? prev.priorities.filter((p) => p !== priority)
        : [...prev.priorities, priority],
    }));
  };

  const handlePhotoSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    const names = Array.from(files).map((f) => f.name);
    setDetailedData((prev) => ({ ...prev, photoNames: names }));
  };

  const buildMailtoHref = () => {
    const data = mode === 'quick' ? quickData : detailedData;
    const subject = encodeURIComponent(
      `Commercial Walkthrough Request — ${data.businessName || 'Oklahoma City Facility'}`
    );
    const lines = [
      `Contact Name: ${data.contactName}`,
      `Business Name: ${data.businessName}`,
      `Phone: ${data.phone}`,
      `Email: ${data.email}`,
      `City / ZIP: ${data.cityOrZip}`,
      `Facility Type: ${data.facilityType}`,
    ];
    if (mode === 'detailed') {
      lines.push(`Service Needed: ${detailedData.serviceNeeded}`);
      lines.push(
        `Approximate Sq Ft: ${detailedData.squareFootage || 'To be confirmed at walkthrough'}`
      );
      lines.push(
        `Facility Address: ${detailedData.facilityAddress || 'To be confirmed with team'}`
      );
      if (detailedData.cleaningFrequency)
        lines.push(`Preferred Frequency: ${detailedData.cleaningFrequency}`);
      if (detailedData.preferredHours)
        lines.push(`Preferred Hours: ${detailedData.preferredHours}`);
      if (detailedData.priorities.length > 0)
        lines.push(`Cleaning Priorities: ${detailedData.priorities.join('; ')}`);
      if (detailedData.additionalNotes)
        lines.push(`Notes: ${detailedData.additionalNotes}`);
    } else if (quickData.message) {
      lines.push(`Message: ${quickData.message}`);
    }
    return `mailto:${BUSINESS_INFO.email}?subject=${subject}&body=${encodeURIComponent(
      lines.join('\n')
    )}`;
  };

  const resetForm = () => {
    setIsSubmittedDemo(false);
    setIsReviewing(false);
    setDetailedStep(1);
    setErrors({});
  };

  // Final Demonstration Confirmation State
  if (isSubmittedDemo) {
    const summaryData = mode === 'quick' ? quickData : detailedData;
    return (
      <div className="bg-[#FAFBFA] border border-[#17262D]/15 p-6 sm:p-10">
        <div className="flex items-start gap-3 p-4 bg-[#E6EBEA] border border-[#123C4A]/25 mb-6">
          <Info className="w-5 h-5 text-[#123C4A] shrink-0 mt-0.5" />
          <div className="text-sm text-[#17262D]">
            <strong className="font-semibold">Demonstration Preview Only:</strong> This
            concept website is not connected to a live backend, so no real inquiry was
            transmitted to Spotless Society and no walkthrough appointment was booked.
          </div>
        </div>

        <h3 className="font-display text-2xl font-semibold text-[#17262D]">
          Your Walkthrough Request Summary Is Ready
        </h3>
        <p className="mt-2 text-sm sm:text-base text-[#17262D]/80 leading-relaxed">
          To contact Spotless Society directly about your facility in{' '}
          <strong>{summaryData.cityOrZip}</strong>, call or send your prepared summary via
          email below. On their live service, Spotless Society states that inquiries typically
          receive a response within one business day and walkthroughs are typically scheduled
          within 48 hours.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={BUSINESS_INFO.phoneHref}
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#123C4A] text-[#FAFBFA] text-sm font-semibold hover:bg-[#17262D] transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>Call {BUSINESS_INFO.phoneDisplay}</span>
          </a>
          <a
            href={buildMailtoHref()}
            className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#17262D]/25 text-[#17262D] text-sm font-semibold hover:bg-[#E6EBEA] transition-colors"
          >
            <Mail className="w-4 h-4 text-[#123C4A]" />
            <span>Email Prepared Summary to {BUSINESS_INFO.email}</span>
          </a>
        </div>

        <div className="mt-8 pt-6 border-t border-[#17262D]/12 flex items-center justify-between">
          <span className="text-xs text-[#6C8790]">
            Contact hours: {BUSINESS_INFO.contactHours}
          </span>
          <button
            type="button"
            onClick={resetForm}
            className="text-xs font-semibold text-[#123C4A] hover:underline cursor-pointer"
          >
            Edit or Start Another Demo Inquiry
          </button>
        </div>
      </div>
    );
  }

  // Review Screen Before Demo Submit
  if (isReviewing) {
    const isQuick = mode === 'quick';
    return (
      <div className="bg-[#FAFBFA] border border-[#17262D]/15 p-6 sm:p-10">
        <div className="pb-5 border-b border-[#17262D]/12 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-medium text-[#6C8790]">Step: Review Request</p>
            <h3 className="font-display text-2xl font-semibold text-[#17262D] mt-1">
              Review Your Facility Walkthrough Details
            </h3>
          </div>
          <button
            type="button"
            onClick={() => setIsReviewing(false)}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#123C4A] hover:text-[#17262D] cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Edit Details</span>
          </button>
        </div>

        <dl className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm">
          <div className="py-2 border-b border-[#17262D]/10">
            <dt className="text-xs text-[#6C8790]">Contact Name</dt>
            <dd className="font-medium text-[#17262D] mt-0.5">
              {isQuick ? quickData.contactName : detailedData.contactName}
            </dd>
          </div>
          <div className="py-2 border-b border-[#17262D]/10">
            <dt className="text-xs text-[#6C8790]">Business / Property</dt>
            <dd className="font-medium text-[#17262D] mt-0.5">
              {isQuick ? quickData.businessName : detailedData.businessName}
            </dd>
          </div>
          <div className="py-2 border-b border-[#17262D]/10">
            <dt className="text-xs text-[#6C8790]">Email</dt>
            <dd className="font-medium text-[#17262D] mt-0.5">
              {isQuick ? quickData.email : detailedData.email}
            </dd>
          </div>
          <div className="py-2 border-b border-[#17262D]/10">
            <dt className="text-xs text-[#6C8790]">Phone</dt>
            <dd className="font-medium text-[#17262D] mt-0.5 tabular-nums">
              {isQuick ? quickData.phone : detailedData.phone}
            </dd>
          </div>
          <div className="py-2 border-b border-[#17262D]/10">
            <dt className="text-xs text-[#6C8790]">City or ZIP Code</dt>
            <dd className="font-medium text-[#17262D] mt-0.5">
              {isQuick ? quickData.cityOrZip : detailedData.cityOrZip}
            </dd>
          </div>
          <div className="py-2 border-b border-[#17262D]/10">
            <dt className="text-xs text-[#6C8790]">Commercial Facility Type</dt>
            <dd className="font-medium text-[#17262D] mt-0.5">
              {isQuick ? quickData.facilityType : detailedData.facilityType}
            </dd>
          </div>

          {!isQuick && (
            <>
              <div className="py-2 border-b border-[#17262D]/10">
                <dt className="text-xs text-[#6C8790]">Primary Service Needed</dt>
                <dd className="font-medium text-[#17262D] mt-0.5">
                  {detailedData.serviceNeeded || 'Not specified'}
                </dd>
              </div>
              <div className="py-2 border-b border-[#17262D]/10">
                <dt className="text-xs text-[#6C8790]">Approximate Square Footage</dt>
                <dd className="font-medium text-[#17262D] mt-0.5">
                  {detailedData.squareFootage || 'To be confirmed during walkthrough'}
                </dd>
              </div>
              <div className="py-2 border-b border-[#17262D]/10">
                <dt className="text-xs text-[#6C8790]">Facility Street Address</dt>
                <dd className="font-medium text-[#17262D] mt-0.5">
                  {detailedData.facilityAddress || 'To be confirmed by phone/email'}
                </dd>
              </div>
              <div className="py-2 border-b border-[#17262D]/10">
                <dt className="text-xs text-[#6C8790]">Preferred Frequency &amp; Hours</dt>
                <dd className="font-medium text-[#17262D] mt-0.5">
                  {[detailedData.cleaningFrequency, detailedData.preferredHours]
                    .filter(Boolean)
                    .join(' · ') || 'Discuss at walkthrough'}
                </dd>
              </div>
            </>
          )}
        </dl>

        {!isQuick && detailedData.priorities.length > 0 && (
          <div className="mt-4 py-3 border-b border-[#17262D]/10">
            <div className="text-xs text-[#6C8790] mb-1.5">Selected Cleaning Priorities</div>
            <p className="text-sm text-[#17262D]">
              {detailedData.priorities.join(' · ')}
            </p>
          </div>
        )}

        {(isQuick ? quickData.message : detailedData.additionalNotes) && (
          <div className="mt-4 py-3 border-b border-[#17262D]/10">
            <div className="text-xs text-[#6C8790] mb-1">Additional Notes</div>
            <p className="text-sm text-[#17262D]">
              {isQuick ? quickData.message : detailedData.additionalNotes}
            </p>
          </div>
        )}

        <div className="mt-6 p-4 bg-[#E6EBEA]/60 border border-[#17262D]/10 text-xs text-[#17262D]/80 leading-relaxed">
          Note: This form is a static redesign demonstration. Submitting previews the
          confirmation step and prepares a direct click-to-email summary without transmitting
          data over a backend server.
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => setIsReviewing(false)}
            className="px-5 py-3 border border-[#17262D]/20 text-sm font-medium text-[#17262D] hover:bg-[#E6EBEA] transition-colors cursor-pointer"
          >
            Back to Edit
          </button>
          <button
            type="button"
            onClick={() => setIsSubmittedDemo(true)}
            className="px-6 py-3.5 bg-[#123C4A] text-[#FAFBFA] text-sm font-semibold hover:bg-[#17262D] transition-colors cursor-pointer"
          >
            Complete Demonstration Preview
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FAFBFA] border border-[#17262D]/15 p-6 sm:p-10">
      {/* Mode Switcher: Quick vs Detailed */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#17262D]/12">
        <div>
          <p className="text-xs font-medium text-[#6C8790]">
            Exclusively Commercial Walkthrough Inquiry
          </p>
          <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#17262D] mt-1">
            {mode === 'quick'
              ? 'Quick Walkthrough Request'
              : 'Detailed Facility Information'}
          </h3>
        </div>

        <div
          role="tablist"
          aria-label="Walkthrough request mode"
          className="inline-flex bg-[#E6EBEA] p-1 border border-[#17262D]/10 self-start sm:self-auto"
        >
          <button
            type="button"
            role="tab"
            aria-selected={mode === 'quick'}
            onClick={() => {
              setMode('quick');
              setErrors({});
            }}
            className={`px-3.5 py-2 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              mode === 'quick'
                ? 'bg-[#123C4A] text-[#FAFBFA]'
                : 'text-[#17262D]/75 hover:text-[#17262D]'
            }`}
          >
            Quick Request
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={mode === 'detailed'}
            onClick={() => {
              setMode('detailed');
              setErrors({});
            }}
            className={`px-3.5 py-2 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              mode === 'detailed'
                ? 'bg-[#123C4A] text-[#FAFBFA]'
                : 'text-[#17262D]/75 hover:text-[#17262D]'
            }`}
          >
            Detailed Facility Specs
          </button>
        </div>
      </div>

      {/* Medical Facility Privacy Reminder */}
      {isMedicalInquiry && (
        <div className="mt-6 p-4 bg-[#E6EBEA] border border-[#123C4A]/25 flex items-start gap-3">
          <Info className="w-4 h-4 text-[#123C4A] shrink-0 mt-0.5" />
          <p className="text-xs text-[#17262D]/85 leading-relaxed">
            For medical and dental offices, please share only general facility type, optional
            approximate size, scheduling preferences, and general cleaning priorities. Do not
            include patient records or sensitive healthcare information.
          </p>
        </div>
      )}

      {mode === 'quick' ? (
        <form onSubmit={handleQuickProceedToReview} noValidate className="mt-6 space-y-5">
          <p className="text-xs text-[#6C8790]">
            Fields marked with <span className="text-[#123C4A] font-semibold">*</span> are
            required. No square footage or street address is needed to start.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="quick-contact-name"
                className="block text-xs font-semibold text-[#17262D] mb-1.5"
              >
                Contact Name <span className="text-[#123C4A]">*</span>
              </label>
              <input
                id="quick-contact-name"
                type="text"
                value={quickData.contactName}
                onChange={(e) =>
                  setQuickData({ ...quickData, contactName: e.target.value })
                }
                placeholder="Jordan Taylor"
                className="w-full px-3.5 py-3 text-sm bg-white border border-[#17262D]/20 focus:border-[#123C4A] focus:outline-none"
              />
              {errors.contactName && (
                <p className="mt-1.5 text-xs text-red-700 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.contactName}</span>
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="quick-business-name"
                className="block text-xs font-semibold text-[#17262D] mb-1.5"
              >
                Business Name <span className="text-[#123C4A]">*</span>
              </label>
              <input
                id="quick-business-name"
                type="text"
                value={quickData.businessName}
                onChange={(e) =>
                  setQuickData({ ...quickData, businessName: e.target.value })
                }
                placeholder="Metro Commercial Partners"
                className="w-full px-3.5 py-3 text-sm bg-white border border-[#17262D]/20 focus:border-[#123C4A] focus:outline-none"
              />
              {errors.businessName && (
                <p className="mt-1.5 text-xs text-red-700 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.businessName}</span>
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="quick-email"
                className="block text-xs font-semibold text-[#17262D] mb-1.5"
              >
                Email <span className="text-[#123C4A]">*</span>
              </label>
              <input
                id="quick-email"
                type="email"
                value={quickData.email}
                onChange={(e) => setQuickData({ ...quickData, email: e.target.value })}
                placeholder="facilities@company.com"
                className="w-full px-3.5 py-3 text-sm bg-white border border-[#17262D]/20 focus:border-[#123C4A] focus:outline-none"
              />
              {errors.email && (
                <p className="mt-1.5 text-xs text-red-700 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.email}</span>
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="quick-phone"
                className="block text-xs font-semibold text-[#17262D] mb-1.5"
              >
                Phone <span className="text-[#123C4A]">*</span>
              </label>
              <input
                id="quick-phone"
                type="tel"
                value={quickData.phone}
                onChange={(e) => setQuickData({ ...quickData, phone: e.target.value })}
                placeholder="(405) 555-0192"
                className="w-full px-3.5 py-3 text-sm bg-white border border-[#17262D]/20 focus:border-[#123C4A] focus:outline-none"
              />
              {errors.phone && (
                <p className="mt-1.5 text-xs text-red-700 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.phone}</span>
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="quick-city-zip"
                className="block text-xs font-semibold text-[#17262D] mb-1.5"
              >
                City or ZIP Code <span className="text-[#123C4A]">*</span>
              </label>
              <input
                id="quick-city-zip"
                type="text"
                value={quickData.cityOrZip}
                onChange={(e) =>
                  setQuickData({ ...quickData, cityOrZip: e.target.value })
                }
                placeholder="Oklahoma City or 73102"
                className="w-full px-3.5 py-3 text-sm bg-white border border-[#17262D]/20 focus:border-[#123C4A] focus:outline-none"
              />
              {errors.cityOrZip && (
                <p className="mt-1.5 text-xs text-red-700 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.cityOrZip}</span>
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="quick-facility-type"
                className="block text-xs font-semibold text-[#17262D] mb-1.5"
              >
                Facility Type <span className="text-[#123C4A]">*</span>
              </label>
              <select
                id="quick-facility-type"
                value={quickData.facilityType}
                onChange={(e) =>
                  setQuickData({ ...quickData, facilityType: e.target.value })
                }
                className="w-full px-3.5 py-3 text-sm bg-white border border-[#17262D]/20 focus:border-[#123C4A] focus:outline-none"
              >
                <option value="">Select commercial facility type</option>
                {FACILITY_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              {errors.facilityType && (
                <p className="mt-1.5 text-xs text-red-700 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.facilityType}</span>
                </p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="quick-message"
              className="block text-xs font-semibold text-[#17262D] mb-1.5"
            >
              Short Message <span className="text-[#6C8790] font-normal">(Optional)</span>
            </label>
            <textarea
              id="quick-message"
              rows={3}
              value={quickData.message}
              onChange={(e) => setQuickData({ ...quickData, message: e.target.value })}
              placeholder="Preferred walkthrough days, building access notes, or priority areas..."
              className="w-full px-3.5 py-3 text-sm bg-white border border-[#17262D]/20 focus:border-[#123C4A] focus:outline-none"
            />
          </div>

          <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-xs text-[#6C8790]">
              Don’t know your square footage? No problem—details are confirmed during the
              walkthrough.
            </p>
            <button
              type="submit"
              className="px-6 py-3.5 bg-[#123C4A] text-[#FAFBFA] text-sm font-semibold hover:bg-[#17262D] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Request My Free Walkthrough
            </button>
          </div>
        </form>
      ) : (
        /* Detailed Facility Form with Progress Indicator */
        <div className="mt-6">
          {/* Progress Indicator */}
          <div className="grid grid-cols-3 gap-2 pb-6 border-b border-[#17262D]/10">
            {[
              { step: 1, label: '01. Contact & Facility' },
              { step: 2, label: '02. Location & Size (Optional)' },
              { step: 3, label: '03. Schedule & Priorities' },
            ].map((item) => {
              const active = detailedStep === item.step;
              const completed = detailedStep > item.step;
              return (
                <button
                  key={item.step}
                  type="button"
                  onClick={() => {
                    if (item.step < detailedStep) setDetailedStep(item.step as 1 | 2 | 3);
                  }}
                  className={`p-3 text-left border transition-colors ${
                    active
                      ? 'bg-[#123C4A] text-[#FAFBFA] border-[#123C4A]'
                      : completed
                      ? 'bg-[#E6EBEA] text-[#17262D] border-[#123C4A]/30 cursor-pointer'
                      : 'bg-white text-[#6C8790] border-[#17262D]/12'
                  }`}
                >
                  <div className="text-xs font-semibold flex items-center justify-between gap-2">
                    <span className="truncate">{item.label}</span>
                    {completed && <Check className="w-3.5 h-3.5 text-[#123C4A] shrink-0" />}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Step 1 */}
          {detailedStep === 1 && (
            <div className="mt-6 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="det-contact-name"
                    className="block text-xs font-semibold text-[#17262D] mb-1.5"
                  >
                    Contact Name <span className="text-[#123C4A]">*</span>
                  </label>
                  <input
                    id="det-contact-name"
                    type="text"
                    value={detailedData.contactName}
                    onChange={(e) =>
                      setDetailedData({ ...detailedData, contactName: e.target.value })
                    }
                    className="w-full px-3.5 py-3 text-sm bg-white border border-[#17262D]/20 focus:border-[#123C4A] focus:outline-none"
                  />
                  {errors.contactName && (
                    <p className="mt-1.5 text-xs text-red-700">{errors.contactName}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="det-business-name"
                    className="block text-xs font-semibold text-[#17262D] mb-1.5"
                  >
                    Business Name <span className="text-[#123C4A]">*</span>
                  </label>
                  <input
                    id="det-business-name"
                    type="text"
                    value={detailedData.businessName}
                    onChange={(e) =>
                      setDetailedData({ ...detailedData, businessName: e.target.value })
                    }
                    className="w-full px-3.5 py-3 text-sm bg-white border border-[#17262D]/20 focus:border-[#123C4A] focus:outline-none"
                  />
                  {errors.businessName && (
                    <p className="mt-1.5 text-xs text-red-700">{errors.businessName}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="det-email"
                    className="block text-xs font-semibold text-[#17262D] mb-1.5"
                  >
                    Email <span className="text-[#123C4A]">*</span>
                  </label>
                  <input
                    id="det-email"
                    type="email"
                    value={detailedData.email}
                    onChange={(e) =>
                      setDetailedData({ ...detailedData, email: e.target.value })
                    }
                    className="w-full px-3.5 py-3 text-sm bg-white border border-[#17262D]/20 focus:border-[#123C4A] focus:outline-none"
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-700">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="det-phone"
                    className="block text-xs font-semibold text-[#17262D] mb-1.5"
                  >
                    Phone <span className="text-[#123C4A]">*</span>
                  </label>
                  <input
                    id="det-phone"
                    type="tel"
                    value={detailedData.phone}
                    onChange={(e) =>
                      setDetailedData({ ...detailedData, phone: e.target.value })
                    }
                    className="w-full px-3.5 py-3 text-sm bg-white border border-[#17262D]/20 focus:border-[#123C4A] focus:outline-none"
                  />
                  {errors.phone && (
                    <p className="mt-1.5 text-xs text-red-700">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="det-facility-type"
                    className="block text-xs font-semibold text-[#17262D] mb-1.5"
                  >
                    Facility Type <span className="text-[#123C4A]">*</span>
                  </label>
                  <select
                    id="det-facility-type"
                    value={detailedData.facilityType}
                    onChange={(e) =>
                      setDetailedData({ ...detailedData, facilityType: e.target.value })
                    }
                    className="w-full px-3.5 py-3 text-sm bg-white border border-[#17262D]/20 focus:border-[#123C4A] focus:outline-none"
                  >
                    <option value="">Select facility type</option>
                    {FACILITY_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.facilityType && (
                    <p className="mt-1.5 text-xs text-red-700">{errors.facilityType}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="det-service-needed"
                    className="block text-xs font-semibold text-[#17262D] mb-1.5"
                  >
                    Service Needed
                  </label>
                  <select
                    id="det-service-needed"
                    value={detailedData.serviceNeeded}
                    onChange={(e) =>
                      setDetailedData({ ...detailedData, serviceNeeded: e.target.value })
                    }
                    className="w-full px-3.5 py-3 text-sm bg-white border border-[#17262D]/20 focus:border-[#123C4A] focus:outline-none"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Optional Square Footage & Optional Address */}
          {detailedStep === 2 && (
            <div className="mt-6 space-y-5">
              <div className="p-4 bg-[#E6EBEA]/65 border border-[#17262D]/12 text-xs text-[#17262D]/85 leading-relaxed">
                <strong>Square footage and street address are optional.</strong> If you know
                your facility address without the square footage, or only have a city/ZIP code
                today, you can proceed without restriction—our team confirms measurements during
                your walkthrough.
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="det-city-zip"
                    className="block text-xs font-semibold text-[#17262D] mb-1.5"
                  >
                    City or ZIP Code <span className="text-[#123C4A]">*</span>
                  </label>
                  <input
                    id="det-city-zip"
                    type="text"
                    value={detailedData.cityOrZip}
                    onChange={(e) =>
                      setDetailedData({ ...detailedData, cityOrZip: e.target.value })
                    }
                    placeholder="Oklahoma City, Edmond, 73102..."
                    className="w-full px-3.5 py-3 text-sm bg-white border border-[#17262D]/20 focus:border-[#123C4A] focus:outline-none"
                  />
                  {errors.cityOrZip && (
                    <p className="mt-1.5 text-xs text-red-700">{errors.cityOrZip}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="det-sqft"
                    className="block text-xs font-semibold text-[#17262D] mb-1.5"
                  >
                    Approximate Square Footage{' '}
                    <span className="text-[#6C8790] font-normal">(Optional)</span>
                  </label>
                  <input
                    id="det-sqft"
                    type="text"
                    value={detailedData.squareFootage}
                    onChange={(e) =>
                      setDetailedData({ ...detailedData, squareFootage: e.target.value })
                    }
                    placeholder="e.g., 8,500 sq ft (leave blank if unknown)"
                    className="w-full px-3.5 py-3 text-sm bg-white border border-[#17262D]/20 focus:border-[#123C4A] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="det-address"
                  className="block text-xs font-semibold text-[#17262D] mb-1.5"
                >
                  Facility Address{' '}
                  <span className="text-[#6C8790] font-normal">(Optional)</span>
                </label>
                <input
                  id="det-address"
                  type="text"
                  value={detailedData.facilityAddress}
                  onChange={(e) =>
                    setDetailedData({ ...detailedData, facilityAddress: e.target.value })
                  }
                  placeholder="Street address & suite number (optional)"
                  className="w-full px-3.5 py-3 text-sm bg-white border border-[#17262D]/20 focus:border-[#123C4A] focus:outline-none"
                />
              </div>
            </div>
          )}

          {/* Step 3: Frequency, Hours, Priorities, Optional Photos */}
          {detailedStep === 3 && (
            <div className="mt-6 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="det-frequency"
                    className="block text-xs font-semibold text-[#17262D] mb-1.5"
                  >
                    Preferred Cleaning Frequency{' '}
                    <span className="text-[#6C8790] font-normal">(Optional)</span>
                  </label>
                  <select
                    id="det-frequency"
                    value={detailedData.cleaningFrequency}
                    onChange={(e) =>
                      setDetailedData({
                        ...detailedData,
                        cleaningFrequency: e.target.value,
                      })
                    }
                    className="w-full px-3.5 py-3 text-sm bg-white border border-[#17262D]/20 focus:border-[#123C4A] focus:outline-none"
                  >
                    <option value="">Select frequency</option>
                    {FREQUENCY_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="det-hours"
                    className="block text-xs font-semibold text-[#17262D] mb-1.5"
                  >
                    Preferred Cleaning Hours{' '}
                    <span className="text-[#6C8790] font-normal">(Optional)</span>
                  </label>
                  <select
                    id="det-hours"
                    value={detailedData.preferredHours}
                    onChange={(e) =>
                      setDetailedData({ ...detailedData, preferredHours: e.target.value })
                    }
                    className="w-full px-3.5 py-3 text-sm bg-white border border-[#17262D]/20 focus:border-[#123C4A] focus:outline-none"
                  >
                    <option value="">Select preferred service window</option>
                    {HOUR_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <span className="block text-xs font-semibold text-[#17262D] mb-2.5">
                  Cleaning Priorities{' '}
                  <span className="text-[#6C8790] font-normal">(Optional)</span>
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {CLEANING_PRIORITIES.map((priority) => {
                    const checked = detailedData.priorities.includes(priority);
                    return (
                      <label
                        key={priority}
                        className={`flex items-start gap-2.5 p-3 border text-xs cursor-pointer transition-colors ${
                          checked
                            ? 'bg-[#E6EBEA] border-[#123C4A]/40 text-[#17262D]'
                            : 'bg-white border-[#17262D]/15 text-[#17262D]/80'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => togglePriority(priority)}
                          className="mt-0.5 accent-[#123C4A]"
                        />
                        <span>{priority}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              <div>
                <label
                  htmlFor="det-notes"
                  className="block text-xs font-semibold text-[#17262D] mb-1.5"
                >
                  Additional Notes{' '}
                  <span className="text-[#6C8790] font-normal">(Optional)</span>
                </label>
                <textarea
                  id="det-notes"
                  rows={3}
                  value={detailedData.additionalNotes}
                  onChange={(e) =>
                    setDetailedData({ ...detailedData, additionalNotes: e.target.value })
                  }
                  placeholder="Access procedures, flooring materials, or timing milestones..."
                  className="w-full px-3.5 py-3 text-sm bg-white border border-[#17262D]/20 focus:border-[#123C4A] focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="det-photos"
                  className="block text-xs font-semibold text-[#17262D] mb-1.5"
                >
                  Optional Facility Photos{' '}
                  <span className="text-[#6C8790] font-normal">(Optional, local preview only)</span>
                </label>
                <label
                  htmlFor="det-photos"
                  className="flex items-center justify-between gap-4 px-4 py-3 bg-white border border-dashed border-[#17262D]/25 text-xs text-[#17262D]/75 hover:border-[#123C4A] cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <Upload className="w-4 h-4 text-[#123C4A]" />
                    <span>
                      {detailedData.photoNames.length > 0
                        ? `${detailedData.photoNames.length} file(s) selected: ${detailedData.photoNames.join(', ')}`
                        : 'Attach optional lobby or floor reference photos'}
                    </span>
                  </span>
                  <input
                    id="det-photos"
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handlePhotoSelect}
                    className="sr-only"
                  />
                </label>
              </div>
            </div>
          )}

          {/* Step Navigation Controls */}
          <div className="mt-8 pt-6 border-t border-[#17262D]/12 flex items-center justify-between gap-4">
            {detailedStep > 1 ? (
              <button
                type="button"
                onClick={() => setDetailedStep((prev) => (prev - 1) as 1 | 2 | 3)}
                className="inline-flex items-center gap-1.5 px-5 py-3 border border-[#17262D]/20 text-sm font-medium text-[#17262D] hover:bg-[#E6EBEA] transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>
            ) : (
              <span className="text-xs text-[#6C8790]">Step 1 of 3</span>
            )}

            <button
              type="button"
              onClick={handleDetailedNext}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#123C4A] text-[#FAFBFA] text-sm font-semibold hover:bg-[#17262D] transition-colors cursor-pointer"
            >
              <span>
                {detailedStep < 3 ? 'Continue' : 'Review Walkthrough Request'}
              </span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
