import { useState } from 'react';
import { Phone, Mail, MessageCircle, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create WhatsApp message with form data
    const whatsappMessage = `*Contato via Site - Naga Soluções*

*Nome:* ${formData.name}
*E-mail:* ${formData.email}
*Telefone:* ${formData.phone || 'Não informado'}

*Mensagem:*
${formData.message}

---
_Mensagem enviada via formulário do site_`;

    // Simulate form submission delay then redirect to WhatsApp
    setTimeout(() => {
      window.open(`https://wa.me/5581996279720?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
      
      toast({
        title: "Redirecionando para WhatsApp!",
        description: "Sua mensagem será enviada via WhatsApp.",
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleWhatsApp = () => {
    const message = `Olá! Meu nome é ${formData.name || '[Nome]'}. ${formData.message || 'Gostaria de mais informações sobre os produtos da Naga Soluções.'}`;
    window.open(`https://wa.me/5581996279720?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleEmailDirect = () => {
    const subject = encodeURIComponent('Contato - Naga Soluções');
    const body = encodeURIComponent(`Olá!\n\nMeu nome é ${formData.name || '[Nome]'}.\nTelefone: ${formData.phone || '[Telefone]'}\n\n${formData.message || 'Gostaria de mais informações sobre os produtos da Naga Soluções.'}\n\nAguardo retorno.\nAtenciosamente.`);
    window.open(`mailto:nagasolucoes@hotmail.com?subject=${subject}&body=${body}`, '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 bg-naga-red/10 text-naga-red rounded-full text-sm font-medium mb-4">
            Entre em Contato
          </span>
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-primary mb-6">
            Vamos Conversar Sobre Sua{' '}
            <span className="text-naga-red">Solução</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Estamos prontos para atender suas necessidades. Entre em contato conosco 
            e descubra como podemos ajudar sua empresa.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card p-8 rounded-2xl shadow-elegant">
            <h3 className="font-playfair text-2xl font-bold text-primary mb-6">
              Envie sua Mensagem
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nome Completo *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome completo"
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Telefone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(00) 00000-0000"
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  E-mail *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Mensagem *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Digite sua mensagem aqui..."
                  rows={5}
                  className="w-full"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-naga-red hover:bg-naga-red-dark text-white font-semibold py-4 rounded-xl"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Enviar Mensagem
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Methods */}
          <div className="space-y-6">
            <div className="bg-card p-8 rounded-2xl shadow-elegant">
              <h3 className="font-playfair text-2xl font-bold text-primary mb-6">
                Formas de Contato
              </h3>
              <div className="space-y-4">
                <button
                  onClick={handleWhatsApp}
                  className="w-full bg-green-500 hover:bg-green-600 text-white p-4 rounded-xl flex items-center gap-4 transition-colors"
                >
                  <MessageCircle className="h-6 w-6" />
                  <div className="text-left">
                    <h4 className="font-semibold">WhatsApp</h4>
                    <p className="text-sm opacity-90">(81) 99627-9720</p>
                  </div>
                </button>

                <button
                  onClick={handleEmailDirect}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-xl flex items-center gap-4 transition-colors"
                >
                  <Mail className="h-6 w-6" />
                  <div className="text-left">
                    <h4 className="font-semibold">E-mail</h4>
                    <p className="text-sm opacity-90">nagasolucoes@hotmail.com</p>
                  </div>
                </button>

                <a
                  href="tel:+5581996279720"
                  className="w-full bg-naga-red hover:bg-naga-red-dark text-white p-4 rounded-xl flex items-center gap-4 transition-colors"
                >
                  <Phone className="h-6 w-6" />
                  <div className="text-left">
                    <h4 className="font-semibold">Telefone</h4>
                    <p className="text-sm opacity-90">(81) 99627-9720</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-gradient-hero p-8 rounded-2xl text-center">
              <CheckCircle className="h-16 w-16 text-naga-white mx-auto mb-4" />
              <h3 className="font-playfair text-2xl font-bold text-naga-white mb-4">
                Atendimento Rápido
              </h3>
              <p className="text-naga-white/90 mb-6">
                Respondemos todas as mensagens em até 2 horas durante o horário comercial.
              </p>
              <div className="bg-naga-white/10 p-4 rounded-xl">
                <p className="text-naga-white text-sm">
                  <strong>Horário de Atendimento:</strong><br />
                  Segunda a Sexta: 8h às 18h<br />
                  Sábado: 8h às 12h
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;