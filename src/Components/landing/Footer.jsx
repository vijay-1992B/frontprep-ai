import FooterLinks from "./FooterLinks";

const quickLinks = [
  { name: "Home", url: "/" },
  { name: "Features", url: "/features" },
  { name: "Pricing", url: "/pricing" },
];

const socialLinks = [
  { name: "GitHub", url: "https://github.com/vijay-1992B" },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/vijaygoswamifrontend-developer/",
  },
  { name: "Twitter", url: "https://x.com/Vijay99866148" },
];

const resources = [
  { name: "FAQ", url: "/faq" },
  { name: "Contact", url: "/contact" },
  { name: "Privacy Policy", url: "/privacy-policy" },
  { name: "Terms of Service", url: "/terms-of-service" },
];

const Footer = () => {
  return (
    <footer className="w-full py-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto p-4  grid grid-cols-4 gap-12  ">
        <div>
          <h1 className="text-3xl font-bold">FrontPrep AI</h1>
          <p className="text-gray-500 mt-2 text-sm">
            AI Frontend Interview Prep
          </p>
        </div>
        <FooterLinks title="Quick Links" links={quickLinks} />
        <FooterLinks title="Social Links" links={socialLinks} />
        <FooterLinks title="Resources" links={resources} />
      </div>
      <hr className="border-gray-300 my-8" />
      <div className="py-8 text-center text-sm text-gray-500">
        © 2026 FrontPrep AI. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
