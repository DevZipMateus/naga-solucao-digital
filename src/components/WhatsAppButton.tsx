import { Phone, ChevronUp, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const contacts = [
    {
      name: 'Geral',
      number: '5581996279720',
      message: 'Olá! Gostaria de saber mais sobre os produtos da Naga Soluções.'
    },
    {
      name: 'Mariana (Vendas)',
      number: '5581999858206',
      message: 'Olá Mariana! Gostaria de conversar sobre vendas dos produtos da Naga Soluções.'
    },
    {
      name: 'Andressa (Vendas)',
      number: '5581996476916',
      message: 'Olá Andressa! Gostaria de conversar sobre vendas dos produtos da Naga Soluções.'
    }
  ];

  const handleContactClick = (contact: typeof contacts[0]) => {
    window.open(`https://wa.me/${contact.number}?text=${encodeURIComponent(contact.message)}`, '_blank');
    setIsExpanded(false);
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
    }`}>
      {/* Contact Options */}
      {isExpanded && (
        <div className="mb-3 space-y-2">
          {contacts.map((contact, index) => (
            <button
              key={index}
              onClick={() => handleContactClick(contact)}
              className="flex items-center gap-3 bg-white hover:bg-gray-50 text-gray-800 p-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 w-full min-w-[200px]"
            >
              <div className="flex-shrink-0">
                <img src="/lovable-uploads/4e8ca264-2f28-453b-993e-c3bbb706bce5.png" alt="WhatsApp" className="h-8 w-8" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-sm">{contact.name}</div>
                <div className="text-xs text-gray-600">
                  {contact.number.replace('55', '').replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')}
                </div>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Main Button */}
      <button
        onClick={toggleExpanded}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 relative"
        aria-label={isExpanded ? "Fechar opções de contato" : "Abrir opções de contato"}
      >
        {isExpanded ? (
          <X className="h-6 w-6" />
        ) : (
          <>
            <img src="/lovable-uploads/4e8ca264-2f28-453b-993e-c3bbb706bce5.png" alt="WhatsApp" className="h-6 w-6" />
            <div className="absolute -top-2 -right-2 bg-naga-red text-white text-xs rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
              3
            </div>
          </>
        )}
      </button>
    </div>
  );
};

export default WhatsAppButton;