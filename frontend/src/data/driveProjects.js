import our_drives_1 from "../assets/our_drives_1.png";
import our_drives_2 from "../assets/our_drives_2.png";
import our_drives_3 from "../assets/our_drives_3.png";
import our_drives_4 from "../assets/our_drives_4.png";
import bf_img_1 from "../assets/bf_img_1.png";
import bf_img_2 from "../assets/bf_img_2.png";
import bf_img_3 from "../assets/bf_img_3.png";
import hyderabad from "../assets/hyderabad.png";
import About_img_1 from "../assets/About_img_1.png";
import About_img_2 from "../assets/About_img_2.png";
import About_img_3 from "../assets/About_img_3.png";
import bf_img_4 from "../assets/bf_img_4.png";
import bf_img_5 from "../assets/bf_img_5.png";
import carasol1 from "../assets/carasol1.jpg";
import carasol2 from "../assets/carasol2.jpg";
import carasol3 from "../assets/carasol3.jpg";

/**
 * Four flagship campaigns — Projects page grid + /projects/:slug detail pages.
 * Fields: slug, cardSummary, fullParagraphs, impactMetrics[], gallery[], dateLabel, roomTitle.
 */
export const campaignProjects = [
  {
    id: "beat-the-heat",
    slug: "beat-the-heat",
    headline: "Beat the Heat Campaign",
    roomTitle: { line1: "Beat the", line2: "Heat campaign" },
    image: our_drives_1,
    location: "Across India (multi-city outreach)",
    dateLabel: "Summer seasons · ongoing partnerships",
    driveType: "Climate relief & sun protection",
    impact: "1,200+ umbrellas distributed with Colgate India & The Better India",
    cardSummary:
      "Supporting daily wage workers, hawkers, and vulnerable communities through extreme summers — practical shade, hydration awareness, and dignity on the streets.",
    writeUp:
      "Peak summer outreach for street vendors and workers: umbrellas, cooling support, and education on heat safety — carried out with Colgate India and The Better India across India.",
    fullParagraphs: [
      "Beat the Heat supports those most affected by extreme summer temperatures — daily wage workers, hawkers, and poor members of the community. In India, summers can reach punishing highs; heat strokes, dehydration, and exhaustion are hard to avoid without support.",
      "Together with Colgate India and The Better India, we distributed more than 1,200 umbrellas in different parts of India — offering real protection from the sun. Beyond products, the campaign spreads the message of drinking enough water, resting in shade, and recognising the signs of heat-related illness.",
      "Volunteers were essential in spotting high-need areas and ensuring people who needed help the most were reached. Beat the Heat delivers practical relief, builds social impact with communities and partners, and improves conditions for those most vulnerable to extreme heat.",
    ],
    impactMetrics: [
      { label: "Umbrellas distributed", value: "1,200+" },
      { label: "Partners", value: "Colgate India · The Better India" },
      { label: "Focus", value: "Street vendors & daily wage workers" },
    ],
    gallery: [our_drives_1, bf_img_1, carasol1, carasol2],
  },
  {
    id: "vidyaksha",
    slug: "vidyaksha",
    headline: "Project Vidyaksha",
    roomTitle: { line1: "Project", line2: "Vidyaksha" },
    image: our_drives_2,
    location: "10+ slum communities",
    dateLabel: "Ongoing · education hubs",
    driveType: "Education & life skills",
    impact: "500+ children · workshops on rights, literacy & confidence",
    cardSummary:
      "Education for underprivileged children — regular subjects plus financial literacy, self-defence, and human rights — so learning gaps shrink and confidence grows.",
    writeUp:
      "Weekend classes and learning hubs for 500+ children across 10+ slums — blending academics with financial literacy, self-defence, and human rights workshops.",
    fullParagraphs: [
      "Warriors Without Cause’s Project Vidyaksha focuses on the education sector with the goal of increasing access to learning for underprivileged children, especially from slums. The initiative reaches over 500 children from more than 10 slum areas.",
      "Alongside regular subjects, workshops cover financial literacy, self-defence, and human rights — helping children build confidence. Mentorship supports a positive learning atmosphere and fewer gaps in education, preparing children to seize better opportunities in the future.",
    ],
    impactMetrics: [
      { label: "Children supported", value: "500+" },
      { label: "Slum communities", value: "10+" },
      { label: "Focus areas", value: "Literacy · life skills · mentorship" },
    ],
    gallery: [our_drives_2, bf_img_4, About_img_1, carasol3],
  },
  {
    id: "swasthya-raksha",
    slug: "swasthya-raksha",
    headline: "Project Swasthya Raksha",
    roomTitle: { line1: "Swasthya", line2: "Raksha" },
    image: our_drives_3,
    location: "Delhi & neighbouring regions",
    dateLabel: "Ongoing · health & hygiene programme",
    driveType: "Health & menstrual hygiene",
    impact: "10 lakh+ sanitary napkins · awareness & sanitation drives",
    cardSummary:
      "Health interventions for underserved communities — menstrual hygiene, sanitation, and awareness — so dignity and care reach women and girls who lack access.",
    writeUp:
      "Pad distribution and taboo-breaking conversations: 10 lakh+ napkins distributed and 150+ drives linking products with education for lasting hygiene.",
    fullParagraphs: [
      "Swasthya Raksha provides health interventions for underserved communities that lack access to hygienic practices and healthcare. The programme raises awareness on menstrual hygiene, sanitation, and broader health concerns.",
      "More than 10 lakh sanitary napkins have been distributed so girls and women can manage menstrual health with dignity. We run programmes to reduce stigma, teach prevention and hygiene, and support healthier routines.",
      "Alongside biodegradable toilets and health drives, the project strengthens the health of women and children across the region.",
    ],
    impactMetrics: [
      { label: "Sanitary napkins distributed", value: "10 lakh+" },
      { label: "Programme focus", value: "MHM · sanitation · health awareness" },
      { label: "Reach", value: "Women & children in underserved areas" },
    ],
    gallery: [our_drives_3, bf_img_2, bf_img_3, About_img_3],
  },
  {
    id: "project-rozgar",
    slug: "project-rozgar",
    headline: "Project Rozgar",
    roomTitle: { line1: "Project", line2: "Rozgar" },
    image: our_drives_4,
    location: "Slum-adjacent communities",
    dateLabel: "Ongoing · livelihoods training",
    driveType: "Skills & economic empowerment",
    impact: "Knitting, sewing & crafts — pathways to independent earnings",
    cardSummary:
      "Skill development for women and youth in areas with few job opportunities — knitting, sewing, and crafts that unlock confidence, creativity, and independent income.",
    writeUp:
      "SOCH-style livelihood training: crochet, knitting, and craft skills with mentorship on pricing and sales — creativity turned into sustainable income.",
    fullParagraphs: [
      "Project Rozgar focuses on financial independence for women and youth in slum areas where job opportunities are scarce. Skill development is the bridge to economic empowerment.",
      "Participants gain practical skills in knitting, sewing, and crafts that can earn income in the market. The project nurtures confidence, creativity, and an entrepreneurial mindset so people can find their own path to earn independently.",
      "Empowering women and young people through skills increases independence — and over time, contributes to stronger homes and communities.",
    ],
    impactMetrics: [
      { label: "Skills", value: "Knitting · sewing · crafts" },
      { label: "Focus", value: "Women & youth in slum areas" },
      { label: "Outcome", value: "Independent earnings & confidence" },
    ],
    gallery: [our_drives_4, bf_img_5, About_img_2, carasol1],
  },
];

