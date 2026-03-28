import { Building2, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Building2 className="w-8 h-8 text-amber-600" />
              <div>
                <h3 className="text-lg font-bold">Living Stone Constructions</h3>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Living Stone Constructions, founded in 2003 by Er. R. David Raja, delivers quality homes and projects across Tamil Nadu as a CMDA registered developer and member of Builders’ Association of India.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#home" className="hover:text-amber-600 transition">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-600 transition">About Us</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-amber-600 transition">Projects</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-600 transition">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Residential Construction</li>
              <li>Commercial Projects</li>
              <li>Industrial Buildings</li>
              <li>Renovation & Remodeling</li>
              <li>Project Management</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-amber-600" />
                <span>No 7, Jeyamani Complex, First Floor, Old Housing Unit, Pudhukottai Road, Thanjavur - 613 007</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 flex-shrink-0 text-amber-600" />
                <span>+91 94431 53487</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 flex-shrink-0 text-amber-600" />
                <span>info@livingstoneconstructions.in</span>
              </li>
            </ul>

            <div className="mt-5">
              <h5 className="text-sm font-semibold text-white mb-2">Follow Us</h5>
              <div className="flex space-x-3">
                <a
                  href="https://www.facebook.com/people/Er-Davidraja/pfbid0BjYtf3ByMcxeipxJD2mSoNgRncqrJAxDFw3Rx9DCr5QaFANp9tqbissGnxMP6rmbl/?rdid=RkqcrmKRzxn7MzG4&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F189TRDhtzv%2F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-amber-600 transition"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4 text-white" />
                </a>
                <a
                  href="https://x.com/livingston83247"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-amber-600 transition"
                  aria-label="Twitter / X"
                >
                  <Twitter className="w-4 h-4 text-white" />
                </a>
                <a
                  href="https://www.instagram.com/livingstoneconstructions?igsh=MmgxeHV5MHo3b2R5&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-amber-600 transition"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Living Stone Constructions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
