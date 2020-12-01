const fs = require('fs-extra')
const { 
    prefix
} = JSON.parse(fs.readFileSync('./settings/setting.json'))

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textTnC = () => {
    return `
Source code / bot ini merupakan program open-source (gratis) yang ditulis menggunakan Javascript, kamu dapat menggunakan, menyalin, memodifikasi, menggabungkan, menerbitkan, mendistribusikan, mensublisensikan, dan atau menjual salinan dengan tanpa menghapus author utama dari source code / bot ini.

Dengan menggunakan source code / bot ini maka anda setuju dengan Syarat dan Kondisi sebagai berikut:
- Source code / bot tidak menyimpan data anda di server kami.
- Source code / bot tidak bertanggung jawab atas perintah anda kepada bot ini.
- Source code / bot anda bisa lihat di https://github.com/4NK3R-PRODUCT1ON

Instagram: https://instagram.com/anker_2412/

Best regards, ANKER.`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textMenu = (pushname) => {
    return `
Hi, ${pushname}! 👋️
Berikut adalah beberapa fitur yang ada pada bot ini!✨

┏ ꧁ *Ꭰᥲʀκ͢ Bot WhatsApp* ꧂
╿
┷┯ ☾ Creator Command ☽
   ╽
   ┠༺ *${prefix}sticker*
   ┠༺ *${prefix}stickergif*
   ┠༺ *${prefix}stickergiphy*
   ┠༺ *${prefix}meme*
   ┠༺ *${prefix}quotemaker*
   ┠༺ *${prefix}nulis*
   ╿
┯┷ ☾ Islam Commands ☽
╽
┠༺ *${prefix}infosurah*
┠༺ *${prefix}surah*
┠༺ *${prefix}tafsir*
┠༺ *${prefix}ALaudio*
┠༺ *${prefix}jsolat*
╿
┷┯ ☾ 18+ Commands ☽
   ╽
   ┠༺ *${prefix}sticker*
   ╿
┯┷ ☾ Fun menu (Grup) Commands ☽
╽
┠༺ *${prefix}simisimi*
┠༺ *${prefix}katakasar*
┠༺ *${prefix}klasmen*
╿
┷┯ ☾ Download Commands ☽
   ╽
   ┠༺ *${prefix}ytm3*
   ┠༺ *${prefix}ytm4*
   ┠༺ *${prefix}facebook*
   ╿
┯┷ ☾ Primbon Commands ☽
╽
┠༺ *${prefix}artinama*
┠༺ *${prefix}cekjodoh*
╿
┷┯ ☾ Search Any Commands ☽
   ╽
   ┠༺ *${prefix}pinterest*
   ┠༺ *${prefix}sreddit*
   ┠༺ *${prefix}resep*
   ┠༺ *${prefix}stalkig*
   ┠༺ *${prefix}wiki*
   ┠༺ *${prefix}cuaca*
   ┠༺ *${prefix}chord*
   ┠༺ *${prefix}lirik*
   ┠༺ *${prefix}ss
   ┠༺ *${prefix}play*
   ┠༺ *${prefix}movie*
   ┠༺ *${prefix}whatanime
   ╿ 
┯┷ ☾ Random Teks Commands ☽
╽
┠༺ *${prefix}fakta*
┠༺ *${prefix}pantun*
┠༺ *${prefix}katabijak*
┠༺ *${prefix}quote*
┠༺ *${prefix}cerpen*
┠༺ *${prefix}cersex*
┠༺ *${prefix}puisi*
╿
┷┯ ☾ Random image Commands ☽
   ╽
   ┠༺ *${prefix}anime*
   ┠༺ *${prefix}kpop*
   ┠༺ *${prefix}memes*
   ╿
┯┷ ☾ Commands Lain ☽
╽
┠༺ *${prefix}tts*
┠༺ *${prefix}translate*
┠༺ *${prefix}resi*
┠༺ *${prefix}covidindo*
┠༺ *${prefix}ceklokasi*
┠༺ *${prefix}shortlink*
┠༺ *${prefix}bapakfont*
╿
┷┯ ☾ Tentang Bot Commands ☽
   ╽
   ┠༺ *${prefix}tnc*
   ┠༺ *${prefix}donasi*
   ┠༺ *${prefix}botstat*
   ┠༺ *${prefix}ownerbot*
   ┠༺ *${prefix}join*
   ╿
┯┷ ☾ Owner Bot Commands ☽
╽
┠༺ *${prefix}ban* - banned
┠༺ *${prefix}bc* - promosi*
┠༺ *${prefix}leaveall* - keluar semua grup
┠༺ *${prefix}clearall* - hapus semua chat
┠❥AUTOR    = ANKER
┠❥IG             = anker_2412
┠❥YOUTUBE  = anker production
┠❥NO AUTOR = https://wa.me/6281368646011
╿
╰╼❥ Bacalah list menu dan janganlah menyepam bot!!! 

Semoga harimu menyenangkan!✨`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textAdmin = () => {
    return `
⚠ [ *Admin Group Only* ] ⚠ 
Berikut adalah fitur admin grup yang ada pada bot ini!

┏ ꧁ *Ꭰᥲʀκ͢ Bot WhatsApp* ꧂
╿
┷┯ ☾ Admin Grup Command☽
   ╽
   ┠༺ *${prefix}add*
   ┠༺ *${prefix}kick* @tag*
   ┠༺ *${prefix}promote* @tag*
   ┠༺ *${prefix}demote* @tag*
   ┠༺ *${prefix}mutegrup*
   ┠༺ *${prefix}tagall*
   ┠༺ *${prefix}setprofile*
   ┠༺ *${prefix}del*
   ╿
   ╰╼❥Hanya admin

_-_-_-_-_-_-_-_-_-_-_-_-_-_

⚠ [ *Owner Group Only* ] ⚠
Berikut adalah fitur owner grup yang ada pada bot ini!
༺ *${prefix}kickall*
*Owner Group adalah pembuat grup.*
`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textDonasi = () => {
    return `
Hai, terimakasih telah menggunakan bot ini, untuk mendukung bot ini kamu dapat membantu dengan berdonasi dengan cara:

https://saweria.co/ankera2412

*NO GOPAY* : *+6281368646011*
*NO PULSA* : *+6281368646011*
*SAWERIA*  : https://saweria.co/donate/anker2412

Terimakasih. Anker`
}
