
const fs = require('fs')
const chalk = require('chalk')

//aumto functioner
global.autoTyping = true //auto tying in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.owner = ['6283146993017'] //ur owner number
global.ownername = "إحسان" //ur owner name
global.ytname = "https://instagram.com/malasnulisnamapengguna" //ur yt chanel name
global.socialm = "https://aliyulmanan.blogspot.com" //ur github or insta name
global.location = "Tuban, Jawa Timur, Indonesia" //ur location

//bot bomdy 
global.ownernomer = "6283146993017" //ur number
global.premium = ['6283146993017'] //ur premium number
global.botname = 'ShanBots' //ur bot name
global.linkz = "https://chat.whatsapp.com/JFuGukRShyYJuthPOPrmf0" //your theme url which will be displayed on whatsapp
global.websitex = "https://instagram.com/malasnulisnamapengguna" //ur website to be displayed
global.botscript = 'Ciee yang nyari esceh bot wangsaf' //script link
global.themeemoji = "☞" //ur theme emoji
global.packname = "Sticker By" //ur sticker watermark packname
global.author = "ShanBots × إحسان" //ur sticker watermark author
global.wm = "ShanBots" //ur watermark

// Other
global.sessionName = 'session'
global.prefa = ['','!','.','#','&']
global.sp = ''

//messages
global.mess = {
    success: 'Done ya kak ✓!',
    admin: 'Fitur ini hanya dapat digunakan oleh admin group!',
    botAdmin: 'Bot Harus Jadi Admin Dulu!',
    premime: 'Fitur Khusus Premium!',
    owner: 'Fitur ini hanya dapat digunakan oleh Owner Bot!',
    group: 'Fitur Hanya Digunakan Untuk Grup!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur ini hanya dapat digunakan oleh bot',
    wait: 'Permintaan mu sedang diproses, Sabar yakak, Jika bot tidak merespon berarti bot terjadi error!',
    linkm: 'Linknya mana kak?',
    endLimit: 'Batas Harian Anda Telah Habis, Batas Akan Direset Setiap 12 Jam',
    nsfw: 'Fitur nsfw belum diaktifkan, silahkan hubungi owner untuk aktivasi',
}

//media target
global.thum = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//adventure1
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}

global.limitAwal = {
 prem: 'Unlimited',
 free: 70
}

//adventure2
global.emot = {
role: '🏆',
level: '🎚️',
limit: '📊',
health: '❤️',
exp: '💫',
money: '💵',
potion: '🥤',
diamond: '💎',
common: '📦',
uncommon: '🎁',
mythic: '🗳️',
legendary: '🗃️',
pet: '🎁',
trash: '🗑',
armor: '👕',
sword: '⚔️',
wood: '🪵',
batu: '🪨',
string: '🕸️',
horse: '🐎',
cat: '🐈',
dog: '🐕',
fox: '🦊',
petFood: '🍖',
iron: '⛓️',
gold: '👑',
emerald: '💚',
budak: '🏃',
busur: '🏹',
panah: '💘',
kapak: '🪓'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
