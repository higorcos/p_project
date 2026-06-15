import { Link } from 'react-router-dom'

export default function CronicaCard({ cronica, featured = false }) {
  return (
    <Link to={`/cronicas/${cronica.slug}`} className="group block card overflow-hidden">
      {/* Imagem */}
      <div className={`relative overflow-hidden bg-terra-900 ${featured ? 'aspect-[16/7]' : 'aspect-[4/3]'}`}>
        <img
          src={cronica.capa}
          alt={cronica.titulo}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-terra-900/80 via-transparent to-transparent" />
        <span className="absolute top-4 left-4 bg-urucum text-white text-xs px-3 py-1 uppercase tracking-widest font-sans">
          Crônica
        </span>
      </div>

      {/* Conteúdo */}
      <div className="p-5">
        <p className="text-terra-200 text-xs font-sans uppercase tracking-widest mb-2">{cronica.data}</p>
        <h3 className={`font-display text-terra-50 leading-tight mb-3 group-hover:text-urucum-light transition-colors ${
          featured ? 'text-2xl md:text-3xl' : 'text-xl'
        }`}>
          {cronica.titulo}
        </h3>
        <p className="text-terra-300 font-serif text-sm leading-relaxed line-clamp-3">
          {cronica.resumo}
        </p>
        <div className="mt-4 flex items-center gap-2">
          <span className="w-8 h-px bg-urucum" />
          <span className="text-terra-400 text-xs font-sans">{cronica.autor}</span>
        </div>
      </div>
    </Link>
  )
}
