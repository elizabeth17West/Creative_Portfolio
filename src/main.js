import './styles.css'
import {
  site,
  about,
  social,
  blog,
  promo,
  consulting,
  events,
  nav,
} from './content.js'

const asset = (path) => `${import.meta.env.BASE_URL}${path}`

const srOnly = (text) => `<span class="sr-only">${text}</span>`

function reelLink({ title, url }) {
  return `
    <li>
      <a class="reel" href="${url}" target="_blank" rel="noopener noreferrer">
        <span class="reel__title">${title}</span>
        <span class="reel__meta">Watch on Instagram${srOnly(' (opens in new tab)')}</span>
      </a>
    </li>
  `
}

function sectionHeading(id, text) {
  return `<h2 id="${id}">${text}</h2>`
}

function gallery(images) {
  if (!images.length) return ''
  return `
    <div class="gallery">
      ${images
        .map(
          (img) => `
        <figure class="gallery__item">
          <img src="${asset(img.src)}" alt="${img.alt}" loading="lazy" decoding="async" />
        </figure>
      `,
        )
        .join('')}
    </div>
  `
}

function skillRibbon(skills) {
  return `
    <ul class="skills" aria-label="Core competencies">
      ${skills.map((s) => `<li>${s}</li>`).join('')}
    </ul>
  `
}

document.querySelector('#app').innerHTML = `
  <a class="skip-link" href="#main">Skip to content</a>

  <header class="site-header">
    <div class="site-header__bar">
      <a class="logo" href="#top" aria-label="${site.name}, back to top">${site.name}</a>
      <div class="site-header__actions">
        <button
          type="button"
          class="theme-toggle"
          aria-pressed="false"
          aria-label="Switch to dark mode"
        >
          <span class="theme-toggle__icons" aria-hidden="true">
            <svg class="theme-toggle__icon theme-toggle__icon--moon" viewBox="0 0 24 24" focusable="false">
              <path
                d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5 6.5 6.5 0 1 0 20.5 14.5Z"
                fill="none"
                stroke="currentColor"
                stroke-width="1.75"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <svg class="theme-toggle__icon theme-toggle__icon--sun" viewBox="0 0 24 24" focusable="false">
              <circle
                cx="12"
                cy="12"
                r="4"
                fill="none"
                stroke="currentColor"
                stroke-width="1.75"
              />
              <path
                d="M12 3v2.25M12 18.75V21M4.22 4.22l1.59 1.59M18.19 18.19l1.59 1.59M3 12h2.25M18.75 12H21M4.22 19.78l1.59-1.59M18.19 5.81l1.59-1.59"
                fill="none"
                stroke="currentColor"
                stroke-width="1.75"
                stroke-linecap="round"
              />
            </svg>
          </span>
        </button>
        <button
          type="button"
          class="nav-toggle"
          aria-expanded="false"
          aria-controls="site-nav"
          aria-label="Open menu"
        >
          <span class="nav-toggle__bars" aria-hidden="true"></span>
        </button>
      </div>
    </div>
    <nav class="site-nav" id="site-nav" aria-label="Primary">
      ${nav.map((item) => `<a href="${item.href}">${item.label}</a>`).join('')}
    </nav>
  </header>

  <main id="main">
    <section class="hero" id="top" aria-labelledby="hero-heading">
      <div class="hero__media" aria-hidden="true">
        <img src="${asset(site.heroImage)}" alt="" decoding="async" />
        <div class="hero__wash"></div>
      </div>
      <div class="hero__content reveal">
        <p class="eyebrow">${site.title} · ${site.org}</p>
        <h1 id="hero-heading">${site.name}</h1>
        <p class="hero__lede">${site.tagline}</p>
        <div class="cta-row">
          <a class="btn btn--primary" href="#social">View work</a>
          <a class="btn btn--ghost" href="#contact">Contact</a>
        </div>
      </div>
    </section>

    <section class="section about" id="about" aria-labelledby="about-heading">
      <div class="section__inner reveal">
        <p class="eyebrow">About</p>
        ${sectionHeading('about-heading', 'Strategy, content, and the numbers behind both')}
        ${about.paragraphs.map((p) => `<p class="prose">${p}</p>`).join('')}
        <p class="education">${about.education}</p>
        ${skillRibbon(about.skills)}
      </div>
    </section>

    <nav class="work-nav" aria-label="Work sections">
      <div class="work-nav__inner reveal">
        <p class="eyebrow">Selected work</p>
        <div class="work-nav__links">
          <a href="#social">Social Media</a>
          <a href="#blog">Blog &amp; Analytics</a>
          <a href="#promo">Promotional</a>
          <a href="#consulting">Consulting</a>
          <a href="#events">Events</a>
        </div>
      </div>
    </nav>

    <section class="section" id="social" aria-labelledby="social-heading">
      <div class="section__inner reveal">
        <p class="eyebrow">${social.eyebrow}</p>
        ${sectionHeading('social-heading', social.headline)}
        <p class="prose">${social.body}</p>
        <ul class="reel-grid" aria-label="Featured Instagram reels">
          ${social.featured.map(reelLink).join('')}
        </ul>
        <details class="more-work">
          <summary>More work</summary>
          <ul class="reel-grid reel-grid--compact" aria-label="Additional Instagram reels">
            ${social.more.map(reelLink).join('')}
          </ul>
        </details>
        <p class="section__foot">
          <a href="${site.instagram}" target="_blank" rel="noopener noreferrer">
            Follow @uis.edu on Instagram${srOnly(' (opens in new tab)')}
          </a>
        </p>
      </div>
    </section>

    <section class="section section--tint" id="blog" aria-labelledby="blog-heading">
      <div class="section__inner reveal">
        <p class="eyebrow">${blog.eyebrow}</p>
        ${sectionHeading('blog-heading', blog.headline)}
        <p class="prose">${blog.body}</p>
        <ul class="tool-list" aria-label="Analytics tools">
          ${blog.tools.map((t) => `<li>${t}</li>`).join('')}
        </ul>
        <a class="btn btn--primary" href="${blog.cta.url}" target="_blank" rel="noopener noreferrer">
          ${blog.cta.label}${srOnly(' (opens in new tab)')}
        </a>
      </div>
    </section>

    <section class="section" id="promo" aria-labelledby="promo-heading">
      <div class="section__inner reveal">
        <p class="eyebrow">${promo.eyebrow}</p>
        ${sectionHeading('promo-heading', promo.headline)}

        <article class="case">
          <h3>${promo.welcome.title}</h3>
          <p class="prose">${promo.welcome.body}</p>
          ${gallery(promo.welcome.images)}
        </article>

        <article class="case">
          <h3>${promo.brochure.title}</h3>
          <p class="prose">${promo.brochure.body}</p>
          ${gallery(promo.brochure.images)}
        </article>
      </div>
    </section>

    <section class="section section--tint" id="consulting" aria-labelledby="consulting-heading">
      <div class="section__inner reveal">
        <p class="eyebrow">${consulting.eyebrow}</p>
        ${sectionHeading('consulting-heading', consulting.headline)}
        <p class="prose">${consulting.body}</p>
      </div>
    </section>

    <section class="section" id="events" aria-labelledby="events-heading">
      <div class="section__inner reveal">
        <p class="eyebrow">${events.eyebrow}</p>
        ${sectionHeading('events-heading', events.headline)}
        <p class="prose">${events.body}</p>
      </div>
    </section>

    <section class="section contact" id="contact" aria-labelledby="contact-heading">
      <div class="section__inner reveal">
        <p class="eyebrow">Contact</p>
        ${sectionHeading('contact-heading', 'Let’s talk about your next campaign')}
        <p class="prose">This portfolio accompanies my resume. Reach out by email or connect on LinkedIn.</p>
        <div class="cta-row">
          <a class="btn btn--primary" href="mailto:${site.email}">
            ${site.email}${srOnly(' (opens email app)')}
          </a>
          <a class="btn btn--ghost" href="${site.linkedin}" target="_blank" rel="noopener noreferrer">
            LinkedIn${srOnly(' (opens in new tab)')}
          </a>
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <p>© ${new Date().getFullYear()} ${site.name}</p>
  </footer>
`

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
)

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))

