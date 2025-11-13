import React, { useState, useEffect } from 'react'
import Spline from '@splinetool/react-spline'
import {
  Brain,
  Wallet,
  PiggyBank,
  TrendingUp,
  Link as LinkIcon,
  Star,
  Quote,
  Menu,
  X,
  Shield
} from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const NavLink = ({ href, children }) => (
    <a
      href={href}
      onClick={() => setOpen(false)}
      className="text-sm font-medium text-slate-600 hover:text-blue-700 transition-colors"
    >
      {children}
    </a>
  )

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur bg-white/70 shadow-sm' : 'bg-transparent'}`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-blue-600 via-sky-500 to-cyan-400 shadow-sm grid place-items-center">
              <Shield className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-semibold tracking-tight text-slate-800">SaveCrate</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#how">How it works</NavLink>
            <NavLink href="#testimonials">Testimonials</NavLink>
            <NavLink href="#cta">Get started</NavLink>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="#cta" className="inline-flex items-center rounded-full bg-blue-600 text-white px-4 py-2 text-sm font-semibold shadow-sm hover:bg-blue-700 transition-colors">Get Started</a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 pt-2 border-t border-slate-200">
            <div className="flex flex-col gap-3">
              <NavLink href="#features">Features</NavLink>
              <NavLink href="#how">How it works</NavLink>
              <NavLink href="#testimonials">Testimonials</NavLink>
              <a href="#cta" className="mt-2 inline-flex items-center justify-center rounded-full bg-blue-600 text-white px-4 py-2 text-sm font-semibold shadow-sm hover:bg-blue-700 transition-colors">Get Started</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/70 to-white pointer-events-none" />
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative pt-28 sm:pt-32 lg:pt-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-200 mb-5">
                <Star className="h-3.5 w-3.5" />
                Built for Africa’s digital future
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
                Your Smart AI Financial Assistant
              </h1>
              <p className="mt-5 text-slate-600 text-lg leading-relaxed max-w-xl">
                SaveCrate helps you save smarter, spend wiser, and reach your goals faster — all powered by intelligent insights.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href="#cta" className="inline-flex items-center justify-center rounded-full bg-blue-600 text-white px-6 py-3 text-sm font-semibold shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-all">
                  Get Started
                </a>
                <a href="#how" className="inline-flex items-center justify-center rounded-full bg-white text-blue-700 px-6 py-3 text-sm font-semibold ring-1 ring-blue-200 hover:ring-blue-300 hover:bg-blue-50 transition-all">
                  See How It Works
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative h-[420px] sm:h-[520px] lg:h-[560px]">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-600/10 via-sky-500/10 to-cyan-400/10 backdrop-blur-sm ring-1 ring-white/40" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Features() {
  const items = [
    {
      icon: <Brain className="h-6 w-6 text-blue-600" />,
      title: 'AI Budget Tracking',
      desc: 'Real-time categorization and budget guidance tuned to your spending patterns.'
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-blue-600" />,
      title: 'Smart Expense Forecasting',
      desc: 'Predict upcoming bills and cash flow to stay ahead of surprises.'
    },
    {
      icon: <PiggyBank className="h-6 w-6 text-blue-600" />,
      title: 'Goal-Based Saving Plans',
      desc: 'Flexible targets with automated nudges to keep you on track.'
    },
    {
      icon: <Wallet className="h-6 w-6 text-blue-600" />,
      title: 'Multi-Wallet Integration',
      desc: 'Connect M-Pesa, Airtel Money, and bank accounts for a unified view.'
    }
  ]

  return (
    <section id="features" className="relative py-20 sm:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="absolute inset-x-0 -top-10 h-40 bg-gradient-to-b from-blue-100/30 to-transparent blur-2xl pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Designed to simplify your money</h2>
          <p className="mt-4 text-slate-600">Powerful, privacy-first tools that make everyday finances effortless.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <div key={i} className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 hover:shadow-lg transition-shadow">
              <div className="h-11 w-11 rounded-xl bg-blue-50 ring-1 ring-blue-100 grid place-items-center mb-4 group-hover:scale-105 transition-transform">
                {it.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{it.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  const steps = [
    {
      icon: <LinkIcon className="h-6 w-6 text-blue-600" />, title: 'Connect your accounts', desc: 'Securely link your M-Pesa, Airtel, and bank accounts in minutes.'
    },
    {
      icon: <Brain className="h-6 w-6 text-blue-600" />, title: 'Get insights', desc: 'See clear, actionable patterns and personalized recommendations.'
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-blue-600" />, title: 'Watch your money grow', desc: 'Stay on track with automated nudges and dynamic goals.'
    }
  ]

  return (
    <section id="how" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">How it works</h2>
          <p className="mt-4 text-slate-600">Get set up in three simple steps.</p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="relative rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <div className="h-10 w-10 rounded-xl bg-blue-50 ring-1 ring-blue-100 grid place-items-center mb-4">{s.icon}</div>
              <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{s.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute right-[-18px] top-1/2 -translate-y-1/2 h-0 w-0 border-y-[10px] border-y-transparent border-l-[18px] border-l-slate-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const items = [
    {
      name: 'Amina N.', role: 'Entrepreneur', quote: 'SaveCrate made it effortless to track daily expenses from M-Pesa and my bank. I finally feel in control.', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop'
    },
    {
      name: 'Samuel K.', role: 'Software Engineer', quote: 'The AI insights are spot on — I hit my emergency fund goal two months earlier than planned.', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop'
    },
    {
      name: 'Zuri A.', role: 'Product Manager', quote: 'Beautiful design, clear guidance, and it just works across all my wallets.', img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=200&auto=format&fit=crop'
    }
  ]

  return (
    <section id="testimonials" className="py-20 sm:py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Loved by people who love progress</h2>
          <p className="mt-4 text-slate-600">Real stories from early customers across Africa.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <div key={i} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center gap-3">
                <img src={t.img} alt={t.name} className="h-10 w-10 rounded-full object-cover" />
                <div>
                  <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
              <p className="mt-4 text-slate-700 leading-relaxed">“{t.quote}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section id="cta" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-tr from-blue-700 via-sky-600 to-cyan-500 p-8 sm:p-12">
          <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.25) 0, transparent 40%), radial-gradient(circle at 80% 30%, rgba(255,255,255,0.25) 0, transparent 40%)' }} />
          <div className="relative">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">Start Managing Your Money the Smart Way.</h3>
            <p className="mt-3 text-white/90 max-w-xl">Join thousands taking control with AI-powered guidance designed for real life in Africa.</p>
            <div className="mt-6">
              <a href="#home" className="inline-flex items-center rounded-full bg-white text-blue-700 px-6 py-3 text-sm font-semibold shadow-sm hover:bg-blue-50 transition-colors">Join SaveCrate Now</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-blue-600 via-sky-500 to-cyan-400 grid place-items-center">
              <Shield className="h-5 w-5 text-white" />
            </div>
            <span className="text-base font-semibold text-slate-800">SaveCrate</span>
          </div>

          <div className="flex items-center gap-6 text-sm text-slate-600">
            <a href="#" className="hover:text-blue-700">About</a>
            <a href="#" className="hover:text-blue-700">Contact</a>
            <a href="#" className="hover:text-blue-700">Privacy</a>
            <a href="#" className="hover:text-blue-700">Terms</a>
          </div>

          <div className="text-sm text-slate-500">© {new Date().getFullYear()} SaveCrate. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  useEffect(() => {
    // Ensure smooth scrolling across the app
    const root = document.documentElement
    const prev = root.style.scrollBehavior
    root.style.scrollBehavior = 'smooth'
    return () => { root.style.scrollBehavior = prev }
  }, [])

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
