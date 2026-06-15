import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-terra-900 border-t border-terra-600">
      <div className="h-1 geo-line" />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Marca */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-1.5 h-10 bg-urucum block" />
              <div>
                <p className="font-display text-xl text-terra-50">Guarani-Mbya</p>
                <p className="text-terra-400 text-xs tracking-widest uppercase">Cultura e Memória</p>
              </div>
            </div>
            <p className="font-serif text-terra-300 text-sm leading-relaxed">
              Um projeto de documentação cultural sobre o povo Guarani-Mbya da Mata Atlântica — sua história, sua língua e seu modo de existir.
            </p>
          </div>

          {/* Navegação */}
          <div>
            <p className="section-label mb-4">Navegar</p>
            <ul className="space-y-2">
              {[['/', 'Início'], ['/videos', 'Vídeos'], ['/cronicas', 'Crônicas'], ['/galeria', 'Galeria']].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="text-terra-300 hover:text-terra-50 text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sobre */}
          <div>
            <p className="section-label mb-4">Sobre o Projeto</p>
            <p className="font-serif text-terra-300 text-sm leading-relaxed">
              Trabalho de Conclusão de Curso produzido com respeito à soberania cultural Guarani-Mbya. Todo conteúdo foi construído em diálogo com as comunidades.
            </p>
          </div>
        </div>

        <div className="border-t border-terra-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-terra-400 text-xs">
            © {new Date().getFullYear()} Projeto Cultural Guarani-Mbya. Todos os direitos reservados.
          </p>
          <p className="text-terra-500 text-xs italic font-serif">
            "Nhamboaxy pa nde reko" — Que nossa cultura se fortaleça
          </p>
        </div>
      </div>
    </footer>
  )
}
