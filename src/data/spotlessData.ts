import {
  FaqItem,
  IndustryItem,
  PageId,
  ServiceAreaCity,
  ServiceItem,
} from '../types/navigation';

export const BUSINESS_INFO = {
  name: 'Spotless Society',
  location: 'Oklahoma City, Oklahoma',
  phoneDisplay: '(405) 655-1137',
  phoneHref: 'tel:4056551137',
  email: 'info@spotlesssocietyok.com',
  emailHref: 'mailto:info@spotlesssocietyok.com',
  contactHours: 'Monday–Sunday, 7:00 AM–7:00 PM',
  serviceRadiusNote: 'Within approximately 30 driving miles of Oklahoma City',
  responseTarget: 'Typically within one business day',
  walkthroughTimeline: 'Typically scheduled within 48 hours',
  disclosure: 'Independent website redesign concept by S.Mideros Agency.',
};

export const HERO_IMAGE = {
  src: '/images/hero-corporate-lobby.webp',
  alt: 'Pristine modern corporate office lobby in Oklahoma City with polished terrazzo flooring, floor-to-ceiling glass, and minimalist reception desk',
};

export const OFFICE_IMAGE = {
  src: '/images/service-office-suite.webp',
  alt: 'Clean modern executive office corridor and glass-walled conference room with neatly maintained commercial flooring',
};

export const MEDICAL_IMAGE = {
  src: '/images/service-medical-clinic.webp',
  alt: 'Contemporary medical office reception lobby with spotless porcelain tile flooring and calm architectural millwork',
};

export const RETAIL_IMAGE = {
  src: '/images/service-retail-showroom.webp',
  alt: 'Modern retail showroom interior featuring polished concrete flooring and spotless storefront glass windows',
};

