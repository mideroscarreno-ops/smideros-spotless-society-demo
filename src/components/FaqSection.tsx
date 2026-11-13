import React, { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import { FAQS } from '../data/spotlessData';

interface FaqSectionProps {
  onRequestWalkthrough: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onRequestWalkthrough }) => {
  const [openId, setOpenId] = useState<string>(FAQS[1].id); // Highlight commercial-only policy early or first item

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? '' : id));
  };

  return (
    <section
      id="faq-section"
      aria-labelledby="faq-heading"
      className="py-20 lg:py-28 bg-[#FAFBFA] border-b border-[#17262D]/10"
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
        <div className="lg:col-span-5">
          <p className="text-xs font-medium tracking-wide text-[#6C8790] mb-3">
            Frequently Asked Questions
          </p>
          <h2
            id="faq-heading"
            className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#17262D] leading-[1.12] [text-wrap:balance]"
          >
            Straightforward Answers on Commercial Scope &amp; Scheduling.
          </h2>
          <p className="mt-4 text-base text-[#17262D]/75 leading-relaxed">
            Every answer reflects Spotless Society’s published commercial policies across the
            Oklahoma City metro. Have a facility-specific question?
          </p>
          <div className="mt-7">
            <button
              type="button"
              onClick={onRequestWalkthrough}
              className="px-5 py-3 bg-[#123C4A] text-[#FAFBFA] text-sm font-semibold hover:bg-[#17262D] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Request Your Free Walkthrough
            </button>
          </div>
        </div>

        <div className="lg:col-span-7 border-t border-[#17262D]/12 divide-y divide-[#17262D]/12">
          {FAQS.map((item) => {
            const isOpen = openId === item.id;
            const buttonId = `faq-btn-${item.id}`;
            const panelId = `faq-panel-${item.id}`;
            return (
              <div key={item.id}>
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(item.id)}
                    className="w-full py-5 text-left flex items-start justify-between gap-4 hover:text-[#123C4A] transition-colors cursor-pointer"
                  >
                    <div>
                      <span className="text-xs font-medium text-[#6C8790] block mb-1">
                        {item.category}
                      </span>
                      <span className="font-display text-base sm:text-lg font-semibold text-[#17262D]">
                        {item.question}
                      </span>
                    </div>
                    <span className="w-8 h-8 border border-[#17262D]/15 flex items-center justify-center shrink-0 mt-1 text-[#123C4A]">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>
                </h3>
                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="pb-6 pr-8 text-sm sm:text-base text-[#17262D]/80 leading-relaxed"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
