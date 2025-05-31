const express = require('express');
const bodyParser = require('body-parser');
const JavaScriptObfuscator = require('javascript-obfuscator'); // Library untuk de-obfuscation

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(__dirname)); // Melayani file statis seperti index.html

// Endpoint untuk mendekripsi kode JS
app.post('/decrypt', (req, res) => {
    const { code } = req.body;

    if (!code) {
        return res.status(400).json({ error: 'Kode JavaScript tidak boleh kosong.' });
    }

    try {
        // Menggunakan JavaScriptObfuscator dalam mode deobfuscation
        // Catatan: Ini TIDAK akan mendekripsi semua jenis enkripsi/obfuscation.
        // Ini paling efektif untuk kode yang di-obfuscate oleh javascript-obfuscator itu sendiri.
        const decryptedCode = JavaScriptObfuscator.deobfuscate(code, {
            // Opsi deobfuscation bisa ditambahkan di sini jika diperlukan
            // Misalnya, jika Anda tahu ada string terenkripsi, Anda bisa mencoba opsi tertentu.
            // Namun, untuk kasus umum, opsi default seringkali cukup.
        });

        res.json({ decryptedCode });
    } catch (error) {
        console.error('Error saat mendekripsi kode:', error);
        res.status(500).json({ error: 'Terjadi kesalahan saat mendekripsi kode. Pastikan format kode benar atau tidak terenkripsi dengan metode yang tidak didukung.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});