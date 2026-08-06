# Devlixe Web

Static Devlixe website. The deployable site lives directly in the repository root.

## Structure

- `index.html` and root-level HTML files: primary site pages
- `blogs/`: blog detail pages
- `case-studies/`: case-study detail pages
- `_next/`: exported Next.js runtime assets
- `img/`, `svg/`, and `fonts/`: site assets
- `cdn.sanity.io/`: locally mirrored Sanity media
- `www.devlixe.com/index.html`: compatibility redirect for old local bookmarks

## Run locally

Python 3 ke saath project directory mein yeh command run karein:

```powershell
python -m http.server 8000
```

Phir browser mein [http://localhost:8000](http://localhost:8000) open karein.

Server band karne ke liye terminal mein `Ctrl+C` press karein.
