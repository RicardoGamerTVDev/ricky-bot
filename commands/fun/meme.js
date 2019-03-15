const commando = require('discord.js-commando');
const randomPuppy = require('random-puppy');

class MemeCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'meme',
            group: 'fun',
            memberName: 'meme',
            description: 'Makes memes.'
        });
    }

    async run(message, args)
    {
        let reddit = [
            "meme",
            "animemes",
            "MemesOfAnime",
            "animememes",
            "AnimeFunny",
            "dankmemes",
            "dankmeme",
            "wholesomememes",
            "MemeEconomy",
            "techsupportanimals",
            "meirl",
            "me_irl",
            "2meirl4meirl",
            "AdviceAnimals"
        ]

        let subreddit = Math.floor(Math.random() * reddit.length)

    randomPuppy(reddit[subreddit])
    .then(url => {
        message.channel.send(url);
    })
}
}

module.exports = MemeCommand;