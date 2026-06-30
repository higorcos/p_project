export default function VideoCard({ video, onClick }) {
  const thumb = `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`

  return (
    <article
      onClick={() => onClick(video)}
      className="group card cursor-pointer"
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden aspect-video bg-terra-900">
        <img
          src={thumb}
          alt={video.descricao}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          decoding="async"
          onError={e => { e.target.style.display = 'none' }}
        />
        {/* Overlay play */}
        <div className="absolute inset-0 bg-terra-900/40 group-hover:bg-terra-900/20 transition-colors flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-urucum/90 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
            <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
        
       
      </div>

      {/* Info */}
      <div className="p-4">
        <p className="text-terra-300 text-sm font-sans leading-relaxed line-clamp-2">
          {video.descricao}
        </p>
      </div>
    </article>
  )
}
