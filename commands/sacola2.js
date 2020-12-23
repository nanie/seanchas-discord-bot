module.exports =
{
    name: 'sacola2',
    description: 'Mostra conteudo da sacola',
    execute(message, args, botData)
    {
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
}