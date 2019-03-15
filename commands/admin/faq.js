const commando = require('discord.js-commando');
const discord = require('discord.js');
const config = require('../../config.json');

class FaqCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'addfaq',
            group: 'admin',
            memberName: 'addfaq',
            description: 'Makes a question and answer.'
        });
    }

    async run(message, args)
    {
        let host = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        let questionandanswer = args.split(' ').slice(1).join(' ');
        let faq = message.guild.channels.find('name', config.faqChannel);

        if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You dont have permission to use this command!')

        if (!host) return message.reply('Type in your name!');
        if (!questionandanswer) return message.reply('Please type the question and answer.');
        if (!faq) return message.reply(`please create a channel called ${config.faqChannel} to show the faq.`);

        let myFAQ = new discord.RichEmbed()
            .setColor('#d82727')
            .setTitle('FAQ')
            .setDescription(questionandanswer)
            .addField('Command Sent In', message.channel)
            .setTimestamp()
            .setFooter(host)

        message.channel.send(`FAQ Sent.`);
        faq.send(myFAQ);
    }
}

module.exports = FaqCommand;