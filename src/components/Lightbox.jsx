import { useEffect } from 'react'

export default function Lightbox({ images, index, onClose, onPrev, onNext }) {
  const img = images[index]

  useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft')  onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, onPrev, onNext])

  return (
    <div
      className="fixed inset-0 z-50 bg-terra-900/95 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Conteúdo (para propagação de clique) */}
      <div className="relative max-w-5xl w-full" onClick={e => e.stopPropagation()}>
        {/* Fechar */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-terra-300 hover:text-terra-50 transition-colors z-10"
          aria-label="Fechar"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Imagem */}
        <img
          src={img.src}
          alt={img.alt}
          className="w-full max-h-[75vh] object-contain"
        />

        {/* Legenda */}
        {img.legenda && (
          <p className="text-center text-terra-300 font-serif text-sm mt-4 italic">{img.legenda}</p>
        )}

        {/* Contador */}
        <p className="text-center text-terra-500 text-xs font-sans mt-2 tracking-widest">
          {index + 1} / {images.length}
        </p>
      </div>

      {/* Prev */}
      <button
        onClick={e => { e.stopPropagation(); onPrev() }}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-terra-300 hover:text-terra-50 transition-colors"
        aria-label="Anterior"
      >
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next */}
      <button
        onClick={e => { e.stopPropagation(); onNext() }}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-terra-300 hover:text-terra-50 transition-colors"
        aria-label="Próxima"
      >
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  )
}
