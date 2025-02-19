require('./config')
const {
smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize
} = require('./lib/myfunction')
const { formatSize } = require('./lib/myfunctionn');
const { makeWASocket, downloadContentFromMessage, emitGroupParticipantsUpdate, emitGroupUpdate, generateWAMessageContent, generateWAMessage, makeInMemoryStore, prepareWAMessageMedia, generateWAMessageFromContent, MediaType, areJidsSameUser, WAMessageStatus, downloadAndSaveMediaMessage, AuthenticationState, GroupMetadata, initInMemoryKeyStore, getContentType, MiscMessageGenerationOptions, useSingleFileAuthState, BufferJSON, WAMessageProto, MessageOptions, WAFlag, WANode, WAMetric, ChatModification, MessageTypeProto, WALocationMessage, ReRaol404ectMode, WAContextInfo, proto, WAGroupMetadata, ProxyAgent, waChatKey, MimetypeMap, MediaPathMap, WAContactMessage, WAContactsArrayMessage, WAGroupInviteMessage, WATextMessage, WAMessageContent, WAMessage, BaileysError, WA_MESSAGE_STATUS_TYPE, MediaConnInfo, URL_REGEX, WAUrlInfo, WA_DEFAULT_EPHEMERAL, WAMediaUpload, mentionedJid, processTime, Browser, MessageType, Presence, WA_MESSAGE_STUB_TYPES, Mimetype, relayWAMessage, Browsers, GroupSettingChange, DisRaol404ectReason, WASocket, getStream, WAProto, isBaileys, AnyMessageContent, fetchLatestBaileysVersion, useMultiFileAuthState, templateMessage } = require('@whiskeysockets/baileys')
const AdmZip = require('adm-zip')
const axios = require('axios')
const os = require('os')
const fs = require('fs')
const util = require('util')
const fetch = require('node-fetch')
const speed = require('performance-now')
const moment = require('moment-timezone')
const { spawn: spawn, exec } = require('child_process')
const ytdl = require("ytdl-core")
const yts = require("yt-search")
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { performance } = require('perf_hooks')
const path = require('path')
const anon = require('./lib/menfess')
const { TelegraPH } = require("./scrape/TelegraPH")
const { remini, jarak, ssweb, tiktok, PlayStore, BukaLapak, pinterest, stickersearch, lirik } = require("./scrape/scraper")
const canvafy = require('canvafy')
const jimp = require('jimp')
const canvas = require('canvas')
const colors = require('@colors/colors/safe')
const chalk = require('chalk')
const { toPTT, toAudio } = require("./lib/converter")
const from = m.key.remoteJid;
const isGroup = from.endsWith("@g.us");
const upchUsage = require('./lib/database/upchUsage.json') || {}


const _cmd = JSON.parse(fs.readFileSync('./lib/database/command.json'));
const _cmdUser = JSON.parse(fs.readFileSync('./lib/database/commandUser.json'));
const { addCountCmd, getPosiCmdUser, addCountCmdUser } = require('./temporary/helpers/command')

//Base
module.exports = Renita = async (Renita, m, chatUpdate, store) => {
try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
const isCmd = body.startsWith(prefix)
const botname = global.namabot
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const text = q = args.join(" ")
const fatkuns = (m.quoted || m)
const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const isMedia = /image|video|sticker|audio/.test(mime)
//User
var isAuthor = global.ownNumb.replace(/[^0-9]/g, '').includes(m.sender.split("@")[0])
const botNumber = await Renita.decodeJid(Renita.user.id)
const globalelit = `${global.ownNumb}@s.whatsapp.net`
const isOwner = globalelit.includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const isByurr = [botNumber, ...global.ownNumb].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
//Group
let groupMetadata = null;
let groupName = '';

if (m.isGroup) {
    try {
        groupMetadata = await Renita.groupMetadata(m.chat);
        groupName = groupMetadata?.subject || 'Unknown Group';
    } catch (error) {
        console.error('Failed to fetch group metadata:', error);
        groupName = 'Unknown Group';
    }
}
const participants = m.isGroup ? (groupMetadata?.participants || []) : [];
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : [];
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const groupOwner = m.isGroup && groupMetadata ? groupMetadata.owner : '';
const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false;
//Akses

//React
const moji = ['📚', '💭', '💫', '🌌', '🌏', '〽️', '🌷', '🍁', '🪻', '🗿', '😹']
const randomemoji = moji[Math.floor(Math.random() * moji.length)]
const reaction = async (jidss, emoji) => {
            Renita.sendMessage(jidss, {
                react: {
                    text: emoji,
                    key: m.key 
                } 
            })
        };
        
const imageFiles = [
fs.readFileSync('./media/lookk.jpg'),
fs.readFileSync('./media/sadd.jpg'),
fs.readFileSync('./media/reply.jpg'),
fs.readFileSync('./media/smile.jpg'),
fs.readFileSync('./media/menu1.jpg'),
fs.readFileSync('./media/menu2.jpg'),
fs.readFileSync('./media/menu3.jpg'),
fs.readFileSync('./media/menu4.jpg'),
fs.readFileSync('./media/menu5.jpg'),
fs.readFileSync('./media/menu6.jpg'),
fs.readFileSync('./media/menu7.jpg'),
fs.readFileSync('./media/menu8.jpg'),
fs.readFileSync('./media/menu9.jpg')
];

const randomMenuImg = imageFiles[Math.floor(Math.random() * imageFiles.length)]
        
const audioFiles = [
  fs.readFileSync('./temporary/media/audio.mp3'),
  fs.readFileSync('./temporary/media/audio1.mp3'),
  fs.readFileSync('./temporary/media/audio2.mp3'),
  fs.readFileSync('./temporary/media/audio3.mp3')
];

const randomAudio = audioFiles[Math.floor(Math.random() * audioFiles.length)];


//Waktu
const moment = require('moment-timezone')
const time2 = moment().tz("Asia/Jakarta").format("HH:mm:ss")
if(time2 < "19:00:00"){
var ucapanWaktu = "Selamat Malam🌃"
}
if(time2 < "15:00:00"){
var ucapanWaktu = "Selamat Sore🌄"
 }
if(time2 < "11:00:00"){
var ucapanWaktu = "Selamat Siang🏞️"
}
if(time2 < "06:00:00"){
var ucapanWaktu = "Selamat Pagi🏙️ "
 }
if(time2 < "23:59:00"){
var ucapanWaktu = "Selamat Subuh🌆"
}
const wib = moment(Date.now()).tz("Asia/Jakarta").locale("id").format("HH:mm:ss z")
const wita = moment(Date.now()).tz("Asia/Makassar").locale("id").format("HH:mm:ss z")
const wit = moment(Date.now()).tz("Asia/Jayapura").locale("id").format("HH:mm:ss z")
const salam2 = moment(Date.now()).tz("Asia/Jakarta").locale("id").format("a")

//Status
if (!Renita.public) {
if (!m.key.fromMe) return
}

try {
ppuser = await Renita.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://files.catbox.moe/j9k007.jpg'
}
ppnyauser = await getBuffer(ppuser)

const reSize = async(buffer, ukur1, ukur2) => {
 return new Promise(async(resolve, reject) => {
let jimp = require('jimp')
var baper = await jimp.read(buffer);
var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
resolve(ab)
 })
}
const fkethmb = await reSize(ppuser, 300, 300)
let jimp = require("jimp")
const resize = async (image, width, height) => {
const read = await jimp.read(image);
const data = await read.resize(width, height).getBufferAsync(jimp.MIME_JPEG);
return data;
};


const ftroli = { key: { remoteJid: '6285736178354-1625305606@g.us', participant: '6283822021601@s.whatsapp.net' }, message: { orderMessage: { itemCount: 2024, status: 1, thumbnail: fkethmb, surface: 1, message: global.namabot, orderTitle: "Renita", sellerJid: '0@s.whatsapp.net' } } }

//Pengubah Text
const Raol = (text, style = 1) => {
  var abc = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var raol = {
    1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
  };
  var replacer = [];
  abc.map((v, i) =>
    replacer.push({
      original: v,
      convert: raol[style].split('')[i]
    })
  );
  var str = text.toLowerCase().split('');
  var output = [];
  str.map((v) => {
    const find = replacer.find((x) => x.original == v);
    find ? output.push(find.convert) : output.push(v);
  });
  return output.join('');
};
//Reply
const reply = async (teks) => {
const Thezy = {
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterName: global.namabot,
newsletterJid: global.channel,
},
externalAdReply: {
showAdAttribution: true,
title: global.namabot, 
body: `${ucapanWaktu}`, 
thumbnailUrl: `https://files.catbox.moe/xv3ca3.jpg`, 
thumbnail: '',
sourceUrl: 'https://whatsapp.com/channel/0029Vb2yuC8Lo4hXBVm0UD1p', 
},
},
text: teks, 
};
return Renita.sendMessage(m.chat, Thezy, {
quoted: ftroli, ephemeralExpiration: 86400,
});
};

const pluginsLoader = async (directory) => {
let plugins = [];
const folders = fs.readdirSync(directory);
folders.forEach(file => {
const filePath = path.join(directory, file);
if (filePath.endsWith(".js")) {
try {
const resolvedPath = require.resolve(filePath);
if (require.cache[resolvedPath]) {
delete require.cache[resolvedPath];
}
const plugin = require(filePath);
plugins.push(plugin);
} catch (error) {
console.log(`${filePath}:`, error);
}
}
});
return plugins;
};

const pluginsDisable = true;
const plugins = await pluginsLoader(path.resolve(__dirname, "./plugins"));
const plug = { 
Renita,
isOwner,
command,
isCmd,
reply,
addCountCmd, 
getPosiCmdUser, 
randomemoji, 
text,
args,
botNumber,
pushname,
isGroup: m.isGroup,
isPrivate: !m.isGroup
};

for (let plugin of plugins) {
if (plugin.command.find(e => e == command.toLowerCase())) {
if (plugin.owner && !isOwner) {
return reply(mess.owner);
}
if (plugin.premium && !isPremium) {
return reply(mess.premium);
}
if (plugin.group && !plug.isGroup) {
return reply(mess.ingroup);
}
if (plugin.private && !plug.isPrivate) {
return reply(mess.private);
}
if (typeof plugin !== "function") return;
await plugin(m, plug);
}
}

if (!pluginsDisable) return;