export const POST_CONSTRUCTION_IMAGE = {
  src: '/images/service-post-construction.webp',
  alt: 'Newly completed multi-story commercial building atrium prepared for occupancy after post-construction cleaning',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'commercial-cleaning',
    index: '01',
    title: 'Commercial Cleaning',
    shortLabel: 'Commercial',
    summary: 'For offices, shared buildings, and business facilities.',
    idealFor: 'Multi-tenant buildings, corporate campuses, and commercial properties',
    image: HERO_IMAGE.src,
    imageAlt: HERO_IMAGE.alt,
    heroStatement:
      'Structured commercial facility care built around your building operations.',
    description:
      'Spotless Society delivers reliable, tailored commercial cleaning for Oklahoma City businesses, property managers, and multi-tenant buildings. Each plan begins with an on-site walkthrough so every corridor, lobby, restroom, and shared workspace receives consistent attention.',
    scopeHighlights: [
      'Main lobbies, atriums, elevator cabs, and building entry glass',
      'Shared corridors, stairwells, and multi-tenant common areas',
      'Commercial restroom sanitation and consumable restocking coordination',
      'Hard-surface floor care, mopping, and commercial carpet vacuuming',
      'Trash and recycling collection across workstations and shared hubs',
    ],
    operationalBenefits: [
      'Consistent, uniformed, background-checked crew assignments',
      'Custom scope tailored to building traffic and tenant schedules',
      'Ongoing quality-control inspections and responsive local management',
      'Flexible after-hours or daytime service windows',
    ],
    schedulingNote:
      'Available on daily, multi-day weekly, or customized commercial service frequencies.',
  },
  {
    id: 'office-cleaning',
    index: '02',
    title: 'Office Cleaning',
    shortLabel: 'Office',
    summary: 'For workspaces, conference rooms, administrative offices, and common areas.',
    idealFor: 'Corporate suites, executive offices, and administrative workspaces',
    image: OFFICE_IMAGE.src,
    imageAlt: OFFICE_IMAGE.alt,
    heroStatement:
      'Quiet, dependable office care that protects focus and client impressions.',
    description:
      'Your workspace shapes how employees work and how visiting clients perceive your business. Our office cleaning service keeps conference rooms, private suites, breakrooms, and open workstations crisp without disrupting daily operations.',
    scopeHighlights: [
      'Conference room tables, glass partitions, and presentation spaces',
      'Reception desks, waiting lounges, and executive offices',
      'Workstation surface dusting and high-touch point care',
      'Breakrooms, kitchenettes, counters, and appliance exteriors',
      'Restroom cleaning, fixture polishing, and floor maintenance',
    ],
    operationalBenefits: [
      'After-hours cleaning options aligned with your business hours',
      'Consistent team familiarity with your suite layout and access protocols',
      'Clear communication channel with Oklahoma City local management',
      'Periodic quality audits to keep standards uniform over time',
    ],
    schedulingNote:
      'Scheduled around morning openings, evening closures, or weekend office hours.',
  },
  {
    id: 'medical-office-cleaning',
    index: '03',
    title: 'Medical Office Cleaning',
    shortLabel: 'Medical Office',
    summary: 'For clinics, dental offices, and healthcare-related facilities.',
    idealFor: 'Outpatient clinics, dental practices, and medical office suites',
    image: MEDICAL_IMAGE.src,
    imageAlt: MEDICAL_IMAGE.alt,
    heroStatement:
      'Attentive, structured cleaning for patient-facing clinical and administrative environments.',
    description:
      'Medical and dental offices require dependable, detail-oriented care across waiting rooms, administrative corridors, restrooms, and non-clinical support areas. We coordinate closely with practice managers during an on-site walkthrough to establish clear, documented priorities.',
    scopeHighlights: [
      'Patient reception lobbies, seating areas, and check-in counters',
      'Administrative offices, hallways, and staff breakrooms',
      'Patient and staff restroom cleaning and fixture care',
      'Hard-surface floor sweeping, damp mopping, and detail edging',
      'Trash removal and routine surface wiping per facility scope',
    ],
    operationalBenefits: [
      'Consistent, background-checked and uniformed commercial teams',
      'After-hours service arranged outside patient appointment schedules',
      'Scope tailored strictly to your clinic layout and surface materials',
      'Post-cleaning inspections and proactive management check-ins',
    ],
    schedulingNote:
      'Typically scheduled evenings or weekends after clinic hours to avoid patient disruption.',
    clarificationNote:
      'Spotless Society provides commercial janitorial and facility cleaning tailored to your practice priorities. During inquiries, we never request patient records or sensitive medical information, and we encourage facility managers to review specific scope expectations during the on-site walkthrough.',
  },
  {
    id: 'janitorial-services',
    index: '04',
    title: 'Janitorial Services',
    shortLabel: 'Janitorial',
    summary: 'For ongoing facility cleaning, trash removal, floor care, restrooms, and related maintenance.',
    idealFor: 'Recurring commercial maintenance across offices, industrial, and shared properties',
    image: OFFICE_IMAGE.src,
    imageAlt: 'Well-maintained commercial facility hallway and interior glass',
    heroStatement:
      'Consistent recurring janitorial support that keeps operations running cleanly.',
    description:
      'Ongoing janitorial service is the backbone of a well-run commercial facility. Spotless Society assigns dedicated crews and builds repeatable cleaning routines covering restrooms, floors, waste handling, and high-traffic shared areas.',
    scopeHighlights: [
      'Recurring restroom sanitation, mirror polishing, and supply restocking',
      'Daily or scheduled trash removal and liner replacement',
      'Commercial floor care including sweeping, vacuuming, and damp mopping',
      'Entrance doors, glass smudges, and high-traffic corridor upkeep',
      'Breakroom and common-area surface maintenance',
    ],
    operationalBenefits: [
      'Consistent crew assignments rather than rotating unfamiliar personnel',
      'All cleaning supplies and commercial equipment can be coordinated in your plan',
      'Structured quality-control follow-ups and periodic site audits',
      'Adaptable service frequency as occupancy or seasonal traffic shifts',
    ],
    schedulingNote:
      'Flexible daily, 3x-weekly, weekly, or custom recurring schedules.',
  },
  {
    id: 'retail-cleaning',
    index: '05',
    title: 'Retail Cleaning',
    shortLabel: 'Retail',
    summary: 'For stores, showrooms, and customer-facing commercial environments.',
    idealFor: 'Retail storefronts, showrooms, galleries, and customer service centers',
    image: RETAIL_IMAGE.src,
    imageAlt: RETAIL_IMAGE.alt,
    heroStatement:
      'Presentation-ready retail environments from storefront glass to showroom floor.',
    description:
      'Customer-facing spaces leave an immediate impression before a conversation even starts. Our retail cleaning team focuses on spotless entry glass, streak-free display surfaces, crisp flooring, and fresh customer restrooms.',
    scopeHighlights: [
      'Storefront glass doors, interior glass, and entry threshold detailing',
      'Polished concrete, tile, LVT, and carpeted sales-floor maintenance',
      'Display counters, checkout areas, and fitting-room upkeep',
      'Customer and employee restroom cleaning',
      'Back-of-house corridor and breakroom maintenance',
    ],
    operationalBenefits: [
      'Early-morning or post-closing schedules tailored to retail operating hours',
      'Uniformed crews mindful of merchandise and architectural finishes',
      'Clean, streak-free glass and floor presentation ahead of store opening',
      'Consistent inspection standards backed by local oversight',
    ],
    schedulingNote:
      'Scheduled before opening or after store closing, seven days a week as needed.',
  },
  {
    id: 'post-construction-cleaning',
    index: '06',
    title: 'Post-Construction Cleaning',
    shortLabel: 'Post-Construction',
    summary: 'For commercial properties following renovations or construction.',
    idealFor: 'New commercial builds, tenant build-outs, and commercial property turnovers',
    image: POST_CONSTRUCTION_IMAGE.src,
    imageAlt: POST_CONSTRUCTION_IMAGE.alt,
    heroStatement:
      'Detailed turnover cleaning that prepares newly built commercial spaces for occupancy.',
    description:
      'After contractors wrap up a commercial renovation or tenant build-out, fine dust and construction residue remain across fixtures, glass, and flooring. Spotless Society prepares commercial properties for move-in, leasing showings, and grand openings.',
    scopeHighlights: [
      'Fine construction dust removal from ledges, sills, vents, and millwork',
      'Interior glass, partition framing, and commercial doorway detailing',
      'Floor sweeping, vacuuming, and residue-free mopping across new surfaces',
      'Restroom fixture polishing and breakroom cabinetry wipe-downs',
      'Commercial tenant-turnover and lease-ready presentation prep',
    ],
    operationalBenefits: [
      'Focused exclusively on commercial renovations, build-outs, and commercial turnovers',
      'Walkthrough-verified scope matched to project completion timelines',
      'Uniformed, insured crew equipped for commercial post-build detail work',
      'Smooth transition into ongoing commercial janitorial service if desired',
    ],
    schedulingNote:
      'Coordinated around contractor handoff dates, inspection schedules, and tenant move-in targets.',
    clarificationNote:
      'Post-construction and turnover cleaning applies strictly to commercial properties, tenant build-outs, and commercial building common areas—not residential homes.',
  },
];

