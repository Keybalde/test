const codare = require('../../index.js');
const ayarlar = require('../../ayarlar.json');

codare.on('messageCreate', async message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(ayarlar.prefix)) return;
    if (!message.guild) return;
    if (!message.member) message.member = await message.guild.fetchMember(message);
    const args = message.content.slice(ayarlar.prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if (cmd.length == 0) return;
    let command = codare.commands.get(cmd)
    if (!command) command = codare.commands.get(codare.aliases.get(cmd));
    if (command) {
        try {
            let prefix = ayarlar.prefix;
            if(!prefix) prefix = "!";

            command.run(codare, message, args, prefix);
        } catch (e) {
            function id(length) {
                var result = '';
                var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                var charactersLength = characters.length;
                for (var i = 0; i < length; i++) {
                    result += characters.charAt(Math.floor(Math.random() *
                        charactersLength));
                }
                return result;
            }

            const i = id(12);

            console.error(`[ERROR] Error ID: ${i}\n ` + e);

            await message.reply(`Komut yürütülürken bir şeyler ters gitti! : \`${i}\`}`)
        }
    }
})