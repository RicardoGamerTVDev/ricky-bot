const commando = require('discord.js-commando');
const discord = require('discord.js');
const config = require('../../config.json');

class PublicCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'pannounce',
            group: 'admin',
            memberName: 'pannounce',
            description: 'Makes an announcement.'
        });
    }

    async run(message, args)
    {
        let host = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        let announcement = args.split(' ').slice(1).join(' ');
        let announce = message.guild.channels.find('name', config.publicChannel);

        if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You dont have permission to use this command!')

        if (!host) return message.reply('Type in your name!');
        if (!announcement) return message.reply('Please type the announcement.');
        if (!announce) return message.reply(`please create a channel called ${config.publicChannel} to show the announcements`);

        let myPublic = new discord.RichEmbed()
            .setColor('#d82727')
            .setTitle('Announcement')
            .setThumbnail(message.author.avatarURL)
            .setDescription(announcement)
            .addField('By:', host)
            .setTimestamp()
            .setFooter(host)

        message.channel.send(`Sent.`);
        announce.send(myPublic);
    }
}

module.exports = PublicCommand;