# Devlixe Web

Static Devlixe website. The deployable site lives directly in the repository root.

## Structure

- `index.html` and root-level HTML files: primary site pages
- `blogs/`: blog detail pages
- `case-studies/`: case-study detail pages
- `_next/`: exported Next.js runtime assets
- `img/`, `svg/`, and `fonts/`: site assets
- `cdn.sanity.io/`: locally mirrored Sanity media

## Run locally

Node.js 18 ya newer install hona chahiye. Project directory mein yeh command run karein:

```powershell
npm start
```

Phir browser mein [http://localhost:8000](http://localhost:8000) open karein.

Server band karne ke liye terminal mein `Ctrl+C` press karein.

Development mode mein automatic server restart ke liye:

```powershell
npm run dev
```
