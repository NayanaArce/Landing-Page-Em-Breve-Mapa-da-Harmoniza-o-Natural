import { useEffect } from 'react';

export function MetaPixel() {
  useEffect(() => {
    // Insira seu ID do Pixel do Meta aqui
    const PIXEL_ID = 'SEU_PIXEL_ID_AQUI';
    
    // Código base do Pixel do Meta
    (function(f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
      if (f.fbq) return;
      n = f.fbq = function() {
        n.callMethod
          ? n.callMethod.apply(n, arguments)
          : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(
      window,
      document,
      'script',
      'https://connect.facebook.net/en_US/fbevents.js'
    );

    // Inicializa o Pixel
    if (PIXEL_ID !== 'SEU_PIXEL_ID_AQUI') {
      (window as any).fbq('init', PIXEL_ID);
      (window as any).fbq('track', 'PageView');
    }
  }, []);

  return null;
}

// Função helper para disparar eventos personalizados
export const trackEvent = (eventName: string, data?: any) => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', eventName, data);
  }
};
