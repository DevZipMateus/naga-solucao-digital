import { useState } from 'react';
import { Package, Shield, Truck, Wrench } from 'lucide-react';

const Services = () => {
  const products = [
    {
      name: 'CANTONEIRA PAPELAO 080CM 1M',
      image: '/Naga solues LTDA_imagens_cliente/Cliente_1_10_CANTONEIRA PAPELAO 080CM 1M 11.jpeg',
      category: 'Proteção'
    },
    {
      name: 'LONA PRETA 4X100M 6X100M 8X100',
      image: '/Naga solues LTDA_imagens_cliente/Cliente_1_11_LONA PRETA 4X100M 6X100M 8X100.jpg',
      category: 'Cobertura'
    },
    {
      name: 'FITA CUIDADO FRAGIL 45X100M',
      image: '/Naga solues LTDA_imagens_cliente/Cliente_1_12_FITA CUIDADO FRAGIL 45X100M.jpg',
      category: 'Sinalização'
    },
    {
      name: 'FITA DEMARCACAO SOLO VERDE 45X',
      image: '/Naga solues LTDA_imagens_cliente/Cliente_1_13_FITA DEMARCACAO SOLO VERDE 45X.jpeg',
      category: 'Sinalização'
    },
    {
      name: 'FITA DEMARCACAO SOLO AZUL 45X',
      image: '/Naga solues LTDA_imagens_cliente/Cliente_1_14_FITA DEMARCACAO SOLO  AZUL 45X.jpeg',
      category: 'Sinalização'
    },
    {
      name: 'FITA DEMARCACAO SOLO VERMELHA',
      image: '/Naga solues LTDA_imagens_cliente/Cliente_1_15_FITA DEMARCACAO SOLO VERMELHA.jpeg',
      category: 'Sinalização'
    },
    {
      name: 'FITA ZEBRADA 45X 100M',
      image: '/Naga solues LTDA_imagens_cliente/Cliente_1_16_FITA ZEBRADA 45X 100M.jpeg',
      category: 'Sinalização'
    },
    {
      name: 'FITA CREPE 48X50M',
      image: '/Naga solues LTDA_imagens_cliente/Cliente_1_17_FITA CREPE 48X50M.jpeg',
      category: 'Adesivos'
    },
    {
      name: 'ALICATE FITA ARQUEAR 1316 e 19',
      image: '/Naga solues LTDA_imagens_cliente/Cliente_1_18_ALICATE FITA ARQUEAR 1316 e 19.jpeg',
      category: 'Ferramentas'
    },
    {
      name: 'ESTICADOR FITA ARQUEAR 1316 e',
      image: '/Naga solues LTDA_imagens_cliente/Cliente_1_19_ESTICADOR FITA ARQUEAR 1316 e.jpeg',
      category: 'Ferramentas'
    },
    {
      name: 'FILME STRETCH SEM TUBO 500mm X',
      image: '/Naga solues LTDA_imagens_cliente/Cliente_1_1_FILME STRETCH SEM TUBO 500mm X.jpeg',
      category: 'Embalagem'
    },
    {
      name: 'FITA ADESIVA MARRON 45x40 e 45',
      image: '/Naga solues LTDA_imagens_cliente/Cliente_1_20_FITA ADESIVA MARRON 45x40 e 45.jpeg',
      category: 'Adesivos'
    },
    {
      name: 'FITA ADESIVA 45X40 45X100 45X2',
      image: '/Naga solues LTDA_imagens_cliente/Cliente_1_21_FITA ADESIVA 45X40 45X100 45X2.jpg',
      category: 'Adesivos'
    },
    {
      name: 'FITA ARQUEAR 10mm',
      image: '/Naga solues LTDA_imagens_cliente/Cliente_1_22_FITA ARQUEAR 10mm.jpeg',
      category: 'Arqueação'
    },
    {
      name: 'FITA ARQUEAR BRANCA 10mm',
      image: '/Naga solues LTDA_imagens_cliente/Cliente_1_23_FITA ARQUEAR BRANCA 10mm.jpeg',
      category: 'Arqueação'
    },
    {
      name: 'FITA ARQUEAR 1316 e 19mm',
      image: '/Naga solues LTDA_imagens_cliente/Cliente_1_24_FITA ARQUEAR 1316 e 19mm.jpeg',
      category: 'Arqueação'
    },
    {
      name: 'FITA CREPE 18x50M',
      image: '/Naga solues LTDA_imagens_cliente/Cliente_1_25_FITA CREPE 18x50M.jpeg',
      category: 'Adesivos'
    },
    {
      name: 'FIVELA PLASTICA FITA ARQUEAR',
      image: '/Naga solues LTDA_imagens_cliente/Cliente_1_26_FIVELA PLASTICA FITA ARQUEAR 1.jpeg',
      category: 'Arqueação'
    },
    {
      name: 'FITILHO',
      image: '/Naga solues LTDA_imagens_cliente/Cliente_1_27_FITILHO.jpeg',
      category: 'Embalagem'
    },
    {
      name: 'SELO METALICO 1316 E 19mm',
      image: '/Naga solues LTDA_imagens_cliente/Cliente_1_28_SELO METALICO 1316 E 19mm.jpeg',
      category: 'Arqueação'
    },
    {
      name: 'SILVER TAPE 45x50M',
      image: '/Naga solues LTDA_imagens_cliente/Cliente_1_29_SILVER TAPE 45x50M.jpeg',
      category: 'Adesivos'
    },
    {
      name: 'FILME STRETCH 100MM MANOPLA',
      image: '/Naga solues LTDA_imagens_cliente/Cliente_1_2_FILME STRETCH 100MM MANOPLA.jpeg',
      category: 'Embalagem'
    },
    {
      name: 'PROTETOR AURICULAR PLUG',
      image: '/Naga solues LTDA_imagens_cliente/Cliente_1_30_PROTETOR AURICULAR PLUG.jpeg',
      category: 'Segurança'
    },
    {
      name: 'AVENTAL RASPA',
      image: '/Naga solues LTDA_imagens_cliente/Cliente_1_31_AVENTAL RASPA.jpeg',
      category: 'Segurança'
    },
    {
      name: 'CINTA ERGONOMICA',
      image: '/Naga solues LTDA_imagens_cliente/Cliente_1_32_CINTA ERGONOMICA.jpeg',
      category: 'Segurança'
    },
    {
      name: 'LUVA TRICOTADA PIGMENTADA PRET',
      image: '/Naga solues LTDA_imagens_cliente/Cliente_1_33_LUVA TRICOTADA PIGMENTADA PRET.jpeg',
      category: 'Segurança'
    },
    {
      name: 'LUVA TRICOTADA BRANCA',
      image: '/Naga solues LTDA_imagens_cliente/Cliente_1_34_LUVA TRICOTADA BRANCA.jpeg',
      category: 'Segurança'
    },
    {
      name: 'LUVA VAQUETA CANO 15 CM',
      image: '/Naga solues LTDA_imagens_cliente/Cliente_1_35_LUVA VAQUETA CANO 15 CM.jpeg',
      category: 'Segurança'
    },
    {
      name: 'LUVA NITRILICA',
      image: '/Naga solues LTDA_imagens_cliente/Cliente_1_36_LUVA NITRILICA.jpg',
      category: 'Segurança'
    },
    {
      name: 'MASCARA COM FILTRO',
      image: '/Naga solues LTDA_imagens_cliente/Cliente_1_37_MASCARA COM FILTRO.jpeg',
      category: 'Segurança'
    },
    {
      name: 'MASCARA SEM FILTRO',
      image: '/Naga solues LTDA_imagens_cliente/Cliente_1_38_MASCARA SEM FILTRO.jpeg',
      category: 'Segurança'
    },
    {
      name: 'CAPACETE VERMELHO',
      image: '/Naga solues LTDA_imagens_cliente/Cliente_1_39_CAPACETE VERMELHO.jpeg',
      category: 'Segurança'
    },
    {
      name: 'FILME STRETCH 100MM',
      image: '/Naga solues LTDA_imagens_cliente/Cliente_1_3_FILME STRETCH 100MM.jpeg',
      category: 'Embalagem'
    },
    {
      name: 'CAPACETE AZUL',
      image: '/Naga solues LTDA_imagens_cliente/Cliente_1_40_CAPACETE AZUL.jpeg',
      category: 'Segurança'
    },
    {
      name: 'LUVA RASPA CANO LONGO',
      image: '/Naga solues LTDA_imagens_cliente/Cliente_1_41_LUVA RASPA CANO LONGO.jpeg',
      category: 'Segurança'
    },
    {
      name: 'CANTONEIRA PLASTICO',
      image: '/Naga solues LTDA_imagens_cliente/Cliente_1_42_cantoneira plastico.jpeg',
      category: 'Proteção'
    },
    {
      name: 'COLETE VERDE',
      image: '/Naga solues LTDA_imagens_cliente/Cliente_1_43_COLETE VERDE.jpg',
      category: 'Segurança'
    },
    {
      name: 'COLETE LARANJA',
      image: '/Naga solues LTDA_imagens_cliente/Cliente_1_44_COLETE LARANJA.jpg',
      category: 'Segurança'
    },
    {
      name: 'CORRENTE PLASTICA',
      image: '/Naga solues LTDA_imagens_cliente/Cliente_1_45_CORRENTE PLASTICA.jpeg',
      category: 'Sinalização'
    },
    {
      name: 'JUGULAR',
      image: '/Naga solues LTDA_imagens_cliente/Cliente_1_46_JUGULAR.jpeg',
      category: 'Segurança'
    },
    {
      name: 'LUVA VULCANIZADA',
      image: '/Naga solues LTDA_imagens_cliente/Cliente_1_47_LUVA VULCANIZADA.jpeg',
      category: 'Segurança'
    },
    {
      name: 'MACACAO BRANCO',
      image: '/Naga solues LTDA_imagens_cliente/Cliente_1_48_MACACAO BRANCO.jpeg',
      category: 'Segurança'
    },
    {
      name: 'OCULOS FUME',
      image: '/Naga solues LTDA_imagens_cliente/Cliente_1_49_OCULOS FUME.jpeg',
      category: 'Segurança'
    },
    {
      name: 'FILME STRETCH 60MM',
      image: '/Naga solues LTDA_imagens_cliente/Cliente_1_4_FILME STRETCH 60MM.jpeg',
      category: 'Embalagem'
    },
    {
      name: 'OCULOS INCOLOR',
      image: '/Naga solues LTDA_imagens_cliente/Cliente_1_50_OCULOS INCOLOR.jpeg',
      category: 'Segurança'
    },
    {
      name: 'PERNEIRA',
      image: '/Naga solues LTDA_imagens_cliente/Cliente_1_51_PERNEIRA.jpeg',
      category: 'Segurança'
    },
    {
      name: 'PROTETOR CONCHA',
      image: '/Naga solues LTDA_imagens_cliente/Cliente_1_52_PROTETOR  CONCHA.jpg',
      category: 'Segurança'
    },
    {
      name: 'SINTO PARAQUEDAS',
      image: '/Naga solues LTDA_imagens_cliente/Cliente_1_53_SINTO PARAQUEDAS.jpeg',
      category: 'Segurança'
    },
    {
      name: 'BOTA SEGURANA BICO AO',
      image: '/Naga solues LTDA_imagens_cliente/Cliente_1_54_BOTA SEGURANA BICO AO.jpg',
      category: 'Segurança'
    },
    {
      name: 'BOTA SEGURANA BICO PVC',
      image: '/Naga solues LTDA_imagens_cliente/Cliente_1_55_BOTA SEGURANA BICO PVC.jpg',
      category: 'Segurança'
    },
    {
      name: 'FILME STRETCH 500MM X 025',
      image: '/Naga solues LTDA_imagens_cliente/Cliente_1_5_FILME STRETCH 500MM X 025.jpeg',
      category: 'Embalagem'
    },
    {
      name: 'FILME STRETCH 160MM',
      image: '/Naga solues LTDA_imagens_cliente/Cliente_1_6_FILME STRETCH 160MM.jpeg',
      category: 'Embalagem'
    },
    {
      name: 'FILME STRETCH 200MM',
      image: '/Naga solues LTDA_imagens_cliente/Cliente_1_7_FILME STRETCH 200MM.jpeg',
      category: 'Embalagem'
    },
    {
      name: 'PLASTICO BOLHA 13M X 100M',
      image: '/Naga solues LTDA_imagens_cliente/Cliente_1_8_PLASTICO BOLHA 13M X 100M.jpeg',
      category: 'Proteção'
    },
    {
      name: 'PAPELAO ONDULADO 13M',
      image: '/Naga solues LTDA_imagens_cliente/Cliente_1_9_PAPELAO ONDULAD.jpeg',
      category: 'Proteção'
    }
  ];

  const categories = ['Todos', 'Embalagem', 'Adesivos', 'Sinalização', 'Arqueação', 'Proteção', 'Cobertura', 'Segurança', 'Ferramentas'];
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const filteredProducts = selectedCategory === 'Todos' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

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

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl shadow-elegant hover:shadow-strong transition-all duration-300 group hover:-translate-y-2 overflow-hidden"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <span className="inline-block px-3 py-1 bg-naga-gray text-xs font-medium rounded-full text-muted-foreground mb-2">
                  {product.category}
                </span>
                <h3 className="font-inter text-sm font-semibold text-primary leading-tight">
                  {product.name}
                </h3>
              </div>
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