import { CheckCircle, Zap, Shield, Layers } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: <Zap size={24} />,
      title: 'Lightning Fast',
      description: 'Build and deploy your websites in seconds with our optimized platform.',
    },
    {
      icon: <Shield size={24} />,
      title: 'Secure by Default',
      description: 'Enterprise-grade security built into every site you create.',
    },
    {
      icon: <Layers size={24} />,
      title: 'Unlimited Customization',
      description: 'Full control over every pixel with our advanced design tools.',
    },
    {
      icon: <CheckCircle size={24} />,
      title: 'SEO Optimized',
      description: 'Automatically optimized for search engines out of the box.',
    },
  ]

  return (
    <section id="features" className="min-h-screen py-20 px-4 bg-black relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Powerful Features
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Everything you need to build professional websites without any coding knowledge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-teal-500/50 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="text-teal-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-white/60">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
