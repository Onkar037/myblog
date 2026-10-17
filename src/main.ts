import './style.css'

type Post = {
  id: number
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  body: string[]
}

const posts: Post[] = [
  {
    id: 1,
    title: 'The pleasure of starting again',
    excerpt: 'On fresh notebooks, second chances, and the quiet courage of being a beginner.',
    category: 'Life',
    date: 'October 12, 2026',
    readTime: '5 min read',
    body: [
      'There is a particular kind of optimism in the first page of a notebook. It has not yet been asked to hold a plan, a list, or a version of you that has everything figured out. For a moment, it is only possibility.',
      'I used to think starting over meant that the first attempt had failed. Now I think it is closer to returning with better questions. We notice what we missed. We keep what worked. We begin again, a little less certain and a little more ourselves.',
      'So this is a small invitation: leave a margin for change. The next beginning does not need to be dramatic. Sometimes it is just one honest sentence on a clean page.'
    ]
  },
  {
    id: 2,
    title: 'A slower kind of morning',
    excerpt: 'A few small rituals that make the first hour feel like it belongs to you.',
    category: 'Rituals',
    date: 'October 4, 2026',
    readTime: '4 min read',
    body: [
      'The day feels different when it begins before the notifications do. I have been trying a simple rule: make something before I consume anything. Coffee counts. So does opening a window.',
      'It is not a productivity trick. The point is not to win the morning. It is to meet it before it turns into a list of other people’s priorities.',
      'Some days the ritual lasts ten minutes. That is enough room to hear your own thoughts arrive.'
    ]
  },
  {
    id: 3,
    title: 'Things I learned from making a mess',
    excerpt: 'A desk covered in drafts is often a sign that something is finally moving.',
    category: 'Making',
    date: 'September 22, 2026',
    readTime: '6 min read',
    body: [
      'For a long time, I wanted the process to look as polished as the finished thing. A clear desk, a tidy outline, a confident first sentence. The work kept refusing to cooperate.',
      'The useful part happened in the middle: crossed-out ideas, notes in the wrong order, a sketch that led somewhere unexpected. Mess was not the opposite of progress. It was evidence of contact.',
      'Now I try to leave enough room for the work to surprise me. The clean-up can come later.'
    ]
  },
  {
    id: 4,
    title: 'A small guide to paying attention',
    excerpt: 'Noticing is a practice, and the ordinary world is an excellent place to start.',
    category: 'Life',
    date: 'September 10, 2026',
    readTime: '3 min read',
    body: [
      'Attention is easy to mistake for focus: a beam pointed at one thing until everything else disappears. But most days, paying attention feels more like widening the frame.',
      'Notice the light changing on the wall. The sentence someone almost said. The familiar route that looks different in rain. None of it has to become a lesson.',
      'The noticing itself is the point. It gives an ordinary day a little more texture.'
    ]
  }
]

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <header class="site-header">
    <a class="wordmark" href="#top" aria-label="The Margin home"><span class="wordmark-mark">M</span><span>THE MARGIN</span></a>
    <nav class="site-nav" aria-label="Main navigation">
      <a href="#latest">Journal</a>
      <a href="#about">About</a>
    </nav>
    <a class="header-note" href="#latest">A little room to think <span aria-hidden="true">↘</span></a>
  </header>

  <main id="top">
    <section class="intro" aria-labelledby="intro-title">
      <div class="intro-copy">
        <p class="eyebrow"><span class="eyebrow-dot"></span> A PERSONAL JOURNAL</p>
        <h1 id="intro-title">Notes on<br>being <em>here.</em></h1>
        <p class="intro-description">Thoughts on making things, finding rhythm, and noticing the everyday. Written slowly, read whenever.</p>
        <a class="text-link" href="#latest">Read the latest <span aria-hidden="true">↓</span></a>
      </div>
      <div class="intro-art">
        <img src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=85" alt="A fountain pen on paper" fetchpriority="high">
        <span class="art-stamp">ISSUE<br><strong>NO. 01</strong></span>
        <span class="art-caption">FIELD NOTES, OCTOBER 2026</span>
      </div>
      <div class="intro-index" aria-hidden="true"><span>01</span><span class="index-line"></span><span>04</span></div>
    </section>

    <section class="latest section-wrap" id="latest" aria-labelledby="latest-title">
      <div class="section-heading">
        <div>
          <p class="eyebrow">THE NOTEBOOK</p>
          <h2 id="latest-title">Recent writing<span class="heading-period">.</span></h2>
        </div>
        <label class="search-box">
          <span class="sr-only">Search articles</span>
          <span class="search-icon" aria-hidden="true">⌕</span>
          <input id="post-search" type="search" placeholder="Search the journal" autocomplete="off">
          <kbd>/</kbd>
        </label>
      </div>

      <div class="journal-controls">
        <div class="category-filter" role="group" aria-label="Filter articles by category">
          <button class="filter-button is-active" type="button" data-category="All" aria-pressed="true">Everything <span>04</span></button>
          <button class="filter-button" type="button" data-category="Life" aria-pressed="false">Life</button>
          <button class="filter-button" type="button" data-category="Rituals" aria-pressed="false">Rituals</button>
          <button class="filter-button" type="button" data-category="Making" aria-pressed="false">Making</button>
        </div>
        <p class="result-count" id="result-count" aria-live="polite">04 NOTES</p>
      </div>

      <div class="post-grid" id="post-grid"></div>
      <p class="empty-state" id="empty-state" hidden>No notes match that search. Try another word.</p>
    </section>

    <section class="about-band" id="about" aria-labelledby="about-title">
      <div class="about-inner">
        <p class="eyebrow">A NOTE FROM THE AUTHOR</p>
        <h2 id="about-title">A place for the<br><em>unfinished thought.</em></h2>
        <div class="about-bottom">
          <p>This is a personal corner of the internet for essays, observations, and the small things worth keeping. New notes arrive when they are ready.</p>
          <a class="round-link" href="#top" aria-label="Back to top">↑</a>
        </div>
      </div>
      <span class="about-number" aria-hidden="true">M.</span>
    </section>
  </main>

  <footer class="site-footer">
    <a class="wordmark footer-wordmark" href="#top"><span class="wordmark-mark">M</span><span>THE MARGIN</span></a>
    <p>Made with attention. <span>© 2026</span></p>
    <a href="#top" class="back-top">BACK TO TOP <span aria-hidden="true">↑</span></a>
  </footer>

  <dialog class="post-dialog" id="post-dialog" aria-labelledby="dialog-title">
    <button class="dialog-close" type="button" aria-label="Close article">×</button>
    <div class="dialog-content" id="dialog-content"></div>
  </dialog>