if (m.message) {
if (isCmd && !m.isGroup) {
console.log(chalk.black(chalk.bgHex('#ff5e78').bold(`\n🌟 ${ucapanWaktu} 🌟`)));
console.log(chalk.white(chalk.bgHex('#4a69bd').bold(`🚀 There is a new message ! 🚀`)));
console.log(chalk.black(chalk.bgHex('#fdcb6e')(`📅 DATE: ${new Date().toLocaleString()}
💬 MESSAGE: ${m.body || m.mtype}
🗣️ SENDERNAME: ${pushname}
👤 JIDS: ${m.sender}`)));
} else if (m.isGroup) {
console.log(chalk.black(chalk.bgHex('#ff5e78').bold(`\n🌟 ${ucapanWaktu} 🌟`)));
console.log(chalk.white(chalk.bgHex('#4a69bd').bold(`🚀 There is a new message! 🚀`)));
console.log(chalk.black(chalk.bgHex('#fdcb6e')(`📅 DATE: ${new Date().toLocaleString()}
💬 MESSAGE: ${m.body || m.mtype}
🗣️ SENDERNAME: ${pushname}
👤 JIDS: ${m.sender}
🔍 MESS LOCATION: ${groupName}`)));
}
}
// Auto download tiktok
if (
  budy.startsWith('https://vt.tiktok.com/') || 
  budy.startsWith('https://www.tiktok.com/') || 
  budy.startsWith('https://t.tiktok.com/') || 
  budy.startsWith('https://vm.tiktok.com/')
) {
  Renita.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
  try {
    const data = await fetchJson(`https://api.tiklydown.eu.org/api/download?url=${encodeURIComponent(budy)}`);
    const vidnya = data?.video?.noWatermark;
    if (vidnya) {
      const caption = `*[ TIKTOK DOWNLOADER ]*
*Video dari*: _${data.author?.name ?? 'Tidak diketahui'} (@${data.author?.unique_id ?? 'Tidak diketahui'})_
*Likes*: _${data.stats?.likeCount ?? 'Tidak diketahui'}_
*Comments*: _${data.stats?.commentCount ?? 'Tidak diketahui'}_
*Shares*: _${data.stats?.shareCount ?? 'Tidak diketahui'}_
*Plays*: _${data.stats?.playCount ?? 'Tidak diketahui'}_
*Saves*: _${data.stats?.saveCount ?? 'Tidak diketahui'}_
*Title*: _${data.title ?? 'Tidak diketahui'}_

\`⏤͟͟͞͞ Downloader By ${botname}\``;

      await Renita.sendMessage(
        m.chat, 
        { caption, video: { url: vidnya } }, 
        { quoted: m }
      );
    } else {
      const nyut = await nitaTTDL(budy);
      await Renita.sendMessage(
        m.chat, 
        {
          caption: `Judul: ${nyut.title ?? 'Tidak diketahui'}\nDeskripsi: ${nyut.description ?? 'Tidak diketahui'}`,
          video: { url: nyut.downloadLink || nyut.hdDownloadLink },
        },
        { quoted: m }
      );
    }
  } catch (error) {
    console.error(error);
    reply('Maaf, terjadi kesalahan saat memproses permintaan Anda.');
  }
}

//YTMp3
const ytmp3 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
ytdl(Link, {
filter: 'audioonly'
}).pipe(fs.createWriteStream(mp3File)).on('finish', async () => {
await kyami.sendMessage(m.chat, {
audio: fs.readFileSync(mp3File),
mimetype: 'audio/mp4'
}, {
quoted: m
})
})
} catch (err) {
reply(`${err}`)
}
}
//Download Mp3
const downloadMp3 = async (Link ) => {
try{
await ytdl.getInfo(Link);
let mp3File = getRandom('.mp3') 
ytdl(Link, {filter: 'audioonly'})
.pipe(fs.createWriteStream(mp3File))
.on("finish", async () => {  
await kyami.sendMessage(from, { audio:  fs.readFileSync(mp3File), mimetype: 'audio/mp4' },{ quoted: m })
fs.unlinkSync(mp3File)
})       
} catch (err){
console.log(color(err))
}
}

async function nitaTTDL(videoUrl) {
  try {
    const endpoint = "https://ssstik.io/abc?url=dl";
    const requestData = new URLSearchParams({
      id: videoUrl,
      locale: "id",
      tt: "VktkdWY4",
    });
    const headers = {
      "HX-Request": "true",
      "HX-Trigger": "_gcaptcha_pt",
      "HX-Target": "target",
      "HX-Current-URL": "https://ssstik.io/id",
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
    };
    const response = await axios.post(endpoint, requestData.toString(), { headers });
    const $ = cheerio.load(response.data);
    const title = $("h2").text().trim() || "Judul tidak tersedia";
    const description = $(".maintext").text().trim() || "Deskripsi tidak tersedia";
    const downloadLink = $(".download_link.without_watermark").attr("href") || null;
    const hdDownloadLink = $(".download_link.without_watermark_hd").attr("href") || null;

    return {
      title,
      description,
      downloadLink,
      hdDownloadLink,
    };
  } catch (error) {
    console.error("Error saat scraping:", error.message);
    return { error: error.message };
  }
}


// Function Spotify
async function getAccessToken() {
    try {
        const client_id = 'acc6302297e040aeb6e4ac1fbdfd62c3';
        const client_secret = '0e8439a1280a43aba9a5bc0a16f3f009';
        const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
        const response = await axios.post('https://accounts.spotify.com/api/token', 'grant_type=client_credentials', {
            headers: {
                Authorization: `Basic ${basic}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
        const data = response.data;
        return data.access_token;
    } catch (error) {
        console.error('Error getting Spotify access token:', error);
        throw 'An error occurred while obtaining Spotify access token.';
    }
}
async function spotifydl(url) {
  return new Promise(async (resolve, reject) => {
    try {
      const kemii = await axios.get(
        `https://api.fabdl.com/spotify/get?url=${encodeURIComponent(url)}`,
        {
          headers: {
            accept: "application/json, text/plain, */*",
            "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
            "sec-ch-ua": "\"Not)A;Brand\";v=\"24\", \"Chromium\";v=\"116\"",
            "sec-ch-ua-mobile": "?1",
            "sec-ch-ua-platform": "\"Android\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "cross-site",
            Referer: "https://spotifydownload.org/",
            "Referrer-Policy": "strict-origin-when-cross-origin",
          },
        }
      );
      const kemi = await axios.get(
        `https://api.fabdl.com/spotify/mp3-convert-task/${kemii.data.result.gid}/${kemii.data.result.id}`,
        {
          headers: {
            accept: "application/json, text/plain, */*",
            "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
            "sec-ch-ua": "\"Not)A;Brand\";v=\"24\", \"Chromium\";v=\"116\"",
            "sec-ch-ua-mobile": "?1",
            "sec-ch-ua-platform": "\"Android\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "cross-site",
            Referer: "https://spotifydownload.org/",
            "Referrer-Policy": "strict-origin-when-cross-origin",
          },
        }
      );
      const result = {};
      result.title = kemii.data.result.name;
      result.type = kemii.data.result.type;
      result.artis = kemii.data.result.artists;
      result.durasi = kemii.data.result.duration_ms;
      result.image = kemii.data.result.image;
      result.download = "https://api.fabdl.com" + kemi.data.result.download_url;
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};
async function searchSpotify(query) {
    try {
        const access_token = await getAccessToken();
        const response = await axios.get(`https://api.spotify.com/v1/search?q=${query}&type=track&limit=10`, {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        });
        const data = response.data;
        const tracks = data.tracks.items.map(item => ({
            name: item.name,
            artists: item.artists.map(artist => artist.name).join(', '),
            popularity: item.popularity,
            link: item.external_urls.spotify,
            image: item.album.images[0].url,
            duration_ms: item.duration_ms,
        }));
        return tracks;
    } catch (error) {
        console.error('Error searching Spotify:', error);
        throw 'An error occurred while searching for songs on Spotify.';
    }
}
//——————————————————————————————————


switch (command) {

case 'ttl': case 'ttlengkap': case 'tiktokl': case 'tiktoklengkap': case 'tiktoklngkp': case 'ttlngkp': {
//ambil module
const { dapatkanVideo, downloadFile } = require('./scrape/tiktokfull');

//code nyah
    if (!text) return Renita.sendMessage(m.chat, {
        text: "Masukkan URL TikTok beserta opsi (--video, --image, --sound, --mvideo, --mimage, --msound)."
    }, {
        quoted: m
    });

    let zan1 = text.split(" ");
    let zan2 = zan1.filter(arg => arg.startsWith("http"));
    let zan3 = zan1.find(arg => arg.startsWith("--"));
    let zan4 = zan1.includes("//zip");

    if (!zan2.length) return Renita.sendMessage(m.chat, {
        text: "Tidak ada URL TikTok yang valid."
    }, {
        quoted: m
    });
    if (!zan3) return Renita.sendMessage(m.chat, {
        text: "Pilih opsi: --video, --image, --sound, --mvideo, --mimage, --msound."
    }, {
        quoted: m
    });

    let multi = zan3.startsWith("--m");
    let includeVideo = zan3.includes("video");
    let includeAudio = zan3.includes("sound");
    let includeImage = zan3.includes("image");

    await Renita.sendMessage(m.chat, {
        react: {
            text: "🖨️",
            key: m.key
        }
    });

    let zip = new AdmZip();
    let tempDir = path.join(process.cwd(), "tiktok_downloads");
    if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir);

    for (let [index, url] of zan2.entries()) {
        let result = await dapatkanVideo(url);
        if (!result) continue;

        let folderName = `tiktok_${index + 1}`;
        let folderPath = path.join(tempDir, folderName);
        fs.mkdirSync(folderPath, {
            recursive: true
        });

        if (includeImage && result.images.length) {
            for (let [i, img] of result.images.entries()) {
                let imgPath = path.join(folderPath, `image_${i + 1}.jpg`);
                await downloadFile(img, imgPath);
                if (!zan4) await Renita.sendMessage(m.chat, {
                    image: {
                        url: img
                    },
                    caption: "Gambar TikTok"
                }, {
                    quoted: m
                });
            }
        }
        if (includeAudio && result.audio.length) {
            let audioPath = path.join(folderPath, "audio.mp3");
            await downloadFile(result.audio[0].link, audioPath);
            if (!zan4) await Renita.sendMessage(m.chat, {
                audio: {
                    url: result.audio[0].link
                },
                mimetype: "audio/mp4",
                ptt: false
            }, {
                quoted: m
            });
        }
        if (includeVideo && result.video.length) {
            let videoPath = path.join(folderPath, "video.mp4");
            await downloadFile(result.video[0].link, videoPath);
            if (!zan4) await Renita.sendMessage(m.chat, {
                video: {
                    url: result.video[0].link
                },
                caption: "Video TikTok"
            }, {
                quoted: m
            });
        }

        zip.addLocalFolder(folderPath, folderName);
    }

    if (zan4) {
        let zipName = `done by xyzanBot.zip`;
        let zipPath = path.join(tempDir, zipName);
        zip.writeZip(zipPath);

        await Renita.sendMessage(m.chat, {
            document: fs.readFileSync(zipPath),
            mimetype: "application/zip",
            fileName: zipName
        }, {
            quoted: m
        });

        fs.rmSync(tempDir, {
            recursive: true,
            force: true
        });
    }

    await Renita.sendMessage(m.chat, {
        react: {
            text: "📃",
            key: m.key
        }
    });
};
break

case 'tourlv2': {
    let q = m.quoted ? m.quoted : m
    let media = await quoted.download();
    await reaction(m.chat, "💤")
    let uploadImage = require('./scrape/uploadImage');
    let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime);
    const uploadFile = require('./scrape/uploadFile')
    let link = await (isTele ? uploadImage : uploadFile)(media);  
    Renita.sendMessage(m.chat, {
        text : `(no expiration date/unknown)\n ${link}`
    },{quoted:m})
}
break

case 'play':{
if (!q) return m.reply(`🚩 *Contoh:* ${prefix+command} Seventeen JKT48`)
let yts = require('yt-search')
let search = await yts(text)
let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
let a = `💸Duration : ${anu.timestamp}\n🎉Viewers : ${anu.views}\n`
await Renita.sendMessage(m.chat, {
text: a,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: anu.title,
body: anu.ago,
thumbnailUrl: anu.image,
sourceUrl: anu.url,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})
if (anu.seconds < 1000) {
await ytmp3(anu.url)
} else m.reply('durasi nya bro ke besaran')
}
break

case 'tourl': {
  m.reply(mess.wait)
  if (!/video/.test(mime) && !/image/.test(mime))
    m.reply(`*Send/Reply the Video/Image With Caption* ${prefix + command}`)
  if (!quoted)
    m.reply(`*Send/Reply the Video/Image Caption* ${prefix + command}`)
  let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./scrape/uploader')
  let media = await Renita.downloadAndSaveMediaMessage(quoted)
  if (/image/.test(mime)) {
    let anu = await TelegraPh(media)
    m.reply(util.format(anu))
    m.reply('urlnya: ' + anu.url)
  } else if (!/image/.test(mime)) {
    let anu = await UploadFileUgu(media)
    m.reply(util.format(anu))
    m.reply('noh: ' + anu.url)
  }
  await fs.unlinkSync(media)
}
break

case 'toimage': case 'toimg': {
m.reply(mess.wait)
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) m.reply(`Balas sticker dengan caption *${prefix + command}*`)
let media = await Renita.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
Renita.sendMessage(from, { image: buffer }, {quoted:m})
fs.unlinkSync(ran)
})
}
break


