require('./seanchasUtils.js')();
const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
const prefix = '$';
const botData = {};
client.commands = new Discord.Collection();
//Find all command files under commands
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    //Load all commands
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
    console.log('Loading command:' + file);
}

client.once('ready', () => {
    console.log('Bot online!');
})

client.on('message', message => {
    //If the command don't start with the $ prefix, ignore
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    //Find command
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    //Start bag if current discord server doesn`t own one
    if (botData[message.guild.id] === undefined) {
        botData[message.guild.id] = CreateBag();
    }
    //Check if command exists, if it does execute
    if(commandFiles.includes(command + '.js'))
    {
        client.commands.get(command).execute(message, botData[message.guild.id]);
    }

});

client.login('NzkxMDc0NDQ0MjM1NjM2NzU3.X-J3fA.DvVsWXp27vuefmPaS_SPtMb_ZBg');