export const INDUSTRIES: IndustryItem[] = [
  {
    id: 'corporate-offices',
    name: 'Corporate Offices',
    summary:
      'Multi-floor headquarters, executive suites, and collaborative business environments across the Oklahoma City metro.',
    focusAreas: [
      'Reception lobbies and visitor lounges',
      'Glass-walled conference and boardrooms',
      'Workstations, corridors, and shared breakrooms',
      'Restroom sanitation and floor care',
    ],
    typicalCadence: 'Daily or multi-day weekly after-hours service',
    recommendedServiceId: 'office-cleaning',
    recommendedServiceName: 'Office Cleaning',
    image: OFFICE_IMAGE.src,
    imageAlt: OFFICE_IMAGE.alt,
  },
  {
    id: 'medical-clinics',
    name: 'Medical Clinics',
    summary:
      'Outpatient clinics, dental practices, and healthcare-related offices requiring attentive, dependable commercial cleaning.',
    focusAreas: [
      'Patient waiting rooms and check-in counters',
      'Administrative corridors and staff rooms',
      'Patient and team restrooms',
      'Hard-surface floor care and routine surface wiping',
    ],
    typicalCadence: 'Evening or weekend schedules outside clinic hours',
    recommendedServiceId: 'medical-office-cleaning',
    recommendedServiceName: 'Medical Office Cleaning',
    image: MEDICAL_IMAGE.src,
    imageAlt: MEDICAL_IMAGE.alt,
    note: 'Scoped directly with practice leadership during an on-site walkthrough without collecting sensitive patient information.',
  },
  {
    id: 'retail-stores',
    name: 'Retail Stores',
    summary:
      'Customer-facing boutiques, commercial showrooms, and retail storefronts where presentation drives foot traffic.',
    focusAreas: [
      'Storefront glass doors and interior display glass',
      'Sales floor sweeping, mopping, and vacuuming',
      'Checkout counters and customer seating areas',
      'Customer and staff restrooms',
    ],
    typicalCadence: 'Pre-opening mornings or post-closing evenings',
    recommendedServiceId: 'retail-cleaning',
    recommendedServiceName: 'Retail Cleaning',
    image: RETAIL_IMAGE.src,
    imageAlt: RETAIL_IMAGE.alt,
  },
  {
    id: 'apartment-common-areas',
    name: 'Apartment Common Areas',
    summary:
      'Commercial leasing offices, resident lobbies, corridors, mailrooms, and shared amenity spaces for multifamily properties.',
    focusAreas: [
      'Leasing offices and resident welcome lobbies',
      'Interior building corridors, stairwells, and elevators',
      'Shared clubrooms, business centers, and amenity lounges',
      'Common-area restrooms and glass entryways',
    ],
    typicalCadence: 'Scheduled recurring commercial property maintenance',
    recommendedServiceId: 'commercial-cleaning',
    recommendedServiceName: 'Commercial Cleaning',
    image: HERO_IMAGE.src,
    imageAlt: 'Commercial multifamily lobby and leasing entrance',
    note: 'Commercial common areas and leasing spaces only—Spotless Society does not clean private residential apartment interiors.',
  },
  {
    id: 'industrial-facilities',
    name: 'Industrial Facilities',
    summary:
      'Office zones, breakrooms, locker rooms, and administrative support areas inside commercial industrial and warehouse operations.',
    focusAreas: [
      'Plant offices, dispatch desks, and conference rooms',
      'High-traffic employee breakrooms and locker restrooms',
      'Entry corridors and hard-surface floors',
      'Trash collection and shift-change upkeep',
    ],
    typicalCadence: 'Shift-aligned daily or multi-weekly janitorial plans',
    recommendedServiceId: 'janitorial-services',
    recommendedServiceName: 'Janitorial Services',
    image: POST_CONSTRUCTION_IMAGE.src,
    imageAlt: 'Clean commercial industrial and administrative facility interior',
  },
  {
    id: 'professional-offices',
    name: 'Professional Offices',
    summary:
      'Law firms, accounting practices, engineering consultancies, and client-advisory suites where quiet reliability matters.',
    focusAreas: [
      'Client reception and partner offices',
      'Meeting rooms and document-ready work areas',
      'Kitchenettes and hospitality stations',
      'Restrooms and carpet or hard-floor upkeep',
    ],
    typicalCadence: 'Evening or weekend recurring service',
    recommendedServiceId: 'office-cleaning',
    recommendedServiceName: 'Office Cleaning',
    image: OFFICE_IMAGE.src,
    imageAlt: OFFICE_IMAGE.alt,
  },
  {
    id: 'multi-tenant-buildings',
    name: 'Multi-Tenant Buildings',
    summary:
      'Commercial office buildings and mixed-use business centers managed by local property and facility teams.',
    focusAreas: [
      'Shared ground-floor lobbies and atrium glass',
      'Multi-floor corridors, elevator lobbies, and stairwells',
      'Common-floor restrooms and janitorial closets',
      'Tenant turnover prep for commercial lease spaces',
    ],
    typicalCadence: 'Nightly common-area care plus custom tenant-turnover scopes',
    recommendedServiceId: 'commercial-cleaning',
    recommendedServiceName: 'Commercial Cleaning',
    image: HERO_IMAGE.src,
    imageAlt: HERO_IMAGE.alt,
  },
  {
    id: 'educational-facilities',
    name: 'Educational Facilities',
    summary:
      'Private campuses, training centers, administrative buildings, and classrooms requiring dependable recurring upkeep.',
    focusAreas: [
      'Classrooms, lecture spaces, and administrative offices',
      'High-traffic hallways and shared lobbies',
      'Multi-stall restrooms and common break areas',
      'Floor care and daily waste removal',
    ],
    typicalCadence: 'After-hours evening and weekend cleaning schedules',
    recommendedServiceId: 'janitorial-services',
    recommendedServiceName: 'Janitorial Services',
    image: POST_CONSTRUCTION_IMAGE.src,
    imageAlt: 'Modern commercial educational atrium and corridor',
  },
  {
    id: 'fitness-facilities',
    name: 'Fitness Facilities',
    summary:
      'Commercial gyms, athletic studios, and wellness clubs requiring consistent floor care, locker room sanitation, and glass upkeep.',
    focusAreas: [
      'Front desk lobbies, mirrors, and glass partitions',
      'Locker rooms, showers, and high-use restrooms',
      'Training studio floors and high-touch equipment perimeters',
      'Towel/waste stations and circulation corridors',
    ],
    typicalCadence: 'Late-night or early-morning low-traffic service windows',
    recommendedServiceId: 'janitorial-services',
    recommendedServiceName: 'Janitorial Services',
    image: RETAIL_IMAGE.src,
    imageAlt: 'Clean commercial studio flooring and architectural glass interior',
  },
];

