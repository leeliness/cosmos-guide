# Cosmos Guide

A space-themed website I built to explore my interest in astronomy and frontend development. It features real NASA photos, information about key discoveries, and an animated star background.

Live demo: [your-link-here]

---

## Tech Stack

- React + Vite
- TailwindCSS v4
- Lucide React
- NASA APOD API

---

## Getting Started

```bash
git clone https://github.com/leeliness/cosmos-guide.git
cd cosmos-guide
npm install
npm run dev
```

---

## Environment Variables

Create a `.env` file in the root:

```
VITE_NASA_KEY=your_nasa_api_key
```

Get a free key at [api.nasa.gov](https://api.nasa.gov).

---

## Deployment

Deployed with Vercel. Add `VITE_NASA_KEY` in project environment variables before deploying.