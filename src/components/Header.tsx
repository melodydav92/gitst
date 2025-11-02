import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Heart, Menu, X, Mail } from "lucide-react";
import { useState } from "react";
import { config } from "@/lib/config";

interface HeaderProps {
  onDonateClick?: () => void;
}

export const Header = ({ onDonateClick }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group">
          <Heart className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" fill="currentColor" />
          <span className="text-xl font-bold text-foreground">GiveHope</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="#browse"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Browse
          </a>
          <a
            href="/start-campaign"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Start Campaign
          </a>
          <a
            href="#how-it-works"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            How It Works
          </a>
          <a
            href="#about"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            About
          </a>
          <Dialog>
            <DialogTrigger asChild>
              <button className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Contact
              </button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Contact Us</DialogTitle>
                <DialogDescription>
                  Get in touch with us for any questions or support.
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-col gap-4">
                <div className="text-center">
                  <Mail className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <p className="text-sm text-muted-foreground mb-2">Send us an email:</p>
                  <a
                    href={`mailto:${config.contact.email}`}
                    className="text-primary hover:underline font-medium"
                  >
                    {config.contact.email}
                  </a>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="hero" className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-0 font-bold" onClick={onDonateClick}>
            <Heart className="w-4 h-4" />
            Donate
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

        {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <a
              href="#browse"
              className="block py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Browse
            </a>
            <a
              href="/start-campaign"
              className="block py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Start Campaign
            </a>
            <a
              href="#how-it-works"
              className="block py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#about"
              className="block py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <Dialog>
              <DialogTrigger asChild>
                <button
                  className="block py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors text-left"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Contact Us</DialogTitle>
                  <DialogDescription>
                    Get in touch with us for any questions or support.
                  </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col gap-4">
                  <div className="text-center">
                    <Mail className="w-8 h-8 mx-auto mb-2 text-primary" />
                    <p className="text-sm text-muted-foreground mb-2">Send us an email:</p>
                    <a
                      href={`mailto:${config.contact.email}`}
                      className="text-primary hover:underline font-medium"
                    >
                      {config.contact.email}
                    </a>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            <div className="pt-3 space-y-2">
              <Button variant="hero" className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-0 font-bold" onClick={onDonateClick}>
                <Heart className="w-4 h-4" />
                Donate
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