export const FOUR_STEP_PROCESS = [
  {
    step: '01',
    title: 'On-Site Walkthrough',
    summary:
      'We tour your commercial facility in person to understand floor types, high-traffic zones, access requirements, and operational priorities.',
  },
  {
    step: '02',
    title: 'Custom Cleaning Plan',
    summary:
      'We define a clear cleaning scope, service frequency, and preferred schedule built specifically around how your business operates.',
  },
  {
    step: '03',
    title: 'Scheduled Service',
    summary:
      'Consistent, uniformed, background-checked crews perform your cleaning plan during daytime or after-hours windows with minimal disruption.',
  },
  {
    step: '04',
    title: 'Ongoing Quality Inspections',
    summary:
      'Post-cleaning checks, periodic quality audits, and regular client check-ins help maintain reliable results month after month.',
  },
];

export const DIFFERENTIATORS = [
  {
    index: '01',
    title: 'Consistent Crew Assignments',
    description:
      'Your building is served by dedicated, familiar crews who know your layout, security expectations, and priority areas—not rotating strangers.',
  },
  {
    index: '02',
    title: 'Structured Quality-Control Inspections',
    description:
      'Accountability is built into the service cycle through post-cleaning reviews, periodic site audits, and attentive local follow-up.',
  },
  {
    index: '03',
    title: 'Flexible Cleaning Schedules',
    description:
      'While our contact hours run Monday through Sunday from 7:00 AM to 7:00 PM, cleaning appointments are coordinated around your business—including evenings and after-hours.',
  },
  {
    index: '04',
    title: 'Clear Communication',
    description:
      'Facility managers get responsive, direct local communication in Oklahoma City so scope adjustments or special requests are handled promptly.',
  },
  {
    index: '05',
    title: 'Customized Cleaning Plans',
    description:
      'Every commercial space has different traffic patterns and surfaces. Your plan reflects your exact rooms, priorities, and frequency needs.',
  },
];