case 'backup':
 {
 if (!isOwner) return m.reply(mess.owner)
 await m.reply("Sabar Mas Lagi Backup!!!");
 const { execSync } = require("child_process");
 const ls = (await execSync("ls"))
 .toString()
 .split("\n")
 .filter(
 (pe) =>
 pe != "node_modules" &&
 pe != "package-lock.json" &&
 pe != "yarn.lock" &&
 pe != ""
 );
 const exec = await execSync(`zip -r Renita.zip ${ls.join(" ")}`);
 await Renita.sendMessage(
 m.chat,
 {
 document: await fs.readFileSync("./Renita.zip"),
 mimetype: "application/zip",
 fileName: "Renita.zip",
 },
 { quoted: m }
 );
 await execSync("rm -rf Renita.zip");
 }
 break

case "menu": case"help": {

Renita.sendMessage(m.chat, { react: { text: `${randomemoji}`, key: m.key }})

const umo = String.fromCharCode(8206).repeat(1001)

    const totalMem = os.totalmem();
    const freeMem = os.freemem();
    const usedMem = totalMem - freeMem;
    const formattedUsedMem = formatSize(usedMem);
    const formattedTotalMem = formatSize(totalMem);

addCountCmd('#menu', m.sender, _cmd)
const tampilan = ``
let mbut = `Hello ${pushname} 🍁, my name is Renita, i am automated system (WhatsApp bot) that can help to do something search and get data/Information only through WhatsApp 

> *INFORMATION :*
 ⑆ Status : ${Renita.public ? '\`public\`' : '\`self\`'}
 ⑆ Name : @${m.sender.split('@')[0]} 
 ⑆ RAM : ${formattedUsedMem} / ${formattedTotalMem}
 ⑆ Runtime : ${runtime(process.uptime())}
 ⑆ Prefix : .

⌜ *COMMAND BOT - LIST* ⌟ ${umo}

> \`owner - cmd\`
 › public
 › self
 › csesi
 › backup
 › upsw
 › upch
 › upchv2
 
> \`downloader - cmd\`
 › tiktok
 › igdl
 › play

> \`group - cmd\`
 › hidetag
 › kick

> \`tools - cmd\`
 › brat
 › bratvid
 › qc
 › sticker
 › ping
 › tourl`
 /*
let msg = await Renita.sendMessage(m.chat,
    {
        product: {
            productImage: { url: "https://files.catbox.moe/rrv9rt.jpg" }, // 
            productImageCount: 1,
            title: `🎓 Hi, I'm ${global.namabot2}`, // 
            description: "", // 
            priceAmount1000: 20000 * 1000, // 
            currencyCode: "IDR", // 
            retailerId: "100000", 
            url: "", // 
        },
        businessOwnerJid: m.sender,
        caption: `🎓 Hi, I'm ${global.namabot2} Whatsapp Bot Developer. This WhatsApp Bot Can Help You In Doing Certain Activities, Especially In Attacks.`, //, 
        title: global.namabot2, //
        footer: "Rynor Shade—", //
        media: true,
        viewOnce: true, 
        shop: "WA", // do not delete
        id: "", // do not delete
    },
  {
    quoted : ftroli
  }
)

Renita.sendMessage(m.chat, {
        document: { url: "https://wa.me/62882006233840" },
        fileName: global.botname2,
        mimetype: "image/png",
        fileLength: 99999999999999,
        pageCount: 666,
        jpegThumbnail: (await resize (fs.readFileSync('./media/sadd.jpg'), 400, 400)),
        caption: mbut,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            mentionedJid: [m.sender],
            forwardedNewsletterMessageInfo: {
                newsletterName: global.channelName,
                newsletterJid: global.channel,
            },
            externalAdReply: {
                title: global.botname + " ─On Whatsapp",
                body: "Renita MaryBelle─",
                thumbnailUrl: global.thumb,
                sourceUrl: "https://www.youtube.com/@RenitaMarybelle",
                mediaType: 1,
                renderLargerThumbnail: true,
                showAdAttribution: true,
            }
        }
    }, {
        quoted: m
    })
    **/
    Renita.sendMessage(m.chat, { image: randomMenuImg, caption: mbut }, { quoted: ftroli })
await Renita.sendMessage(m.chat, { audio: randomAudio, mimetype: 'audio/mp4', ptt: true }, { quoted: ftroli });
}
break

