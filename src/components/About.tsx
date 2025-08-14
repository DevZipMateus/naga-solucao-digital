import { Award, Clock, Truck, CheckCircle } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Award,
      title: 'Qualidade Garantida',
      description: 'Produtos de alta qualidade com garantia e certificação'
    },
    {
      icon: Clock,
      title: 'Agilidade nas Entregas',
      description: 'Entregas rápidas e pontuais para sua empresa'
    },
    {
      icon: Truck,
      title: 'Logística Eficiente',
      description: 'Sistema de distribuição otimizado em todo PE'
    },
    {
      icon: CheckCircle,
      title: 'Atendimento Diferenciado',
      description: 'Comprometimento e excelência no atendimento'
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 bg-naga-red/10 text-naga-red rounded-full text-sm font-medium mb-4">
            Sobre a Naga Soluções
          </span>
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-primary mb-6">
            Tradição e Inovação em{' '}
            <span className="text-naga-red">Embalagens</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Criada em 2021 na cidade de Recife-PE, a Naga Soluções LTDA se especializou na industrialização 
            de filme stretch para paletização e distribuição de produtos para embalagens, destacando-se pelo 
            atendimento diferenciado com comprometimento, qualidade e agilidade nas entregas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-2xl shadow-elegant hover:shadow-strong transition-all duration-300 group"
            >
              <div className="bg-naga-red/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-naga-red/20 transition-colors">
                <feature.icon className="h-8 w-8 text-naga-red" />
              </div>
              <h3 className="font-inter text-xl font-semibold text-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-card p-8 md:p-12 rounded-3xl shadow-elegant">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-playfair text-2xl md:text-3xl font-bold text-primary mb-6">
                Nossa Missão
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Fornecer soluções completas em embalagens industriais com foco na qualidade, 
                agilidade e atendimento personalizado, contribuindo para o sucesso dos nossos clientes.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-naga-red flex-shrink-0" />
                  <span className="text-sm">Produtos certificados e de qualidade superior</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-naga-red flex-shrink-0" />
                  <span className="text-sm">Atendimento personalizado e consultivo</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-naga-red flex-shrink-0" />
                  <span className="text-sm">Entregas rápidas em todo Pernambuco</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-hero p-8 rounded-2xl text-center">
              <div className="text-naga-white">
                <h4 className="font-playfair text-3xl font-bold mb-2">3+</h4>
                <p className="text-naga-white/90 mb-4">Anos de Experiência</p>
                <h4 className="font-playfair text-3xl font-bold mb-2">500+</h4>
                <p className="text-naga-white/90 mb-4">Clientes Atendidos</p>
                <h4 className="font-playfair text-3xl font-bold mb-2">13</h4>
                <p className="text-naga-white/90">Tipos de Produtos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;