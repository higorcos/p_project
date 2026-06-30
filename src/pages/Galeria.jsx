import { useState } from 'react'
import { galeria } from '../data/galeria'
import Lightbox from '../components/Lightbox'
import Videos from './Videos'

function splitCols(items, n) {
  const cols = Array.from({ length: n }, () => [])
  items.forEach((item, i) => cols[i % n].push({ ...item, originalIndex: i }))
  return cols
}

export default function Galeria() {
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const open  = i => setLightboxIndex(i)
  const close = ()  => setLightboxIndex(null)
  const prev  = ()  => setLightboxIndex(i => (i - 1 + galeria.length) % galeria.length)
  const next  = ()  => setLightboxIndex(i => (i + 1) % galeria.length)

  const cols2 = splitCols(galeria, 2)
  const cols3 = splitCols(galeria, 3)

  const GalleryCard = ({ img }) => (
    <div
      key={img.id}
      className="mb-3 overflow-hidden cursor-pointer group relative"
      onClick={() => open(img.originalIndex)}
    >
      <img
        src={img.src}
        alt={img.legenda}
        className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0 bg-terra-900/0 group-hover:bg-terra-900/60 transition-colors flex items-end">
        <p className="text-terra-50 font-serif text-sm italic p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {img.legenda}
        </p>
      </div>
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="bg-urucum p-1.5">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
          </svg>
        </div>
      </div>
    </div>
  )

  return (
    <>
      {/* Header */}
      <div className="page-hero">
        <div className="absolute inset-0 indigenous-pattern opacity-30" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <span className="section-label">Fotografias e Vídeos</span>
          <h1 className="section-title text-4xl md:text-5xl">Galeria</h1>
        </div>
      </div>

    
        <Videos></Videos>

      {/* Masonry Grid */}
      <section className="py-16 bg-terra-700">
        <div className="max-w-6xl mx-auto px-6">
          {/* mobile: 2 colunas */}
          <div className="flex gap-3 md:hidden">
            {cols2.map((col, ci) => (
              <div key={ci} className="flex-1 min-w-0">
                {col.map(img => <GalleryCard key={img.id} img={img} />)}
              </div>
            ))}
          </div>
          {/* desktop: 3 colunas */}
          <div className="hidden md:flex gap-3">
            {cols3.map((col, ci) => (
              <div key={ci} className="flex-1 min-w-0">
                {col.map(img => <GalleryCard key={img.id} img={img} />)}
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
