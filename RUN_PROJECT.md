# Cara Run Project Bangga UMKM

Dokumen ini menjelaskan cara menjalankan project Bangga UMKM di local development, khususnya untuk Windows.

## 1. Masuk ke Folder Project

Buka terminal di folder project:

```bash
cd D:\laragon\www\BanggaUMKM
```

## 2. Install Dependency

Kalau `node_modules` belum ada, jalankan:

```bash
npm.cmd install
```

Gunakan `npm.cmd`, bukan `npm`, terutama jika memakai PowerShell di Windows.

## 3. Jalankan Development Server

Jalankan:

```bash
npm.cmd run dev
```

Project ini memakai script:

```json
"dev": "next dev --webpack"
```

Webpack dipakai karena Next.js 16 default menggunakan Turbopack, dan pada environment ini Turbopack sempat stuck saat startup.

Jika berhasil, terminal akan menampilkan kurang lebih:

```text
Next.js 16.2.9 (webpack)
Local: http://localhost:3000
Ready
```

Buka browser:

```text
http://localhost:3000
```

## 4. Stop Server

Di terminal tempat server berjalan, tekan:

```bash
Ctrl + C
```

Lalu tekan `Y` jika diminta konfirmasi.

## 5. Build Production

Untuk mengecek apakah project bisa dibuild:

```bash
npm.cmd run build
```

Jika berhasil, akan muncul route seperti:

```text
Route (app)
- /              static
- /_not-found    static
```

## Error yang Mungkin Terjadi

### Error: `npm.ps1 cannot be loaded`

Contoh error:

```text
npm.ps1 cannot be loaded because running scripts is disabled on this system
```

Penyebab:

PowerShell Windows memblokir script `npm.ps1` karena Execution Policy.

Solusi cepat:

```bash
npm.cmd run dev
```

Gunakan `npm.cmd`, bukan `npm`.

Alternatif lain:

Jalankan terminal lewat CMD atau Git Bash.

### Error: Halaman Tidak Muncul di `localhost:3000`

Kemungkinan penyebab:

- Server belum benar-benar aktif.
- Server lama masih menggantung.
- Next.js sedang compile halaman pertama.
- Cache `.next/dev` bermasalah.

Solusi:

1. Stop server dengan `Ctrl + C`.
2. Jalankan ulang:

```bash
npm.cmd run dev
```

3. Jika masih tidak muncul, hapus cache development:

```powershell
Remove-Item -Recurse -Force .next\dev
```

4. Jalankan lagi:

```bash
npm.cmd run dev
```

### Error: `Failed to fetch Plus Jakarta Sans from Google Fonts`

Contoh error:

```text
Failed to fetch `Plus Jakarta Sans` from Google Fonts
connect EACCES ...:443
```

Penyebab:

Next.js mencoba mengambil font dari Google Fonts lewat `next/font/google`, tetapi koneksi internet atau akses ke Google Fonts diblokir.

Status project sekarang:

Import Google Font sudah dihapus dari `src/app/layout.tsx`, jadi project tidak lagi membutuhkan akses Google Fonts saat run atau build.

### Error: Turbopack Stuck

Contoh gejala:

```text
Next.js 16.2.9 (Turbopack)
Ready
Creating turbopack project ...
```

Tapi browser tetap tidak bisa membuka `localhost:3000`.

Penyebab:

Next.js 16 memakai Turbopack secara default. Pada environment ini, Turbopack sempat tidak membuka port server dengan normal.

Solusi yang dipakai di project:

Script `dev` di `package.json` sudah diganti menjadi:

```json
"dev": "next dev --webpack"
```

Jadi cukup jalankan:

```bash
npm.cmd run dev
```

### Error: Port 3000 Sudah Dipakai

Contoh error:

```text
Port 3000 is already in use
```

Penyebab:

Ada server lain yang sedang memakai port `3000`.

Solusi 1:

Stop proses/server lama dengan `Ctrl + C`.

Solusi 2:

Jalankan di port lain:

```bash
npm.cmd run dev -- --port 3001
```

Lalu buka:

```text
http://localhost:3001
```

## Catatan Project

- Framework: Next.js `16.2.9`
- React: `19.2.4`
- Styling: Tailwind CSS v4
- Entry halaman utama: `src/app/page.tsx`
- Layout utama: `src/app/layout.tsx`
- Config Next: `next.config.ts`
- Script dev disarankan: `npm.cmd run dev`

## Checklist Kalau Web Tidak Muncul

1. Pastikan terminal berada di `D:\laragon\www\BanggaUMKM`.
2. Jalankan `npm.cmd install` jika dependency belum ada.
3. Jalankan `npm.cmd run dev`.
4. Tunggu sampai muncul tulisan `Ready`.
5. Buka `http://localhost:3000`.
6. Jika masih gagal, hapus `.next\dev`, lalu run ulang.
