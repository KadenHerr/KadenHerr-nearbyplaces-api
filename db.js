require('dotenv').config();
const { Pool } = require('pg');

let host = process.env.host;
let database = process.env.database;
let port = process.env.port;
let username = process.env.mydbusername;
let password = process.env.password;


let connectionString =
`postgres://${username}:${password}@${host}:${port}/${database}`;

let connection = {
    connectionString: process.env.DATABASE_URL ? process.env.DATABASE_URL : connectionString,
    ssl : {rejectUnauthorized: false}
};

const pool = new Pool(connection);

// Methods for calls

let addPlace = (name, address, info) => {
    return pool.query('insert into mynearbyplaces.place(name,address,info) values ($1,$2,$3)',[name, address, info])
    .then(() => console.log(`The place ${name} was added to the Data Base.`))
    .catch(e => console.log(e));
}

module.exports = { addPlace }