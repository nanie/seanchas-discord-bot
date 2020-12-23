module.exports =
{
    name: 'ping',
    description: 'Simple ping and pong',
    execute(message, args, data)
    {
        if(data == undefined)
        {
            data = 0;
        }
        message.channel.send(`Pong! Cont - ${data}`);
    }
}