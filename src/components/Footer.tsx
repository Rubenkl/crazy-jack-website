import { useLanguage } from "@/hooks/useLanguage";

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <div className="text-sm text-muted-foreground">
            {t.footer.booking}{" "}
            <a
              href="mailto:info@crazyjack.nl"
              className="text-primary hover:text-primary/80 font-medium transition-colors"
            >
              info@crazyjack.nl
            </a>
          </div>
          <div className="text-sm text-muted-foreground">
            © {currentYear} Crazy Jack. {t.footer.rights}
          </div>
          <div className="text-sm text-muted-foreground">
            Website by{" "}
            <a
              href="https://ruub.eu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 font-medium transition-colors"
            >
              RUUB
            </a>
            .
          </div>
        </div>
      </div>
    </footer>
  );
}