const legacyDriveStories = [
  {
    id: "education-outreach",
    image: bf_img_1,
    headline: "Education outreach",
    location: "Multiple hubs",
    driveType: "Schooling & scholarships",
    impact: "Scholarships, supplies & peer mentoring",
    writeUp:
      "Teams work with families to keep children in school, bridge learning gaps, and celebrate small wins. Every kit and every hour of tutoring reinforces the belief that every child deserves a fair shot.",
  },
  {
    id: "community-health",
    image: bf_img_2,
    headline: "Community health camps",
    location: "Urban underserved wards",
    driveType: "Preventive care & referrals",
    impact: "Screenings, first-aid, and follow-up linkage",
    writeUp:
      "Pop-up clinics and awareness circles connect residents to basic care and trusted referrals. Volunteers document needs so repeat visits can track progress and advocate for systemic support.",
  },
  {
    id: "awareness-drives",
    image: bf_img_3,
    headline: "Awareness & civic drives",
    location: "Parks, ghats & neighbourhoods",
    driveType: "Environment & civic responsibility",
    impact: "Clean-ups, waste reduction & youth participation",
    writeUp:
      "From Yamuna ghats to local parks, volunteers mobilise for cleanliness and greener habits. These drives build pride in public spaces and seed long-term stewardship among young people.",
  },
  {
    id: "hyderabad-hub",
    image: hyderabad,
    headline: "Regional expansion",
    location: "Hyderabad & growing hubs",
    driveType: "Volunteer networks & partnerships",
    impact: "Cross-city collaboration & shared learning",
    writeUp:
      "As WWC grows, new hubs adapt proven playbooks to local contexts — pairing experienced mentors with fresh volunteers so impact scales without losing the human touch.",
  },
];

