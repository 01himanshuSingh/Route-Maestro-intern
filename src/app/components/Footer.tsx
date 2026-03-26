'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Footer() {
  const router  = useRouter()
  
  const [openContact, setOpenContact] = useState(false)
  return (
    <footer className="relative z-10 bg-black border-t border-white/10 py-12">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
        <div className="flex bg-white/90 backdrop-blur-sm w-[123px] rounded-md items-center mb-4">
  <Image
    src="/RM Logo.png"   // place your logo in public folder
    alt="RouteMaestro Logo"
    width={140}
    height={40}
    className="h-8 w-auto object-contain"
    priority
  />
</div>
         <p className="
  text-[15px] 
  sm:text-base
  lg:text-[16px]
  xl:text-[17px]

  3xl:text-[18px]
  4xl:text-[19px]

  text-slate-300 
  max-w-[132px]
">
            AI-powered platform to build and sell personalized travel packages in minutes.
            <span className='flex  text-[15px]'>
              
Save time. Close faster. Scale smarter.
              </span>


            </p>
          </div>
          

          {/* Product */}
          <div>
           <h3 className="
  font-semibold 
  text-white 
  mb-4 

  text-[16px]
  lg:text-[17px]
  xl:text-[18px]

  3xl:text-[19px]
  4xl:text-[20px]

  lg:tracking-tight
">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/features" className="
  text-sm 
  lg:text-[15px]
  xl:text-[16px]

  3xl:text-[17px]
  4xl:text-[18px]

  text-white/60 hover:text-white 
  transition-colors
  lg:tracking-[0.2px]
">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="
  text-sm 
  lg:text-[15px]
  xl:text-[16px]

  3xl:text-[17px]
  4xl:text-[18px]

  text-white/60 hover:text-white 
  transition-colors
  lg:tracking-[0.2px]
">
                  Pricing
                </Link>
              </li>
              {/* <li>
                <Link href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                  Security
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="https://ascentialabs.com/about-us" className="
  text-sm 
  lg:text-[15px]
  xl:text-[16px]

  3xl:text-[17px]
  4xl:text-[18px]

  text-white/60 hover:text-white 
  transition-colors
  lg:tracking-[0.2px]
">
                  About
                </Link>
              </li>
             
              <li>
               <button
               onClick={() => setOpenContact(true)}
 className="
  text-sm 
  lg:text-[15px]
  xl:text-[16px]

  3xl:text-[17px]
  4xl:text-[18px]

  text-white/60 hover:text-white 
  transition-colors
  lg:tracking-[0.2px]
">
  Contact
</button>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="
  text-sm lg:text-[15px]
  text-white/60 hover:text-white 
  transition-colors

  lg:tracking-[0.2px]
">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms-conditions"className="
  text-sm lg:text-[15px]
  text-white/60 hover:text-white 
  transition-colors

  lg:tracking-[0.2px]
">
                  Terms
                </Link>
              </li>
              {/* <li>
                <Link href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                  Cookies
                </Link>
              </li> */}
            </ul>
          </div>
        </div>

        {/* Bottom */}
      {/* Bottom */}
<div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">

  {/* LEFT SIDE */}
  <div className="flex flex-col items-center sm:items-start gap-1">
    <p className="
  text-sm 
  lg:text-[15px]
  xl:text-[16px]

  3xl:text-[17px]
  4xl:text-[18px]

  text-white/60 
  text-center sm:text-left
">
      © 2026 Route Maestro. All rights reserved.
    </p>

    {/* NEW LINE */}
   <p className="
  text-xs 
  lg:text-sm
  xl:text-[15px]

  3xl:text-[16px]
  4xl:text-[17px]

  text-white/40 
  text-center sm:text-left
">
      Developed by{" "}
      <Link
        href="https://ascentialabs.com/"
        target="_blank"
        className="
  text-sm lg:text-[15px]
  text-white/60 hover:text-white 
  transition-colors

  lg:tracking-[0.2px]
"
      >
        Ascentia Labs
      </Link>
    </p>
  </div>

  {/* RIGHT SIDE ICONS */}
  <div className="flex items-center gap-4">

  {/* LinkedIn */}
  <Link
    href="https://www.linkedin.com/company/ascentialabs/"
    target="_blank"
    className="
      text-white/60 hover:text-white 
      transition-all duration-300

      lg:hover:scale-110
      lg:hover:-translate-y-0.5
    "
  >
    <span className="sr-only">LinkedIn</span>
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.05c.53-1 1.82-2.2 3.75-2.2C20.1 8 22 10.2 22 14.2V24h-4v-8.5c0-2-.04-4.6-2.8-4.6-2.8 0-3.2 2.2-3.2 4.5V24h-4V8z" />
    </svg>
  </Link>

  {/* Instagram */}
  <Link
    href="https://www.instagram.com/ascentialabs/"
    target="_blank"
    className="
      text-white/60 hover:text-white 
      transition-all duration-300

      lg:hover:scale-110
      lg:hover:-translate-y-0.5
    "
  >
    <span className="sr-only">Instagram</span>
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M7.75 2C4.13 2 2 4.13 2 7.75v8.5C2 19.87 4.13 22 7.75 22h8.5C19.87 22 22 19.87 22 16.25v-8.5C22 4.13 19.87 2 16.25 2h-8.5zM12 7.2A4.8 4.8 0 1112 16.8 4.8 4.8 0 0112 7.2zm6.2-.9a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4zM12 9a3 3 0 110 6 3 3 0 010-6z" />
    </svg>
  </Link>

  {/* WhatsApp */}
  <Link
    href="https://api.whatsapp.com/send/?phone=61412566906&text&type=phone_number&app_absent=0"
    target="_blank"
    className="
      text-white/60 hover:text-white 
      transition-all duration-300

      lg:hover:scale-110
      lg:hover:-translate-y-0.5
    "
  >
    <span className="sr-only">WhatsApp</span>
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.04 2C6.58 2 2.15 6.42 2.15 11.88c0 2.1.55 4.07 1.5 5.8L2 22l4.45-1.6a9.9 9.9 0 005.59 1.7h.01c5.46 0 9.89-4.42 9.89-9.88C21.93 6.42 17.5 2 12.04 2zm0 17.88a7.9 7.9 0 01-4.03-1.1l-.29-.17-2.64.95.87-2.57-.19-.3a7.9 7.9 0 01-1.21-4.24c0-4.4 3.58-7.98 7.99-7.98 4.41 0 7.99 3.58 7.99 7.98 0 4.4-3.58 7.98-7.99 7.98zm4.39-5.98c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.95-1.2-.72-.64-1.2-1.44-1.34-1.68-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.48-.4-.42-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.7 2.6 4.12 3.65.58.25 1.03.4 1.38.51.58.18 1.1.15 1.52.09.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z" />
    </svg>
  </Link>

</div>
</div>
      </div>
{openContact && (
  <>
    {/* Overlay */}
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
      onClick={() => setOpenContact(false)}
    />

    {/* ================= DESKTOP MODAL ================= */}
    <div className="hidden md:flex fixed inset-0 z-50 items-center justify-center">
      <div className="
        bg-[#0b0b0f]
        border border-white/10
        rounded-2xl
        p-6
        w-[380px]
        shadow-[0_20px_60px_rgba(0,0,0,0.6)]
      ">
     <h3 className="
  text-white 
  text-[18px] 
  lg:text-[20px]
  xl:text-[22px]

  3xl:text-[24px]
  4xl:text-[26px]

  font-semibold 
  mb-4
">
          Our Contacts
        </h3>

        <div className="space-y-3 text-slate-300 text-[15px] lg:text-[16px]">
          <p>+91 935638574</p>
          <p>+61 4125669</p>
        </div>

        <button
          onClick={() => setOpenContact(false)}
          className="mt-6 w-full py-2 rounded-lg bg-white text-black font-medium"
        >
          Close
        </button>
      </div>
    </div>

    {/* ================= MOBILE BOTTOM SHEET ================= */}
    <div className="
      md:hidden
      fixed bottom-0 left-0 right-0 z-50
      bg-[#0b0b0f]
      border-t border-white/10
      rounded-t-2xl
      p-5
      animate-slideUp
    ">
      <div className="w-10 h-1 bg-white/20 rounded-full mx-auto mb-4" />

      <h3 className="text-white text-[16px] font-semibold mb-3 text-center">
        Our Contacts
      </h3>

      <div className="space-y-3 text-center text-slate-300 text-[15px]">
        <p>+91 9356385744
</p>
        <p>
+61 412566906</p>
      </div>

      <button
        onClick={() => setOpenContact(false)}
        className="mt-5 w-full py-2 rounded-lg bg-white text-black font-medium"
      >
        Close
      </button>
    </div>
  </>
)}
     
    </footer>
  )
}
