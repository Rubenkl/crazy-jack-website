import { LanguageProvider } from "@/hooks/useLanguage";
import { Hero } from "@/components/Hero";
import { Music } from "@/components/Music";
import { PhotoGallery } from "@/components/PhotoGallery";
import { About } from "@/components/About";
import { BookingForm } from "@/components/BookingForm";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Socials } from "@/components/Socials";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground">
        {/* Hero Section */}
        <Hero />

        {/* Music Section */}
        <Music />

        {/* Photo Gallery Section */}
        <PhotoGallery />

        {/* About Section */}
        <About />

        {/* Booking Form Section */}
        <BookingForm />

        {/* WhatsApp Button */}
        <WhatsAppButton />

        {/* Socials Section */}
        <Socials />

        {/* Footer */}
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
