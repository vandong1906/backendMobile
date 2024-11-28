import {DataTypes, Model, Optional} from "sequelize";
import  sequelize from "../../dbconfig/dbconfig"

const Music = sequelize.define("Music",
    {
        id_song: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,

        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        destination: {
            type: DataTypes.STRING(64),
            allowNull: true,
        },
    },
);


export default Music;