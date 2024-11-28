import {Sequelize} from "sequelize";
import * as dotenv from 'dotenv';
interface Config {
  DB_NAME: string;
    DB_HOST: string;
    DB_USER: string;
    DB_PASSWORD: string;
}
const config: Config = {
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_USER: process.env.DB_USER || 'root',
    DB_PASSWORD: process.env.DB_PASSWORD || '',
    DB_NAME:process.env.DB_NAME || "music"

};
console.log(config);
const sequelize = new Sequelize(config.DB_NAME, config.DB_USER, config.DB_PASSWORD, {
    host: config.DB_HOST,
    dialect: 'mysql',
});
export default sequelize;