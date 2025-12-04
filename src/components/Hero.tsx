import { ImageWithFallback } from './figma/ImageWithFallback';
import { Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-rose-50 to-white pt-20">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-100 text-rose-800 mb-8">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm">Em Breve</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl tracking-tight text-rose-950 mb-6">
              Mapa da Harmonização Natural
            </h1>
            
            <p className="text-xl text-rose-900/70 mb-8 max-w-xl mx-auto lg:mx-0">
              O Guia da Toxina Botulínica: Do Iniciante ao Avançado. Domine as técnicas de aplicação de botox com excelência e segurança.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#notify" className="px-8 py-4 bg-rose-800 text-white rounded-lg hover:bg-rose-700 transition-colors">
                Quero ser avisada
              </a>
              <a href="#content" className="px-8 py-4 border border-rose-300 text-rose-900 rounded-lg hover:bg-rose-50 transition-colors">
                Saiba mais
              </a>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1710839465443-8671ced76e09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWNpYWwlMjBiZWF1dHklMjBlbGVnYW50fGVufDF8fHx8MTc2NDYwNTI0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Harmonização Facial"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative element */}
            <div className="absolute -z-10 top-8 right-8 w-72 h-72 bg-rose-200 rounded-full blur-3xl opacity-50" />
          </div>
        </div>
      </div>
    </div>
  );
}