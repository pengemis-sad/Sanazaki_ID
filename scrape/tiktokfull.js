/*
 • Fitur By Anomaki Team
 • Created : xyzan code
 • Tiktok Versi Multi Download
 • Jangan Hapus Wm
 • https://whatsapp.com/channel/0029Vaio4dYC1FuGr5kxfy2l

Note : Ter inspirasi oleh Zevrida
-
Cara make:
--mvideo, --mimage, --msound (untuk Multi downloader, jadi bisa lebih dari 1 url tiktok // klo mau 1 url make kek biasa --video, --image, --sound)

Bisa ditambah jadi misal :
--mvideo+sound (multi downloader 3 url sekaligus video+sound) 

Untuk ngirim versi file zip gunakan //zip

Contoh
tt url1 url2 url3 --mvideo+sound //zip

Lebih lengkap?coba sendiri
*/
const fetch = require('node-fetch');
const AdmZip = require('adm-zip');
const fs = require('fs');
const path = require('path');

async function dapatkanVideo(url) {
    try {
        const response = await fetch('https://lovetik.com/api/ajax/search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            },
            body: `query=${encodeURIComponent(url)}`
        });

        const data = await response.json();
        if (!data.images) data.images = [];

        const result = {
            video: [],
            audio: [],
            images: data.images || []
        };

        data.links.forEach(item => {
            if (!item.a) return;
            const formatted = {
                format: item.t.replace(/<.*?>|♪/g, '').trim(),
                resolution: item.s || 'Audio Only',
                link: item.a
            };

            if (item.ft == 1) {
                result.video.push(formatted);
            } else {
                result.audio.push(formatted);
            }
        });

        return {
            ...data,
            ...result
        };
    } catch (error) {
        console.error("Error mengambil video:", error);
        return null;
    }
}

async function downloadFile(url, savePath) {
    const response = await fetch(url);
    const buffer = await response.buffer();
    fs.writeFileSync(savePath, buffer);
};

module.exports = {
  dapatkanVideo,
  downloadFile
};
