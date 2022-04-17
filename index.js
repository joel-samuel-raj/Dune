import { Client } from 'discord.js'
import {} from 'dotenv/config'
import { command } from './command.js'
import { ping } from './commands/ping.js'
const client = new Client( { intents: [ 'GUILDS', 'GUILD_MESSAGES' ] } )

client.on( 'ready', () => {
    console.log( "Dune on the go ⚡" )
    ping()
} )

client.login(process.env.token)