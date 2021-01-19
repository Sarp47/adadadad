const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  }

let images = ['https://i.hizliresim.com/w79Td0.gif', 'https://i.hizliresim.com/w79Td0.gif'];
message.channel.send(new Discord.MessageEmbed().setColor('#000001').setDescription(`\`\`\`Universal Diğer Kullanabileceğin Komutlar Aşağıda Yer Almakta.\`\`\`

🐦 \`${client.ayarlar.prefix}av\`
**Kullanıcının profilinde ki fotoğrafı gösterir**

📖 \`${client.ayarlar.prefix}duyuru\`
**Yazı içeriğini oluşturabilirsin**

🐱 \`${client.ayarlar.prefix}afk\`
**Cihaz başında olmadığınız süre için kullanırsın**

☁️ \`${client.ayarlar.prefix}davet\`
**Universal bağlantılarını gönderir**

🌟 \`${client.ayarlar.prefix}yavaşmod\`
**Universal üyelerinizin belirlediğiniz sürede bir mesaj yazmasını sağlar**

🐝 \`${client.ayarlar.prefix}emoji\`
**Universal sunucunda ki emoji ismini yaz sana indirme bağlantısı verir**

🎲 \`${client.ayarlar.prefix}oyunlar\`
**Eğlenceye kendini kaptırma**

🔐 \`${client.ayarlar.prefix}kanal-kilit\` **&** \`${client.ayarlar.prefix}kilit-aç\`
**Kanalı kilitlemenize yarar**

❕ \`${client.ayarlar.prefix}çek [@etiket]\` **|** \`${client.ayarlar.prefix}kes [@etiket]\` **|** \`${client.ayarlar.prefix}git [@etiket]\`
**Belirli sesli kanalda ki kullanıcıyı yanına çekmeni sağlar ve kişiyi sesten atmanı sağlar. Seste yanına gitmeni sağlar**

💐 \`${client.ayarlar.prefix}rol-renk\`
**Universal Telefon kullananlar için Rol Renk değiştirme**

🗑 \`${client.ayarlar.prefix}sil [100]\`
**Universal bot kanaldaki mesajları siler**

\`${client.ayarlar.prefix}sunucudan-ayrıl\`
**Universal ile kurmuş olduğunuz ayarlarınızı sıfırlayarak sunucundan çıkar**`).setThumbnail('https://media.giphy.com/media/3qXi5eIvcgCmTDObOU/giphy.gif'));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['other'],
  permLevel: 0
}

exports.help = {
  name: 'diğer'
};