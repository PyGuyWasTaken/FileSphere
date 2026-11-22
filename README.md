# FileSphere

A local-first browser file workspace built with React, TypeScript and Vite. FileSphere combines file organization, previews, image processing, ZIP archives and developer utilities in one interface.

## Included features

- Import files by picker or drag-and-drop; persistent IndexedDB storage.
- Search, type filters, favorites, recent files, grid/list view and sorting.
- Create folders, rename, duplicate, download, move, trash and restore files.
- Preview images, video, audio, PDF, text, Markdown, JSON and CSV.
- Image workshop: resize, rotate, flip and export PNG, JPEG or WebP.
- Archive workshop: create ZIP files and inspect/extract ZIP archives.
- Developer bench: JSON formatting, Base64, SHA-256, CSV-to-JSON, regex testing and text comparison.
- Theme preferences and workspace backup/restore.

## Run on Replit

1. Create a Node.js Replit project and upload this repository, preserving its folders.
2. Run `npm install` in the Shell.
3. Run `npm run dev` and open the web preview.

## Run locally

Requires Node.js 18 or newer.

```bash
npm install
npm run dev
```

Build for production with `npm run build`; preview it with `npm run preview`.

## Data and limitations

Files are processed in the browser and stored in IndexedDB for the current browser profile. This repository does not include remote accounts, cloud sync, server-side storage, antivirus scanning, OCR, advanced video transcoding or full PDF editing. Export a backup before clearing browser data. Large files can consume significant browser memory.

## Structure

```text
filesphere/
├── .github/workflows/build.yml
├── public/
├── src/
│   ├── components/
│   ├── lib/
│   ├── studios/
│   ├── App.tsx
│   ├── main.tsx
│   └── styles.css
├── index.html
├── package.json
└── vite.config.ts
```

## License

MIT. See [LICENSE](LICENSE).
