export const en = {
  hero: {
    tag: "Fxck Genres!",
    pitch: "All-round party DJ. Urban → Latin → House → hard bangers.",
  },
  cta: {
    book: "Book now",
    listen: "Listen",
  },
  music: {
    title: "Music",
    spotify: "Listen on Spotify",
    soundcloud: "Latest on SoundCloud",
  },
  highlights: {
    title: "Highlights",
    items: [
      "Open-format sets that read the crowd",
      "High-energy mashups and edits",
      "Urban, Latin, House, Hard Dance ready",
      "Club and festival experience",
      "Seamless genre transitions",
      "Peak-hour crowd control",
    ],
  },
  photos: {
    title: "Photos",
  },
  about: {
    title: "About",
    body: "Amsterdam-based all-round DJ bringing high-energy, genre-fluid sets to clubs and festivals across Europe. With a fearless approach to mixing Urban, Latin, House, and hard dance, Crazy Jack creates unforgettable peak-hour moments through seamless transitions and heavy crowd interaction. The 'Fxck Genres!' philosophy means reading the room and delivering exactly what the crowd needs—no boundaries, just pure energy.",
  },
  form: {
    title: "Book Crazy Jack",
    subtitle: "Let's make your event legendary. Drop the details and I'll hit you back ASAP.",
    label: {
      name: "Name",
      email: "Email",
      phone: "Phone",
      event_date: "Event date",
      message: "Message",
    },
    placeholder: {
      name: "Your full name",
      email: "your@email.com",
      phone: "+31 6 12 34 56 78",
      event_date: "Select a date",
      message: "What's the venue, crowd size, vibe, and timing?",
    },
    cta: {
      submit: "Send request",
      sending: "Sending…",
    },
    state: {
      success: "Thanks! I'll reply to your booking request shortly.",
      error: "Something went wrong. Please try again.",
    },
    error: {
      required: "This field is required.",
      email: "Enter a valid email address.",
      phone: "Enter a valid phone number.",
      date_past: "Event date must be in the future.",
      message_short: "Message must be at least 20 characters.",
    },
    privacy: {
      note: "We use your details only to respond to this booking request.",
    },
  },
  footer: {
    booking: "Booking:",
    rights: "All rights reserved.",
  },
};

export type Translations = typeof en;
