require("./global")

const mess = {
   wait: "<!> ` Patiently again processed`",
   success: "`Sukses...\nLu Keren Banget Anjing`",
   on: "*`[ On Feature ]` - Sudah Aktif*", 
   off: "*`[ Off Feature ]` - Sudah Off*",
   query: {
       text: "<!> `Teks Nya Mana Njing?`",
       link: "`Link Nya Mana Njing?`",
   },
   error: {
       fitur: "`Mohon Maaf Bro Fitur Error\nSilahkan Chat Developer Bot Agar Bisa Segera Diperbaiki`",
   },
   only: {
       group: "`Fitur Ini Cuma Bisa Di Akses Di Dalam Group`",
       private: "`Fitur Ini Cuma Bisa Di Akses Di Privat Chat`",
       owner: "`WARNING`\n`FITUR INI HANYA KHUSUS VAMPIRE`",
       admin: "`INI CUMA BSA DIAKSES ADMIN TOLOL`",
       badmin: "`*GAGAL* jadikan bot sebagai admin agar bisa menggunakan hal ini`",
       premium: "`WARNING`\n`KAMU BELUM PREMIUM, SEGERA HUBUNGI VAMPIRE`",
   }
}

global.mess = mess

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})