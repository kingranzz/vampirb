//𝚂𝚌𝚛𝚒𝚙𝚝 𝙱𝚢 𝚅𝚊𝚖𝚙𝚒𝚛𝚎™

require("./database/module")

//GLOBAL PAYMENT
global.storename = "Vᴀᴍᴘɪʀᴇ sᴛᴏʀᴇ"
global.dana = "6282128591671"
global.qris = "kosong"


// GLOBAL SETTING
global.owner = "6282393734303"
global.namabot = "𝗔⃪𝗧⃪𝗧⃪𝗔⃪𝗖⃪𝗞⃪"
global.nomorbot = "6285283218941"
global.nameCreator = "𝙵𝙻𝙶𝙾𝙳 𝙲𝚁𝙰𝚂𝙷 𝙲𝚁𝙰𝚃𝙴"
global.linkyt = "https://whatsapp.com/channel/"
global.autoJoin = false
global.antilink = false
global.versisc = '30'

// DELAY JPM
global.delayjpm = 5500



//GLOBAL THUMB

global.codeInvite = ""
global.imageurl = 'https://pomf2.lain.la/f/n1601f3t.jpg'
global.isLink = "https://whatsapp.com/channel/0029VawoXVh4yltUnAC3GR3A"
global.packname = "𝗩⃪𝗔⃪𝗠⃪𝗣⃪𝗜⃪𝗥⃪𝗘⃪ 𝗔⃪𝗧⃪𝗧⃪𝗔⃪𝗖⃪𝗞⃪"
global.author = "𝙵𝙻𝙶𝙾𝙳 𝙲𝚁𝙰𝚂𝙷"
global.jumlah = "5"


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})