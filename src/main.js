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

function reelLink({ title, url }) {
  return `
    <a class="reel" href="${url}" target="_blank" rel="noopener noreferrer">
      <span class="reel__title">${title}</span>
      <span class="reel__meta">Watch on Instagram</span>
    </a>
  `
}

function gallery(images) {
  if (!images.length) {
    return `<div class="gallery-empty" role="status">Photos coming soon</div>`
  }
  return `
    <div class="gallery">
      ${images
        .map(
          (img) => `
        <figure class="gallery__item">
          <img src="${asset(img.src)}" alt="${img.alt}" loading="lazy" />
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
    <a class="logo" href="#top">${site.name}</a>
    <nav class="site-nav" aria-label="Primary">
      ${nav.map((item) => `<a href="${item.href}">${item.label}</a>`).join('')}
    </nav>
  </header>

  <main id="main">
    <section class="hero" id="top">
      <div class="hero__media" aria-hidden="true">
        <img src="${asset(site.heroImage)}" alt="" />
        <div class="hero__wash"></div>
      </div>
      <div class="hero__content reveal">
        <p class="eyebrow">${site.title} · ${site.org}</p>
        <h1>${site.name}</h1>
        <p class="hero__lede">${site.tagline}</p>
        <div class="cta-row">
          <a class="btn btn--primary" href="#social">View Work</a>
          <a class="btn btn--ghost" href="#contact">Contact</a>
        </div>
      </div>
    </section>

    <section class="section about" id="about">
      <div class="section__inner reveal">
        <p class="eyebrow">About</p>
        <h2>Strategy, content, and the numbers behind both</h2>
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

    <section class="section" id="social">
      <div class="section__inner reveal">
        <p class="eyebrow">${social.eyebrow}</p>
        <h2>${social.headline}</h2>
        <p class="prose">${social.body}</p>
        <div class="reel-grid">
          ${social.featured.map(reelLink).join('')}
        </div>
        <details class="more-work">
          <summary>More work</summary>
          <div class="reel-grid reel-grid--compact">
            ${social.more.map(reelLink).join('')}
          </div>
        </details>
        <p class="section__foot">
          <a href="${site.instagram}" target="_blank" rel="noopener noreferrer">Follow @uis.edu on Instagram</a>
        </p>
      </div>
    </section>

    <section class="section section--tint" id="blog">
      <div class="section__inner reveal">
        <p class="eyebrow">${blog.eyebrow}</p>
        <h2>${blog.headline}</h2>
        <p class="prose">${blog.body}</p>
        <ul class="tool-list" aria-label="Analytics tools">
          ${blog.tools.map((t) => `<li>${t}</li>`).join('')}
        </ul>
        <a class="btn btn--primary" href="${blog.cta.url}" target="_blank" rel="noopener noreferrer">${blog.cta.label}</a>
      </div>
    </section>

    <section class="section" id="promo">
      <div class="section__inner reveal">
        <p class="eyebrow">${promo.eyebrow}</p>
        <h2>${promo.headline}</h2>

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

    <section class="section section--tint" id="consulting">
      <div class="section__inner reveal">
        <p class="eyebrow">${consulting.eyebrow}</p>
        <h2>${consulting.headline}</h2>
        <p class="prose">${consulting.body}</p>
        ${gallery(consulting.images)}
        <p class="scaffold-note">${consulting.note}</p>
      </div>
    </section>

    <section class="section" id="events">
      <div class="section__inner reveal">
        <p class="eyebrow">${events.eyebrow}</p>
        <h2>${events.headline}</h2>
        <p class="prose">${events.body}</p>
        ${gallery(events.images)}
        <p class="scaffold-note">${events.note}</p>
      </div>
    </section>

    <section class="section contact" id="contact">
      <div class="section__inner reveal">
        <p class="eyebrow">Contact</p>
        <h2>Let’s talk about your next campaign</h2>
        <p class="prose">This portfolio accompanies my resume. Reach out by email or connect on LinkedIn.</p>
        <div class="cta-row">
          <a class="btn btn--primary" href="mailto:${site.email}">${site.email}</a>
          <a class="btn btn--ghost" href="${site.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn</a>
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
