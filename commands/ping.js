import { command } from '../commandHandler.js'

export const ping = (client) => {
    command( client, ["ping"], ( message ) => {
        message.channel.send("Pong !")
    }) 
} 
