'use client'

export default function TrustedClients() {
  const clients = [
    { name: 'Capsule', icon: '◉' },
    { name: 'Layers', icon: '⬚' },
    { name: 'Polymath', icon: '◯' },
    { name: 'Segment', icon: '✦' },
    { name: 'Alt+Shift', icon: '≈' },
    { name: 'Lightbox', icon: '◆' },
    { name: 'Boltshift', icon: '⚡' },
    { name: 'Interlock', icon: '⊙' },
  ]

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-black overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent pointer-events-none" />
      
      <div className="relative max-w-5xl mx-auto px-4 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 ">
          <h2 className="text-xl lg:text-[27px] font-bold text-white text-balance">
            Trusted by thousands of clients more than 4,000+
          </h2>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex items-center gap-3 p-4 sm:p-5 rounded-lg   transition-all duration-300 group cursor-pointer"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-xl sm:text-2xl text-teal-500 group-hover:text-teal-400 transition-colors duration-300">
                {client.icon}
              </div>
              <span className="text-base lg:text-[18px] font-semibold text-white group-hover:text-teal-400 transition-colors duration-300 whitespace-nowrap">
                {client.name}
              </span>
            </div>
          ))}
        </div>

      
      </div>
    </section>
  )
}
