import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-terra-900 border-t border-terra-600">
      <div className="h-1 geo-line" />

      <div className="max-w-6xl mx-auto px-6 py-14">

        {/* Bloco principal */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">

          {/* Coluna esquerda: identidade + descrição */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-1.5 h-12 bg-urucum block flex-shrink-0" />
              <div>
                <p className="font-display text-2xl text-terra-50 leading-tight">Corrida de tora</p>
                <p className="text-terra-400 text-xs tracking-widest uppercase mt-0.5">Passado, presente e futuro</p>
              </div>
            </div>

            <p className="font-serif text-terra-200 text-sm leading-relaxed mb-4">
              Um registro sobre memória, identidade e resistência cultural.
            </p>

            <p className="font-serif text-terra-400 text-sm leading-relaxed mb-6">
              Trabalho sobre a Corrida de Tora do povo Krikati da Aldeia São José, em Montes Altos (MA), produzido a partir da escuta, observação e registro de suas memórias, identidade, tradições e resistência cultural entre passado, presente e futuro.
            </p>

            <div className="space-y-1">
              <p className="text-terra-300 text-xs font-sans">Reportagem acadêmica em formato de longform</p>
              <p className="text-terra-300 text-xs font-sans">Trabalho de Conclusão de Curso</p>
              <p className="text-terra-300 text-xs font-sans">Curso de Jornalismo — UFMA/CCIM</p>
            </div>
          </div>

          {/* Coluna direita: créditos */}
          <div className="space-y-5">
            <div>
              <p className="section-label mb-3">Créditos</p>
              <ul className="space-y-3">
                <li>
                  <p className="text-terra-500 text-xs uppercase tracking-widest font-sans">Autoria, apuração e redação</p>
                  <p className="text-terra-200 text-sm font-serif">Paulo Rayan Nascimento Ferraz</p>
                </li>
                <li>
                  <p className="text-terra-500 text-xs uppercase tracking-widest font-sans">Orientação</p>
                  <p className="text-terra-200 text-sm font-serif">Prof. Dr. Alexandre Zarate Maciel</p>
                </li>
                <li>
                  <p className="text-terra-500 text-xs uppercase tracking-widest font-sans">Densenvolvimento do site</p>
                  <p className="text-terra-200 text-sm font-serif">Higor Pinheiro Costa</p>
                </li>
                <li>
                  <p className="text-terra-500 text-xs uppercase tracking-widest font-sans">Fotografia e vídeos</p>
                  <p className="text-terra-200 text-sm font-serif">Paulo Ferraz</p>
                  <p className="text-terra-200 text-sm font-serif">Arquivo pessoal do povo Krikati</p>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-terra-400 text-sm font-serif">Junho de 2026</p>
              <p className="text-terra-500 text-xs font-sans">Imperatriz (MA)</p>
            </div>
          </div>
        </div>

        {/* Nota final + navegação */}
        <div className="border-t border-terra-700 pt-8 grid md:grid-cols-2 gap-6 items-start">
          <p className="font-serif text-terra-500 text-xs leading-relaxed">
            Este trabalho foi elaborado como parte da conclusão do curso de Jornalismo do Centro de Ciências de Imperatriz (CCIM), sob orientação do Prof. Dr. Alexandre Zarate Maciel.
          </p>

          <div className="flex gap-6 md:justify-end flex-wrap">
            {[['/', 'Início'], ['/longform', 'Longform'], ['/galeria', 'Galeria']].map(([to, label]) => (
              <Link key={to} to={to} className="text-terra-400 hover:text-terra-50 text-xs font-sans tracking-widest uppercase transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}
