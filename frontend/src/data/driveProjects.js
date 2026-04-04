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
 * On-the-ground drive stories for About Us masonry & Projects page.
 * Each item: image, headline, location, drive type, impact line, full write-up.
 */
export const driveProjects = [
  {
    id: "beat-the-heat",
    image: our_drives_1,
    headline: "Beat the Heat",
    location: "Delhi NCR, Chandigarh, Bengaluru",
    driveType: "Climate relief & hydration",
    impact: "1,200+ umbrellas, caps & slippers; 20+ sharbat drives",
    writeUp:
      "In peak summer, WWC reached street vendors and daily-wage workers with cooling support, hydration, and dignity kits — extending care to birds and strays through water bowls. Volunteers coordinated across cities so relief met people where they live and work.",
  },
  {
    id: "vidyaksha",
    image: our_drives_2,
    headline: "Project Vidyaksha",
    location: "10+ slum communities",
    driveType: "Education & life skills",
    impact: "500+ students supported; workshops on rights & literacy",
    writeUp:
      "Learning hubs and weekend classes bring foundational education, financial literacy, and confidence to children who face barriers to schooling. The programme pairs academic support with workshops on self-defence and human rights.",
  },
  {
    id: "swasthya-raksha",
    image: our_drives_3,
    headline: "Project Swasthya Raksha",
    location: "Delhi & neighbouring regions",
    driveType: "Health & menstrual hygiene",
    impact: "10 lakh+ pads distributed; 150+ awareness drives",
    writeUp:
      "Health camps, pad distribution, and taboo-breaking conversations help women access dignity and care. Swasthya Raksha links products with education so communities can sustain healthier routines long after each drive ends.",
  },
  {
    id: "rozgar-soch",
    image: our_drives_4,
    headline: "Project Rozgar & SOCH",
    location: "Slum-adjacent communities",
    driveType: "Livelihoods & artisan enterprise",
    impact: "Skills training in crochet, knitting & sales support",
    writeUp:
      "Women learn marketable crafts through SOCH, with mentorship on pricing and outreach. Income blends skill-building with emotional support — turning creativity into sustainable livelihoods.",
  },
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