export const PUBLISHED_TRUST_CLAIMS = [
  {
    title: 'Locally Owned in Oklahoma City',
    detail:
      'Operated locally across the Oklahoma City metro with direct accountability to area businesses.',
  },
  {
    title: 'Fully Insured',
    detail:
      'Business-published commercial coverage. Prospective clients are welcome to request insurance documentation directly prior to service.',
  },
  {
    title: 'Background-Checked, Uniformed Crews',
    detail:
      'Crews are vetted and uniformed for clear identification inside occupied corporate, medical, and commercial properties.',
  },
  {
    title: 'Consistent Cleaning Teams',
    detail:
      'Assigned teams learn your facility standards, alarm/lock routines, and priority areas from visit to visit.',
  },
  {
    title: 'Structured Quality Control',
    detail:
      'Post-cleaning inspections, regular client check-ins, and periodic quality audits support consistent execution.',
  },
  {
    title: 'Satisfaction Guarantee',
    detail:
      'Spotless Society publishes a satisfaction guarantee and responds directly to resolve any concern raised by your team.',
  },
];

export const QUALITY_CONTROL_PILLARS = [
  {
    index: '01',
    title: 'Post-Cleaning Inspections',
    description:
      'Routine verification after service to confirm lobbies, restrooms, glass, and high-touch surfaces meet the agreed facility scope.',
  },
  {
    index: '02',
    title: 'Regular Client Check-Ins',
    description:
      'Scheduled touchpoints with office and facility managers so changing traffic, new suites, or seasonal needs are addressed early.',
  },
  {
    index: '03',
    title: 'Periodic Quality Audits',
    description:
      'On-site supervisory reviews that examine detail areas—edges, glass frames, fixtures, and back-of-house spaces—over the long term.',
  },
  {
    index: '04',
    title: 'Responsive Management',
    description:
      'Direct access to local leadership during published contact hours (7:00 AM–7:00 PM daily) when immediate coordination is required.',
  },
];