`

const postGrid = document.querySelector<HTMLDivElement>('#post-grid')!
const searchInput = document.querySelector<HTMLInputElement>('#post-search')!
const resultCount = document.querySelector<HTMLParagraphElement>('#result-count')!
const emptyState = document.querySelector<HTMLParagraphElement>('#empty-state')!
const dialog = document.querySelector<HTMLDialogElement>('#post-dialog')!
const dialogContent = document.querySelector<HTMLDivElement>('#dialog-content')!
let activeCategory = 'All'

function renderPosts(): void {
  const searchTerm = searchInput.value.trim().toLowerCase()
  const visiblePosts = posts.filter((post) => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory
    const matchesSearch = `${post.title} ${post.excerpt} ${post.category}`.toLowerCase().includes(searchTerm)
    return matchesCategory && matchesSearch
  })

  postGrid.innerHTML = visiblePosts.map((post, index) => `
    <article class="post-card${index === 0 ? ' post-card-featured' : ''}">
      <div class="post-card-top"><span class="post-category">${post.category}</span><span class="post-number">${String(post.id).padStart(2, '0')}</span></div>
      <h3><button class="post-title-button" type="button" data-post="${post.id}">${post.title}</button></h3>
      <p class="post-excerpt">${post.excerpt}</p>
      <div class="post-card-bottom"><span>${post.date}</span><span>${post.readTime}</span></div>
      <button class="post-open" type="button" data-post="${post.id}" aria-label="Read ${post.title}"><span aria-hidden="true">↗</span></button>
    </article>
  `).join('')

  resultCount.textContent = `${String(visiblePosts.length).padStart(2, '0')} ${visiblePosts.length === 1 ? 'NOTE' : 'NOTES'}`
  emptyState.hidden = visiblePosts.length > 0
}

function openPost(postId: number): void {
  const post = posts.find((item) => item.id === postId)
  if (!post) return

  dialogContent.innerHTML = `
    <p class="eyebrow">${post.category} <span class="dialog-divider">/</span> ${post.date} <span class="dialog-divider">/</span> ${post.readTime}</p>
    <h2 id="dialog-title">${post.title}</h2>
    <p class="dialog-deck">${post.excerpt}</p>
    <div class="dialog-body">${post.body.map((paragraph) => `<p>${paragraph}</p>`).join('')}</div>
    <p class="dialog-signoff">End of note <span aria-hidden="true">✳</span></p>
  `
  dialog.showModal()
}

document.querySelectorAll<HTMLButtonElement>('.filter-button').forEach((button) => {
  button.addEventListener('click', () => {
    activeCategory = button.dataset.category ?? 'All'
    document.querySelectorAll('.filter-button').forEach((filter) => {
      const isActive = filter === button
      filter.classList.toggle('is-active', isActive)
      filter.setAttribute('aria-pressed', String(isActive))
    })
    renderPosts()
  })
})

searchInput.addEventListener('input', renderPosts)
postGrid.addEventListener('click', (event) => {
  const button = (event.target as HTMLElement).closest<HTMLButtonElement>('[data-post]')
  if (button?.dataset.post) openPost(Number(button.dataset.post))
})
document.querySelector<HTMLButtonElement>('.dialog-close')!.addEventListener('click', () => dialog.close())
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close()
})
document.addEventListener('keydown', (event) => {
  if (event.key === '/' && document.activeElement !== searchInput) {
    event.preventDefault()
    searchInput.focus()
  }
})

renderPosts()
