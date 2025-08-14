import { MapPin, Phone, Mail, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/b76b61ba-7665-413a-a800-8d4e885996ab.png" 
                alt="Naga Soluções - Logo" 
                className="h-12 w-auto"
              />
              <div>
                <h3 className="font-playfair text-xl font-bold">Naga Soluções</h3>
                <p className="text-sm text-naga-red">Sua solução está aqui!</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Desde 2021 fornecendo soluções completas em embalagens industriais 
              com qualidade, agilidade e atendimento diferenciado em Jaboatão dos Guararapes-PE.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://www.instagram.com/nagasolucoes/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary-foreground/10 p-3 rounded-full hover:bg-naga-red transition-colors"
                aria-label="Instagram da Naga Soluções"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-inter text-lg font-semibold mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-naga-red mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm">
                    Rua Sistema Lunar, S/N<br />
                    Piedade - Jaboatão dos Guararapes - PE<br />
                    CEP: 54420-145
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-naga-red flex-shrink-0" />
                <a 
                  href="tel:+5581996279720" 
                  className="text-sm hover:text-naga-red transition-colors"
                >
                  (81) 99627-9720
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-naga-red flex-shrink-0" />
                <a 
                  href="mailto:nagasolucoes@hotmail.com" 
                  className="text-sm hover:text-naga-red transition-colors"
                >
                  nagasolucoes@hotmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-inter text-lg font-semibold mb-6">Produtos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#servicos" className="hover:text-naga-red transition-colors">Filme Stretch</a></li>
              <li><a href="#servicos" className="hover:text-naga-red transition-colors">Fitas Adesivas</a></li>
              <li><a href="#servicos" className="hover:text-naga-red transition-colors">Papelão Ondulado</a></li>
              <li><a href="#servicos" className="hover:text-naga-red transition-colors">Plástico Bolha</a></li>
              <li><a href="#servicos" className="hover:text-naga-red transition-colors">Lonas Plásticas</a></li>
              <li><a href="#servicos" className="hover:text-naga-red transition-colors">EPI</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {currentYear} Naga Soluções LTDA. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6 text-sm text-primary-foreground/60">
              <span>CNPJ: 41.064.179/0001-28</span>
              <a 
                href="https://wa.me/5581996279720" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-naga-red transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;