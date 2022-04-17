import { Client } from 'discord.js'
import {} from 'dotenv/config'
import { commands } from './commands/index.js'
const client = new Client( { intents: [ 'GUILDS', 'GUILD_MESSAGES' ] } )

client.on( 'ready', () => {

    console.log( "Dune on the go ⚡" )

    //commands 
    commands(client)
    
} )

client.login(process.env.token)