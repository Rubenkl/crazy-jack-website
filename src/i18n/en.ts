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
    body: "Crazy Jack's unique style and high-energy performances have earned him recognition not just in the Netherlands, but far beyond. He has lit up countless festivals and turned dancefloors upside down with his unforgettable sets. More than just a DJ, Crazy Jack is a true entertainer. His charisma and connection with the crowd make every performance a celebration. He knows exactly how to read the room and get everyone dancing. His passion for music is unmistakable, and his energy is contagious.",
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
