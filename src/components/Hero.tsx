import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Mail } from 'lucide-react';
const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const handleWhatsApp = () => {
    window.open('https://wa.me/5581996279720?text=Olá! Gostaria de saber mais sobre os produtos da Naga Soluções.', '_blank');
  };
  return <section id="inicio" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-95"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-naga-red/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-naga-white/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-naga-red/10 text-naga-red rounded-full text-sm font-medium mb-4">
                Desde 2021 em Recife-PE
              </span>
              <h1 className="font-playfair text-4xl md:text-6xl font-bold text-naga-white mb-6">
                Sua Solução em{' '}
                <span className="text-naga-red">Embalagens</span>{' '}
                Está Aqui!
              </h1>
              <p className="text-lg text-naga-white/90 mb-8 max-w-2xl">
                A Naga Soluções LTDA industrializa filme stretch para paletização e distribui produtos para embalagens com atendimento diferenciado, qualidade e agilidade nas entregas.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button onClick={handleWhatsApp} className="bg-naga-red hover:bg-naga-red-dark text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-red">
                <Phone className="mr-2 h-5 w-5" />
                Fale Conosco
              </Button>
              <Button variant="outline" onClick={() => scrollToSection('servicos')} className="border-2 border-naga- text-naga-white hover:!bg-transparent hover:!border-naga-red hover:!text-naga-red font-semibold px-8 py-6 text-lg rounded-xl transition-all duration-300">
                Ver Produtos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6 text-naga-white/80">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">(81) 99627-9720</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">nagasolucoes@hotmail.com</span>
              </div>
            </div>
          </div>

          {/* Logo Display */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-naga-red/20 rounded-full blur-2xl"></div>
              <img src="/lovable-uploads/b76b61ba-7665-413a-a800-8d4e885996ab.png" alt="Naga Soluções - Especialistas em Embalagens" className="relative z-10 w-80 h-auto drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;