import { Instagram, Mail, MessageCircle } from 'lucide-react';
import logo from 'figma:asset/f7fd173bc954ab268532e109e419ec22f89f8d84.png';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-rose-100">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <img src={logo} alt="Juliana Arce" className="h-16 mb-4" />
            <p className="text-rose-900/70">
              O guia definitivo da toxina botulínica para profissionais que buscam excelência na estética facial.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-rose-950 mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-rose-900/70 hover:text-rose-900 transition-colors">
                  Sobre o ebook
                </a>
              </li>
              <li>
                <a href="#content" className="text-rose-900/70 hover:text-rose-900 transition-colors">
                  Conteúdo
                </a>
              </li>
              <li>
                <a href="#notify" className="text-rose-900/70 hover:text-rose-900 transition-colors">
                  Lista de espera
                </a>
              </li>
            </ul>
          </div>
          
          {/* Social */}
          <div>
            <h4 className="text-rose-950 mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center hover:bg-rose-200 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-rose-800" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center hover:bg-rose-200 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 text-rose-800" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center hover:bg-rose-200 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-rose-800" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Legal Notice */}
        <div className="mb-8 p-6 bg-rose-50 rounded-lg border border-rose-100">
          <h4 className="text-rose-950 mb-2">Aviso Legal</h4>
          <p className="text-sm text-rose-900/70">
            Este ebook é destinado apenas para fins educacionais. O conteúdo apresentado só pode ser aplicado por profissionais devidamente certificados e habilitados para realizar procedimentos estéticos com toxina botulínica, conforme as legislações vigentes.
          </p>
        </div>
        
        {/* Bottom */}
        <div className="pt-8 border-t border-rose-100 text-center text-rose-900/70">
          <p>&copy; {currentYear} Juliana Arce - Odontologia e Harmonização Facial. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
