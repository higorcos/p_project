import { useState } from 'react'
import { galeria } from '../data/galeria'
import Lightbox from '../components/Lightbox'

export default function Galeria() {
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const open  = i => setLightboxIndex(i)
  const close = ()  => setLightboxIndex(null)
  const prev  = ()  => setLightboxIndex(i => (i - 1 + galeria.length) % galeria.length)
  const next  = ()  => setLightboxIndex(i => (i + 1) % galeria.length)

  return (
    <>
      {/* Header */}
      <div className="page-hero">
        <div className="absolute inset-0 indigenous-pattern opacity-30" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <span className="section-label">Fotografias</span>
          <h1 className="section-title text-4xl md:text-5xl">Galeria</h1>
          <p className="font-serif text-terra-300 mt-3 text-lg max-w-xl">
            Imagens do cotidiano, dos rituais e das paisagens que moldam a vida Krikati.
          </p>
        </div>
      </div>

      {/* Masonry Grid */}
      <section className="py-16 bg-terra-700">
        <div className="max-w-6xl mx-auto px-6">
          <div
            className="columns-2 md:columns-3 gap-3"
            style={{ columnFill: 'balance' }}
          >
            {galeria.map((img, i) => (
              <div
                key={img.id}
                className="break-inside-avoid mb-3 overflow-hidden cursor-pointer group relative"
                onClick={() => open(i)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Overlay com legenda */}
                <div className="absolute inset-0 bg-terra-900/0 group-hover:bg-terra-900/60 transition-colors flex items-end">
                  <p className="text-terra-50 font-serif text-sm italic p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {img.legenda}
                  </p>
                </div>
                {/* Ícone expand */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-urucum p-1.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contador */}
          <p className="text-center text-terra-400 text-sm font-sans mt-8 tracking-widest">
            {galeria.length} fotografias
          </p>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={galeria}
          index={lightboxIndex}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </>
  )
}
