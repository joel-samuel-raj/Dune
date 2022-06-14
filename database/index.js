import pg from 'pg'

const Pool = pg.Pool

const pool = new Pool({
  connectionString:
    "postgres://linsubyldwdvia:e20aaa9c4fe01ca4002d300f1eb36c41b825eef19c988360ecefac62448a981b@ec2-44-194-117-205.compute-1.amazonaws.com:5432/d55q7ct95rf6h7",
  ssl: {
    rejectUnauthorized: false,
  },
} );

export default pool