case 'ww': case 'werewolf': {
let jimp = require("jimp")
const resize = async (image, width, height) => {
    const read = await jimp.read(image);
    const data = await read.resize(width, height).getBufferAsync(jimp.MIME_JPEG);
    return data;
};

let {
    emoji_role,
    sesi,
    playerOnGame,
    playerOnRoom,
    playerExit,
    dataPlayer,
    dataPlayerById,
    getPlayerById,
    getPlayerById2,
    killWerewolf,
    killww,
    dreamySeer,
    sorcerer,
    protectGuardian,
    roleShuffle,
    roleChanger,
    roleAmount,
    roleGenerator,
    addTimer,
    startGame,
    playerHidup,
    playerMati,
    vote,
    voteResult,
    clearAllVote,
    getWinner,
    win,
    pagi,
    malam,
    skill,
    voteStart,
    voteDone,
    voting,
    run,
    run_vote,
    run_malam,
    run_pagi
} = require('./lib/werewolf.js')

// [ Thumbnail ] 
let thumb =
    "https://user-images.githubusercontent.com/72728486/235316834-f9f84ba0-8df3-4444-81d8-db5270995e6d.jpg";

    const {
        sender,
        chat
    } = m;
    Renita.werewolf = Renita.werewolf ? Renita.werewolf : {};
    const ww = Renita.werewolf ? Renita.werewolf : {};
    const data = ww[chat];
    const value = args[0];
    const target = args[1];

    // [ Membuat Room ]
    if (value === "create") {
        if (chat in ww) return m.reply("Group masih dalam sesi permainan");
        if (playerOnGame(sender, ww) === true)
            return m.reply("Kamu masih dalam sesi game");
        ww[chat] = {
            room: chat,
            owner: sender,
            status: false,
            iswin: null,
            cooldown: null,
            day: 0,
            time: "malem",
            player: [],
            dead: [],
            voting: false,
            seer: false,
            guardian: [],
        };
        await m.reply("Room berhasil dibuat, ketik *.ww join* untuk bergabung");

        // [ Join sesi permainan ]
    } else if (value === "join") {
        if (!ww[chat]) return m.reply("Belum ada sesi permainan");
        if (ww[chat].status === true)
            return m.reply("Sesi permainan sudah dimulai");
        if (ww[chat].player.length > 16)
            return m.reply("Maaf jumlah player telah penuh");
        if (playerOnRoom(sender, chat, ww) === true)
            return m.reply("Kamu sudah join dalam room ini");
        if (playerOnGame(sender, ww) === true)
            return m.reply("Kamu masih dalam sesi game");
        let data = {
            id: sender,
            number: ww[chat].player.length + 1,
            sesi: chat,
            status: false,
            role: false,
            effect: [],
            vote: 0,
            isdead: false,
            isvote: false,
        };
        ww[chat].player.push(data);
        let player = [];
        let text = `\n*⌂ W E R E W O L F - P L A Y E R*\n\n`;
        for (let i = 0; i < ww[chat].player.length; i++) {
            text += `${ww[chat].player[i].number}) @${ww[chat].player[i].id.replace(
          "@s.whatsapp.net",
          ""
        )}\n`;
            player.push(ww[chat].player[i].id);
        }
        text += "\nJumlah player minimal adalah 5 dan maximal 15";
        Renita.sendMessage(
            m.chat, {
                text: text.trim(),
                contextInfo: {
                    externalAdReply: {
                        title: "W E R E W O L F",
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        thumbnail: await resize(thumb, 300, 175),
                        sourceUrl: "",
                        mediaUrl: thumb,
                    },
                    mentionedJid: player,
                },
            }, {
                quoted: m
            }
        );

        // [ Game Play ]
    } else if (value === "start") {
        if (!ww[chat]) return m.reply("Belum ada sesi permainan");
        if (ww[chat].player.length === 0)
            return m.reply("Room belum memiliki player");
        if (ww[chat].player.length < 5)
            return m.reply("Maaf jumlah player belum memenuhi syarat");
        if (playerOnRoom(sender, chat, ww) === false)
            return m.reply("Kamu belum join dalam room ini");
        if (ww[chat].cooldown > 0) {
            if (ww[chat].time === "voting") {
                clearAllVote(chat, ww);
                addTimer(chat, ww);
                return await run_vote(Renita, chat, ww);
            } else if (ww[chat].time === "malem") {
                clearAllVote(chat, ww);
                addTimer(chat, ww);
                return await run_malam(Renita, chat, ww);
            } else if (ww[chat].time === "pagi") {
                clearAllVote(chat, ww);
                addTimer(chat, ww);
                return await run_pagi(Renita, chat, ww);
            }
        }
        if (ww[chat].status === true)
            return m.reply("Sesi permainan telah dimulai");
        if (ww[chat].owner !== sender)
            return m.reply(
                `Hanya @${ww[chat].owner.split("@")[0]} yang dapat memulai permainan`
            );
        let list1 = "";
        let list2 = "";
        let player = [];
        roleGenerator(chat, ww);
        addTimer(chat, ww);
        startGame(chat, ww);
        for (let i = 0; i < ww[chat].player.length; i++) {
            list1 += `(${ww[chat].player[i].number}) @${ww[chat].player[
          i
        ].id.replace("@s.whatsapp.net", "")}\n`;
            player.push(ww[chat].player[i].id);
        }
        for (let i = 0; i < ww[chat].player.length; i++) {
            list2 += `(${ww[chat].player[i].number}) @${ww[chat].player[
          i
        ].id.replace("@s.whatsapp.net", "")} ${
          ww[chat].player[i].role === "werewolf" ||
          ww[chat].player[i].role === "sorcerer"
            ? `[${ww[chat].player[i].role}]`
            : ""
        }\n`;
            player.push(ww[chat].player[i].id);
        }
        for (let i = 0; i < ww[chat].player.length; i++) {
            // [ Werewolf ]
            if (ww[chat].player[i].role === "werewolf") {
                if (ww[chat].player[i].isdead != true) {
                    var textt = `Hai ${Renita.getName(
              ww[chat].player[i].id
            )}, Kamu telah dipilih untuk memerankan *Werewolf* ${emoji_role(
              "werewolf"
            )} pada permainan kali ini, silahkan pilih salah satu player yang ingin kamu makan pada malam hari ini\n*LIST PLAYER*:\n${list2}\n\nKetik *.wwpc kill nomor* untuk membunuh player`;
                    
                    let row = [];
                    for (let p = 0; p < ww[chat].player.length; p++) {
                      row.push({
                        title: `Kill Player ${ww[chat].player[p].number}`,
                        rowId: `.wwpc kill ${ww[chat].player[p].number}`,
                        description: `Untuk membunuh player ${ww[chat].player[p].number}`,
                      });
                    }
                    const sections = [
                      { title: "⌂ W E R E W O L F - G A M E", rows: row },
                    ];
                    const listMessage = {
                      text: text,
                      footer: `Player Hidup: ${playerHidup(
                        sesi(m.chat, ww)
                      )} Player Mati: ${playerMati(sesi(m.chat, ww))}`,
                      title: "⌂ W E R E W O L F - G A M E\n",
                      buttonText: "Clik here!",
                      sections,
                      mentions: player,
                    };
                    await Renita.sendMessage(ww[chat].player[i].id, listMessage);
                   
                    await Renita.sendMessage(ww[chat].player[i].id, {
                        text: textt,
                        mentions: player,
                    });
                }

                // [ villager ]
            } else if (ww[chat].player[i].role === "warga") {
                if (ww[chat].player[i].isdead != true) {
                    let texttt = `*⌂ W E R E W O L F - G A M E*\n\nHai ${Renita.getName(
              ww[chat].player[i].id
            )} Peran kamu adalah *Warga Desa* ${emoji_role(
              "warga"
            )}, tetap waspada, mungkin *Werewolf* akan memakanmu malam ini, silakan masuk kerumah masing masing.\n*LIST PLAYER*:\n${list1}`;
                    await Renita.sendMessage(ww[chat].player[i].id, {
                        text: texttt,
                        mentions: player,
                    });
                }

                // [ Penerawangan ]
            } else if (ww[chat].player[i].role === "seer") {
                if (ww[chat].player[i].isdead != true) {
                    let texxt = `Hai ${Renita.getName(
              ww[chat].player[i].id
            )} Kamu telah terpilih  untuk menjadi *Penerawang* ${emoji_role(
              "seer"
            )}. Dengan sihir yang kamu punya, kamu bisa mengetahui peran pemain pilihanmu.\n*LIST PLAYER*:\n${list1}\n\nKetik *.wwpc dreamy nomor* untuk melihat role player`;
                    
                     let row = [];
                     for (let p = 0; p < ww[chat].player.length; p++) {
                       row.push({
                         title: `Cek Player ${ww[chat].player[p].number}`,
                         rowId: `.ww dreamy ${ww[chat].player[p].number}`,
                         description: `Untuk melihat identitas player ${ww[chat].player[p].number}`,
                       });
                     }
                     const sections = [
                       { title: "⌂ W E R E W O L F - G A M E", rows: row },
                     ];
                     const listMessage = {
                       text: text,
                       footer: `Player Hidup: ${playerHidup(
                         sesi(m.chat, ww)
                       )} Player Mati: ${playerMati(sesi(m.chat, ww))}`,
                       title: "⌂ W E R E W O L F - G A M E\n",
                       buttonText: "Clik here!",
                       sections,
                       mentions: player,
                     };
                     await Renita.sendMessage(ww[chat].player[i].id, listMessage);
                     
                    await Renita.sendMessage(ww[chat].player[i].id, {
                        text: texxt,
                        mentions: player,
                    });
                }
            } else if (ww[chat].player[i].role === "guardian") {
                if (ww[chat].player[i].isdead != true) {
                    let teext = `Hai ${Renita.getName(
              ww[chat].player[i].id
            )} Kamu terpilih untuk memerankan *Malaikat Pelindung* ${emoji_role(
              "guardian"
            )}, dengan kekuatan yang kamu miliki, kamu bisa melindungi para warga, silahkan pilih salah 1 player yang ingin kamu lindungi\n*LIST PLAYER*:\n${list1}\n\nKetik *.wwpc deff nomor* untuk melindungi player`;
                    
                    let row = [];
                    for (let p = 0; p < ww[chat].player.length; p++) {
                      row.push({
                        title: `Lindungi Player ${ww[chat].player[p].number}`,
                        rowId: `.ww deff ${ww[chat].player[p].number}`,
                        description: `Untuk melindungi player ${ww[chat].player[p].number}`,
                      });
                    }
                    const sections = [
                      { title: "⌂ W E R E W O L F - G A M E", rows: row },
                    ];
                    const listMessage = {
                      text: text,
                      footer: `Player Hidup: ${playerHidup(
                        sesi(m.chat, ww)
                      )} Player Mati: ${playerMati(sesi(m.chat, ww))}`,
                      title: "⌂ W E R E W O L F - G A M E\n",
                      buttonText: "Clik here!",
                      sections,
                      mentions: player,
                    };
                    await Renita.sendMessage(ww[chat].player[i].id, listMessage);
                    
                    await Renita.sendMessage(ww[chat].player[i].id, {
                        text: teext,
                        mentions: player,
                    });
                }

                // [ Sorcerer ]
            } else if (ww[chat].player[i].role === "sorcerer") {
                if (ww[chat].player[i].isdead != true) {
                    let textu = `Hai ${Renita.getName(
              ww[chat].player[i].id
            )} Kamu terpilih sebagai Penyihir ${emoji_role(
              "sorcerer"
            )}, dengan kekuasaan yang kamu punya, kamu bisa membuka identitas para player, silakan pilih 1 orang yang ingin kamu buka identitasnya\n*LIST PLAYER*:\n${list2}\n\nKetik *.wwpc sorcerer nomor* untuk melihat role player`;
                    
                    let row = [];
                    for (let p = 0; p < ww[chat].player.length; p++) {
                      row.push({
                        title: `Cek Player ${ww[chat].player[p].number}`,
                        rowId: `.ww sorcerer ${ww[chat].player[p].number}`,
                        description: `Untuk melihat identitas player ${ww[chat].player[p].number}`,
                      });
                    }
                    const sections = [
                      { title: "⌂ W E R E W O L F - G A M E", rows: row },
                    ];
                    const listMessage = {
                      text: text,
                      footer: `Player Hidup: ${playerHidup(
                        sesi(m.chat, ww)
                      )} Player Mati: ${playerMati(sesi(m.chat, ww))}`,
                      title: "⌂ W E R E W O L F - G A M E\n",
                      buttonText: "Clik here!",
                      sections,
                      mentions: player,
                    };
                    await Renita.sendMessage(ww[chat].player[i].id, listMessage);
                    
                    await Renita.sendMessage(ww[chat].player[i].id, {
                        text: textu,
                        mentions: player,
                    });
                }
            }
        }
        await Renita.sendMessage(m.chat, {
            text: "*⌂ W E R E W O L F - G A M E*\n\nGame telah dimulai, para player akan memerankan perannya masing masing, silahkan cek chat pribadi untuk melihat role kalian. Berhati-hatilah para warga, mungkin malam ini adalah malah terakhir untukmu",
            contextInfo: {
                externalAdReply: {
                    title: "W E R E W O L F",
                    mediaType: 1,
                    renderLargerThumbnail: true,
                    thumbnail: await resize(thumb, 300, 175),
                    sourceUrl: "",
                    mediaUrl: thumb,
                },
                mentionedJid: player,
            },
        });
        await run(Renita, chat, ww);
    } else if (value === "vote") {
        if (!ww[chat]) return m.reply("Belum ada sesi permainan");
        if (ww[chat].status === false)
            return m.reply("Sesi permainan belum dimulai");
        if (ww[chat].time !== "voting")
            return m.reply("Sesi voting belum dimulai");
        if (playerOnRoom(sender, chat, ww) === false)
            return m.reply("Kamu bukan player");
        if (dataPlayer(sender, ww).isdead === true)
            return m.reply("Kamu sudah mati");
        if (!target || target.length < 1)
            return m.reply("Masukan nomor player");
        if (isNaN(target)) return m.reply("Gunakan hanya nomor");
        if (dataPlayer(sender, ww).isvote === true)
            return m.reply("Kamu sudah melakukan voting");
        b = getPlayerById(chat, sender, parseInt(target), ww);
        if (b.db.isdead === true)
            return m.reply(`Player ${target} sudah mati.`);
        if (ww[chat].player.length < parseInt(target))
            return m.reply("Invalid");
        if (getPlayerById(chat, sender, parseInt(target), ww) === false)
            return m.reply("Player tidak terdaftar!");
        vote(chat, parseInt(target), sender, ww);
        return m.reply("✅ Vote");
    } else if (value == "exit") {
        if (!ww[chat]) return m.reply("Tidak ada sesi permainan");
        if (playerOnRoom(sender, chat, ww) === false)
            return m.reply("Kamu tidak dalam sesi permainan");
        if (ww[chat].status === true)
            return m.reply("Permainan sudah dimulai, kamu tidak bisa keluar");
        m.reply(`@${sender.split("@")[0]} Keluar dari permainan`, {
            withTag: true,
        });
        playerExit(chat, sender, ww);
    } else if (value === "delete") {
        if (!ww[chat]) return m.reply("Tidak ada sesi permainan");
        if (ww[chat].owner !== sender)
            return m.reply(
                `Hanya @${
            ww[chat].owner.split("@")[0]
          } yang dapat menghapus sesi permainan ini`
            );
        m.reply("Sesi permainan berhasil dihapus").then(() => {
            delete ww[chat];
        });
    } else if (value === "player") {
        if (!ww[chat]) return m.reply("Tidak ada sesi permainan");
        if (playerOnRoom(sender, chat, ww) === false)
            return m.reply("Kamu tidak dalam sesi permainan");
        if (ww[chat].player.length === 0)
            return m.reply("Sesi permainan belum memiliki player");
        let player = [];
        let text = "\n*⌂ W E R E W O L F - G A M E*\n\nLIST PLAYER:\n";
        for (let i = 0; i < ww[chat].player.length; i++) {
            text += `(${ww[chat].player[i].number}) @${ww[chat].player[i].id.replace(
          "@s.whatsapp.net",
          ""
        )} ${
          ww[chat].player[i].isdead === true
            ? `☠️ ${ww[chat].player[i].role}`
            : ""
        }\n`;
            player.push(ww[chat].player[i].id);
        }
        Renita.sendMessage(
            m.chat, {
                text: text,
                contextInfo: {
                    externalAdReply: {
                        title: "W E R E W O L F",
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        thumbnail: await resize(thumb, 300, 175),
                        sourceUrl: "",
                        mediaUrl: thumb,
                    },
                    mentionedJid: player,
                },
            }, {
                quoted: m
            }
        );
    } else {
        let text = `\n*⌂ W E R E W O L F - G A M E*\n\nPermainan Sosial Yang Berlangsung Dalam Beberapa Putaran/ronde. Para Pemain Dituntut Untuk Mencari Seorang Penjahat Yang Ada Dipermainan. Para Pemain Diberi Waktu, Peran, Serta Kemampuannya Masing-masing Untuk Bermain Permainan Ini\n\n*⌂ C O M M A N D*\n`;
        text += ` • ww create\n`;
        text += ` • ww join\n`;
        text += ` • ww start\n`;
        text += ` • ww exit\n`;
        text += ` • ww delete\n`;
        text += ` • ww player\n`;
        text += `\nPermainan ini dapat dimainkan oleh 5 sampai 15 orang.`;
        Renita.sendMessage(
            m.chat, {
                text: text.trim(),
                contextInfo: {
                    externalAdReply: {
                        title: "W E R E W O L F",
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        thumbnail: await resize(thumb, 300, 175),
                        sourceUrl: "",
                        mediaUrl: thumb,
                    },
                },
            }, {
                quoted: m
            }
        );
    }
}
break

