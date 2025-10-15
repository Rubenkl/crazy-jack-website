import { LanguageProvider } from "@/hooks/useLanguage";
import { LanguageToggle } from "@/components/LanguageToggle";
import { Hero } from "@/components/Hero";
import { Music } from "@/components/Music";
import { Highlights } from "@/components/Highlights";
import { PhotoGallery } from "@/components/PhotoGallery";
import { About } from "@/components/About";
import { BookingForm } from "@/components/BookingForm";
import { Socials } from "@/components/Socials";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground">
        {/* Language Toggle - Fixed Position */}
        <div className="fixed top-4 right-4 z-50">
          <LanguageToggle />
        </div>

        {/* Hero Section */}
        <Hero />

        {/* Music Section */}
        <Music />

        {/* Highlights Section */}
        <Highlights />

        {/* Photo Gallery Section */}
        <PhotoGallery />

        {/* About Section */}
        <About />

        {/* Booking Form Section */}
        <BookingForm />

        {/* Socials Section */}
        <Socials />

        {/* Footer */}
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
