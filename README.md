- ```markdown
# Aplikasi Koleksi Komik Pribadi

### Pengembang

**Nama:** I Kadek Mario Prayoga
**NIM:** 2301020018
**Mata Kuliah:** Pemrograman Mobile
**Dosen Pengampu:** IDA BAGUS KRESNA SUDIATMIKA

## Deskripsi Singkat

Aplikasi ini merupakan proyek **UTS Mata Kuliah Pemrograman Mobile**, dibangun menggunakan **Expo (React Native)** dan **Zustand** untuk manajemen state.  
Tujuannya adalah memudahkan pengguna dalam **mencatat, mengelola, dan memantau koleksi komik pribadi**, termasuk status apakah komik sedang **dipinjam orang lain** atau **tersedia**.

Aplikasi ini menyimpan data secara lokal menggunakan **AsyncStorage**, sehingga data tetap tersimpan meski aplikasi ditutup.

---

## Fitur Utama

1. **Tambah Komik Baru**

   - Pengguna dapat menambahkan komik dengan data:
     - Judul
     - Deskripsi
     - Volume
     - Penulis
     - Genre
     - Tipe Komik
     - Status otomatis: **"Tersedia"**
   - Form ditampilkan dalam modal sederhana agar proses cepat dan mudah.

2. **Daftar Komik**

   - Menampilkan semua komik dalam bentuk kartu (FlatList).
   - Setiap item menampilkan: **Judul**, **Tipe**, dan **Status**.
   - Warna status membantu identifikasi cepat:
     - Hijau --> Tersedia
     - kuning --> Edit 
     - Oranye --> Dipinjam

3. **Edit Komik (Halaman Detail)**

   - Menampilkan detail komik yang dipilih.
   - Dapat mengubah
        - Judul
        - Deskripsi
        - Volume
        - Penulis
        - Genre
        - Tipe Komik
   - Tersedia tombol **Simpan Perubahan**.

4. **Ubah Status**

   - Tombol centang pada daftar komik digunakan untuk mengubah status:
     - Jika belum dicentang → artinya _Dipinjam orang_.
     - Jika dicentang → artinya _Sudah dikembalikan / Tersedia kembali_.

5. **Hapus Komik**
   - Menampilkan dialog konfirmasi sebelum menghapus data.
   - Setelah dikonfirmasi, data akan dihapus dari daftar.

---

## Demo Aplikasi

> - Tampilan daftar komik
<img width="492" height="1085" alt="image" src="https://github.com/user-attachments/assets/69c37760-f28c-4447-ad7b-8b2b034c9728" />
> - Tampilan form tambah komik
<img width="493" height="1069" alt="image" src="https://github.com/user-attachments/assets/47d47144-996c-435a-a022-41bbf9a6f4dc" />
> - Tampilan form edit komik
<img width="486" height="1071" alt="image" src="https://github.com/user-attachments/assets/90f29dea-6b9e-41da-96ec-9fcde9a9afb7" />
> - Dialog hapus data
<img width="468" height="235" alt="image" src="https://github.com/user-attachments/assets/26f6630c-fb1d-4c22-81fe-bbe87f306955" />
> - Tampilan Halaman Detail Komik
<img width="491" height="1080" alt="image" src="https://github.com/user-attachments/assets/22908da8-1669-4d6c-81b9-bf4a4c16d001" />
> - Ubah status komik
<img width="484" height="328" alt="image" src="https://github.com/user-attachments/assets/25a53a4e-90d8-4b6f-800b-8338e6714ac9" />

---

## Struktur Folder Proyek

```

komiku_id/
├── app/
│ ├── _layout.tsx
│ ├── index.tsx → Halaman utama (daftar komik)
│ ├── detail/
│ │ ├── [id].tsx → Halaman detail komik
│ │ └── _layout.tsx
├── components/
│ └── add.tsx → Modal tambah / edit komik
├── store/
│ └── useKomikStore.ts → Manajemen state (Zustand)
├── assets/dsb.

---

## Teknologi yang Digunakan

| Teknologi                 | Fungsi                                      |
| ------------------------- | ------------------------------------------- |
| **Expo (React Native)**   | Framework utama aplikasi mobile             |
| **TypeScript (TS & TSX)** | Menjamin type-safety dan struktur yang kuat |
| **Zustand**               | State management sederhana dan efisien      |
| **AsyncStorage**          | Penyimpanan data lokal                      |
| **Expo Router**           | Navigasi berbasis file routing              |
| **Ionicons**              | Ikon bawaan dari Expo                       |


- ```
