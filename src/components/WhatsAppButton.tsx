import { MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsApp = () => {
    window.open('https://wa.me/5581996279720?text=Olá! Gostaria de saber mais sobre os produtos da Naga Soluções.', '_blank');
  };

  return (
    <button
      onClick={handleWhatsApp}
      className={`fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
      <div className="absolute -top-2 -right-2 bg-naga-red text-white text-xs rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
        !
      </div>
    </button>
  );
};

export default WhatsAppButton;