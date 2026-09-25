import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Logo and About */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/images/tctf-logo-side.JPEG"
                alt={siteConfig.global.name}
                className="h-12 sm:h-14 md:h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-3xs">
              Providing therapeutic services for children and families in the Northeast Georgia area.
            </p>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            <div className="flex flex-col gap-3">
              <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wider">Navigate</h3>
              {siteConfig.navigation.slice(0, 4).map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href}
                  className="text-gray-600 hover:text-primary transition-colors text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wider">Connect</h3>
              {siteConfig.socials.map((social) => (
                <a 
                  key={social.name} 
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary transition-colors text-sm"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wider">Contact Us</h3>
            <a href={`mailto:${siteConfig.global.email}`} className="text-gray-600 hover:text-primary text-sm">
              {siteConfig.global.email}
            </a>
            <p className="text-gray-600 text-sm">{siteConfig.global.phone}</p>
            <p className="text-gray-600 text-sm">{siteConfig.global.address}</p>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-400 text-xs leading-relaxed max-w-2xl mx-auto">
            {siteConfig.global.name} is a {siteConfig.global.nonProfitStatus}. Federal EIN: {siteConfig.global.ein}.
            <br />
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
