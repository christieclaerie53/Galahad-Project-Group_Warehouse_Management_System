# Project Galahad (React + Vite + Supabase)

## Mula

```bash
npm install
cp .env.example .env     # isi VITE_SUPABASE_URL dan VITE_SUPABASE_KEY (kunci publishable/anon sahaja)
npm run dev              # http://localhost:5173
```

Tanpa `.env`, app berjalan dalam **Mod Demo** (data simulasi). Kunci boleh juga dimasukkan melalui
"Konfigurasi Kunci Supabase" pada skrin log masuk atau tab Tetapan Supabase.

## Akses sebagai HTML

- **HTML asal anda:** salin `index.html` lama ke `public/galahad.html`. Ia boleh dicapai di
  `http://localhost:5173/galahad.html` dan akan disalin ke `dist/` semasa build.
- **Satu fail HTML:** `npm run build:single` menghasilkan `dist-single/index.html` (JS + CSS terbenam),
  boleh dibuka terus dengan double-click atau dimuat naik ke mana-mana hosting statik.
- **Build biasa:** `npm run build` -> `dist/` (hos di Netlify, Vercel, Supabase Hosting, dsb.).

## Struktur

```
src/
  App.jsx                 susun atur + navigasi tab
  hooks/useAuth.js        log masuk / daftar / log keluar (Supabase Auth atau demo)
  hooks/useGalahad.js     data + tindakan (produk, stok, relay, log masuk)
  lib/                    klien Supabase, data demo, utiliti, tajuk tab
  components/             LoginScreen, Sidebar, Header, tab-tab, modal
```

## Nota Supabase

- Hidupkan **Row Level Security** pada semua jadual. Kunci publishable terdedah dalam pelayar.
- Peranan (Admin/Operator) pada borang daftar disimpan dalam `user_metadata` yang dikawal pengguna.
  Jangan jadikannya asas kebenaran; gunakan jadual `profiles` atau `app_metadata` yang ditetapkan di server.
- Jika "Email not confirmed" muncul semasa log masuk, sahkan e-mel pendaftaran atau matikan
  *Confirm email* di Supabase > Authentication > Providers > Email.
