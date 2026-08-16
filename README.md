# Cook Out Menu Landing Page

React + Tailwind CSS clone of the "Cook Out" menu landing page, built as a proper
Vite project with each section split into its own component file.

## Folder structure

```
cookout-app/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx           # React entry point
    ├── App.jsx            # Assembles all sections
    ├── index.css          # Tailwind directives
    └── components/
        ├── Header.jsx
        ├── Hero.jsx
        ├── Categories.jsx
        ├── PopularDeals.jsx
        ├── BuildTray.jsx
        ├── Shakes.jsx
        ├── MealFavorite.jsx
        ├── Compare.jsx
        ├── Blog.jsx
        ├── FAQ.jsx
        ├── Newsletter.jsx
        ├── Footer.jsx
        └── ui/
            ├── Eyebrow.jsx
            └── PillButton.jsx
```

## Setup

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

## Notes

- Fonts: **Baloo 2** (headings) + **Inter** (body), loaded via Google Fonts in `index.html`.
- Icons: `lucide-react`.
- Brand colors are defined in `tailwind.config.js` (`brandred`, `brandorange`, `teal`, `navy`, `cream`, etc.) — edit them there to re-theme the whole site.
- Images currently use Unsplash stock photos as placeholders — swap the `src` URLs in each component for your own product photography.
- Send more section screenshots any time and matching components can be added to `src/components/` and wired into `App.jsx`.
