import { useState } from 'react'
import { videos } from '../data/videos'
import VideoCard from '../components/VideoCard'

function VideoModal({ video, onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-terra-900/97 flex items-center justify-center p-4 md:p-10" onClick={onClose}>
      <div className="w-full max-w-5xl" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="mb-4 flex items-center gap-2 text-terra-300 hover:text-terra-50 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
          <span className="text-xs uppercase tracking-widest font-sans">Fechar</span>
        </button>
        <div className="relative aspect-video bg-terra-900 shadow-2xl">
          <iframe
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
            title={video.titulo}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="mt-4 border-l-4 border-urucum pl-4">
          <h2 className="font-display text-xl text-terra-50 mb-1">{video.titulo}</h2>
          <p className="text-terra-300 font-serif text-sm">{video.descricao}</p>
        </div>
      </div>
    </div>
  )
}

export default function Videos() {
  const [active, setActive] = useState(null)

  return (
    <>
      {/* Header */}
      <div className="page-hero">
        <div className="absolute inset-0 indigenous-pattern opacity-30" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <span className="section-label">Documentários</span>
          <h1 className="section-title text-4xl md:text-5xl">Vídeos</h1>
          <p className="font-serif text-terra-300 mt-3 text-lg max-w-xl">
            Documentários, registros e depoimentos sobre a cultura e o cotidiano Guarani-Mbya.
          </p>
        </div>
      </div>

      {/* Grid */}
      <section className="py-16 bg-terra-700">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map(v => (
              <VideoCard key={v.id} video={v} onClick={setActive} />
            ))}
          </div>
        </div>
      </section>

      {active && <VideoModal video={active} onClose={() => setActive(null)} />}
    </>
  )
}
