const Discord = require('discord.js')

module.exports = {
	name: 'automod',
	aliases: [],
	category: "Genel",
	description: "automode badge",
	usage: "automod",
	examples: [],
	run: async (codare, message, args, prefix) => {
       		const codare_guild = message.guild
			const codare_message = message

		   const rule = codare_guild.autoModerationRules.create({
			   name: `Automod bir`,
			   creatorId: `683036205453148190`,
			   enabled: true,
			   eventType: 1,
			   triggerType: 4,
			   triggerMetadata:
				   {
					   presets: [1, 2, 3]
				   },
				   actions: [
					   {
						   type: 1,
						   metadata: {
							   channel: codare_message.channel,
							   durationSeconds: 10,
							   customMessage: 'Bu mesaj engellendi.'
						   }
					   }
				   ]
		   }).catch(async err => {
			   setTimeout(async () => {
				   console.log(err);
				   await codare_message.reply(`İşlem Başarılı. discord.gg/emirhan-sarac-youtube-683040526374797524 & discord.gg/codare`)
			   }, 2000)
		   })
   
		   setTimeout(async () => {
			   if(!rule) return;
   
			   const embed = new Discord.MessageEmbed()
			   
			   .setDescription('Automod kural 1 başarıyla oluşturuldu.')
			   .setColor("#5FFD0A")
	   
			   codare_message.reply({embeds: [embed]})
		   }, 3000)
   
   
	   
   
   
		   const rule2 = codare_guild.autoModerationRules.create({
			   name: `Automod iki"`,
			   creatorId: `683036205453148190`,
			   enabled: true,
			   eventType: 1,
			   triggerType: 1,
			   triggerMetadata:
				   {
					   keywordFilter: [`tramvay sapigi`]
				   },
				   actions: [
					   {
						   type: 1,
						   metadata: {
							   channel: codare_message.channel,
							   durationSeconds: 10,
							   customMessage: 'Bu mesaj engellendi'
						   }
					   }
				   ]
		   }).catch(async err => {
			   setTimeout(async () => {
				   console.log(err);
				   await codare_message.reply(`İşlem Başarılı. discord.gg/emirhan-sarac-youtube-683040526374797524 & discord.gg/codare`)
			   }, 2000)
		   })
   
		   setTimeout(async () => {
			   if(!rule2) return;
   
			   const embed2 = new Discord.MessageEmbed()
			   .setDescription('Automod kural 2 başarıyla oluşturuldu.')
			   .setColor("#5FFD0A")
	   
			   codare_message.reply({embeds: [embed2]})
		   }, 3000)

		   const rule9 = codare_guild.autoModerationRules.create({
			name: `Automod hakaret"`,
			creatorId: `683036205453148190`,
			enabled: true,
			eventType: 1,
			triggerType: 1,
			triggerMetadata:
				{
					keywordFilter: [`metin girin`]
				},
				actions: [
					{
						type: 1,
						metadata: {
							channel: codare_message.channel,
							durationSeconds: 10,
							customMessage: 'Bu mesaj engellendi'
						}
					}
				]
		}).catch(async err => {
			setTimeout(async () => {
				console.log(err);
				await codare_message.reply(`İşlem Başarılı. discord.gg/emirhan-sarac-youtube-683040526374797524 & discord.gg/codare`)
			}, 2000)
		})

		setTimeout(async () => {
			if(!rule9) return;

			const embed2 = new Discord.MessageEmbed()
			.setDescription('Automod kural 3 başarıyla oluşturuldu.')
           .setColor("#5FFD0A")

		   codare_message.reply({embeds: [embed2]})
		}, 3000)

		const rule3 = codare_guild.autoModerationRules.create({
			name: `Automod dört"`,
			creatorId: `683036205453148190`,
			enabled: true,
			eventType: 1,
			triggerType: 1,
			triggerMetadata:
				{
					keywordFilter: [`hakaret içerikli metin gir amina koyarim`]
				},
				actions: [
					{
						type: 1,
						metadata: {
							channel: codare_message.channel,
							durationSeconds: 10,
							customMessage: 'Bu mesaj engellendi'
						}
					}
				]
		}).catch(async err => {
			setTimeout(async () => {
				console.log(err);
				await codare_message.reply(`İşlem Başarılı. discord.gg/emirhan-sarac-youtube-683040526374797524 & discord.gg/codare`)
			}, 2000)
		})

		setTimeout(async () => {
			if(!rule3) return;

			const embed2 = new Discord.MessageEmbed()
			.setDescription('Automod kural 4 başarıyla oluşturuldu.')
           .setColor("#5FFD0A")

		   codare_message.reply({embeds: [embed2]})
		}, 3000)

		const rule4 = codare_guild.autoModerationRules.create({
			name: `Automod bbbeş`,
			creatorId: `683036205453148190`,
			enabled: true,
			eventType: 1,
			triggerType: 1,
			triggerMetadata:
				{
					keywordFilter: [`aq`]
				},
				actions: [
					{
						type: 1,
						metadata: {
							channel: codare_message.channel,
							durationSeconds: 10,
							customMessage: 'Bu mesaj engellendi'
						}
					}
				]
		}).catch(async err => {
			setTimeout(async () => {
				console.log(err);
				await codare_message.reply(`İşlem Başarılı. discord.gg/emirhan-sarac-youtube-683040526374797524 & discord.gg/codare`)
			}, 2000)
		})

		setTimeout(async () => {
			if(!rule4) return;

			const embed2 = new Discord.MessageEmbed()
			.setDescription('Automod kural 5 başarıyla oluşturuldu.')
           .setColor("#5FFD0A")

		   codare_message.reply({embeds: [embed2]})
		}, 3000)

		const rule5 = codare_guild.autoModerationRules.create({
			name: `Automod fqwf"`,
			creatorId: `683036205453148190`,
			enabled: true,
			eventType: 1,
			triggerType: 1,
			triggerMetadata:
				{
					keywordFilter: [`amk`, `anani babani dayini teyzeni yedi sülaleni`]
				},
				actions: [
					{
						type: 1,
						metadata: {
							channel: codare_message.channel,
							durationSeconds: 10,
							customMessage: 'Bu mesaj engellendi'
						}
					}
				]
		}).catch(async err => {
			setTimeout(async () => {
				console.log(err);
				await codare_message.reply(`İşlem Başarılı. discord.gg/emirhan-sarac-youtube-683040526374797524 & discord.gg/codare`)
			}, 2000)
		})

		setTimeout(async () => {
			if(!rule5) return;
			const embed2 = new Discord.MessageEmbed()

			.setDescription('Automod kural 6 başarıyla oluşturuldu.')
           .setColor("#5FFD0A")

		   codare_message.reply({embeds: [embed2]})
		}, 3000)
   
	}
}
