export const command = (client, aliases, callback) => {
    if (typeof aliases === 'string') {
        aliases = [aliases]
    }
    client.on('messageCreate', (message) => {
        const { content } = message
        aliases.forEach(alias => {
            const command = `${process.env.prefix}${alias}`
            if (content.startsWith(`${command} `)|| (content === command)) {
                console.log(`running the command ${command}`)
                callback(message)
            }
        })
    })
}