const navToggle = document.querySelector('.nav-toggle')
const siteNav = document.querySelector('.site-nav')

function setNavOpen(open) {
  siteNav.classList.toggle('is-open', open)
  navToggle.setAttribute('aria-expanded', String(open))
  navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu')
}

navToggle.addEventListener('click', () => {
  setNavOpen(!siteNav.classList.contains('is-open'))
})

siteNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setNavOpen(false))
})

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && siteNav.classList.contains('is-open')) {
    setNavOpen(false)
    navToggle.focus()
  }
})

const THEME_KEY = 'theme'
const root = document.documentElement
const themeToggle = document.querySelector('.theme-toggle')

function applyTheme(theme) {
  const isDark = theme === 'dark'

  if (isDark) {
    root.setAttribute('data-theme', 'dark')
  } else {
    root.removeAttribute('data-theme')
  }

  themeToggle.setAttribute('aria-pressed', String(isDark))
  themeToggle.setAttribute(
    'aria-label',
    isDark ? 'Switch to light mode' : 'Switch to dark mode',
  )

  try {
    localStorage.setItem(THEME_KEY, isDark ? 'dark' : 'light')
  } catch (error) {}
}

function getStoredTheme() {
  try {
    return localStorage.getItem(THEME_KEY) === 'dark' ? 'dark' : 'light'
  } catch (error) {
    return 'light'
  }
}

applyTheme(getStoredTheme())

themeToggle.addEventListener('click', () => {
  const nextTheme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
  applyTheme(nextTheme)
})