case 'wwpc': {
let {
    emoji_role,
    sesi,
    playerOnGame,
    playerOnRoom,
    playerExit,
    dataPlayer,
    dataPlayerById,
    getPlayerById,
    getPlayerById2,
    killWerewolf,
    killww,
    dreamySeer,
    sorcerer,
    protectGuardian,
    roleShuffle,
    roleChanger,
    roleAmount,
    roleGenerator,
    addTimer,
    startGame,
    playerHidup,
    playerMati,
    vote,
    voteResult,
    clearAllVote,
    getWinner,
    win,
    pagi,
    malam,
    skill,
    voteStart,
    voteDone,
    voting,
    run,
    run_vote,
    run_malam,
    run_pagi
} = require('./lib/werewolf.js')

    const {
        sender,
        chat
    } = m;
    Renita.werewolf = Renita.werewolf ? Renita.werewolf : {};
    const ww = Renita.werewolf ? Renita.werewolf : {};
    const value = args[0];
    const target = args[1];

    if (playerOnGame(sender, ww) === false)
        return reply("Kamu tidak dalam sesi game");
    if (dataPlayer(sender, ww).status === true)
        return reply(
            "Skill telah digunakan, skill hanya bisa digunakan sekali setiap malam"
        );
    if (dataPlayer(sender, ww).isdead === true)
        return reply("Kamu sudah mati");
    if (!target || target.length < 1) return reply("Masukan nomor player");
    if (isNaN(target)) return reply("Gunakan hanya nomor");
    let byId = getPlayerById2(sender, parseInt(target), ww);
    if (byId.db.isdead === true) return reply("Player sudah mati");
    if (byId.db.id === sender)
        return reply("Tidak bisa menggunakan skill untuk diri sendiri");
    if (byId === false) return reply("Player tidak terdaftar");
    if (value === "kill") {
        if (dataPlayer(sender, ww).role !== "werewolf")
            return reply("Peran ini bukan untuk kamu");
        if (byId.db.role === "sorcerer")
            return reply("Tidak bisa menggunakan skill untuk teman");
        return m
            .reply("Berhasil membunuh player " + parseInt(target))
            .then(() => {
                dataPlayer(sender, ww).status = true;
                killWerewolf(sender, parseInt(target), ww);
            });
    } else if (value === "dreamy") {
        if (dataPlayer(sender, ww).role !== "seer")
            return reply("Peran ini bukan untuk kamu");
        let dreamy = dreamySeer(m.sender, parseInt(target), ww);
        return m
            .reply(`Berhasil membuka identitas player ${target} adalah ${dreamy}`)
            .then(() => {
                dataPlayer(sender, ww).status = true;
            });
    } else if (value === "deff") {
        if (dataPlayer(sender, ww).role !== "guardian")
            return reply("Peran ini bukan untuk kamu");
        return reply(`Berhasil melindungi player ${target}`)
        .then(() => {
            protectGuardian(m.sender, parseInt(target), ww);
            dataPlayer(sender, ww).status = true;
        });
    } else if (value === "sorcerer") {
        if (dataPlayer(sender, ww).role !== "sorcerer")
            return reply("Peran ini bukan untuk kamu");
        let sorker = sorcerer(sesi(m.sender), target);
        return m
            .reply(`Berhasil membuka identitas player ${player} adalah ${sorker}`)
            .then(() => {
                dataPlayer(sender, ww).status = true;
            });
    }
}
break

case 'spotify': case 'spotifysearch': case 'spotifys': {
    if (!text) return reply('Masukan judul lagu!');
    let result = await searchSpotify(text);
    if (!result || result.length === 0) return reply('Lagu tidak ditemukan.');
    let caption = `🎵 *Hasil Pencarian Spotify*\n📌 _Keyword_: *${text}*\n\n`;
    caption += result.map((v, i) => {
        return `*${i + 1}. ${v.name}*\n   🎤 *Artist*: ${v.artist || 'Unknown'}\n   🔗 *Link*: ${v.link}`;
    }).join('\n\n');
    caption += `\n\n✨ *Pilih dan salin link terus  ketik spdl untuk mendownload audionya*`;
    reply(caption);
}
break

case 'spdl': case 'spotifydl': {
if (!text) return reply('Masukan Link')
let result = await spotifydl(text)
let captionvid = `∘ Title: ${result.title}\n∘ Artist: ${result.artis}\n∘ Type: ${result.type}\n\nRenitaID-V5`
 const p = await new canvafy.Spotify()
            .setTitle(result.title)
            .setAuthor("Spotify - Downloader")
            .setTimestamp(40, 100)
            .setOverlayOpacity(0.8)
            .setBorder("#fff", 0.8)
            .setImage(result.image)
            .setBlur(3)
            .build(); 

       await Renita.sendMessage(from, { image: p, caption: captionvid }, { quoted: m })
    Renita.sendMessage(m.chat, { audio: { url: result.download}, mimetype: 'audio/mpeg', filename: 'MP3 BY ' + 'Renita Marybelle——' }, { quoted: m });
}
break

case 'upsw': {
  if (!isByurr) return reply(mess.owner)
    const quoted = m.quoted ? m.quoted : null;

    if (!quoted && text) {
        Renita.sendStatusMention(
            { text: text },
            [m.chat]
        );
        return;
    }

    if (quoted && quoted.mtype === "conversation") {
        Renita.sendStatusMention(
            { text: quoted.text || '' },
            [m.chat]
        );
        return;
    }

    if (quoted.mtype === "audioMessage") {
        let audioData = await quoted.download();
        Renita.sendStatusMention(
            { audio: audioData, mimetype: 'audio/mp4', ptt: true },
            [m.chat]
        );
    }

    if (quoted.mtype === "imageMessage") {
        let imageData = await quoted.download();
        Renita.sendStatusMention(
            { image: imageData, caption: text || '' },
            [m.chat]
        );
    }

    if (quoted.mtype === "videoMessage") {
        let videoData = await quoted.download();
        Renita.sendStatusMention(
            { video: videoData, caption: text || '' },
            [m.chat]
        );
    }
};
break

case 's': case 'sticker': case 'stiker': {
    if (!quoted) return reply(`\n*ex:* reply image/video ${prefix + command}\n`);
    try {
        if (/image/.test(mime)) {
            let media = await quoted.download();
            let encmedia = await Renita.sendImageAsSticker(m.chat, media, m, {
                packname: packname,
                author: author,
            });
            await fs.unlinkSync(encmedia);
        } else if (/video/.test(mime)) {
            if ((quoted?.msg || quoted)?.seconds > 10) return reply('\ndurasi maksimal 10 detik\n')
                const media = await quoted.download();
                let encmedia = await Renita.sendVideoAsSticker(m.chat, media, m, {
                    packname: packname,
                    author: author,
                });
            await fs.unlinkSync(encmedia);
        } else {
                return reply('\n*ex:* reply image/video ${prefix + command}\n');
        }
    } catch (error) {
        console.error(error);
        return reply('error');
    }
}
break

case 'tiktok':
case 'tt': {
  if (!text) return m.reply(`Contoh: ${prefix + command} link`);
Renita.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
try {
  const data = await fetchJson(`https://api.tiklydown.eu.org/api/download?url=${encodeURIComponent(text)}`);
    const vidnya = data?.video?.noWatermark;
    if (vidnya) {
      const caption = `*[ TIKTOK DOWNLOADER ]*
*Video dari*: _${data.author?.name ?? 'Tidak diketahui'} (@${data.author?.unique_id ?? 'Tidak diketahui'})_
*Likes*: _${data.stats?.likeCount ?? 'Tidak diketahui'}_
*Comments*: _${data.stats?.commentCount ?? 'Tidak diketahui'}_
*Shares*: _${data.stats?.shareCount ?? 'Tidak diketahui'}_
*Plays*: _${data.stats?.playCount ?? 'Tidak diketahui'}_
*Saves*: _${data.stats?.saveCount ?? 'Tidak diketahui'}_
*Title*: _${data.title ?? 'Tidak diketahui'}_

\`⏤͟͟͞͞ Downloader By ${botname}\``;
      await Renita.sendMessage(
        m.chat, 
        { caption, video: { url: vidnya } }, 
        { quoted: m }
      );
    } else {
      const nyut = await nitaTTDL(text);
      await Renita.sendMessage(
        m.chat, 
        {
          caption: `Judul: ${nyut.title ?? 'Tidak diketahui'}\nDeskripsi: ${nyut.description ?? 'Tidak diketahui'}`,
          video: { url: nyut.downloadLink || nyut.hdDownloadLink },
        },
        { quoted: m }
      );
    }
  } catch (error) {
    console.error(error);
    reply('Maaf, terjadi kesalahan saat memproses permintaan Anda.');
 }
}
break;