export const SERVICE_AREA_CITIES: ServiceAreaCity[] = [
  {
    name: 'Oklahoma City',
    corridor: 'Central Metro Hub',
    distanceNote: 'Core Service Area',
    sampleZips: ['73102', '73103', '73104', '73106', '73112', '73114', '73116', '73118', '73120', '73134', '73142'],
    coordinates: { x: 250, y: 210 },
    summary:
      'Downtown Class-A towers, Midtown offices, Bricktown retail, medical corridors, and commercial business parks.',
  },
  {
    name: 'Edmond',
    corridor: 'North I-35 / Broadway',
    distanceNote: 'Within ~30-mile OKC radius',
    sampleZips: ['73003', '73012', '73013', '73034'],
    coordinates: { x: 268, y: 95 },
    summary:
      'Professional office parks, medical and dental clinics, retail centers, and educational facilities.',
  },
  {
    name: 'Nichols Hills',
    corridor: 'North-Central Metro',
    distanceNote: 'Within ~30-mile OKC radius',
    sampleZips: ['73116', '73120'],
    coordinates: { x: 245, y: 152 },
    summary:
      'Boutique commercial suites, private advisory offices, and high-presentation retail showrooms.',
  },
  {
    name: 'Bethany',
    corridor: 'Northwest Corridor',
    distanceNote: 'Within ~30-mile OKC radius',
    sampleZips: ['73008'],
    coordinates: { x: 168, y: 178 },
    summary:
      'Commercial storefronts, administrative buildings, and neighborhood professional practices.',
  },
  {
    name: 'Yukon',
    corridor: 'West I-40 Corridor',
    distanceNote: 'Within ~30-mile OKC radius',
    sampleZips: ['73099'],
    coordinates: { x: 108, y: 192 },
    summary:
      'Growing commercial corridors, medical clinics, retail plazas, and light industrial offices.',
  },
  {
    name: 'Mustang',
    corridor: 'Southwest Metro',
    distanceNote: 'Within ~30-mile OKC radius',
    sampleZips: ['73064'],
    coordinates: { x: 122, y: 266 },
    summary:
      'Local commercial offices, retail centers, and community-facing business facilities.',
  },
  {
    name: 'Moore',
    corridor: 'South I-35 Corridor',
    distanceNote: 'Within ~30-mile OKC radius',
    sampleZips: ['73160', '73170'],
    coordinates: { x: 258, y: 288 },
    summary:
      'Medical offices, multi-tenant retail corridors, and commercial service facilities.',
  },
  {
    name: 'Norman',
    corridor: 'South Metro / Campus',
    distanceNote: 'Within ~30-mile OKC radius',
    sampleZips: ['73069', '73071', '73072'],
    coordinates: { x: 274, y: 356 },
    summary:
      'Corporate offices, healthcare facilities, retail showrooms, and educational campuses.',
  },
  {
    name: 'Del City',
    corridor: 'Southeast I-40',
    distanceNote: 'Within ~30-mile OKC radius',
    sampleZips: ['73115'],
    coordinates: { x: 306, y: 232 },
    summary:
      'Commercial offices, retail properties, and administrative facilities near Tinker AFB corridors.',
  },
  {
    name: 'Midwest City',
    corridor: 'East Metro / Tinker',
    distanceNote: 'Within ~30-mile OKC radius',
    sampleZips: ['73110', '73130'],
    coordinates: { x: 348, y: 218 },
    summary:
      'Professional suites, medical buildings, industrial support offices, and retail spaces.',
  },
  {
    name: 'Choctaw',
    corridor: 'East Highway 62',
    distanceNote: 'Within ~30-mile OKC radius',
    sampleZips: ['73020'],
    coordinates: { x: 404, y: 206 },
    summary:
      'Commercial offices, neighborhood retail, and business facilities on the eastern metro edge.',
  },
];

