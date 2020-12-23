const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
const prefix = '$';
const botData = {};
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Bot online!');
})

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

 //   if (command === 'ping') {
      //  client.commands.get('ping').execute(message, args, botData[message.guild.id]);
    //}

    if (command === 'sacola') {
        if (botData[message.guild.id] === undefined) {
            botData[message.guild.id] = CreateBag();
        }

        var text = 'O que tem na sacola...';
        const currentBag = botData[message.guild.id];
        for (const seasonToken of currentBag) {
            text += seasonToken;
        }

        message.channel.send(text);
    }
    else if (command === 'pegar') 
    {
        const currentBag = botData[message.guild.id];
        const randomIndex = Math.floor(Math.random() * currentBag.length); 
        const selected = currentBag[randomIndex];
        currentBag.splice(randomIndex, 1);
        message.channel.send(selected);
    }
    else if (command === 'reiniciar') 
    {
        botData[message.guild.id] = CreateBag();
        var text = 'O que tem na sacola...';
        const currentBag = botData[message.guild.id];
        for (const seasonToken of currentBag) {
            text += seasonToken;
        }

        message.channel.send(text);
    }

});


function CreateBag() {
    var bag = [];
    const seasons = [':sunny:', ':maple_leaf:', ':snowflake:', ':sunflower:'];
    for (i = 0; i < 4; i++) {
        for (j = 0; j < 4; j++) {
            bag.push(seasons[j]);
        }
    }
    return bag;
}



client.login('NzkxMDc0NDQ0MjM1NjM2NzU3.X-J3fA.ZscKEcSsyJ7MPrMgGCE2t2JdFY4');