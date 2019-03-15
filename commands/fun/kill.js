const commando = require('discord.js-commando');
const discord = require('discord.js');

class BotCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'kill',
            group: 'fun',
            memberName: 'kill',
            description: 'Bot commites a crime.'
        });
    }

    async run(message, args)
    {
        let target = message.mentions.members.first()
        if (target == message.author) return message.reply('You can not commit suicide now D: , though ... you can ask someone to kill you c:')
        
        const killEmbed = new discord.RichEmbed()
            .setTitle(`${message.author.username} I committed a murder against ${target.user.username} D:`)
        message.channel.send(killEmbed)
    }
}

module.exports = BotCommand;