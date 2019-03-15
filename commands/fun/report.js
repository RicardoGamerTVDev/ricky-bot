const commando = require('discord.js-commando');
const discord = require('discord.js');
const config = require('../../config.json');

class ReportCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'report',
            group: 'fun',
            memberName: 'report',
            description: 'Reports a user.'
        });
    }

    async run(message, args)
    {
        let target = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        let reason = args.split(' ').slice(1).join(' ');
        let reports = message.guild.channels.find('name', config.logsChannel);

        if (!target) return message.reply('please specify a member to report!');
        if (!reason) return message.reply('please specify a reason for this to report!');
        if (!reports) return message.reply(`please create a channel called ${config.logsChannel} to log the reports!`);

        let myReport = new discord.RichEmbed()
            .setColor('#914a58')
            .setThumbnail(target.user.avatarURL)
            .addField('Reported Member', `${target.user.username} with an ID: ${target.user.id}`)
            .addField('Reported By', `${message.author.username} with an ID: ${message.author.id}`)
            .addField('Reported Time:', message.createdAt)
            .addField('Reported In', message.channel)
            .addField('Reported Reason', reason)
            .setFooter('Reported user infromation', target.user.displayAvatarURL)

        message.channel.send(`${target} was reported by ${message.author} for ${reason}`).then(msg => msg.delete(2000));
        reports.send(myReport);
    }
}

module.exports = ReportCommand;