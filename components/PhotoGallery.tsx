'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

const photos = [
  { 
    src: '/photos/foto1.jpg', 
    title: 'Nuestro Momento Especial',
    description: 'Cada instante contigo es único' 
  },
  { 
    src: '/photos/foto2.jpg', 
    title: 'Juntos Por Siempre',
    description: 'Tu sonrisa ilumina mi mundo'
  },
  { 
    src: '/photos/foto3.jpg', 
    title: 'Amor Eterno',
    description: 'Contigo, todo tiene sentido'
  },
];

export default function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const [imageErrors, setImageErrors] = useState<{ [key: number]: boolean }>({});

  const handleImageError = (index: number) => {
    setImageErrors(prev => ({ ...prev, [index]: true }));
  };

  return (
    <section className="min-h-screen py-20 px-4 relative overflow-hidden bg-black">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-300 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-white rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Título de sección */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-5xl">💕</span>
            <h2 className="text-6xl md:text-7xl font-bold text-gradient-gold" style={{ fontFamily: 'Georgia, serif' }}>
              Nuestros Recuerdos
            </h2>
            <span className="text-5xl">💕</span>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-yellow-300 to-transparent mx-auto mb-6" />
          <p className="text-xl md:text-2xl text-white font-semibold drop-shadow-lg max-w-2xl mx-auto" style={{ fontFamily: 'Georgia, serif' }}>
            Cada foto cuenta una historia, cada momento es único e irrepetible
          </p>
        </motion.div>

        {/* Galería de fotos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative cursor-pointer"
              onClick={() => setSelectedPhoto(index)}
            >
              {/* Contenedor de la foto */}
              <div className="relative overflow-hidden rounded-2xl card-glass-black p-3">
                {/* Imagen o fallback */}
                <div className="relative w-full h-[400px] overflow-hidden rounded-xl bg-gradient-to-br from-yellow-900/30 to-yellow-700/20">
                  {!imageErrors[index] ? (
                    <img
                      src={photo.src}
                      alt={photo.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={() => handleImageError(index)}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-yellow-300/60">
                      <svg className="w-24 h-24 mb-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                      <p className="text-sm">Imagen no disponible</p>
                      <p className="text-xs text-yellow-300/40 mt-1">Agrega foto{index + 1}.jpg</p>
                    </div>
                  )}
                  
                  {/* Overlay con gradiente */}
                  {!imageErrors[index] && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-500" />
                      
                      {/* Efecto de brillo al hover */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-300/20 to-transparent"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.6 }}
                      />
                    </>
                  )}
                </div>

                {/* Información de la foto CON MEJOR CONTRASTE */}
                <div className="relative pt-5 pb-3 px-2 text-center">
                  <h3 
                    className="text-2xl md:text-3xl font-bold mb-3 text-gradient-gold drop-shadow-[0_2px_8px_rgba(255,215,0,0.5)]" 
                    style={{ 
                      fontFamily: 'Georgia, serif',
                      textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(255,215,0,0.3)'
                    }}
                  >
                    {photo.title}
                  </h3>
                  <p 
                    className="text-white text-base md:text-lg font-semibold" 
                    style={{
                      textShadow: '1px 1px 3px rgba(0,0,0,0.9), 0 0 10px rgba(0,0,0,0.5)'
                    }}
                  >
                    {photo.description}
                  </p>
                </div>

                {/* Borde dorado animado */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-yellow-300/30 group-hover:border-yellow-300/70 transition-all duration-500 glow-gold" />
                
                {/* Esquinas decorativas */}
                <div className="pointer-events-none absolute top-3 left-3 w-10 h-10 border-t-2 border-l-2 border-yellow-300/50 group-hover:border-yellow-300/80 rounded-tl-xl transition-all duration-500" />
                <div className="pointer-events-none absolute top-3 right-3 w-10 h-10 border-t-2 border-r-2 border-yellow-300/50 group-hover:border-yellow-300/80 rounded-tr-xl transition-all duration-500" />
                <div className="pointer-events-none absolute bottom-3 left-3 w-10 h-10 border-b-2 border-l-2 border-yellow-300/50 group-hover:border-yellow-300/80 rounded-bl-xl transition-all duration-500" />
                <div className="pointer-events-none absolute bottom-3 right-3 w-10 h-10 border-b-2 border-r-2 border-yellow-300/50 group-hover:border-yellow-300/80 rounded-br-xl transition-all duration-500" />
              </div>

              {/* Número de foto */}
              <motion.div
                className="absolute -top-4 -right-4 w-14 h-14 rounded-full card-glass-black border-2 border-yellow-300/70 flex items-center justify-center text-yellow-300 font-bold text-2xl glow-gold"
                whileHover={{ rotate: 360, scale: 1.15 }}
                transition={{ duration: 0.5 }}
              >
                {index + 1}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Texto decorativo inferior */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p 
            className="text-2xl text-white font-semibold italic" 
            style={{ 
              fontFamily: 'Georgia, serif',
              textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(255,215,0,0.2)'
            }}
          >
            “En cada foto, un pedazo de mi corazón late por ti”
          </p>
        </motion.div>
      </div>

      {/* Modal para foto ampliada */}
      {selectedPhoto !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
          onClick={() => setSelectedPhoto(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative rounded-2xl overflow-hidden card-glass-black p-4">
              <div className="relative w-full max-h-[80vh] flex items-center justify-center bg-black/50">
                {!imageErrors[selectedPhoto] ? (
                  <img
                    src={photos[selectedPhoto].src}
                    alt={photos[selectedPhoto].title}
                    className="max-w-full max-h-[75vh] object-contain rounded-xl"
                    onError={() => handleImageError(selectedPhoto)}
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center p-20 text-yellow-300/60">
                    <svg className="w-32 h-32 mb-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                    </svg>
                    <p className="text-xl">Imagen no disponible</p>
                  </div>
                )}
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <h3 
                className="text-4xl font-bold text-gradient-gold mb-3" 
                style={{ 
                  fontFamily: 'Georgia, serif',
                  textShadow: '2px 2px 6px rgba(0,0,0,0.9)'
                }}
              >
                {photos[selectedPhoto].title}
              </h3>
              <p 
                className="text-2xl text-white font-semibold" 
                style={{
                  textShadow: '1px 1px 4px rgba(0,0,0,0.9)'
                }}
              >
                {photos[selectedPhoto].description}
              </p>
            </div>

            {/* Botón cerrar */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute -top-4 -right-4 w-14 h-14 rounded-full card-glass-black border-2 border-yellow-300/70 flex items-center justify-center text-white text-3xl hover:rotate-90 hover:scale-110 transition-transform duration-300 glow-gold"
            >
              ×
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
