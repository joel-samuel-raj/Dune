import express from "express";
const router = express.Router();
import pool from "../database/index.js";
import { getDate } from "../utils/utils.js";

router.post("/table", (req, res) => {
    req.body.forEach( ( obj ) => {
      
    let { date, head, body } = obj;
        
    let rolls = body.map((b) => b.roll);
    let datas = body.map( ( b ) => b.data ).flat();  
    date = getDate(date);
    
        pool.query( `ALTER TABLE ${ head } ADD COLUMN IF NOT EXISTS ${ date } VARCHAR(255);` ).then( () => {
            pool.query(
            `
                WITH temp ( ${date}, roll ) AS (
                    SELECT * FROM UNNEST ($1::text[], $2::text[])
                )
                UPDATE ${head}
                SET ${date} = t.${date}
                FROM temp t
                WHERE ${head}.roll = t.roll;
            `,
            [ datas, rolls ], ( err, result ) => {
                if ( err ) {
                    console.log(err)
                }
                else {
                    console.log(result)
                }
            });
        })  
    });
    res.send("ok");
});

export default router;
