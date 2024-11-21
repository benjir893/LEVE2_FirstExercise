import dotenv from 'dotenv';
import path from 'path';

// require('dotenv').config({ path: ['.env.local', '.env'] })

dotenv.config({path:path.join(process.cwd(), '.env')})

export default{
    port:process.env.PORT,
    db_url:process.env.DB_url
}