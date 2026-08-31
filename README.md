# PetaLab — segmented Vite project

The page is now split into one HTML file per website section, making it easier to edit with ChatGPT or a code editor.

## Main folders

```text
src/
├── segments/       # edit page content here
├── js/             # interactions
├── styles/         # visual styling
└── main.js          # assembles the segments
public/              # static files such as images/icons
```

See `src/segments/README.md` for the section-by-section editing map.

## Run on Mac

1. Install Node.js from https://nodejs.org if `node -v` does not work.
2. In Terminal, drag this project folder into Terminal after typing `cd `, then press Enter.
3. Run:

```bash
npm install
npm run dev
```

Vite will print a local URL, normally `http://localhost:5173`.

## Build

```bash
npm run build
```
