import { ping } from "./ping.js"

export const commands = ( client ) => {
    const functions = [ping]
    functions.forEach(fn => fn(client))
}