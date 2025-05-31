# JavaScript Decryptor Website

Proyek ini menyediakan antarmuka web sederhana untuk mendekripsi (atau lebih tepatnya, de-obfuscate) kode JavaScript. Ini paling efektif untuk kode yang di-obfuscate menggunakan library `javascript-obfuscator`.

## Fitur

* Antarmuka pengguna berbasis web.
* Mendekripsi kode JavaScript yang dimasukkan.

## Persyaratan

* Node.js (versi 12 atau lebih tinggi direkomendasikan)

## Instalasi dan Menjalankan

Ikuti langkah-langkah di bawah ini untuk mengatur dan menjalankan aplikasi:

1.  **Kloning repositori (atau buat folder dan file secara manual):**

    ```bash
    mkdir decrypt-js-website
    cd decrypt-js-website
    ```

2.  **Buat file-file yang diperlukan** (`index.html`, `server.js`, `package.json`, dan `README.md`) dengan konten yang diberikan di atas.

3.  **Instal dependensi:**
    Navigasi ke direktori `decrypt-js-website` di terminal Anda dan jalankan perintah berikut:

    ```bash
    npm install
    ```

4.  **Mulai server:**
    Setelah semua dependensi terinstal, Anda dapat memulai server dengan perintah:

    ```bash
    npm start
    ```

5.  **Akses aplikasi:**
    Buka browser web Anda dan navigasikan ke:

    ```
    http://localhost:3000
    ```

    Anda sekarang akan melihat antarmuka JavaScript Decryptor.

## Penggunaan

1.  Tempelkan kode JavaScript yang terenkripsi/ter-obfuscate ke dalam area teks berlabel "Masukkan Kode JavaScript Terenkripsi:".
2.  Klik tombol "Decrypt".
3.  Hasil dekripsi akan ditampilkan di bawah bagian "Hasil Dekripsi:".

## Catatan Penting

* **Batasan Dekripsi:** Penting untuk dipahami bahwa tidak semua kode JavaScript "terenkripsi" dapat didekripsi dengan mudah. Alat ini menggunakan library `javascript-obfuscator` dalam mode de-obfuscation, yang paling efektif untuk kode yang di-obfuscate oleh `javascript-obfuscator` itu sendiri. Kode yang dienkripsi dengan metode lain (misalnya, enkripsi berbasis kriptografi yang sebenarnya, atau teknik obfuscation yang sangat kompleks) mungkin tidak akan didekripsi.
* **Keamanan:** Jangan menjalankan kode yang tidak Anda percayai. Meskipun ini adalah alat dekripsi, selalu berhati-hati saat menangani kode yang tidak dikenal.