/**
 * On-the-ground stories for About Us masonry & cylinder — flagship campaigns + legacy entries.
 */
export const driveProjects = [...campaignProjects, ...legacyDriveStories];

/** Extra gallery entries for About Us cylinder / parallax (same shape as drive for modals). */
const aboutUsGalleryExtras = [
  {
    id: "gallery-about-1",
    image: About_img_1,
    headline: "Community connection",
    location: "Field archive",
    driveType: "Moments on the ground",
    impact: "Trust built one conversation at a time",
    writeUp:
      "Volunteers and residents meet as neighbours — listening first, acting together. These moments anchor everything WWC does in dignity and relationship.",
  },
  {
    id: "gallery-about-2",
    image: About_img_2,
    headline: "Hands that show up",
    location: "Across hubs",
    driveType: "Volunteering & outreach",
    impact: "Consistent presence where it matters",
    writeUp:
      "From distribution lines to classroom circles, showing up reliably turns intent into impact — and reminds communities they are not alone.",
  },
  {
    id: "gallery-about-3",
    image: About_img_3,
    headline: "Hope in colour",
    location: "Seasonal drives",
    driveType: "Relief & celebration",
    impact: "Joy alongside necessity",
    writeUp:
      "Relief work carries emotional weight; we pair essentials with warmth so dignity stays at the centre of every drive.",
  },
  {
    id: "gallery-bf-4",
    image: bf_img_4,
    headline: "Learning together",
    location: "Education hubs",
    driveType: "Literacy & mentorship",
    impact: "Peer learning & supplies",
    writeUp:
      "Small groups, steady mentorship, and shared books help children see school as possible — and peers as allies.",
  },
  {
    id: "gallery-bf-5",
    image: bf_img_5,
    headline: "Field notes",
    location: "Neighbourhood visits",
    driveType: "Listening & follow-up",
    impact: "Needs mapped with care",
    writeUp:
      "Volunteers document stories and gaps so the next visit can go deeper — turning one-off help into sustained support.",
  },
  {
    id: "gallery-carousel-1",
    image: carasol1,
    headline: "Momentum",
    location: "Campaign highlights",
    driveType: "Awareness & action",
    impact: "Youth-led energy",
    writeUp:
      "Campaign days channel curiosity into concrete steps — signatures, conversations, and commitments that outlast a single event.",
  },
  {
    id: "gallery-carousel-2",
    image: carasol2,
    headline: "Side by side",
    location: "Community partners",
    driveType: "Collaboration",
    impact: "Shared resources, shared wins",
    writeUp:
      "When NGOs, locals, and volunteers align, programmes scale without losing the human touch.",
  },
  {
    id: "gallery-carousel-3",
    image: carasol3,
    headline: "Forward motion",
    location: "Growth & reflection",
    driveType: "Impact storytelling",
    impact: "Every frame is a promise kept",
    writeUp:
      "Photos remind us that change is cumulative — hundreds of small brave acts adding up to a movement.",
  },
];

/** All drive stories plus extra gallery images — for About Us 3D cylinder & parallax strip. */
export const aboutUsCylinderPhotos = [...driveProjects, ...aboutUsGalleryExtras];

export function getCampaignBySlug(slug) {
  return campaignProjects.find((c) => c.slug === slug) ?? null;
}