case 'tiktokcp':
case 'ttcp': {
  if (!text) return m.reply(`Contoh: ${prefix + command} link`);
Renita.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
try {
  const data = await fetchJson(`https://api.tiklydown.eu.org/api/download?url=${encodeURIComponent(text)}`);
    const vidnya = data?.video?.noWatermark;
    if (vidnya) {
      const caption = `*[ TIKTOK DOWNLOADER ]*
*Video dari*: _${data.author?.name ?? 'Tidak diketahui'} (@${data.author?.unique_id ?? 'Tidak diketahui'})_
*Likes*: _${data.stats?.likeCount ?? 'Tidak diketahui'}_
*Comments*: _${data.stats?.commentCount ?? 'Tidak diketahui'}_
*Shares*: _${data.stats?.shareCount ?? 'Tidak diketahui'}_
*Plays*: _${data.stats?.playCount ?? 'Tidak diketahui'}_
*Saves*: _${data.stats?.saveCount ?? 'Tidak diketahui'}_
*Title*: _${data.title ?? 'Tidak diketahui'}_

\`⏤͟͟͞͞ Downloader By ${botname}\``;
      await Renita.sendMessage(
        m.chat, 
        { video: { url: vidnya } }, 
        { quoted: m }
      );
    } else {
      const nyut = await nitaTTDL(text);
      await Renita.sendMessage(
        m.chat, 
        {
          video: { url: nyut.downloadLink || nyut.hdDownloadLink },
        },
        { quoted: m }
      );
    }
  } catch (error) {
    console.error(error);
    reply('Maaf, terjadi kesalahan saat memproses permintaan Anda.');
 }
}
break;

case 'update': {
  if (!isCreator) return reply(mess.owner);

  const defaultIndexUrl = 'https://raw.githubusercontent.com/latesturl/RaolProjects/refs/heads/master/index.js';
  const defaultCaseUrl = 'https://raw.githubusercontent.com/latesturl/RaolProjects/refs/heads/master/case.js';

  if (!args[0]) {
    try {
      const localIndexTimestamp = await getFileTimestamp('./index.js');
      const localCaseTimestamp = await getFileTimestamp('./case.js');

      const remoteIndexResponse = await axios.head(defaultIndexUrl);
      const remoteCaseResponse = await axios.head(defaultCaseUrl);

      const remoteIndexTime = new Date(remoteIndexResponse.headers['last-modified']).getTime();
      const remoteCaseTime = new Date(remoteCaseResponse.headers['last-modified']).getTime();

      if (localIndexTimestamp >= remoteIndexTime && localCaseTimestamp >= remoteCaseTime) {
        return reply('All files are already up-to-date.');
      }

      await downloadFile(defaultIndexUrl, './index.js');
      await downloadFile(defaultCaseUrl, './case.js');
      reply('Successfully updated all files! Restarting...');
      await sleep(3000);
      process.exit(0);
    } catch (error) {
      reply('Failed to update default: ' + error.message);
    }
    break;
  }

  const inputUrl = args[0];
  
  if (!isValidUrl(inputUrl)) {
    return reply('Invalid URL format! Example: https://example.com/index.js');
  }

  const targetFile = inputUrl.includes('index.js') ? 'index.js' : 
                    inputUrl.includes('case.js') ? 'case.js' : 
                    null;

  if (!targetFile) {
    return reply('URL must point to index.js or case.js!');
  }

  try {
    const localTime = await getFileTimestamp(`./${targetFile}`);
    const remoteResponse = await axios.head(inputUrl);
    const remoteTime = new Date(remoteResponse.headers['last-modified']).getTime();

    if (localTime >= remoteTime) {
      return reply(`File ${targetFile} is already the latest version.`);
    }

    await downloadFile(inputUrl, `./${targetFile}`);
    reply(`Successfully updated ${targetFile}! Restarting...`);
    await sleep(3000);
    process.exit(0);
  } catch (error) {
    reply(`Failed to update ${targetFile}: ` + error.message);
  }
  }
  break

case 'ttv2': case 'tiktokv2': case 'tiktokdlv2': {
    if (!text) return reply(`\n*ex:* ${prefix + command} https://vt.tiktok.com/ZS6ThFced/\n`)
    
    let res = await tiktok(text)
    await Renita.sendMessage(m.chat, { react: { text: `${randomemoji}`, key: m.key }})

    if (res && res.data && res.data.success) {
        let data = res.data
        let type = data.type
        let urls = data.urls || []
        
        if (type === 'video' && urls.length > 0) {
            let videoUrl = urls[0]
            await Renita.sendMessage(m.chat, {
                video: { url: videoUrl },
                caption: "berhasil mengunduh video dari tiktok"
            }, { quoted: m })

        } else if (type === 'slideshow' && Array.isArray(urls)) {
            let totalImages = urls.length
            let estimatedTime = totalImages * 4
            let message = `estimasi waktu pengiriman gambar: ${estimatedTime} detik.`
            await Renita.sendMessage(m.chat, { text: message }, { quoted: m })

            let albumArray = urls.map((url, index) => ({
                image: { url },
                caption: `gambar ke-${index + 1}`
            }))

            await Renita.albumMessage(m.chat, albumArray, m)
        } else {
            await reply("tidak ditemukan media yang valid.")
        }
    } else {
        console.error(res)
        await reply("hayya, error")
    }
}
break

 case 'confess': case 'confes': case 'menfes': case 'menfess': {
    Renita.menfes = Renita.menfes ?? {};
    const session = Object.values(Renita.menfes).find(v => v.state === 'CHATTING' && [v.a, v.b].includes(m.sender));
    if (session) {
        const target = session.a === m.sender ? session.b : session.a;
        await Renita.sendMessage(target, {
            text: `📩 Pesan baru dari @${m.sender.split('@')[0]}:\n\n${m.text}`,
            mentions: [m.sender],
        });
        reply("Pesan diteruskan.");
        return;
    }
    const roof = Object.values(Renita.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender));
    if (roof) return reply("Kamu masih berada dalam sesi menfess");
    if (m.isGroup) return reply("Fitur hanya tersedia di private chat!");
    if (!text) return reply(`Kirim perintah ${prefix + command} nama|nomor|pesan\n\nContoh:\n${prefix + command} ${pushname}|628xxx|Menfess nih`);
    if (!text.includes('|')) return reply("Format salah! Gunakan format: nama|nomor|pesan");

    let [namaNya, nomorNya, pesanNya] = text.split('|');
    nomorNya = nomorNya.replace(/^0/, '62');
    if (isNaN(nomorNya)) return reply("Nomor tidak valid! Pastikan hanya menggunakan angka.");

    const yoi = `Hi ada menfess nih buat kamu\n\nDari: ${namaNya}\nPesan: ${pesanNya}\n\nKetik:\n${prefix}balasmenfess -- Untuk menerima menfess\n${prefix}tolakmenfess -- Untuk menolak menfess\n\n_Pesan ini dikirim oleh bot._`;
    const tod = await getBuffer('https://telegra.ph/file/c8fdfc8426f5f60b48cca.jpg');

    const id = m.sender;
    Renita.menfes[id] = {
        id,
        a: m.sender,
        b: `${nomorNya}@s.whatsapp.net`,
        state: 'WAITING',
    };

    await Renita.sendMessage(`${nomorNya}@s.whatsapp.net`, { image: tod, caption: yoi });
    reply("Pesan berhasil dikirim ke nomor tujuan. Semoga dibalas ya!");
}
break;

case 'balasmenfess': {
    Renita.menfes = Renita.menfes ?? {};
    const roof = Object.values(Renita.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender));
    if (!roof) return reply("Belum ada sesi menfess");

    const room = Object.values(Renita.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === 'WAITING');
    if (!room) return reply("Tidak ada sesi menfess yang sedang menunggu");

    const other = [room.a, room.b].find(user => user !== m.sender);
    room.b = m.sender;
    room.state = 'CHATTING';
    Renita.menfes[room.id] = { ...room };

    await Renita.sendMessage(other, {
        text: `_@${m.sender.split("@")[0]} telah menerima menfess kamu, sekarang kamu bisa chat lewat bot ini._\n\n*NOTE:* Ketik .stopmenfess untuk berhenti.`,
        mentions: [m.sender],
    });
    reply("Menfess diterima, sekarang kamu bisa chat!");
    m.reply("Silakan balas pesan langsung di chat ini. Semua pesan akan diteruskan.");
}
break;

case 'tolakmenfess': {
    Renita.menfes = Renita.menfes ?? {};
    const roof = Object.values(Renita.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender));
    if (!roof) return reply("Belum ada sesi menfess");

    const other = [roof.a, roof.b].find(user => user !== m.sender);
    await Renita.sendMessage(other, {
        text: `_Maaf, @${m.sender.split("@")[0]} menolak menfess kamu._`,
        mentions: [m.sender],
    });
    reply("Menfess berhasil ditolak.");
    delete Renita.menfes[roof.id];
}
break;

case 'stopmenfess': {
    Renita.menfes = Renita.menfes ?? {};
    const find = Object.values(Renita.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender));
    if (!find) return reply("Belum ada sesi menfess");

    const to = find.a === m.sender ? find.b : find.a;
    await Renita.sendMessage(to, {
        text: "_Sesi menfess ini telah dihentikan._",
        mentions: [m.sender],
    });
    reply("Sesi menfess dihentikan.");
    delete Renita.menfes[find.id];
}
break;
 
case 'brat': {
const { createCanvas, registerFont } = require('canvas');
const Jimp = require('jimp');
async function BratGenerator(teks) {
  let width = 512;
  let height = 512;
  let margin = 20;
  let wordSpacing = 50; 
  let canvas = createCanvas(width, height);
  let ctx = canvas.getContext('2d');
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, width, height);
  let fontSize = 280;
  let lineHeightMultiplier = 1.3;
  ctx.textAlign = 'left';
  ctx.textBaseline = 'top';
  ctx.fillStyle = 'black';
registerFont('./lib/arialnarrow.ttf', { family: 'Narrow' });
  let words = teks.split(' ');
  let lines = [];
  let rebuildLines = () => {
    lines = [];
    let currentLine = '';
    for (let word of words) {
      let testLine = currentLine ? `${currentLine} ${word}` : word;
      let lineWidth =
        ctx.measureText(testLine).width + (currentLine.split(' ').length - 1) * wordSpacing;
      if (lineWidth < width - 2 * margin) {
        currentLine = testLine;
      } else {
        lines.push(currentLine);
        currentLine = word;
      }
    }
    if (currentLine) {
      lines.push(currentLine);
    }
  };
  ctx.font = `${fontSize}px Narrow`;
  rebuildLines();
  while (lines.length * fontSize * lineHeightMultiplier > height - 2 * margin) {
    fontSize -= 2;
    ctx.font = `${fontSize}px Narrow`;
    rebuildLines();
  }
    let lineHeight = fontSize * lineHeightMultiplier;
  let y = margin;
  for (let line of lines) {
    let wordsInLine = line.split(' ');
    let x = margin;
    for (let word of wordsInLine) {
      ctx.fillText(word, x, y);
      x += ctx.measureText(word).width + wordSpacing;
    }
    y += lineHeight;
  }
  let buffer = canvas.toBuffer('image/png');
  let image = await Jimp.read(buffer);
  image.blur(3);
  let blurredBuffer = await image.getBufferAsync(Jimp.MIME_PNG);
return Renita.sendImageAsSticker(m.chat, blurredBuffer, m, { packname: "© BYURR", author: "\n\n\nRenita Marybelle——" })
}
if (!text) return m.reply(`Masukkan teks untuk stiker.\n\nContoh:\n.brat Atmin Ganteng`);
return BratGenerator(text)
}
break

            case "h":
            case "hidetag": {
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins && !isOwner) return reply(mess.admin)
                if (m.quoted) {
                    Renita.sendMessage(m.chat, {
                        forward: m.quoted.fakeObj,
                        mentions: participants.map(a => a.id)
                    })
                }
                if (!m.quoted) {
                    Renita.sendMessage(m.chat, {
                        text: q ? q : '',
                        mentions: participants.map(a => a.id)
                    }, { quoted: m })
                }
            }
            break
            
