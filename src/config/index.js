import dotenv from 'dotenv';
import konfig from 'konfig';

//dotenv.config({path: '../../.env'});
dotenv.load();

console.log(process.env.NODE_ENV);

var config = konfig({ path: 'src/config'});

console.dir(config);

export default config;