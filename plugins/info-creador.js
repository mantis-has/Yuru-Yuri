let handler = async (m, { conn }) => {
  // Reacciona con 💎
  if (conn.sendMessage) {
    await conn.sendMessage(m.chat, { react: { text: '💎', key: m.key }});
  }

  // Datos de los contactos
  let numberCreator = '18293142989' // Número de la creadora
  let nombreCreator = '💎 C R E A D O R 💎'
  let canal = 'https://wa.me18293142989'

  let numberBot = '527222518356' // Número del bot
  let nombreBot = 'BOT OFICIAL'

  let numberCreatora = '50670294650'
  let nombreCreatora = '🩵 CREADORA 🩵'

  // vCards individuales
  let vcardCreator = `BEGIN:VCARD
VERSION:3.0
N:${nombreCreator}
FN:${nombreCreator}
TEL;waid=${numberCreator}:${numberCreator}
END:VCARD`

  let vcardBot = `BEGIN:VCARD
VERSION:3.0
N:${nombreBot}
FN:${nombreBot}
TEL;waid=${numberBot}:${numberBot}
END:VCARD`

  let vcardCreatora = `BEGIN:VCARD
VERSION:3.0
N:${nombreCreatora}
FN:${nombreCreatora}
TEL;waid=${numberCreatora}:${numberCreatora}
END:VCARD`

  // Envía el canal como texto
  await conn.sendMessage(m.chat, { text: `🩵 AQUI ESTA EL NUMERO DE MI CREADOR Y MI CREADORA` }, { quoted: m })

  // Envía la tarjeta de contacto con los tres contactos
  await conn.sendMessage(m.chat, {
    contacts: {
      displayName: 'Contactos Importantes',
      contacts: [
        { vcard: vcardCreator },
        { vcard: vcardBot },
        { vcard: vcardCreatora }
      ]
    }
  }, { quoted: m })
}

handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creatora', 'creador', 'dueño']

export default handler