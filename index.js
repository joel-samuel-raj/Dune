import { Client } from 'discord.js'
import {} from 'dotenv/config'
import { commands } from './commands/index.js'
import express from 'express'
import bodyParser from 'body-parser'
import sheets from './routes/sheets.js'

const client = new Client( { intents: [ 'GUILDS', 'GUILD_MESSAGES' ] } )
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use("/", sheets)

client.on( 'ready', () => {

    console.log( "Dune on the go ⚡" ) 

    //commands 
    commands(client)
    
} )

client.login( process.env.token )
app.listen(3000, () => console.log('App listening on port 3000!')) 