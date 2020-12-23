module.exports =
{
    name: 'pegar',
    description: 'Mostra conteudo da sacola',
    execute(message, currentBag)
    {
        var selected = '';
        if(currentBag.length < 4)
        {
            message.channel.send("Seu saquinho está vazio, reinicie com o comando $reiniciar");
        }
        else
        {
            for (j = 0; j < 4; j++) {
                const randomIndex = Math.floor(Math.random() * currentBag.length); 
                selected += currentBag[randomIndex];
                currentBag.splice(randomIndex, 1);
            }
           
            message.channel.send(selected);
        }
    }
}