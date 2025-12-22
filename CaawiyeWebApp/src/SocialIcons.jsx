import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const SocialIcons = () => {
  // Ku badal links-kaaga saxda ah
  const socialLinks = [
    { 
      name: 'Facebook', 
      icon: FaFacebook, 
      color: 'hover:text-blue-600', 
      href: 'https://www.facebook.com/share/1BVnBYytAr/?mibextid=wwXIfr' 
    },
    { 
      name: 'Twitter', 
      icon: FaTwitter, 
      color: 'hover:text-sky-400', 
      href: 'https://twitter.com' 
    },
    { 
      name: 'Instagram', 
      icon: FaInstagram, 
      color: 'hover:text-pink-600', 
      href: 'https://instagram.com' 
    },
  ];

  const whatsappNumber = "+252 61 3103346"; // Ku badal lambarkaaga Whatsapp-ka

  return (
    <div className="flex flex-col items-center space-y-4">
      <h3 className="text-lg font-semibold text-gray-700">Ama Naga La Soo Xiriir</h3>
      <div className="flex space-x-6">
        
        {/* Astaamaha Bulshada */}
        {socialLinks.map((item) => (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.name}
            className={`text-gray-500 ${item.color} transition-colors duration-200 transform hover:scale-110`}
          >
            <item.icon size={30} />
          </a>
        ))}
        
        {/* Astaanta WhatsApp */}
        <a
          href={`https://wa.me/${whatsappNumber.replace(/\D/g, '')}`} // Linkiga WhatsApp
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="text-gray-500 hover:text-green-500 transition-colors duration-200 transform hover:scale-110"
        >
          <FaWhatsapp size={30} />
        </a>
      </div>
    </div>
  );
};

export default SocialIcons;