import { Award, BookOpen, Users, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: BookOpen,
    title: 'Conteúdo Completo',
    description: 'Técnicas atualizadas e fundamentadas em estudos científicos para aplicação de toxina botulínica.',
  },
  {
    icon: Award,
    title: 'Do Iniciante ao Avançado',
    description: 'Aprenda desde os fundamentos até técnicas avançadas de aplicação de botox.',
  },
  {
    icon: Users,
    title: 'Casos Reais',
    description: 'Estudos de casos práticos e resultados comprovados para você se inspirar.',
  },
  {
    icon: TrendingUp,
    title: 'Crescimento Garantido',
    description: 'Aumente sua credibilidade e destaque-se no mercado de estética facial.',
  },
];

export function Benefits() {
  return (
    <div id="benefits" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl text-rose-950 mb-4">
            Por que este ebook?
          </h2>
          <p className="text-xl text-rose-900/70 max-w-2xl mx-auto">
            Desenvolvido pela Dra. Juliana Arce para transformar sua prática profissional
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-rose-100 mb-6">
                  <Icon className="w-8 h-8 text-rose-800" />
                </div>
                <h3 className="text-xl text-rose-950 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-rose-900/70">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}