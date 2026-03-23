'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Features', href: '/features' },
    { label: 'Pricing', href: '/pricing' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div
        className={`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
          isScrolled ? 'py-3' : 'py-4'
        }`}
      >
        <nav
          className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled
              ? 'bg-black/70 backdrop-blur-xl border border-white/20 shadow-[0_0_0_1px_rgba(255,255,255,0.08)] rounded-full px-4 py-3 ring-1 ring-white/5'
              : 'bg-transparent px-0 py-0'
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="transition-all duration-300 rounded-lg bg-white/90 backdrop-blur-sm px-2 py-1 shadow-md lg:shadow-lg">
              <Image
                src="/RM Logo.png"
                alt="RouteMaestro Logo"
                width={160}
                height={40}
                priority
                className={`transition-all duration-300 ${
                  isScrolled ? 'h-8 w-auto' : 'h-9 w-auto'
                }`}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = pathname === item.href

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`
                    relative text-sm lg:text-[17px] font-medium
                    transition-all duration-300
                    lg:tracking-[0.2px]

                    ${
                      isActive
                        ? 'text-white'
                        : 'text-white/60 hover:text-white'
                    }
                  `}
                >
                  {item.label}

                  {/* Active underline */}
                  <span
                    className={`
                      absolute left-0 -bottom-1 h-[2px] w-full rounded-full
                      transition-all duration-300
                      ${
                        isActive
                          ? 'bg-gradient-to-r from-[#ff6a3d] to-[#ff9a7a]'
                          : 'bg-transparent'
                      }
                    `}
                  />
                </Link>
              )
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden sm:block">
            <button
              className={`
                relative overflow-hidden group hidden lg:flex
                items-center justify-center

                bg-gradient-to-r from-[#e2472b] to-[#ff6a3d]
                hover:from-[#ff6a3d] hover:to-[#ff8a6b]

                text-white rounded-full font-medium
                tracking-[0.3px]

                transition-all duration-300

                ${
                  isScrolled
                    ? 'px-5 py-3 text-sm'
                    : 'px-6 py-2 text-sm'
                }

                shadow-[0_8px_30px_rgba(255,90,60,0.25)]
                hover:shadow-[0_12px_40px_rgba(255,90,60,0.35)]
              `}
              onClick={() => router.push('/schedule-demo')}
            >
              <span className="relative z-10">Schedule Demo</span>

              {/* Shine effect */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-b border-white/10 mx-4 rounded-2xl">
          <nav className="flex flex-col divide-y divide-white/10">
            {navItems.map((item) => {
              const isActive = pathname === item.href

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`
                    px-6 py-3 text-[17px] font-medium transition-all duration-200

                    ${
                      isActive
                        ? 'text-white bg-white/10'
                        : 'text-white/70 hover:text-white'
                    }
                  `}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              )
            })}

            <button
              className="px-6 py-3 text-left bg-gradient-to-r from-[#e2472b] to-[#ff6a3d] text-white rounded-b-2xl font-medium"
              onClick={() => {
                router.push('/schedule-demo')
                setIsOpen(false)
              }}
            >
              Schedule A Demo
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}