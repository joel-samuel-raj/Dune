import { ping } from "./ping.js"
import { query } from "./query.js"

export const commands = ( client ) => {
    const functions = [ping, query]
    functions.forEach(fn => fn(client))
}