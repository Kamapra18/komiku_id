- ```markdown
# Aplikasi Koleksi Komik Pribadi

## Deskripsi Singkat

Aplikasi ini merupakan proyek **UTS Mata Kuliah Pemrograman Mobile**, dibangun menggunakan **Expo (React Native)** dan **Zustand** untuk manajemen state.  
Tujuannya adalah memudahkan pengguna dalam **mencatat, mengelola, dan memantau koleksi komik pribadi**, termasuk status apakah komik sedang **dipinjam orang lain** atau **tersedia**.

Aplikasi ini menyimpan data secara lokal menggunakan **AsyncStorage**, sehingga data tetap tersimpan meski aplikasi ditutup.

---

## Fitur Utama

1. **Tambah Komik Baru**

   - Pengguna dapat menambahkan komik dengan data:
     - Judul
     - Deskripsi singkat
     - Volume
     - Status otomatis: “Tersedia”
   - Form ditampilkan dalam modal sederhana agar proses cepat dan mudah.

2. **Daftar Komik**

   - Menampilkan semua komik dalam bentuk kartu (FlatList).
   - Setiap item menampilkan: **Judul**, **Volume**, dan **Status**.
   - Warna status membantu identifikasi cepat:
     - Hijau → Tersedia
     - Oranye → Dipinjam

3. **Edit Komik (Halaman Detail)**

   - Menampilkan detail komik yang dipilih.
   - Dapat mengubah judul, deskripsi, volume, atau status.
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
> - Tampilan form tambah komik
> - Tampilan halaman detail/edit komik
> - Dialog hapus data
> - Ubah status komik

Contoh struktur penempatan gambar:

```

![Home Screen](assets/screenshots/home.png)
![Tambah Komik](assets/screenshots/add.png)
![Detail Komik](assets/screenshots/detail.png)
![Dialog Hapus](assets/screenshots/delete.png)

```

---

## 🏗️ Struktur Folder Proyek

```

shopping-list-app/
├── app/
│ ├── \_layout.tsx
│ ├── index.tsx → Halaman utama (daftar komik)
│ ├── add.tsx → Modal atau halaman tambah komik
│ └── detail/
│ └── [id].tsx → Halaman detail & edit komik
├── store/
│ └── useKomikStore.ts → Manajemen state dengan Zustand
└── assets/ → (opsional) ikon, gambar, dsb.

```

---

## 📄 Penjelasan Tiap Halaman

### 1️⃣ `HomeScreen` (`index.tsx`)

**Fungsi:**

- Menampilkan seluruh koleksi komik.
- Memberikan akses untuk menambah, menghapus, dan ubah status komik.

**Komponen penting:**

- `FlatList` untuk menampilkan daftar komik.
- `TouchableOpacity` untuk tombol **Tambah (+)** di pojok kanan bawah.
- `Alert.alert()` untuk konfirmasi sebelum menghapus.

**Screenshot Contoh:**

> _<img width="447" height="997" alt="image" src="https://github.com/user-attachments/assets/6868c6e5-afa7-47ae-abad-af3fd50ea1c2" />


---

### 2️⃣ `AddKomik` (`add.tsx` atau ModalForm)

**Fungsi:**

- Menambahkan komik baru ke daftar.
- Input berisi: judul, deskripsi, volume.

**Proses:**

- Validasi: judul dan volume wajib diisi.
- Data disimpan ke store Zustand dan AsyncStorage.

**Screenshot Contoh:**

> _Letakkan screenshot tampilan form tambah komik._

---

### 3️⃣ `DetailKomik` (`detail/[id].tsx`)

**Fungsi:**

- Menampilkan detail lengkap komik.
- Menyediakan form edit untuk mengubah data (judul, volume, deskripsi, status).

**Proses:**

- Data diambil berdasarkan `id` dari URL.
- Setelah diubah, data diperbarui di Zustand store.

**Screenshot Contoh:**

> _Letakkan screenshot tampilan halaman edit komik._

---

### 4️⃣ `useKomikStore.ts`

**Fungsi:**

- Menyimpan seluruh data komik dan mengelola fungsinya (CRUD).
- Menggunakan **Zustand** agar manajemen state tetap ringan dan reaktif.

**Method:**

- `addKomik()` → Menambahkan data baru.
- `removeKomik()` → Menghapus komik berdasarkan ID.
- `toggleStatus()` → Mengubah status komik (Tersedia ↔ Dipinjam).
- `updateKomik()` → Mengedit data komik tertentu.

---

## 🧠 Teknologi yang Digunakan

| Teknologi                 | Fungsi                                      |
| ------------------------- | ------------------------------------------- |
| **Expo (React Native)**   | Framework utama aplikasi mobile             |
| **TypeScript (TS & TSX)** | Menjamin type-safety dan struktur yang kuat |
| **Zustand**               | State management sederhana dan efisien      |
| **AsyncStorage**          | Penyimpanan data lokal                      |
| **Expo Router**           | Navigasi berbasis file routing              |
| **Ionicons**              | Ikon bawaan dari Expo                       |

---

## 🧪 Alur Penggunaan Aplikasi

1. Buka aplikasi → halaman utama menampilkan daftar komik.
2. Tekan tombol “+” untuk menambah komik baru.
3. Setelah disimpan, komik akan muncul di daftar utama.
4. Tekan ikon **radio/check** untuk ubah status pinjam.
5. Tekan komik → masuk ke halaman **Detail/Edit**.
6. Tekan ikon **X merah** untuk hapus (muncul konfirmasi terlebih dahulu).

---

## 💾 Catatan Tambahan

- Data komik disimpan secara lokal (belum tersambung ke backend).
- Aplikasi dirancang dengan gaya sederhana dan user-friendly.
- Dapat dikembangkan lebih lanjut dengan **Supabase** atau **Firebase** untuk penyimpanan cloud.

---

### ✍️ Pengembang

**Nama:** [Isi Nama Kamu]
**NIM:** [Isi NIM Kamu]
**Mata Kuliah:** Pemrograman Mobile
**Dosen Pengampu:** [Isi Nama Dosen]

- ```