case "kick":  case "kik":  case "dor": {
      if (!m?.isGroup) return reply(mess.group)
      if (!isAdmins) return reply(mess.admin)
      if (!isBotAdmins) return reply(mess.admin)
      if (!text && !m?.quoted) return reply(`siapa yang mau di kick njrr, contoh reply orang atau tag dengan caption ${prefix + command}`)
      let users = m?.quoted ? m?.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
      await Renita.groupParticipantsUpdate(m?.chat, [users], 'remove').catch(console.log)
  }
  break

case 'addgroup': {
    // Hanya owner yang bisa menambahkan grup
    if (!isOwner) return reply(mess.owner)

    // Ambil ID grup
    const targetGroup = m.quoted ? m.quoted.chat : m.chat
    if (!targetGroup.endsWith('@g.us')) return reply('❌ Bukan ID grup yang valid!')

    // Baca database grup yang diizinkan
    let allowedGroups = []
    try {
        allowedGroups = JSON.parse(fs.readFileSync('./lib/database/allowedGroups.json'))
    } catch {
        allowedGroups = []
    }

    // Tambahkan grup ke whitelist jika belum ada
    if (!allowedGroups.includes(targetGroup)) {
        allowedGroups.push(targetGroup)
        fs.writeFileSync('./lib/database/allowedGroups.json', JSON.stringify(allowedGroups, null, 2))
        reply(`✅ Berhasil menambahkan grup ke whitelist!\nID: ${targetGroup}`)
    } else {
        reply('⚠️ Grup ini sudah terdaftar di whitelist!')
    }
    break
}

case 'removegroup': {
    // Hanya owner yang bisa menghapus grup
    if (!isOwner) return reply(mess.owner)

    // Ambil ID grup
    const targetGroup = m.quoted ? m.quoted.chat : m.chat
    if (!targetGroup.endsWith('@g.us')) return reply('❌ Bukan ID grup yang valid!')

    // Baca database grup yang diizinkan
    let allowedGroups = JSON.parse(fs.readFileSync('./lib/database/allowedGroups.json'))
    allowedGroups = allowedGroups.filter(g => g !== targetGroup)

    // Update database
    fs.writeFileSync('./lib/database/allowedGroups.json', JSON.stringify(allowedGroups, null, 2))
    reply(`✅ Berhasil menghapus grup dari whitelist!\nID: ${targetGroup}`)
}
break

case 'ping': {
	const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
              let  neww = performance.now()
              let  oldd = performance.now()
               let respon = Raol(`
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim())
	Renita.relayMessage(m.chat,  {
        requestPaymentMessage: {
          currencyCodeIso4217: 'INR',
          amount1000: 999999999,
          requestFrom: m.sender,
          noteMessage: {
          extendedTextMessage: {
          text: respon,
          contextInfo: {
          externalAdReply: {
          showAdAttribution: true
          }}}}}}, {})
    }
break

case 'addfile': {
if (!text.includes("./")) return m.reply(`Example: ${prefix+command} ./path/to/file.txt`); 
let filePath = path.resolve(text);
let dir = path.dirname(filePath);
let fileName = path.basename(filePath);
if (!fs.existsSync(dir)) {
return m.reply('Directory not found!');
}
let media = await downloadContentFromMessage(m.quoted, "document");
let buffer = Buffer.from([]);
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk]);
}
if (fs.existsSync(filePath)) {
fs.appendFileSync(filePath, buffer);
m.reply(`Successfully added content to ${fileName}`);
} else {
fs.writeFileSync(filePath, buffer);
m.reply(`Successfully created file ${fileName} and add content.`);
}}
break

case 'trash': {
let directoryPath = './session'
fs.readdir(directoryPath, async (err, files) => {
if (err) {
console.error('Unable to scan directory: ', err);
return reply(`Failed to scan directory: ${err.message}`);
}
const filteredArray = files.filter(item => 
item.startsWith('pre-key') || 
item.startsWith('sender-key') || 
item.startsWith('session-') || 
item.startsWith('app-state')
);
let teks = `Detected ${filteredArray.length} trash file! \n\n`;
if (filteredArray.length === 0) {
return reply(teks);
}
filteredArray.forEach((file, i) => {
teks += `${i + 1}. ${file}\n`;
});
reply(teks);
await sleep(2000);
const tuts = await reply('_Remove trash..._');
for (const file of filteredArray) {
try {
fs.unlinkSync(`${directoryPath}/${file}`);
} catch (e) {
console.error(`Failed to delete file: ${file}`, e);
}}
});
}
break

case 'addcase': {
if (!text) return reply(`Example: ${prefix+command} the case`);
const namaFile = path.join(__dirname, 'case.js');
const caseBaru = `${text}\n\n`;
const tambahCase = (data, caseBaru) => {
const posisiDefault = data.lastIndexOf("default:");
if (posisiDefault !== -1) {
const kodeBaruLengkap = data.slice(0, posisiDefault) + caseBaru + data.slice(posisiDefault);
return { success: true, kodeBaruLengkap };
} else {
return { success: false, message: "Cannot find default case in file!" };
}};
fs.readFile(namaFile, 'utf8', (err, data) => {
if (err) {
console.error('An error occurred while reading the file:', err);
return reply(`An error occurred while reading the file: ${err.message}`);
}
const result = tambahCase(data, caseBaru);
if (result.success) {
fs.writeFile(namaFile, result.kodeBaruLengkap, 'utf8', (err) => {
if (err) {
console.error('An error occurred while writing the file:', err);
return reply(`An error occurred while writing the file: ${err.message}`);
} else {
console.log('Successfully added new case:');
console.log(caseBaru);
return reply('Successfully added case!');
}});
} else {
console.error(result.message);
return reply(result.message);
}});
}
break

case 'addconst': {
addCountCmd('#addconst', m.sender, _cmd)
if (!text) return reply(`Example: ${prefix+command} const new`);
const namaFile = path.join(__dirname, 'case.js');
const constBaru = `${text}\n\n`;
const tambahConst = (data, constBaru) => {
const posisiIsAntiLink = data.indexOf("const isAntiLink");
if (posisiIsAntiLink !== -1) {
const kodeBaruLengkap = data.slice(0, posisiIsAntiLink) + constBaru + data.slice(posisiIsAntiLink);
return { success: true, kodeBaruLengkap };
} else {
return { success: false, message: "Cannot find const isAntiLink in file!" };
}};
fs.readFile(namaFile, 'utf8', (err, data) => {
if (err) {
console.error('An error occurred while reading the file:', err);
return reply(`An error occurred while reading the file: ${err.message}`);
}
const result = tambahConst(data, constBaru);
if (result.success) {
fs.writeFile(namaFile, result.kodeBaruLengkap, 'utf8', (err) => {
if (err) {
console.error('An error occurred while writing the file:', err);
return reply(`An error occurred while writing the file: ${err.message}`);
} else {
console.log('Success adding new const:');
console.log(constBaru);
return reply('Success adding const!');
}});
} else {
console.error(result.message);
return reply(result.message);
}});
}
break;

case 'public': {
if (!isByurr) return reply('*owner only*') 
Renita.sendMessage(m.chat, { react: { text: `${randomemoji}`, key: m.key }})
Renita.public = true
reply('succes')
}
break

case 'getfunc': case 'cekfunc': case 'cekfunction': {
if (!isOwner) return onlyOwn();
if (!text) return reply(`Example: ${prefix+command} functionName`);
const functionName = text.trim();
if (!functionName) return reply(`Enter the name of the function you want to check. Example: ${prefix+command} functionName`);
const cekFunction = async (functionName) => {
try {
const fileContent = await fs.promises.readFile("./case.js", "utf-8");
const functionRegex = new RegExp(`function ${functionName}\\s*\\([\\s\\S]*?\\)\\s*\\{[\\s\\S]*?\\}`, 'g');
const match = fileContent.match(functionRegex);
if (!match) {
return { found: false };
}
const lines = fileContent.split('\n');
const functionLines = match[0].split('\n');
const startLine = lines.indexOf(functionLines[0]) + 1;
const endLine = startLine + functionLines.length - 1;
return {
found: true,
startLine,
endLine,
content: match[0]
};
} catch (error) {
return { error: `An error occurred while reading the file: ${error.message}` };
}};
const result = await cekFunction(functionName);
if (result.error) {
reply(result.error);
} else if (result.found) {
const message = `
*FUNCTION FOUND!*
• Function name: ${functionName}
• First line: ${result.startLine}
• Final line: ${result.endLine}

Want to take it all at once?`;
let kun = `{\"display_text\":\"YA\",\"id\":\"${prefix}getfunc ${text}\"}`
quickreply1(m.chat, message, kun, m)
usersessions[m.sender] = { functionToRetrieve: result, functionName };
} else {
reply(`Function '${functionName}' not found.`);
}
}
break

case 'self': {
if (!isByurr) return reply('*owner only*') 
Renita.sendMessage(m.chat, { react: { text: `${randomemoji}`, key: m.key }})
Renita.public = false
reply('succes')
}
break

case 'idch': {
if (!text) return reply(("where is the channel link?"))
if (!text.includes("https://whatsapp.com/channel/")) return reply("Invalid link")
let result = text.split('https://whatsapp.com/channel/')[1]
let res = await Renita.newsletterMetadata("invite", result)
let teks = `* *ID : ${res.id}*
* *Name :* ${res.name}
* *Total Followers :* ${res.subscribers}
* *Status :* ${res.state}
* *Verified :* ${res.verification == "VERIFIED" ? "verified" : "No"}`
let msg = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: { "messageContextInfo": { "deviceListMetadata": {}, "deviceListMetadataVersion": 2 },
interactiveMessage: {
body: {
text: teks }, 
footer: {
text: global.namabot }, //input watermark footer
  nativeFlowMessage: {
  buttons: [
             {
        "name": "cta_copy",
        "buttonParamsJson": `{"display_text": "copy ID","copy_code": "${res.id}"}`
           },
     ], },},
    }, }, },{ quoted : m });
await Renita.relayMessage( msg.key.remoteJid,msg.message,{ messageId: msg.key.id }
);
}
break

