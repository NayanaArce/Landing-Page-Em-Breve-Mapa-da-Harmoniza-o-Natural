import { Check } from 'lucide-react';

const topics = [
  'Fundamentos da toxina botulínica',
  'Anatomia aplicada ao botox',
  'Técnicas de aplicação de botox',
  'Mapeamento facial para harmonização natural',
  'Proporções e simetria facial',
  'Protocolos de segurança',
  'Gestão de complicações',
  'Marketing para profissionais',
  'Casos clínicos detalhados',
  'Tendências e inovações do mercado',
];

export function ContentPreview() {
  return (
    <div id="content" className="py-24 bg-rose-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="lg:max-w-3xl lg:mx-auto">
          {/* Content */}
          <div>
            <h2 className="text-4xl sm:text-5xl text-rose-950 mb-6 text-center lg:text-left">
              O que você vai aprender
            </h2>
            <p className="text-xl text-rose-900/70 mb-12 text-center lg:text-left">
              Um guia abrangente que cobre desde os fundamentos até técnicas avançadas de aplicação de toxina botulínica.
            </p>
            
            <div className="space-y-4">
              {topics.map((topic, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-rose-800 flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg text-rose-900">{topic}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}