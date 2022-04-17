import { command } from '../command.js'
import { Client } from 'discord.js'
const client = new Client( { intents: [ 'GUILDS', 'GUILD_MESSAGES' ] } )

export const ping = () => {
    command( client, "ping", ( message ) => {
        message.channel.send("Pong !")
    }) 
} 
