# Aplikasi Koleksi Komik Pribadi

### Pengembang

**Nama:** I Kadek Mario Prayoga  
**NIM:** 2301020018  
**Mata Kuliah:** Pemrograman Mobile  
**Dosen Pengampu:** Ida Bagus Kresna Sudiatmika
**Link Loom:** https://www.loom.com/share/0b153ac0732a41bfb35ed2ce1f031a73

---

##  Deskripsi Singkat

Aplikasi ini merupakan proyek **UTS Mata Kuliah Pemrograman Mobile**, dibangun menggunakan **Expo (React Native)** dan **Zustand** untuk manajemen state.  
Tujuan utama aplikasi ini adalah membantu pengguna dalam **mencatat, mengelola, dan memantau koleksi komik pribadi**, termasuk status apakah komik sedang **dipinjam orang lain** atau **tersedia**.

Data disimpan secara lokal menggunakan **AsyncStorage**, sehingga **tetap tersimpan meskipun aplikasi ditutup**.

---

## Demo Aplikasi

> - **Tampilan Daftar Komik**
> - 
>   <img width="421" height="906" alt="image" src="https://github.com/user-attachments/assets/502c6bbd-af6a-44c8-9952-6402a971f217" />


> - **Form Tambah Komik (Modal)**
> - 
>   <img width="392" height="681" alt="image" src="https://github.com/user-attachments/assets/e27aa921-3ecd-4d3e-80fa-68b5fbf25c52" />


> - **Form Edit Komik**
> - 
> <img width="399" height="685" alt="image" src="https://github.com/user-attachments/assets/7475f83d-6adf-44b9-bc67-3878c59bc724" />


> - **Dialog Hapus Data**
> - 
>   <img width="397" height="196" alt="image" src="https://github.com/user-attachments/assets/6ddba501-163b-4ffb-8185-374d14768a79" />


> - **Halaman Detail Komik**
> - 
>   <img width="420" height="899" alt="image" src="https://github.com/user-attachments/assets/b7700e08-6284-49fc-8d99-761fb2b04fc1" />


> - **Ubah ke DarkMode**
> - 
>   <img width="421" height="894" alt="image" src="https://github.com/user-attachments/assets/a2ad399a-a7c1-4230-b82b-c9abcb1c747f" />


> - **Halaman Pencarian Komik**
> - 
>   <img width="427" height="899" alt="image" src="https://github.com/user-attachments/assets/8677ce44-983c-428c-82e5-c80d7f48e162" />


---
##  Fitur Utama

### 1. **Tambah & Edit Komik (Modal)**
- Pengguna dapat menambahkan komik baru atau mengedit data komik yang sudah ada langsung melalui **modal interaktif**.  
- Data yang diinput mencakup:
  - Judul  
  - Deskripsi  
  - Volume  
  - Penulis  
  - Genre  
  - Tipe Komik
  - Url Gambar
- Status komik secara otomatis diset menjadi **“Tersedia”** saat pertama kali ditambahkan.  
- Modal yang sama digunakan untuk **tambah dan edit**, agar tampilan lebih ringkas.

---

### 2. **Daftar Komik (Home)**
- Menampilkan seluruh koleksi komik dalam bentuk **kartu (Card)** melalui komponen `FlatList`.  
- Setiap item menampilkan:
  - Judul komik
  - Gambar
  - Jenis/Tipe komik  
  - Status pinjaman  
- Warna status digunakan untuk memperjelas kondisi:
  - 🟢 **Tersedia**
  - 🟡 **Edit (mode ubah data)**
  - 🟠 **Dipinjam**

---

### 3. **Ubah Status Komik**
- Tersedia tombol **centang** pada setiap item untuk menandai status:
  - ✅ Dicentang → _Tersedia / Sudah dikembalikan_
  - ⭕ Tidak dicentang → _Sedang dipinjam_
- Perubahan status langsung tersimpan di **AsyncStorage** tanpa perlu refresh.

---

### 4. **Hapus Komik**
- Menyediakan dialog konfirmasi sebelum data dihapus.
- Setelah dikonfirmasi, komik langsung dihapus dari daftar dan penyimpanan lokal.

---

### 5. **Detail Komik**
- Halaman khusus untuk menampilkan **informasi lengkap** komik terpilih.
- Dilengkapi tombol **Edit** untuk mengubah data melalui modal.
- Tampilan bersih dan fokus pada isi komik.

---

### 6. **Pencarian Komik (Search Page)**
- Fitur baru yang memungkinkan pengguna mencari komik berdasarkan **judul atau penulis**.  
- Menggunakan **filter real-time** saat mengetik pada input pencarian.
- Menampilkan hasil dalam format kartu seperti halaman utama.

---

## 🛠️ Teknologi yang Digunakan

| Teknologi                 | Fungsi                                           |
| -------------------------- | ------------------------------------------------ |
| **Expo (React Native)**    | Framework utama untuk aplikasi mobile cross-platform |
| **TypeScript (TS & TSX)**  | Menjamin type-safety dan struktur kode kuat     |
| **Zustand**                | Manajemen state yang sederhana dan efisien      |
| **AsyncStorage**           | Menyimpan data secara lokal di perangkat        |
| **Expo Router**            | Navigasi berbasis struktur folder otomatis      |
| **Ionicons**               | Menyediakan ikon tab dan tombol aksi            |

---




---

> 📌 *Dikembangkan sebagai bagian dari tugas UTS Mata Kuliah Pemrograman Mobile.*


