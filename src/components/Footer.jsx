import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-terra-900 border-t border-terra-600">
      <div className="h-1 geo-line" />

      <div className="max-w-6xl mx-auto px-6 py-10 pb-2">

        {/* Bloco principal */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">

          {/* Coluna esquerda: identidade + descrição */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <p className="section-label mb-3">Expediente</p>
              
            </div>

        

            <p className="font-serif text-terra-400 text-sm leading-relaxed mb-6">
              Trabalho sobre a Corrida de Tora do povo Krikati da Aldeia São José, em Montes Altos (MA), produzido a partir da escuta, observação e registro de suas memórias, identidade, tradições e resistência cultural entre passado, presente e futuro.
            </p>
            <p className="font-serif text-terra-400 text-sm leading-relaxed mb-6">
             Este trabalho foi elaborado como parte da conclusão do curso de Jornalismo do Centro de Ciências de Imperatriz (CCIM), sob orientação do Prof. Dr. Alexandre Zarate Maciel.
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
                  <p className="text-terra-200 text-sm font-serif">Paulo Rayan Nascimento Ferraz</p>
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
        <div className="border-t border-terra-700 pt-1 text-center">
          <p className="font-serif text-terra-500 text-xs leading-relaxed">
            © {new Date().getFullYear()} Paulo Ferraz. Todos os direitos reservados. Desenvolvido por Higor Costa.
          </p>
        </div>

      </div>
    </footer>
  )
}
