import { Link } from 'react-router-dom'
import { videos } from '../data/videos'
import { cronicas } from '../data/cronicas'
import { galeria } from '../data/galeria'
import VideoCard from '../components/VideoCard'
import CronicaCard from '../components/CronicaCard'
import treeImg from '../../img/img07.jpeg'
import { useState } from 'react'

function VideoModal({ video, onClose }) {
  if (!video) return null
  return (
    <div className="fixed inset-0 z-50 bg-terra-900/95 flex items-center justify-center p-4" onClick={onClose}>
      <div className="w-full max-w-4xl" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="mb-4 text-terra-300 hover:text-terra-50 transition-colors">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="relative aspect-video bg-terra-900">
          <iframe
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
            title={video.titulo}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <p className="mt-3 font-display text-terra-50 text-xl">{video.titulo}</p>
      </div>
    </div>
  )
}

export default function Home() {
  const [activeVideo, setActiveVideo] = useState(null)

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-end pb-20 overflow-hidden">
        <img
          src={treeImg}
          alt="Povo Krikati"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-terra-900 via-terra-900/60 to-terra-900/20" />

        {/* Padrão geométrico lateral */}
        <div className="absolute left-0 top-0 bottom-0 w-2 geo-line opacity-60" />
        <div className="absolute right-0 top-0 bottom-0 w-2 geo-line opacity-60" />

        <div className="relative max-w-6xl mx-auto px-6 w-full animate-fade-in">
         {/* <span className="section-label text-terra-200 mb-4">Corrida de tora</span>*/}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-terra-50 leading-none mb-6">
           Corrida de tora <br />
            <span className="text-urucum"> dos indígenas Krikati</span>
          </h1>
          <p className="font-serif text-xl md:text-2xl text-terra-200 max-w-2xl leading-relaxed mb-8">
            Sentimentos, luto e resistência.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/cronicas" className="btn-primary">Ler Crônicas</Link>
            <Link to="/galeria"  className="btn-ghost">Ver Galeria</Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-terra-400 text-xs uppercase tracking-widest font-sans">Rolar</span>
          <svg className="w-5 h-5 text-terra-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* SOBRE */}
      <section className="py-20 bg-terra-600">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <span className="section-label">O Projeto</span>
          <h2 className="section-title mb-6">Memória que resiste</h2>
          <div className="w-16 h-px bg-urucum mx-auto mb-8" />
          <p className="font-serif text-lg text-terra-100 leading-relaxed mb-6">
            Os Krikati habitam a Mata Atlântica há milênios. São cerca de 27 mil pessoas no Brasil, distribuídas em aldeias do Rio Grande do Sul ao Espírito Santo — muitas delas cercadas por cidades que não sabem que as florestas que restam existem por causa deles.
          </p>
          <p className="font-serif text-lg text-terra-100 leading-relaxed">
            Este projeto reúne vídeos, crônicas e fotografias produzidos em diálogo com as comunidades Krikati de São Paulo. É um convite a conhecer um povo que não quer ser lembrado como passado — porque está muito presente.
          </p>
        </div>
      </section>

      {/* VÍDEOS EM DESTAQUE */}
      <section className="py-20 bg-terra-700">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="section-label">Documentários</span>
              <h2 className="section-title">Vídeos em Destaque</h2>
            </div>
            <Link to="/videos" className="btn-ghost text-sm hidden md:inline-block">
              Ver todos
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {videos.slice(0, 3).map(v => (
              <VideoCard key={v.id} video={v} onClick={setActiveVideo} />
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link to="/videos" className="btn-ghost">Ver todos os vídeos</Link>
          </div>
        </div>
      </section>

      {/* Faixa decorativa */}
      <div className="h-2 geo-line" />

      {/* CRÔNICAS */}
      <section className="py-20 bg-terra-700">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="section-label">Longform</span>
              <h2 className="section-title">Crônicas Recentes</h2>
            </div>
            <Link to="/cronicas" className="btn-ghost text-sm hidden md:inline-block">
              Ver todas
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {cronicas.map(c => (
              <CronicaCard key={c.id} cronica={c} />
            ))}
          </div>
        </div>
      </section>

      {/* GALERIA TEASER */}
      <section className="py-20 bg-terra-600">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="section-label">Fotografias</span>
            <h2 className="section-title">Galeria</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {galeria.slice(0, 4).map(img => (
              <div key={img.id} className="aspect-square overflow-hidden bg-terra-900">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/galeria" className="btn-primary">Ver galeria completa</Link>
          </div>
        </div>
      </section>

      {activeVideo && <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />}
    </>
  )
}
