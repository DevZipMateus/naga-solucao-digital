import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const Location = () => {
  const handleDirections = () => {
    window.open('https://www.google.com/maps/search/Rua+sistema+lunar,+22+Recife+PE', '_blank');
  };

  return (
    <section id="localizacao" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 bg-naga-red/10 text-naga-red rounded-full text-sm font-medium mb-4">
            Nossa Localização
          </span>
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-primary mb-6">
            Visite Nossa{' '}
            <span className="text-naga-red">Sede</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Estamos estrategicamente localizados em Recife-PE para melhor atender você.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-card p-8 rounded-2xl shadow-elegant">
              <h3 className="font-playfair text-2xl font-bold text-primary mb-6">
                Informações de Contato
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-naga-red/10 p-3 rounded-xl">
                    <MapPin className="h-6 w-6 text-naga-red" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Endereço</h4>
                    <p className="text-muted-foreground">
                      Rua Sistema Lunar, 22<br />
                      Recife - PE
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-naga-red/10 p-3 rounded-xl">
                    <Phone className="h-6 w-6 text-naga-red" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Telefones</h4>
                    <p className="text-muted-foreground">
                      (81) 99627-9720<br />
                      <strong>VENDAS:</strong><br />
                      Mariana: (81) 99985-8206<br />
                      Andressa: (81) 99647-6916
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-naga-red/10 p-3 rounded-xl">
                    <Mail className="h-6 w-6 text-naga-red" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">E-mail</h4>
                    <p className="text-muted-foreground">nagasolucoes@hotmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-naga-red/10 p-3 rounded-xl">
                    <Clock className="h-6 w-6 text-naga-red" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Horário de Funcionamento</h4>
                    <p className="text-muted-foreground">
                      Segunda a Sexta: 8h às 18h<br />
                      Sábado: 8h às 12h
                    </p>
                  </div>
                </div>
              </div>

              <button
                onClick={handleDirections}
                className="w-full mt-8 bg-naga-red hover:bg-naga-red-dark text-white font-semibold py-4 rounded-xl transition-colors"
              >
                <MapPin className="inline mr-2 h-5 w-5" />
                Ver no Google Maps
              </button>
            </div>

            {/* Company Info */}
            <div className="bg-card p-8 rounded-2xl shadow-elegant">
              <h3 className="font-playfair text-2xl font-bold text-primary mb-6">
                Dados da Empresa
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-primary mb-1">Razão Social</h4>
                  <p className="text-muted-foreground">Naga Soluções LTDA</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">CNPJ</h4>
                  <p className="text-muted-foreground">41.064.179/0001-28</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Redes Sociais</h4>
                  <p className="text-muted-foreground">
                    <a 
                      href="https://www.instagram.com/nagasolucoes/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-naga-red hover:underline"
                    >
                      @nagasolucoes
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-card p-8 rounded-2xl shadow-elegant">
            <h3 className="font-playfair text-2xl font-bold text-primary mb-6">
              Localização no Mapa
            </h3>
            <div className="relative h-96 bg-naga-gray rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.755089089!2d-34.8813171!3d-8.0476194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMDInNTEuNCJTIDM0wrA1Mic1Mi43Ilc!5e0!3m2!1spt-BR!2sbr!4v1699999999999!5m2!1spt-BR!2sbr&q=Rua+Sistema+Lunar,+22,+Recife,+PE"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Naga Soluções"
              ></iframe>
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">
              Clique no mapa para abrir no Google Maps
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;