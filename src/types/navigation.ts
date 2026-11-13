export type PageId =
  | 'home'
  | 'commercial-cleaning'
  | 'office-cleaning'
  | 'medical-office-cleaning'
  | 'janitorial-services'
  | 'retail-cleaning'
  | 'post-construction-cleaning'
  | 'industries'
  | 'our-approach'
  | 'service-areas'
  | 'about'
  | 'faqs'
  | 'walkthrough'
  | 'contact';

export interface WalkthroughPrefill {
  facilityType?: string;
  serviceNeeded?: string;
  cityOrZip?: string;
}

export interface ServiceItem {
  id:
    | 'commercial-cleaning'
    | 'office-cleaning'
    | 'medical-office-cleaning'
    | 'janitorial-services'
    | 'retail-cleaning'
    | 'post-construction-cleaning';
  index: string;
  title: string;
  shortLabel: string;
  summary: string;
  idealFor: string;
  image: string;
  imageAlt: string;
  heroStatement: string;
  description: string;
  scopeHighlights: string[];
  operationalBenefits: string[];
  schedulingNote: string;
  clarificationNote?: string;
}

export interface IndustryItem {
  id: string;
  name: string;
  summary: string;
  focusAreas: string[];
  typicalCadence: string;
  recommendedServiceId: ServiceItem['id'];
  recommendedServiceName: string;
  image: string;
  imageAlt: string;
  note?: string;
}

export interface ServiceAreaCity {
  name: string;
  corridor: string;
  distanceNote: string;
  sampleZips: string[];
  coordinates: { x: number; y: number };
  summary: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}
