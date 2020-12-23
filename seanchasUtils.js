
function CreateBag() {
    var bag = [];
    const seasons = GetSeasons();
    for (i = 0; i < 4; i++) {
        for (j = 0; j < 4; j++) {
            bag.push(seasons[j]);
        }
    }
    return bag;
}

function GetSeasons()
{
    return [':sunny:', ':maple_leaf:', ':snowflake:', ':sunflower:'];
}

function GetDescriptions()
{
    return ['Humano, razão, corpo','Selvagem, Bestial, Irracional','Magia destrutiva, da morte','Magia criativa, da vida'];
}

function GetCharacterAttributes()
{
    return ['Origem','Motivação','Destino'];
}

module.exports = { CreateBag, GetSeasons, GetDescriptions, GetCharacterAttributes};