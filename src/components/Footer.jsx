import { Facebook, Twitter, Linkedin } from "lucide-react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="p-4 border-t bg-background text-center">
      <div className="flex justify-center gap-4 mb-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <Facebook className="h-6 w-6 text-muted-foreground hover:text-foreground" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <Twitter className="h-6 w-6 text-muted-foreground hover:text-foreground" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <Linkedin className="h-6 w-6 text-muted-foreground hover:text-foreground" />
        </a>
      </div>
      <div className="flex justify-center gap-4 mb-4">
        <NavLink to="/privacy-policy" className="text-muted-foreground hover:text-foreground">Privacy Policy</NavLink>
        <NavLink to="/terms-of-service" className="text-muted-foreground hover:text-foreground">Terms of Service</NavLink>
      </div>
      <p className="text-muted-foreground">&copy; 2023 Acme Inc. All rights reserved.</p>
    </footer>
  );
};

export default Footer;