// Central config for all editable wedding content.
// Update dates, venues, schedule and contacts here — components read from this file only.

export const couple = {
  partnerOne: "Brian",
  partnerTwo: "Chimango",
  hashtag: "#Brian&Chimango2026",
};

export const weddingTheme = "Celebrating God's Faithfulness, Love & Family";

export const heroVerse = {
  text: "For everything there is a season, and a time for every purpose under heaven.",
  reference: "Ecclesiastes 3:1",
};

export const footerVerse = {
  text: "Though one may be overpowered, two can defend themselves. A cord of three strands is not quickly broken.",
  reference: "Ecclesiastes 4:12",
};

export const heroMessage =
  "We joyfully invite you to celebrate our wedding as we exchange our marriage vows before God. Your love, prayers and presence would mean so much to us as we begin this new chapter together.";

export const weddingDate = {
  // ISO 8601, used by the countdown — keep in sync with the display date below.
  iso: "2026-08-26T12:00:00+02:00",
  display: "26 August 2026",
  dayOfWeek: "Wednesday",
  rsvpDeadline: "Wednesday, 19 August 2026",
};

export const ceremony = {
  venueName: "Yaisk Garden",
  venueNote: "Blantyre",
  guestArrival: "11:00",
  time: "12:00",
  mapUrl: "https://maps.app.goo.gl/s2HFUVEmNsVAAF226",
};

export const reception = {
  venueName: "Amaryllis Hotel",
  venueNote: "Blantyre",
  time: "18:00",
  mapUrl: "https://maps.google.com/?q=Amaryllis+Hotel+Blantyre",
};

export type ScheduleItem = {
  time: string;
  title: string;
};

export const schedule: ScheduleItem[] = [
  { time: "11:00", title: "Guest Arrival" },
  { time: "12:00", title: "Wedding Ceremony" },
  { time: "13:30", title: "Luncheon" },
  { time: "14:30", title: "Photography" },
  { time: "17:00", title: "Refresh & Travel" },
  { time: "18:00", title: "Reception" },
  { time: "20:00", title: "Cake & Toasts" },
  { time: "21:00", title: "Celebration Continues" },
];

export const faqs = [
  {
    question: "Can I bring a guest?",
    answer: "Please refer to your invitation for guest details.",
  },
  {
    question: "Are children welcome?",
    answer:
      "Children are warmly welcome at the ceremony and luncheon. The evening reception will be an adults-only celebration.",
  },
  {
    question: "What time should I arrive?",
    answer:
      "Please arrive by 11:00 to allow sufficient time to be seated before the ceremony begins.",
  },
  {
    question: "Is parking available?",
    answer: "Parking will be available at both venues.",
  },
  {
    question: "Who can I contact?",
    answer:
      "Please contact our RSVP coordinators should you require any assistance before the wedding.",
  },
  {
    question: "What if I cannot attend?",
    answer:
      "Kindly let us know by Wednesday, 19 August 2026 so we can finalise our arrangements.",
  },
];

export type RsvpContact = {
  name: string;
  phone: string;
};

export const rsvpContacts: RsvpContact[] = [
  { name: "Reengo Whayo", phone: "+265 999 95 84 35"},
  { name: "Deborah Nakhumwa", phone: "+265 990 343 566"},
];

export type OutfitInspoItem = {
  label: string;
  note?: string;
  image?: string;
};

export type OutfitPalette = {
  audience: string;
  title: string;
  description: string;
  image: string;
  swatches: { label: string; color: string }[];
};

export const outfitPalettes: OutfitPalette[] = [
  {
    audience: "Gentlemen",
    title: "Grey tones",
    description: "Grey suit, white shirt, optional grey tie and black shoes.",
    image: "/images/palette-men-grey-black.svg",
    swatches: [
      { label: "Black", color: "#050505" },
      { label: "Charcoal", color: "#414141" },
      { label: "Dark Grey", color: "#858585" },
      { label: "Medium Grey", color: "#b4b4b4" },
      { label: "Light Grey", color: "#d5d5d5" },
    ],
  },
  {
    audience: "Ladies",
    title: "Sage green & gold",
    description: "Sage green attire with gold accessories and gold or nude heels.",
    image: "/images/palette-ladies-sage.jpeg",
    swatches: [
      { label: "Sage Hint", color: "#bfcfbb" },
      { label: "Sage", color: "#8ea58c" },
      { label: "Moss", color: "#738a6e" },
      { label: "Evergreen", color: "#344c3d" },
      { label: "Gold", color: "#b79b6b" },
    ],
  },
];

export const outfitInspo: OutfitInspoItem[] = [
  {
    label: "Gentlemen: Suit",
    note: "Charcoal or mid-grey tailoring",
    image: "/images/outfit/gentlemen-suit.png",
  },
  {
    label: "Gentlemen: Shirt",
    note: "Crisp white with clean grey tailoring",
    image: "/images/outfit/gentlemen-shirt.png",
  },
  {
    label: "Gentlemen: Tie & Accents",
    note: "Grey, silver or charcoal finishing details",
    image: "/images/outfit/gentlemen-accents.png",
  },
  {
    label: "Gentlemen: Shoes",
    note: "Polished black leather",
    image: "/images/outfit/gentlemen-shoes.png",
  },
  {
    label: "Ladies: Scarf Gown",
    note: "Sage beaded gown with a flowing draped train",
    image: "/images/outfit/ladies-scarf-gown.jpg",
  },
  {
    label: "Ladies: Draped Gown",
    note: "Soft sage with an elegant flowing silhouette",
    image: "/images/outfit/ladies-draped-gown.jpg",
  },
  {
    label: "Ladies: Accessories",
    note: "Gold finishing touches",
    image: "/images/outfit/ladies-accessories.png",
  },
  {
    label: "Ladies: Shoes",
    note: "Warm gold or nude formal heels",
    image: "/images/outfit/ladies-shoes.png",
  },
];

export const gallery = {
  familyHighlights: [
    {
      src: "/images/family/family-formal-day.jpeg",
      alt: "Brian and Chimango dressed formally with two of their sons",
      caption: "Family at the heart of it all",
    },
    {
      src: "/images/family/family-graduation.jpeg",
      alt: "Brian and Chimango celebrating a graduation with their three sons",
      caption: "The two of us who became five",
    },
  ],
  images: [
    {
      src: "/images/couple-doorway-full.jpg",
      alt: "Brian and Chimango dressed in black, arriving at a doorway together",
      caption: "Together, then and now",
    },
    {
      src: "/images/couple-reception-portrait.jpg",
      alt: "Brian and Chimango seated at a candlelit reception table",
      caption: "Cherished moments",
    },
    {
      src: "/images/couple-doorway-close.jpg",
      alt: "Close portrait of Brian and Chimango at the doorway",
      caption: "Our journey together",
    },
    {
      src: "/images/new pictures/WhatsApp Image 2026-07-15 at 14.09.24.jpeg",
      alt: "A black and white family memory from Brian and Chimango",
      caption: "Family first",
      monochrome: true,
    },
    {
      src: "/images/new pictures/WhatsApp Image 2026-07-15 at 14.09.26.jpeg",
      alt: "A black and white memory from Brian and Chimango's journey",
      caption: "Years of grace",
      monochrome: true,
    },
    {
      src: "/images/new pictures/WhatsApp Image 2026-07-15 at 14.09.27.jpeg",
      alt: "A black and white family celebration memory",
      caption: "Home and heart",
      monochrome: true,
    },
  ],
};
