import { longform } from '../data/longform'
import CronicaCard from '../components/CronicaCard'

export default function Cronicas() {
  const [destaque, ...resto] = longform

  return (
    <>
      {/* Header */}
      <div className="page-hero">
        <div className="absolute inset-0 indigenous-pattern opacity-30" />
        <div className="max-w-6xl mx-auto px-6 relative">
         
          <h1 className="section-title text-4xl md:text-5xl">Longform</h1>
          <p className="font-serif text-terra-300 mt-3 text-lg max-w-xl">
            Textos sobre pessoas, lugares, ritos e cotidiano — escritos com escuta e respeito.
          </p>
        </div>
      </div>

      <section className="py-16 bg-terra-700">
        <div className="max-w-6xl mx-auto px-6 space-y-6">
          {/* Destaque */}
          <CronicaCard cronica={destaque} featured />

          {/* Grade */}
          {resto.length > 0 && (
            <div className="grid md:grid-cols-2 gap-6">
              {resto.map(c => <CronicaCard key={c.id} cronica={c} />)}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
