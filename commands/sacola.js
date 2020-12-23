module.exports =
{
    name: 'sacola',
    description: 'Mostra conteudo da sacola',
    execute(message, currentBag)
    {
        var text = 'O que tem na sacola...';
        for (const seasonToken of currentBag) {
            text += seasonToken;
        }
        message.channel.send(text);
    }
}