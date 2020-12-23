module.exports =
{
    name: 'help',
    description: 'Mostra conteudo da sacola',
    execute(message, currentBag)
    {
        var text = 'Use o comando $sacola para ver o que tem na sacola, $pegar para pegar 4 marcadores e $reiniciar para retornar todos os marcadores para a sacola';
        message.channel.send(text);
        text = 'Marcadores: Verão - :sunny: Outono - :maple_leaf: Inverno - :snowflake: Primavera - :sunflower:';
        message.channel.send(text);
    }
}