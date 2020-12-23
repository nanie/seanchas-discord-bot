module.exports =
{
    name: 'personagem',
    description: 'Mostra conteudo da sacola',
    execute(message, currentBag)
    {
        const Util = require('../seanchasUtils');
        const seasons = Util.GetSeasons();
        const descriptions = Util.GetDescriptions();
        const attributes = Util.GetCharacterAttributes();
        var text = '';

        for (j = 0; j < 3; j++) {
            const randomIndex = Math.floor(Math.random() * seasons.length); 
            text += attributes[j] + ': ' + seasons[randomIndex] + ' - ' + descriptions[randomIndex] + '\n';
        }
       
        
        message.channel.send(text);
    }
}