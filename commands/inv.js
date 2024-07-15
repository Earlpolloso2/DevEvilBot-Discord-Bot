const colors = require('../colors.json')
const Discord = require('discord.js');

module.exports = {
    name: "inv",

    async run (client, message, args) {
		let messageArry = message.content.split(" ")
		let cmd = messageArry[0]; 
		const inv = new Discord.MessageEmbed()
		.setColor(colors.main)
		.setTitle('Invite')
		.setDescription('**Support us by inviting DevEvilBot.xyz to your server :heart:** \n**[Click Here](https://discord.com/oauth2/authorize?client_id=1262350600860078131&permissions=8&integration_type=0&scope=bot)**', true)
		.setThumbnail(client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
		message.channel.send(inv)
	}
}
