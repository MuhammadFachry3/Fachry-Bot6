let handler = function (m) {
  // this.sendContact(m.chat, '6282180650968', 'FACHRY', m)
  this.sendContact(m.chat, '6282180650968', 'Admin FACHRY', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
