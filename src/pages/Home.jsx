import { Link } from 'react-router-dom'
import { videos } from '../data/videos'
import { longform } from '../data/longform'
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
          fetchpriority="high"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-terra-900 via-terra-900/60 to-terra-900/20" />

        {/* Padrão geométrico lateral */}
        <div className="absolute left-0 top-0 bottom-0 w-2 geo-line opacity-60" />
        <div className="absolute right-0 top-0 bottom-0 w-2 geo-line opacity-60" />

        <div className="relative max-w-6xl mx-auto px-6 w-full animate-fade-in">
          <span className="section-label text-terra-200 mb-4">Paulo Ferraz</span>
          <h1 className="font-display text-5xl lg:text-1xl text-terra-50 leading-none mb-6">
            {/*<br />
            <span className="text-urucum"> Paulo Ferraz</span>*/}
          </h1>
          <p className="font-display text-3xl lg:text-7xl text-terra-50 leading-none mb-6">
            "Não é só uma brincadeira ou competição"
          </p>
          <p className="font-serif text-xl md:text-2xl text-terra-200 max-w-2xl leading-relaxed mb-8">
            União e resistência na tradição da Corrida de Tora dos povos indígenas Krikati no Maranhão
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/longform" className="btn-primary">Ler Longform</Link>
            <Link to="/galeria" className="btn-ghost">Ver Galeria</Link>
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

          <h2 className="section-title mb-6">Passado, presente e futuro.</h2>
          <div className="w-16 h-px bg-urucum mx-auto mb-8" />
          <p className="font-serif text-lg text-terra-100 leading-relaxed">

            A Corrida de Tora é uma das mais importantes expressões culturais do povo Krikati, pertencente ao conjunto dos povos Timbira, no Maranhão. Mais do que uma corrida, ela reúne memória, espiritualidade, identidade e conhecimentos transmitidos entre gerações.
          </p>

          <p className="font-serif text-lg text-terra-100 leading-relaxed">

            Preservada principalmente pela tradição oral, a prática continua ocupando um papel central na vida da comunidade, conectando passado, presente e futuro.
          </p>

          <p className="font-serif text-lg text-terra-100 leading-relaxed">

            Este trabalho apresenta um mergulho na Corrida de Tora a partir da convivência com os moradores da Aldeia São José e do acompanhamento de um ritual de encerramento de luto.
          </p>
          <p className="font-serif text-lg text-terra-100 leading-relaxed">

            Ao longo dos quatro capítulos, o leitor conhecerá como era a tradição antigamente, os significados e símbolos que envolvem o ritual, a vivência dos três dias da corrida e os desafios enfrentados para manter viva uma das mais importantes expressões culturais do povo Krikati.
          </p>
          <p className="font-serif text-lg text-terra-100 leading-relaxed">

          </p>
        </div>
      </section>


      {/* Faixa decorativa */}
      <div className="h-2 geo-line" />

      {/* longformS */}
      <section className="py-20 bg-terra-700">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="section-label">LongForm</span>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {longform.map(c => (
              <CronicaCard key={c.id} cronica={c} />
            ))}
          </div>
        </div>
      </section>

      {/* GALERIA TEASER */}
      <section className="py-20 bg-terra-600">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <h3 className="section-label">Fotografias</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {galeria.slice(0, 4).map(img => (
              <div key={img.id} className="aspect-square overflow-hidden bg-terra-900">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/galeria" className="btn-primary">Ver galeria completa</Link>
          </div>
        </div>
      </section>

      {/* VÍDEOS EM DESTAQUE */}
      {/*
      <section className="py-20 bg-terra-700">
        <div className="max-w-6xl mx-auto px-6">
           <div className="text-center mb-10">
            <span className="section-label">Vídeos</span>
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
*/}
      {activeVideo && <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />}
    </>
  )
}
