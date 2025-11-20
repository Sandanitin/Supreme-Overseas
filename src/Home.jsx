import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const whyItems = [
    {
      label: '850+ University Partners',
      description: 'Global universities you can trust',
      icon: '🤝',
    },
    {
      label: '45,000+ Success Stories',
      description: 'Students placed across top destinations',
      icon: '🎓',
    },
    {
      label: 'Scholarship up to 50%*',
      description: 'Merit-based & need-based scholarships',
      icon: '💰',
    },
    {
      label: 'Courses starting at ₹8 Lakhs*',
      description: 'Curated programs to fit your budget',
      icon: '📚',
    },
  ]

  const advantageTopRow = [
    {
      label: "Finding the Program That's Right for You",
      icon: '🔎',
    },
    {
      label: 'Curated Expert-led Application Assistance',
      icon: '👤',
    },
    {
      label: 'English Assessment Test Prep On-the-go',
      icon: '📝',
    },
  ]

  const advantageBottomRow = [
    {
      label: 'VISA Interview Assistance',
      icon: '🛂',
    },
    {
      label: 'Loan Assistance',
      icon: '💳',
    },
    {
      label: 'Making Sure You Stay Right, And Stay Well',
      icon: '🏠',
    },
  ]

  const universityTabs = [
    { id: 'uk', name: 'United Kingdom', flag: '🇬🇧' },
    { id: 'usa', name: 'USA', flag: '🇺🇸' },
    { id: 'germany', name: 'Germany', flag: '🇩🇪' },
    { id: 'canada', name: 'Canada', flag: '🇨🇦' },
    { id: 'dubai', name: 'Dubai', flag: '🇦🇪' },
  ]

  const universitiesByCountry = {
    uk: [
      {
        name: 'University of Birmingham',
        location: 'Birmingham, United Kingdom',
        courses: '497+ Courses',
        short: 'UoB',
      },
      {
        name: 'Queen Mary University of London',
        location: 'London, United Kingdom',
        courses: '519+ Courses',
        short: 'QMUL',
      },
      {
        name: 'University of Essex',
        location: 'Colchester, United Kingdom',
        courses: '450+ Courses',
        short: 'UE',
      },
      {
        name: 'Coventry University',
        location: 'Coventry, United Kingdom',
        courses: '503+ Courses',
        short: 'CU',
      },
      {
        name: 'Nottingham Trent University',
        location: 'Nottingham, United Kingdom',
        courses: '335+ Courses',
        short: 'NTU',
      },
      {
        name: 'University of East London',
        location: 'London, United Kingdom',
        courses: '373+ Courses',
        short: 'UEL',
      },
    ],
    usa: [
      {
        name: 'Adelphi University',
        location: 'Garden City, United States',
        courses: '214+ Courses',
        short: 'AU',
      },
      {
        name: 'Western New England University',
        location: 'Springfield, United States',
        courses: '64+ Courses',
        short: 'WNE',
      },
      {
        name: 'University of the Pacific',
        location: 'Stockton, United States',
        courses: '194+ Courses',
        short: 'UoP',
      },
      {
        name: 'Cleveland State University',
        location: 'Cleveland, United States',
        courses: '230+ Courses',
        short: 'CSU',
      },
      {
        name: 'University of Dayton',
        location: 'Dayton, United States',
        courses: '359+ Courses',
        short: 'UD',
      },
      {
        name: 'Johns Hopkins University',
        location: 'Baltimore, United States',
        courses: '43+ Courses',
        short: 'JHU',
      },
    ],
    germany: [
      {
        name: 'International University of Applied Sciences',
        location: 'Bad Honnef, Germany',
        courses: '25+ Courses',
        short: 'IU',
      },
      {
        name: 'SRH - Hochschulen Heidelberg',
        location: 'Heidelberg, Germany',
        courses: '9+ Courses',
        short: 'SRH',
      },
      {
        name: 'SRH - Berlin University of Applied Science',
        location: 'Berlin, Germany',
        courses: '55+ Courses',
        short: 'SRH Berlin',
      },
      {
        name: 'Technical University of Munich',
        location: 'Munich, Germany',
        courses: '14+ Courses',
        short: 'TUM',
      },
      {
        name: 'Berlin School of Business and Innovation (BSBI)',
        location: 'Berlin, Germany',
        courses: '36+ Courses',
        short: 'BSBI',
      },
      {
        name: 'University of Europe for Applied Sciences',
        location: 'Berlin, Germany',
        courses: '14+ Courses',
        short: 'UE',
      },
    ],
    canada: [
      {
        name: 'University Canada West',
        location: 'Vancouver, Canada',
        courses: '5+ Courses',
        short: 'UCW',
      },
      {
        name: 'Conestoga College',
        location: 'Kitchener, Canada',
        courses: '242+ Courses',
        short: 'Conestoga',
      },
      {
        name: 'Seneca College',
        location: 'Toronto, Canada',
        courses: '151+ Courses',
        short: 'Seneca',
      },
      {
        name: 'George Brown College',
        location: 'Toronto, Canada',
        courses: '140+ Courses',
        short: 'George Brown',
      },
      {
        name: 'Humber College',
        location: 'Lakeshore, Canada',
        courses: '167+ Courses',
        short: 'Humber',
      },
      {
        name: 'University of Niagara Falls Canada',
        location: 'Niagara Falls, Canada',
        courses: '5+ Courses',
        short: 'UNF',
      },
    ],
    dubai: [
      {
        name: 'University of Birmingham',
        location: 'Dubai',
        courses: '95+ Courses',
        short: 'UoB Dubai',
      },
      {
        name: 'Middlesex University',
        location: 'Dubai',
        courses: '64+ Courses',
        short: 'MU',
      },
      {
        name: 'Heriot-Watt University',
        location: 'Dubai',
        courses: '56+ Courses',
        short: 'HWU',
      },
      {
        name: 'Manipal University',
        location: 'Dubai',
        courses: '42+ Courses',
        short: 'Manipal',
      },
      {
        name: 'De Montfort University',
        location: 'Dubai',
        courses: '22+ Courses',
        short: 'DMU',
      },
      {
        name: 'Amity University',
        location: 'Dubai',
        courses: '11+ Courses',
        short: 'Amity',
      },
    ],
  }

  const [activeCountry, setActiveCountry] = useState('uk')

  const successStories = [
    {
      name: 'Kshitij',
      initials: 'KS',
      from: 'Delhi',
      to: 'United Kingdom',
      quote:
        'My mentor made shortlisting, applications, and visas a breeze. I had support at every step of the way.',
      field: 'Data Science',
      university: 'University of Birmingham',
    },
    {
      name: 'Samad',
      initials: 'SA',
      from: 'Gujarat',
      to: 'United Kingdom',
      quote:
        'Extremely satisfied with my college application process. Clear guidance and a truly student-first approach.',
      field: 'Data Science',
      university: 'Queen Mary University of London',
    },
    {
      name: 'Shubham',
      initials: 'SH',
      from: 'Telangana',
      to: 'United States',
      quote:
        'Smooth process, supportive loan team, and constant check-ins. I felt confident about every decision.',
      field: 'Sciences',
      university: 'University of Illinois',
    },
    {
      name: 'Naveenkumar',
      initials: 'NK',
      from: 'Karnataka',
      to: 'United States',
      quote:
        'I received multiple admits with complete support on applications and documentation. They handled the complexity.',
      field: 'Data Science',
      university: 'Central Michigan University',
    },
    {
      name: 'Shreya',
      initials: 'SR',
      from: 'Noida',
      to: 'Germany',
      quote:
        'Proactive, detail‑oriented mentoring made my Germany dream come true. The team showcased my profile brilliantly.',
      field: 'Management',
      university: 'BSBI',
    },
    {
      name: 'Hanna',
      initials: 'HA',
      from: 'Maharashtra',
      to: 'Canada',
      quote:
        'End‑to‑end support from exam prep to accommodation. The process felt convenient and stress‑free.',
      field: 'Data Science',
      university: 'Humber College',
    },
  ]

  const navigate = useNavigate()

  return (
    <main className="relative min-h-screen bg-slate-50">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pb-24">
        {/* White gradient overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-white/90 to-white/10" />

        {/* Top bar */}
        <header className="relative z-20">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 sm:py-5">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-sky-400 to-blue-600 text-xs font-bold tracking-tight text-white">
                LE
              </div>
              <div className="leading-tight">
                <div className="text-base font-bold lowercase text-slate-900">
                  leverage
                </div>
                <div className="text-xs font-semibold lowercase text-blue-600">
                  edu
                </div>
              </div>
            </div>

            {/* Call button */}
            <a
              href="tel:8069361480"
              className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:text-sm"
            >
              Call us 8069361480
            </a>
          </div>
        </header>

        {/* Hero content */}
        <div className="relative z-20 mx-auto max-w-5xl px-4 pb-10 pt-6 text-center sm:px-6 sm:pt-10">
          <h1 className="text-2xl font-bold leading-snug text-slate-900 sm:text-3xl md:text-[2.4rem] md:leading-snug">
            Take the First Step to{' '}
            <span className="whitespace-nowrap text-blue-600">STUDY ABROAD</span>
          </h1>

          {/* Benefits row */}
          <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs text-slate-600 sm:text-sm">
            <li className="inline-flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-[11px] font-bold text-emerald-500">
                ✓
              </span>
              <span>Courses starting from ₹8 Lakhs*</span>
            </li>
            <li className="inline-flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-[11px] font-bold text-emerald-500">
                ✓
              </span>
              <span>Scholarship worth ₹10,00,000*</span>
            </li>
            <li className="inline-flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-[11px] font-bold text-emerald-500">
                ✓
              </span>
              <span>Offer letter in less than 48 hours*</span>
            </li>
          </ul>

          {/* CTA button */}
          <div className="mt-7">
            <button
              type="button"
              onClick={() => navigate('/journey')}
              className="rounded-lg bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl"
            >
              Start Your Journey
            </button>
          </div>
        </div>

        {/* Background campus image */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[260px] bg-cover bg-bottom sm:h-[320px] lg:h-[420px]"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg')",
          }}
        />
      </section>

      {/* WHY CHOOSE SECTION */}
      <section className="bg-[#f5f9ff] py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-2xl font-semibold text-slate-900 sm:text-3xl">
            Why Choose <span className="text-blue-600">Leverage Edu?</span>
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {whyItems.map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center justify-center gap-3 rounded-2xl bg-white px-6 py-8 text-center shadow-sm ring-1 ring-slate-100/80 transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-2xl">
                  <span>{item.icon}</span>
                </div>
                <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                <p className="text-xs text-slate-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADVANTAGE SECTION */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-2xl font-semibold text-slate-900 sm:text-3xl">
            Leverage Edu <span className="text-blue-600">Advantage</span>
          </h2>

          <div className="mt-10 overflow-hidden rounded-3xl border border-slate-100 bg-sky-50/40 shadow-sm">
            {/* Top row */}
            <div className="grid divide-y divide-slate-100 bg-white/60 md:grid-cols-3 md:divide-y-0 md:divide-x">
              {advantageTopRow.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center justify-center gap-3 px-6 py-8 text-center sm:px-10"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-xl">
                    <span>{item.icon}</span>
                  </div>
                  <p className="text-sm font-medium text-slate-900 sm:text-[0.95rem]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom row */}
            <div className="grid divide-y divide-slate-100 bg-white/60 md:grid-cols-3 md:divide-y-0 md:divide-x">
              {advantageBottomRow.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center justify-center gap-3 px-6 py-8 text-center sm:px-10"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-xl">
                    <span>{item.icon}</span>
                  </div>
                  <p className="text-sm font-medium text-slate-900 sm:text-[0.95rem]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TOP UNIVERSITIES SECTION */}
      <section className="bg-[#f5f9ff] py-18 pb-20 pt-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
            Top Universities to <span className="text-blue-600">Study Abroad</span>
          </h2>

          {/* Tabs */}
          <div className="mt-6 flex flex-wrap items-center gap-6 border-b border-slate-200 pb-2 text-sm sm:text-base">
            {universityTabs.map((tab) => {
              const active = tab.id === activeCountry
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveCountry(tab.id)}
                  className={`inline-flex items-center gap-2 border-b-2 pb-2 transition ${
                    active
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <span className="text-lg">{tab.flag}</span>
                  <span className="font-medium">{tab.name}</span>
                </button>
              )
            })}
          </div>

          {/* University cards */}
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {universitiesByCountry[activeCountry].map((uni) => (
              <div
                key={uni.name}
                className="flex items-center gap-4 rounded-2xl bg-white px-5 py-4 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                {/* Logo placeholder */}
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-slate-50 text-[11px] font-semibold uppercase tracking-tight text-slate-700">
                  {uni.short}
                </div>

                {/* Text */}
                <div className="flex-1 overflow-hidden">
                  <p className="truncate text-sm font-semibold text-slate-900 sm:text-[0.95rem]">
                    {uni.name}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">{uni.location}</p>
                </div>

                {/* Courses badge */}
                <span className="whitespace-nowrap rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-[11px] font-semibold text-amber-700">
                  {uni.courses}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES SECTION */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
                45,000+ <span className="text-blue-600">Success Stories</span>
              </h2>
              <p className="mt-1 text-sm text-slate-500">From Dreamers to Achievers</p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {successStories.map((story) => (
              <article
                key={`${story.name}-${story.to}`}
                className="flex h-full flex-col justify-between rounded-2xl bg-white px-5 py-5 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-sm font-semibold text-slate-700">
                      {story.initials}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{story.name}</p>
                      <p className="text-xs text-slate-500">
                        {story.from}
                        <span className="mx-1 text-slate-400">→</span>
                        {story.to}
                      </p>
                    </div>
                  </div>

                  <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-[0.8rem]">
                    {story.quote}
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="rounded-full bg-sky-50 px-3 py-1 text-[11px] font-medium text-sky-700">
                    {story.field}
                  </span>
                  <span className="truncate text-xs font-semibold text-slate-500">
                    {story.university}
                  </span>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => navigate('/journey')}
              className="rounded-lg bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl"
            >
              Start Your Journey
            </button>
          </div>
        </div>
      </section>

      {/* STUDY ABROAD INFO SECTION */}
      <section className="bg-[#f5f9ff] py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
            Study Abroad with <span className="text-blue-600">Leverage Edu</span>
          </h2>

          <div className="mt-5 max-w-4xl space-y-4 text-sm leading-relaxed text-slate-600 sm:text-[0.95rem]">
            <p>
              As per government estimates, a little over 9,00,000 Indians were studying abroad in 2022. This grew to
              1.31 million in 2023 and 1.33 million in 2024. As per some estimates, around 1.5 to 2 million Indians will
              be studying abroad in 2025.
            </p>
            <p>
              India has the second-largest number of students studying overseas, surpassed only by China. In 2019,
              Indians spent USD 37 billion on higher education overseas and in 2025, the spending is expected to cross
              USD 70 billion.
            </p>
          </div>

          <button className="mt-5 text-sm font-semibold text-blue-600 hover:text-blue-700">
            Read more …
          </button>
        </div>
      </section>
    </main>
  )
}

export default Home
