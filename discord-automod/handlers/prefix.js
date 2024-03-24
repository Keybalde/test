const { readdirSync } = require('fs');

module.exports = (codare) => {
	readdirSync('./komutlar/').forEach(dir => {
		const commands = readdirSync(`./komutlar/${dir}`).filter(file => file.endsWith('.js'));
		for (let file of commands) {
			let pull = require(`../komutlar/${dir}/${file}`);
			if (pull.name) {
				codare.commands.set(pull.name, pull);
			} else {
				continue;
			} if (pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => codare.aliases.set(alias, pull.name))
		}
	});
};