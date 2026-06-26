import { useParams, Link } from 'react-router-dom'
import { longform } from '../data/longform'

function Section({ section }) {
  if (section.type === 'texto') {
    return (
      <div className="prose-indigena">
        {section.content.split('\n\n').map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    )
  }

  if (section.type === 'imagem') {
    return (
      <figure className="my-12 -mx-4 md:-mx-16 lg:-mx-10">
        <img
          src={section.src}
          alt={section.legenda || ''}
          className="w-full max-h-[600px] object-cover"
        />
        {section.legenda && (
          <figcaption className="text-center text-terra-400 text-sm font-serif italic mt-3 px-4">
            {section.legenda}
          </figcaption>
        )}
      </figure>
    )
  }

  if (section.type === 'imagemVertical') {
    return (
      <figure className="my-12 -mx-4 md:-mx-16 lg:-mx-10">
        <img
          src={section.src}
          alt={section.legenda || ''}
          className=" max-h-[600px] object-cover mx-auto"
        />
        {section.legenda && (
          <figcaption className="text-center text-terra-400 text-sm font-serif italic mt-3 px-4">
            {section.legenda}
          </figcaption>
        )}
      </figure>
    )
  }

  if (section.type === 'imagensParalelas') {
    const cols = section.fotos.length === 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-2'
    return (
      <figure className="my-12 -mx-4 md:-mx-16 lg:-mx-10">
        <div className={`grid grid-cols-1 ${cols} gap-2`}>
          {section.fotos.map((foto, i) => (
            <div key={i} className="aspect-[4/3] overflow-hidden">
              <img
                src={foto.src}
                alt={section.legenda || ''}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        {section.legenda && (
          <figcaption className="text-center text-terra-400 text-sm font-serif italic mt-3 px-4">
            {section.legenda}
          </figcaption>
        )}
      </figure>
    )
  }

  if (section.type === 'imagensVerticaisParalelas') {
    const cols = section.fotos.length === 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-2'
    return (
      <figure className="my-12 -mx-4 md:-mx-16 lg:-mx-10">
        <div className={`grid grid-cols-1 ${cols} gap-2`}>
          {section.fotos.map((foto, i) => (
            <div key={i} className="aspect-[3/4] overflow-hidden">
              <img
                src={foto.src}
                alt={section.legenda || ''}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        {section.legenda && (
          <figcaption className="text-center text-terra-400 text-sm font-serif italic mt-3 px-4">
            {section.legenda}
          </figcaption>
        )}
      </figure>
    )
  }

  if (section.type === 'citacao') {
    return (
      <blockquote className="my-12 border-l-4 border-urucum pl-6">
        <p className="font-serif text-xl md:text-2xl italic text-terra-100 leading-relaxed mb-3">
          "{section.content}"
        </p>
        {section.autor && (
          <cite className="text-terra-400 text-sm font-sans not-italic">— {section.autor}</cite>
        )}
      </blockquote>
    )
  }

  if (section.type === 'video') {
    return (
      <div className="my-12">
        {section.titulo && (
          <p className="section-label mb-3">{section.titulo}</p>
        )}
        <div className="aspect-video bg-terra-900">
          <iframe
            src={`https://www.youtube.com/embed/${section.youtubeId}`}
            title={section.titulo}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    )
  }

  return null
}

export default function CronicaDetalhe() {
  const { slug } = useParams()
  const cronica = longform.find(c => c.slug === slug)

  if (!cronica) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="font-display text-3xl text-terra-300">longform não encontrada</p>
        <Link to="/longform" className="btn-primary">Voltar às longform</Link>
      </div>
    )
  }

  return (
    <>
      {/* Hero da longform */}
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <img
          src={cronica.capa}
          alt={cronica.titulo}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-terra-900 via-terra-900/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 max-w-4xl mx-auto px-6 pb-12">
          <span className="bg-urucum text-white text-xs px-3 py-1 uppercase tracking-widest font-sans">
            longform
          </span>
          <h1 className="font-display text-3xl md:text-5xl text-terra-50 mt-4 mb-3 leading-tight">
            {cronica.titulo}
          </h1>
          <div className="flex items-center gap-4 text-terra-300 text-sm font-sans">
            <span>{cronica.autor}</span>
            <span className="w-1 h-1 rounded-full bg-urucum" />
            <span>{cronica.data}</span>
          </div>
        </div>
      </div>

      {/* Conteúdo longform */}
      <article className="bg-terra-700 py-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Resumo em destaque */}
          <p className="font-serif text-xl md:text-2xl text-terra-200 leading-relaxed border-l-4 border-urucum pl-6 mb-12 italic">
            {cronica.resumo}
          </p>

          {/* Sections */}
          {cronica.sections.map((section, i) => (
            <Section key={i} section={section} />
          ))}

          {/* Rodapé do artigo */}
          <div className="mt-16 pt-8 border-t border-terra-600">
            <Link to="/longform" className="flex items-center gap-2 text-terra-400 hover:text-urucum transition-colors text-sm font-sans uppercase tracking-widest">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
              Todas as longform
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}
