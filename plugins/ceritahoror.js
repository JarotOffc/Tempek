let fetch = require ('node-fetch')
let handler = async (m, { conn }) => {
  
let res = await fetch('https://api.lolhuman.xyz/api/ceritahoror?apikey=sgwn')
    let json = await res.json()
    
    await m.reply(`Sedang memuat...`)
await conn.sendFile(m.chat, json.result.thumbnail, null, `Judul: ${json.result.title}

Desc: ${json.result.desc}
Cerita: ${json.result.story}`, m)
 //   await conn.sendButtonImg(m.chat, json.result.thumbnail, txt, wm, `Again`, `.ceritahoror`, m)
}
handler.help = ['ceritahoror']
handler.tags = ['internet']
handler.command = /^ceritahoror$/i


module.exports = handler