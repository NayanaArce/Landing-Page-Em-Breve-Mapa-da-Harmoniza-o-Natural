import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { toast } from 'sonner@2.0.3';
import { Mail, CheckCircle2 } from 'lucide-react';
import { trackEvent } from './MetaPixel';

export function EmailCapture() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast.error('Por favor, insira um email válido');
      return;
    }
    
    // Dispara evento de conversão para o Meta Pixel
    trackEvent('Lead', {
      content_name: 'Lista de Espera - Mapa da Harmonização Natural',
      content_category: 'Ebook',
      value: 0,
      currency: 'BRL'
    });
    
    // Simulate API call
    setIsSubmitted(true);
    toast.success('Você foi adicionada à lista de espera!');
    setEmail('');
  };

  return (
    <div id="notify" className="py-24 bg-gradient-to-br from-rose-900 to-rose-800 text-white">
      <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
        {!isSubmitted ? (
          <>
            <Mail className="w-16 h-16 mx-auto mb-6 text-rose-200" />
            <h2 className="text-4xl sm:text-5xl mb-6">
              Seja a primeira a saber
            </h2>
            <p className="text-xl text-rose-100 mb-12">
              Cadastre-se agora e receba acesso exclusivo ao lançamento do ebook com condições especiais.
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <Input
                type="email"
                placeholder="Seu melhor email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-14 px-6 bg-white text-rose-900 border-0 rounded-lg placeholder:text-rose-400"
              />
              <Button 
                type="submit" 
                size="lg"
                className="h-14 px-8 bg-white text-rose-900 hover:bg-rose-50 rounded-lg"
              >
                Quero ser avisada
              </Button>
            </form>
            
            <p className="mt-6 text-sm text-rose-200">
              Não enviamos spam. Seus dados estão seguros conosco.
            </p>
          </>
        ) : (
          <div className="py-12">
            <CheckCircle2 className="w-20 h-20 mx-auto mb-6 text-green-300" />
            <h2 className="text-4xl mb-4">
              Tudo pronto!
            </h2>
            <p className="text-xl text-rose-100">
              Você receberá um email assim que o ebook estiver disponível.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}