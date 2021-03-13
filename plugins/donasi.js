let handler = async m => m.reply(`
*Tidak usah, Uangnya untuk kalian aja*
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
