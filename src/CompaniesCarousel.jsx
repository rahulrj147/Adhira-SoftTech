import React from 'react';

export default function CompaniesCarousel() {
 const companies = [
  {
    name: "Allianz",
    logo: "https://www.allianzre.com/content/dam/onemarketing/system/AZ_Logo_Twitter_438x220px.png", // Third-party site
    website: "https://www.allianz.com"
  },
  {
    name: "Spinny",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5LuurHnVPTNZjWlezehVyxZkuUei35JRRLw&s", // Likely official CDN SVG
    website: "https://www.spinny.com"
  },
  {
    name: "AIDETIC",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSigxjHcpEfHX0Iv9LrBS9nNZbg-RLthHZr-w&s", // From their domain
    website: "https://www.aidetic.in"
  },
  {
    name: "HDFC Sales", // Note: Logo and website point to HDFC Bank. Will assume HDFC Bank.
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/HDFC_Bank_Logo.svg/2560px-HDFC_Bank_Logo.svg.png", // Wikimedia, HDFC Bank
    website: "https://www.hdfcbank.com"
  },
  {
    name: "cerebrAIx",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrMPl67mqKgTEVkFhpM2P68Jwt0ZStzagWjw&s", // White version
    website: "https://cerebraix.com"
  },
  {
    name: "Kalp Solutions",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX8VZN7rsT2i4vKmHIFiSszXEKcc8VwpyHUQ&s", // From their domain
    website: "https://kalpsolutions.in"
  },
  {
    name: "iEnergizer",
    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQFC9G8s1cmqXg/company-logo_200_200/company-logo_200_200/0/1685106243007/ienergizer_logo?e=2147483647&v=beta&t=fWW2FnpCHgaouGdBqDXUTHh3wT630GoESzOm9O7lOFk", // White version
    website: "https://www.ienergizer.com"
  },
  {
    name: "MINDHiND",
    logo: "https://www.mindhind.com/assets/img/Webp.net-resizeimage.png", // White version
    website: "https://mindhind.com"
  },
  {
    name: "marlabs",
    logo: "https://pbs.twimg.com/media/CIzbmaqWsAALIjT.png:large", // White SVG
    website: "https://www.marlabs.com"
  },
  {
    name: "techbulls",
    logo: "https://www.techbulls.co.in/wp-content/uploads/2024/08/TB-Logo.png", // White version
    website: "https://techbulls.co.in"
  },
  {
    name: "Dotsquares",
    logo: "https://www.pngkey.com/png/detail/412-4129421_dotsquares-logo.png", // White SVG
    website: "https://www.dotsquares.com"
  },
  {
    name: "Niftel",
    logo: "https://www.niftelresources.com/wp-content/uploads/2022/02/Niftel-Resources-Logo.png", // From their domain
    website: "https://niftel.com"
  },
  {
    name: "Transcom",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpj4VDn6rUaveoUqTUWVnrbPPHQ-4Whmeofw&s", // White SVG
    website: "https://www.transcom.com"
  }
];
  // Duplicate the array to create seamless loop
  const duplicatedCompanies = [...companies, ...companies];

  const handleImageError = (e) => {
    // Fallback to a generic logo or text if image fails to load
    e.target.style.display = 'none';
    e.target.nextSibling.style.display = 'block';
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-full mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Our Trusted Partners
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Partnering with industry leaders across diverse sectors
          </p>
        </div>

        {/* Continuous Scrolling Container */}
        <div className="relative">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-slate-900 via-slate-900/50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-slate-900 via-slate-900/50 to-transparent z-10 pointer-events-none" />
          
          {/* Scrolling track */}
          <div className="flex overflow-hidden">
            <div className="flex animate-scroll">
              {duplicatedCompanies.map((company, index) => (
                <div
                  key={`${company.name}-${index}`}
                  className="flex-shrink-0 mx-8 group"
                >
                  <a 
                    href={company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl p-6 backdrop-blur-sm border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:scale-110 w-40 h-32 flex flex-col items-center justify-center group-hover:shadow-lg group-hover:shadow-purple-500/20">
                      <div className="relative w-full h-16 mb-2 flex items-center justify-center">
                        <img
                          src={company.logo}
                          alt={`${company.name} logo`}
                          className="max-w-full max-h-full "
                          onError={handleImageError}
                        />
                        {/* Fallback text - hidden by default */}
                        <div className="hidden text-2xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                          {company.name.charAt(0)}
                        </div>
                      </div>
                      <div className="text-white font-semibold text-sm text-center group-hover:text-purple-400 transition-colors duration-300">
                        {company.name}
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

       
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}