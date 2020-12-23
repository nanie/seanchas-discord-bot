module.exports =
{
    name: 'reiniciar',
    description: 'Mostra conteudo da sacola',
    execute(message, currentBag)
    {
        currentBag = CreateBag();
        var text = 'O que tem na sacola...';
        for (const seasonToken of currentBag) {
            text += seasonToken;
        }
        message.channel.send(text);
    }
}