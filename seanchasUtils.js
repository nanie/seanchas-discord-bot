module.exports = function() { 
    var bag = [];
    const seasons = [':sunny:', ':maple_leaf:', ':snowflake:', ':sunflower:'];
    for (i = 0; i < 4; i++) {
        for (j = 0; j < 4; j++) {
            bag.push(seasons[j]);
        }
    }
    return bag;
}