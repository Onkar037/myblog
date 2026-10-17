# The Margin

A small, static personal blog built with Vite and TypeScript. It needs no backend, accounts, or paid services to run or deploy.

## Run locally

Install Node.js, then run:

```sh
npm install
npm run dev
```

Vite prints a local address to open in your browser. To verify the production build:

```sh
npm run build
npm run preview
```

## Add or edit posts

Open `src/main.ts` and edit the `posts` array near the top. Each post has a title, excerpt, category, date, reading time, and an array of body paragraphs. Add a category filter button in the journal section if you introduce a new category. Update the site name and about text in the same file, and the page title and description in `index.html`.

The cover photo and typefaces are loaded from Unsplash and Google Fonts. The blog itself remains usable if those external assets are unavailable.

## Free deployment

### GitHub Pages

1. Create a GitHub repository and push this project to its `main` branch.
2. In the repository, open **Settings → Pages** and set the build/deployment source to **GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` builds and publishes the site. After the first run completes, GitHub Pages displays the public URL in the Pages settings.

The Vite config uses relative asset paths, so the site also works when published under a repository subpath.

### Netlify

1. Run `npm run build` locally.
2. Create a free Netlify account and choose **Add new site → Deploy manually**.
3. Drag the generated `dist` folder into the deploy area. Netlify will provide a public URL.

## Project files

- `src/main.ts` contains the post data, page markup, filtering, search, and article dialog.
- `src/style.css` contains the responsive visual design.
- `public/` contains static assets such as the favicon.
- `.github/workflows/deploy.yml` automates GitHub Pages deployments.