import { command } from '../commandHandler.js'
import pool from '../database/index.js'



export const query = (client) => {
    command( client, [ "query" ], ( message ) => {
        const query = message.content.split( '`' )[ 1 ]
        pool.query( query ).then( res => {
            let data = JSON.stringify( res.rows )
            let length = data.length
            if ( length > 2000 ) {
                message.channel.send( "The result is too long to send" )
            }
            message.channel.send('```json\n' + data + '\n```');
        })
    }) 
}
