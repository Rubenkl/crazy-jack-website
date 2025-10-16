export const en = {
  cta: {
    book: "Book now",
    listen: "Listen",
    whatsapp: "Message on WhatsApp",
  },
  music: {
    title: "Music",
    spotify: "Listen on Spotify",
    soundcloud: "Listen on SoundCloud",
  },
  photos: {
    title: "Photos",
  },
  about: {
    title: "About",
    body: "Crazy Jack is our party animal who tears the roof off. Book him now for your Meter Monday. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc at porta ultrices, velit purus sollicitudin turpis, a pharetra eros enim vel turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis nec lorem vitae lacus efficitur tincidunt. Integer in purus non libero vestibulum congue. Phasellus convallis tortor eu augue finibus, nec viverra sapien laoreet.",
  },
  form: {
    title: "Book Crazy Jack",
    subtitle: "Let's make your event legendary. Drop the details and we will hit you back ASAP.",
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
      success: "Thanks! We will reply to your booking request shortly.",
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