export const FAQS: FaqItem[] = [
  {
    id: 'facilities-served',
    category: 'Scope',
    question: 'What commercial facilities are served?',
    answer:
      'Spotless Society serves corporate and professional offices, medical and dental clinics, retail stores and showrooms, multi-tenant commercial buildings, industrial facility offices, educational spaces, fitness facilities, apartment common areas, and post-construction commercial properties.',
  },
  {
    id: 'residential-cleaning',
    category: 'Policy',
    question: 'Do you offer residential cleaning?',
    answer:
      'No. Spotless Society specializes exclusively in commercial cleaning. We do not provide residential maid services, house cleaning, or interior apartment housekeeping. We do serve commercial apartment common areas, leasing offices, and commercial post-construction turnovers.',
  },
  {
    id: 'walkthrough-process',
    category: 'Process',
    question: 'How does a walkthrough work?',
    answer:
      'A walkthrough is a complimentary, no-obligation on-site visit to your facility. We walk the property with you to review flooring, restrooms, common spaces, access protocols, and cleaning priorities so we can build an accurate custom plan. Walkthroughs are typically scheduled within 48 hours of an inquiry.',
  },
  {
    id: 'quote-calculation',
    category: 'Pricing',
    question: 'How are quotes calculated?',
    answer:
      'Every commercial quote is tailored to your actual facility—factoring in layout, traffic volume, surface types, requested scope, and cleaning frequency. You do not need to know your exact square footage to start a request; we can verify measurements and requirements during the walkthrough.',
  },
  {
    id: 'after-hours',
    category: 'Scheduling',
    question: 'Can cleaning happen after business hours?',
    answer:
      'Yes. While our contact hours are Monday–Sunday from 7:00 AM to 7:00 PM, cleaning appointments are coordinated around your operational schedule—including evenings, early mornings, and weekends depending on your business needs.',
  },
  {
    id: 'supplies-equipment',
    category: 'Logistics',
    question: 'Are supplies and equipment included?',
    answer:
      'Yes, commercial cleaning supplies and equipment are arranged as part of your service plan. If your facility prefers specific products, consumables coordination, or building-supplied paper goods, those preferences are documented during your walkthrough.',
  },
  {
    id: 'quality-control',
    category: 'Accountability',
    question: 'What does quality control involve?',
    answer:
      'Quality control includes post-cleaning inspections, regular client check-ins, periodic quality audits, and responsive local management. Our goal is consistent execution by the same assigned team rather than reactive cleanups.',
  },
  {
    id: 'insured-crews',
    category: 'Credentials',
    question: 'Are cleaning crews insured?',
    answer:
      'Spotless Society states on its published site that the business is fully insured and operates with background-checked, uniformed crews. Prospective commercial clients are welcome to request insurance documentation directly before onboarding.',
  },
  {
    id: 'cities-served',
    category: 'Coverage',
    question: 'Which cities are served?',
    answer:
      'Spotless Society serves commercial properties within approximately 30 driving miles of Oklahoma City, including Oklahoma City, Edmond, Moore, Norman, Yukon, Mustang, Midwest City, Del City, Bethany, Choctaw, and Nichols Hills. Availability is confirmed by facility address.',
  },
  {
    id: 'custom-frequency',
    category: 'Scheduling',
    question: 'Can cleaning frequency be customized?',
    answer:
      'Yes. Frequency is customized to your facility traffic and budget—ranging from multi-day weekly or daily janitorial schedules to periodic commercial or one-time post-construction turnover engagements.',
  },
];

export const FACILITY_TYPES = [
  'Corporate Office',
  'Medical / Dental Clinic',
  'Retail Store / Showroom',
  'Multi-Tenant Commercial Building',
  'Apartment Common Areas & Leasing Office',
  'Professional Office Suite',
  'Industrial / Warehouse Office Area',
  'Educational Facility',
  'Fitness / Wellness Facility',
  'Commercial Post-Construction / Tenant Turnover',
];

export const PAGE_TITLES: Record<PageId, string> = {
  home: 'Spotless Society | Commercial Cleaning & Janitorial Services in Oklahoma City',
  'commercial-cleaning': 'Commercial Cleaning | Spotless Society OKC',
  'office-cleaning': 'Office Cleaning | Spotless Society OKC',
  'medical-office-cleaning': 'Medical Office Cleaning | Spotless Society OKC',
  'janitorial-services': 'Janitorial Services | Spotless Society OKC',
  'retail-cleaning': 'Retail Cleaning | Spotless Society OKC',
  'post-construction-cleaning': 'Post-Construction Cleaning | Spotless Society OKC',
  industries: 'Industries We Serve | Spotless Society OKC',
  'our-approach': 'Our Approach & Quality Control | Spotless Society OKC',
  'service-areas': 'Service Areas — Oklahoma City Metro | Spotless Society',
  about: 'About Spotless Society | Commercial Cleaning Oklahoma City',
  faqs: 'Frequently Asked Questions | Spotless Society OKC',
  walkthrough: 'Request a Free Walkthrough | Spotless Society OKC',
  contact: 'Contact Spotless Society | Oklahoma City',
};