case 'upchv1': {
if (!isByurr) return reply(mess.owner)
        		try {
					ppuser = await Renita.profilePictureUrl(m.sender, 'image');
				} catch (err) {
					ppuser = 'https://files.catbox.moe/j9k007.jpg'
				}	
				let fotoProfil = await getBuffer(ppuser);
				let pelers = `Message from ${m.pushName}`
				try {
					if (!mime && !text) {
						return reply(`Uh-oh, sis! You haven't sent any media or text yet. Please try again! 🤭`)
					}
					media = mime ? await quoted.download() : null
					let defaultCaption = "✨ This media is sent via an automated system✨"
					if (/image/.test(mime)) {
						Renita.sendMessage(channel, {
					contextInfo: {	
		        externalAdReply: {
						showAdAttribution: true,
						title: pelers,
						mediaType: 1,
						previewType: 1,
						body: 'Massage to channel',
						thumbnail: fotoProfil,
					    renderLargerThumbnail: false,
						mediaUrl: '',
					    sourceUrl: ''
			        }
			        },
							image: media,
							caption: text ? text : defaultCaption
						})
						reply(`📸 Image successfully uploaded to channel with caption: "${text ? text : defaultCaption}"`)
					} else if (/video/.test(mime)) {
						Renita.sendMessage(channel, {
					contextInfo: {
						
		        externalAdReply: {
						showAdAttribution: true,
						title: pelers,
						mediaType: 1,
						previewType: 1,
						body: 'Massage to channel',
						thumbnail: fotoProfil,
					    renderLargerThumbnail: false,
						mediaUrl: '',
					    sourceUrl: ''
			        }
			        },
							video: media,
							caption: text ? text : defaultCaption
						})
						reply(`🎥 Video successfully uploaded to channel with caption: "${text ? text : defaultCaption}"`)
					} else if (/audio/.test(mime)) {
						Renita.sendMessage(channel, {
					contextInfo: {
						
		        externalAdReply: {
						showAdAttribution: true,
						title: pelers,
						mediaType: 1,
						previewType: 1,
						body: 'Massage to channel',
						thumbnail: fotoProfil,
					    renderLargerThumbnail: false,
						mediaUrl: '',
					    sourceUrl: ''
			        }
			        },
							audio: media,
							mimetype: mime,
							ptt: true
						})
						reply(`🎵 Audio successfully uploaded to the channel, sis!`)
					} else if (/text/.test(mime) || text) {
						Renita.sendMessage(channel, {
					contextInfo: {
						
		        externalAdReply: {
						showAdAttribution: true,
						title: pelers,
						mediaType: 1,
						previewType: 1,
						body: 'Massage to channel',
						thumbnail: fotoProfil,
					    renderLargerThumbnail: false,
						mediaUrl: '',
					    sourceUrl: ''
			        }
			        },
							text: text ? text : defaultCaption
						})
						reply(`💬 Text message successfully sent to channel: "${text ? text : defaultCaption}"`)
					} else {
						conn(`Hmm... I don't know what kind of media this is. Please check again, sis! 🧐`)
					}
				} catch (error) {
					console.error(error)
					reply(`Oh, sis! 😣 There was a problem uploading to the channel. Try again later, OK!`)
				}
			}
			break
			
case 'upchv2': {
    // [0] Cek apakah pesan berasal dari grup
    if (!m.chat.endsWith('@g.us')) return reply('❌ Fitur ini hanya bisa digunakan di dalam grup!')

    // [1] Baca database grup yang diizinkan
    let allowedGroups = []
    try {
        allowedGroups = JSON.parse(fs.readFileSync('./lib/database/allowedGroups.json'))
    } catch {
        fs.writeFileSync('./lib/database/allowedGroups.json', '[]') // Buat file jika belum ada
    }

    // [2] Verifikasi ID grup
    const groupId = m.chat
    if (!allowedGroups.includes(groupId)) {
        return reply(`🚫 Akses ditolak!\nGrup ini tidak terdaftar dalam whitelist sistem!`)
    }

    // [3] Cek apakah pengguna adalah admin grup
    if (!groupAdmins) return reply(mess.owner)

    try {
        // [4] Baca database penggunaan
        let upchUsage = {}
        try {
            upchUsage = JSON.parse(fs.readFileSync('./lib/database/upchUsage.json'))
        } catch {
            fs.writeFileSync('./lib/database/upchUsage.json', '{}')
        }

        // [5] Cooldown System
        const lastUsed = upchUsage[m.sender] || 0
        const cooldown = 4 * 60 * 60 * 1000 // 24 jam
        const remainingTime = cooldown - (Date.now() - lastUsed)

        if (remainingTime > 0) {
            const hours = Math.floor(remainingTime / (1000 * 60 * 60))
            const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60))
            return reply(`⏳ *Cooldown Active!*\nKamu bisa menggunakan fitur ini lagi dalam *${hours} jam ${minutes} menit*`)
        }

        // [6] Update waktu penggunaan terakhir
        upchUsage[m.sender] = Date.now()
        fs.writeFileSync('./lib/database/upchUsage.json', JSON.stringify(upchUsage, null, 2))

        // [7] Handle Text dan Media
        try {
            ppuser = await Renita.profilePictureUrl(m.sender, 'image')
        } catch (err) {
            ppuser = 'https://files.catbox.moe/j9k007.jpg'
        }
        let fotoProfil = await getBuffer(ppuser)
        let pelers = `Message from ${m.pushName}`

        // [PERUBAHAN PENTING] Logic text diutamakan
        const media = mime ? await quoted.download() : null
        const textMessage = text ? text : "✨ Pesan dikirim via SpeedURL Bot ✨"

        if (/image/.test(mime)) {
            await Renita.sendMessage(channel, {
                contextInfo: {
                    externalAdReply: {
                        showAdAttribution: true,
                        title: pelers,
                        mediaType: 1,
                        previewType: 1,
                        body: 'Massage to channel',
                        thumbnail: fotoProfil,
                        renderLargerThumbnail: false,
                        mediaUrl: '',
                        sourceUrl: ''
                    }
                },
                image: media,
                caption: textMessage // Text sebagai caption
            })
            reply(`✅ Gambar + Text berhasil diupload!`)

        } else if (/video/.test(mime)) {
            await Renita.sendMessage(channel, {
                contextInfo: {
                    externalAdReply: {
                        showAdAttribution: true,
                        title: pelers,
                        mediaType: 1,
                        previewType: 1,
                        body: 'Massage to channel',
                        thumbnail: fotoProfil,
                        renderLargerThumbnail: false,
                        mediaUrl: '',
                        sourceUrl: ''
                    }
                },
                video: media,
                caption: textMessage // Text sebagai caption
            })
            reply(`✅ Video + Text berhasil diupload!`)

        } else if (/audio/.test(mime)) {
            await Renita.sendMessage(channel, {
                contextInfo: {
                    externalAdReply: {
                        showAdAttribution: true,
                        title: pelers,
                        mediaType: 1,
                        previewType: 1,
                        body: 'Massage to channel',
                        thumbnail: fotoProfil,
                        renderLargerThumbnail: false,
                        mediaUrl: '',
                        sourceUrl: ''
                    }
                },
                audio: media,
                mimetype: mime,
                ptt: true,
                caption: textMessage // Text sebagai caption untuk audio
            })
            reply(`✅ Audio + Text berhasil dikirim!`)

        } else if (text) { // [FIX] Handle text-only
            await Renita.sendMessage(channel, {
                contextInfo: {
                    externalAdReply: {
                        showAdAttribution: true,
                        title: pelers,
                        mediaType: 1,
                        previewType: 1,
                        body: 'Massage to channel',
                        thumbnail: fotoProfil,
                        renderLargerThumbnail: false,
                        mediaUrl: '',
                        sourceUrl: ''
                    }
                },
                text: textMessage // Text utama
            })
            reply(`✅ Text berhasil dikirim!\n✉️ Pesan: "${text}"`)

        } else {
            reply(`❌ Harap sertakan media ATAU text!`)
        }

    } catch (error) {
        console.error('Upch Error:', error)
        reply(`🚨 Gagal mengirim! Error: ${error.message}`)
    }
    break
}

case "swgc": {
    if (!isByurr) return reply(mess.owner);
    if (!text && !quoted) return reply("Enter text for status or reply to image/video/audio with caption.");

    let media = null;
    let options = {};
    const jids = [m.sender, m.chat];

    if (quoted) {
        const mime = quoted.mtype || quoted.mediaType;
        if (mime.includes('image')) {
            media = await m.quoted.download();
            options = {
                image: media,
                caption: text || m.quoted.text || '',
            };
        } else if (mime.includes('video')) {
            media = await m.quoted.download();
            options = {
                video: media,
                caption: text || m.quoted.text || '',
            };
        } else if (mime.includes('audio')) {
            media = await m.quoted.download();
            options = {
                audio: media,
                caption: text || m.quoted.text || '',
            };
        } else {
            options = {
                text: text || m.quoted.text || '',
            };
        }
    } else {
        options = {
            text: text,
        };
    }

    try {
        // Kirim pesan status
        await Renita.sendMessage("status@broadcast", options, {
            backgroundColor: "#7ACAA7",
            textArgb: 0xffffffff,
            font: 1,
            statusJidList: await (await Renita.groupMetadata(m.chat)).participants.map((a) => a.id),
            additionalNodes: [
                {
                    tag: "meta",
                    attrs: {},
                    content: [
                        {
                            tag: "mentioned_users",
                            attrs: {},
                            content: jids.map((jid) => ({
                                tag: "to",
                                attrs: { jid: m.chat },
                                content: undefined,
                            })),
                        },
                    ],
                },
            ],
        });

        // Balasan sukses
        reply("✅ Status berhasil dikirim!");
    } catch (error) {
        // Balasan gagal
        reply("❌ Gagal mengirim status. Silakan coba lagi.");
        console.error("Error sending status:", error);
    }
}
break;
//===============================================//
case 'restart': {
if (!isByurr) return reply(mess.owner)
reply(`Restarting will be completed in seconds`)
await sleep(3000)
process.exit()
}
break
//===============================================//
default:

if (budy.startsWith('=>')) {
if (!isByurr) return reply(mess.owner)

function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
reply(String(e))
}
}

if (budy.startsWith('>')) {
if (!isByurr) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
await reply(String(err))
}
}

if (budy.startsWith('$')) {
if (!isOwner) return
require("child_process").exec(budy.slice(2), (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) return reply(stdout)
})
}

}
} catch (err) {
const errId = `${global.ownNumb}@s.whatsapp.net`
Renita.sendMessage(errId, {text: require('util').format(err)}, {quoted: m})
console.log('\x1b[1;31m'+err+'\x1b[0m')
}
}


// Auto Clear Session System
function autoClearSession() {
    const sessionDir = './session'; // Sesuaikan dengan path session
    const clearInterval = 2 * 60 * 60 * 1000; // 2 jam dalam milidetik
    
    setInterval(async () => {
        try {
            const files = fs.readdirSync(sessionDir);
            const filteredFiles = files.filter(file => 
                file.startsWith('pre-key') ||
                file.startsWith('sender-key') ||
                file.startsWith('session-') ||
                file.startsWith('app-state')
            );

            if (filteredFiles.length === 0) return;

            console.log(chalk.yellow(`[AUTO CLEAN] Starting auto session cleanup...`));

            filteredFiles.forEach(file => {
                fs.unlinkSync(path.join(sessionDir, file));
            });

            console.log(chalk.green(`[AUTO CLEAN] Removed ${filteredFiles.length} session files`));
        } catch (error) {
            console.error(chalk.red('[AUTO CLEAN ERROR]'), error);
        }
    }, clearInterval);
}

// Jalankan saat panel start
autoClearSession();

// JANGAN UBAH KODE DI BAWAH INI
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
    require('fs').unwatchFile(file)
    console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
    delete require.cache[file]
    require(file)
})
