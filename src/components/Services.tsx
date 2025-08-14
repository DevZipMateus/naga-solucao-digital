import { useState } from 'react';
import { Package, Shield, Truck, Wrench } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Package,
      title: 'Filme Stretch',
      description: 'Filme stretch para paletização e proteção de cargas, garantindo segurança no transporte.',
      category: 'Embalagem'
    },
    {
      icon: Package,
      title: 'Fitas Adesivas e Gomadas',
      description: 'Linha completa de fitas adesivas e gomadas para diferentes aplicações industriais.',
      category: 'Adesivos'
    },
    {
      icon: Package,
      title: 'Fita Demarcação de Solo',
      description: 'Fitas para demarcação e sinalização de áreas industriais e comerciais.',
      category: 'Sinalização'
    },
    {
      icon: Package,
      title: 'Fita de Arquear',
      description: 'Fitas de arquear, selos metálicos e fivelas plásticas para arqueação segura.',
      category: 'Arqueação'
    },
    {
      icon: Package,
      title: 'Papelão Ondulado',
      description: 'Papelão ondulado e cantoneiras (papelão e plásticas) para proteção de produtos.',
      category: 'Proteção'
    },
    {
      icon: Package,
      title: 'Plástico Bolha',
      description: 'Plástico bolha para proteção e amortecimento de produtos frágeis.',
      category: 'Proteção'
    },
    {
      icon: Package,
      title: 'Lonas Plásticas',
      description: 'Lonas plásticas resistentes para cobertura e proteção contra intempéries.',
      category: 'Cobertura'
    },
    {
      icon: Shield,
      title: 'EPI - Equipamentos de Proteção',
      description: 'Linha completa de equipamentos de proteção individual para segurança no trabalho.',
      category: 'Segurança'
    }
  ];

  const categories = ['Todos', 'Embalagem', 'Adesivos', 'Sinalização', 'Arqueação', 'Proteção', 'Cobertura', 'Segurança'];
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const filteredServices = selectedCategory === 'Todos' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 bg-naga-red/10 text-naga-red rounded-full text-sm font-medium mb-4">
            Nossos Produtos
          </span>
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-primary mb-6">
            Soluções Completas em{' '}
            <span className="text-naga-red">Embalagens</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Oferecemos uma linha completa de produtos para embalagens industriais, 
            com qualidade garantida e atendimento especializado.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium text-sm transition-all ${
                selectedCategory === category
                  ? 'bg-naga-red text-white shadow-red'
                  : 'bg-naga-gray text-foreground hover:bg-naga-red/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredServices.map((service, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-2xl shadow-elegant hover:shadow-strong transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="bg-naga-red/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-naga-red/20 transition-colors">
                <service.icon className="h-8 w-8 text-naga-red" />
              </div>
              <div className="mb-3">
                <span className="inline-block px-3 py-1 bg-naga-gray text-xs font-medium rounded-full text-muted-foreground mb-2">
                  {service.category}
                </span>
                <h3 className="font-inter text-lg font-semibold text-primary">
                  {service.title}
                </h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-hero p-8 md:p-12 rounded-3xl text-center">
          <h3 className="font-playfair text-2xl md:text-3xl font-bold text-naga-white mb-4">
            Precisa de uma Solução Personalizada?
          </h3>
          <p className="text-naga-white/90 mb-8 max-w-2xl mx-auto">
            Nossa equipe está pronta para desenvolver soluções específicas para suas necessidades. 
            Entre em contato e descubra como podemos ajudar sua empresa.
          </p>
          <button 
            onClick={() => window.open('https://wa.me/5581996279720?text=Olá! Gostaria de uma solução personalizada em embalagens.', '_blank')}
            className="bg-naga-white text-naga-black hover:bg-naga-gray font-semibold px-8 py-4 rounded-xl transition-colors"
          >
            <Truck className="inline mr-2 h-5 w-5" />
            Solicitar Orçamento
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;