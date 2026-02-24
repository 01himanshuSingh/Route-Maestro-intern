'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
const router = useRouter()
  const navItems = [
    { label: 'Overview', href: '#overview' },
    { label: 'Features', href: '#features' },
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Insights', href: '#insights' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">

      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
          isScrolled ? 'py-3' : 'py-4'
        }`}
      >
        <nav
          className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled
              ? 'bg-black/80 backdrop-blur-md border border-white/10 rounded-full px-4 py-3'
              : 'bg-transparent px-0 py-0'
          }`}
        >
          {/* Logo */}
      <Link href="/" className="flex items-center">
  <div
    className={`transition-all duration-300 rounded-lg ${
      isScrolled
        ? "bg-white/90 backdrop-blur-sm px-2 py-1 shadow-md"
        : "bg-transparent"
    }`}
  >
    <Image
      src="/RM Logo.png"
      alt="RouteMaestro Logo"
      width={160}
      height={40}
      priority
      className={`transition-all duration-300 ${
        isScrolled ? "h-8 w-auto" : "h-10 w-auto"
      }`}
    />
  </div>
</Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm lg:text-[16px] text-white/70 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden sm:block">
            <button
              className={`bg-[#e2472b] hover:bg-[#fe6652] text-white rounded-full font-medium transition-all hover:cursor-pointer duration-200 ${
                isScrolled ? 'px-5 py-3 text-sm' : 'px-6 py-2 text-sm'
              }`}
              onClick={() => {
router.push('/schedule-demo')
              }}
            >
              Schedule A Demo
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
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="px-6 py-3 text-sm text-white/70 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <button className="px-6 py-3 text-left bg-teal-500 text-white rounded-b-2xl">
              See pricing
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
